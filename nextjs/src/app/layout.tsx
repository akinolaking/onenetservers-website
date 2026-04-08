import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { CurrencyProvider } from "@/lib/currency-context";

import "./globals.css";

/* ── Fonts ── Inter: headings (max 500) | Lato: body copy ── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneNet Servers",
  description:
    "Hosting, domains, and business email for Nigeria, the UK, and global teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lato.variable}`}>
      <body>
        <CurrencyProvider>
          <div className="app-frame">
            <Nav />
            {children}
            <Footer />
          </div>
        </CurrencyProvider>
      </body>
    </html>
  );
}
