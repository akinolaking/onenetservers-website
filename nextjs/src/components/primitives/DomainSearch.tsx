"use client";

import Link from "next/link";
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { tlds } from "@/lib/home-data";
import { useCurrency } from "@/lib/currency-context";

type TldResult = {
  ext: string;
  usd: number;
  ngn: number;
  gbp: number;
  note: string;
  available: boolean;
};

type SearchState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "results"; query: string; results: TldResult[] };

function normaliseDomain(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-.]/g, "");
}

function stripExtension(value: string) {
  const dot = value.indexOf(".");
  return dot > -1 ? value.slice(0, dot) : value;
}

const FEATURED_EXTS = [".ng", ".com", ".com.ng", ".co.uk", ".shop", ".xyz"];

const featuredTlds = FEATURED_EXTS
  .map((ext) => tlds.find((t) => t.ext === ext))
  .filter((t): t is NonNullable<typeof t> => t != null);

export function DomainSearch() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<SearchState>({ kind: "idle" });
  const { currency } = useCurrency();
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const canSubmit = useMemo(
    () => stripExtension(normaliseDomain(query)).length > 2,
    [query]
  );

  function priceLabel(t: { usd: number; ngn: number; gbp: number }) {
    if (t.usd === 0) return "Free";
    if (currency === "NGN") return `₦${t.ngn.toLocaleString("en-US")}/yr`;
    if (currency === "GBP") return `£${t.gbp.toFixed(2)}/yr`;
    return `$${t.usd.toFixed(2)}/yr`;
  }

  async function doSearch(base: string) {
    setState({ kind: "loading" });

    const results = await Promise.all(
      featuredTlds.map(async (tld) => {
        try {
          const res = await fetch(`/api/domain-check.php?domain=${base}${tld.ext}`, {
            signal: AbortSignal.timeout(5000),
          });
          if (!res.ok) throw new Error("not ok");
          const json = await res.json();
          return {
            ext: tld.ext,
            usd: tld.usd,
            ngn: tld.ngn,
            gbp: tld.gbp,
            note: tld.note as string,
            available: Boolean(json.available),
          };
        } catch {
          /* Mock: domains ending with .available TLD are available; all others taken */
          const fullDomain = `${base}${tld.ext}`;
          const isAvailable = fullDomain.endsWith(".available");
          return {
            ext: tld.ext,
            usd: tld.usd,
            ngn: tld.ngn,
            gbp: tld.gbp,
            note: tld.note as string,
            available: isAvailable,
          };
        }
      })
    );

    setState({ kind: "results", query: base, results });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const base = stripExtension(normaliseDomain(query));
    if (base.length <= 2) return;
    await doSearch(base);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setState({ kind: "idle" });
    /* 300ms debounce — clears on every keystroke to prevent rapid API calls */
    if (debounceRef.current) clearTimeout(debounceRef.current);
    const base = stripExtension(normaliseDomain(value));
    if (base.length > 2) {
      debounceRef.current = setTimeout(() => {
        doSearch(base);
      }, 300);
    }
  }

  function onTldClick(ext: string) {
    const base = stripExtension(normaliseDomain(query));
    const newQuery = base.length > 0 ? `${base}${ext}` : ext;
    setQuery(newQuery);
    setState({ kind: "idle" });
    inputRef.current?.focus();
    if (base.length > 2) {
      doSearch(base);
    }
  }

  return (
    <div className="domain-search-wrap">
      <form
        className="domain-search-form"
        onSubmit={onSubmit}
        role="search"
        aria-label="Domain search"
      >
        <label className="sr-only" htmlFor="domain-search-input">
          Enter a business name or domain to search
        </label>
        <div className="domain-search-field">
          <input
            ref={inputRef}
            id="domain-search-input"
            className="domain-search-input"
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Enter your business name or domain…"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <button
            type="submit"
            className="domain-search-submit"
            disabled={!canSubmit || state.kind === "loading"}
            aria-busy={state.kind === "loading"}
          >
            {state.kind === "loading" ? (
              <>
                <span className="domain-search-spinner" aria-hidden="true" />
                Searching&hellip;
              </>
            ) : (
              "Search domains"
            )}
          </button>
        </div>
      </form>

      {/* Loading */}
      {state.kind === "loading" && (
        <div
          className="domain-result domain-result--loading"
          aria-live="polite"
        >
          Checking availability…
        </div>
      )}

      {/* Results — per-TLD availability */}
      {state.kind === "results" && (
        <div aria-live="polite">
          <div className="domain-result-grid">
            {state.results.map((t) =>
              t.available ? (
                <Link
                  key={t.ext}
                  href={`/cart.php?a=add&domain=${state.query}${t.ext}&domainaction=register`}
                  className="domain-result-card domain-result-card--available"
                >
                  <span className="domain-result-card__name">
                    <strong>{state.query}</strong>
                    {t.ext}
                  </span>
                  <span className="domain-result-card__price">
                    {priceLabel(t)}
                  </span>
                  {t.note && (
                    <span className="domain-result-card__badge">{t.note}</span>
                  )}
                  <span className="domain-result-card__cta">Add to cart →</span>
                </Link>
              ) : (
                <div
                  key={t.ext}
                  className="domain-result-card domain-result-card--taken"
                >
                  <span className="domain-result-card__name">
                    <strong>{state.query}</strong>
                    {t.ext}
                  </span>
                  <span className="domain-result-card__taken">Taken</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Ext hints — idle state, click to populate search */}
      {state.kind === "idle" && (
        <div className="hero-ext-hints" aria-label="Popular domain extensions">
          {featuredTlds.map((t) => (
            <button
              key={t.ext}
              type="button"
              className="hero-ext-hint"
              onClick={() => onTldClick(t.ext)}
            >
              <strong>{t.ext}</strong> from {priceLabel(t)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
