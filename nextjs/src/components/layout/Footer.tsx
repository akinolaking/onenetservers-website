import Image from "next/image";
import Link from "next/link";

import { footerColumns, socialLinks, trustBadges } from "@/lib/site-data";

const socialIcons: Record<string, React.ReactNode> = {
  X: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L2.25 2.25h6.891l4.259 5.632 5.844-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  ),
};

/* ── Bank Transfer inline icon (no external asset needed) ── */
const BankTransferIcon = () => (
  <svg width="28" height="28" viewBox="0 0 512 512" role="img" aria-label="Bank Transfer" fill="#fff">
    <polygon points="256,18 10,170 502,170"/>
    <rect x="6" y="182" width="500" height="52" rx="8"/>
    <rect x="44"  y="252" width="112" height="188" rx="4"/>
    <rect x="200" y="252" width="112" height="188" rx="4"/>
    <rect x="356" y="252" width="112" height="188" rx="4"/>
    <rect x="0" y="452" width="512" height="44" rx="10"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="OneNet Servers home">
              <Image src="/assets/logo-mark.svg" alt="OneNet Servers" width={28} height={28} />
            </Link>
            <p>
              Hosting, domains, email, and infrastructure for businesses operating across Nigeria,
              the UK, and global markets from one clearer platform.
            </p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-pill"
                  aria-label={`Follow us on ${link.label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[link.label] ?? null}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-column">
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="footer-link footer-link--disabled">{link.label}</span>
                    ) : (
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-band">
          {trustBadges.map((badge) => (
            <span key={badge} className="footer-chip">
              {badge}
            </span>
          ))}
        </div>

        <div className="footer-payments">
          <span>We accept</span>
          <div className="footer-payments-grid">
            <Image src="/assets/pay-paystack.svg"    alt="Paystack"     width={90} height={28} />
            <Image src="/assets/pay-visa.svg"         alt="Visa"         width={52} height={28} />
            <Image src="/assets/pay-mastercard.svg"   alt="Mastercard"   width={48} height={28} />
            <Image src="/assets/pay-verve.svg"        alt="Verve"        width={80} height={28} />
            <BankTransferIcon />
          </div>
        </div>

        <div className="footer-legal">
          © 2026 OneNet Servers, trading name of ConqolX Technologies Limited. Registered in
          England & Wales No. 14565201. Registered in Nigeria No. 1775966. SCUML registered.
          NiRA accredited. Prices shown exclude applicable VAT. Renewal prices may differ from
          first-term prices.
        </div>
      </div>
    </footer>
  );
}
