"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Currency } from "@/lib/site-data";

/* ── Exchange rates (USD baseline, from WHMCS pricing data) ── */
export const RATES: Record<Currency, number> = {
  USD: 1,
  NGN: 1838,   // derived from WHMCS: $23.40 = ₦43,000
  GBP: 0.931,  // derived from WHMCS: $23.40 = £21.79
};

export const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  NGN: "₦",
  GBP: "£",
};

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  format: (usd: number, decimals?: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

const STORAGE_KEY = "onenet_currency";

function getInitialCurrency(): Currency {
  /* Server-side: fall back to USD */
  if (typeof window === "undefined") return "USD";
  /* Saved preference */
  const saved = localStorage.getItem(STORAGE_KEY) as Currency | null;
  if (saved && (saved === "USD" || saved === "NGN" || saved === "GBP")) return saved;
  /* Auto-detect from browser locale */
  const lang = navigator.language ?? "";
  if (
    lang.startsWith("en-NG") ||
    lang.startsWith("ha") ||
    lang.startsWith("yo") ||
    lang.startsWith("ig")
  ) {
    return "NGN";
  }
  if (lang.startsWith("en-GB")) return "GBP";
  return "USD";
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("USD");

  /* Hydrate from localStorage / locale on mount (client-only) */
  useEffect(() => {
    setCurrencyState(getInitialCurrency());
  }, []);

  function setCurrency(c: Currency) {
    setCurrencyState(c);
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore — storage may be unavailable in private mode */
    }
  }

  function format(usd: number, decimals = 2): string {
    const value = usd * RATES[currency];
    const sym = SYMBOLS[currency];
    if (currency === "NGN") {
      /* NGN: no decimals, comma-separated thousands */
      return `${sym}${Math.round(value).toLocaleString("en-NG")}`;
    }
    return `${sym}${value.toFixed(decimals)}`;
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}
