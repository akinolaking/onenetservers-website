import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";

import "./globals.css";

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
    <html lang="en">
      <body>
        <div className="app-frame">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
