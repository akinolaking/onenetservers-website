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

/* ── Brand-accurate payment method SVG icons ── */
const PaystackIcon = () => (
  <svg width="72" height="32" viewBox="0 0 72 32" role="img" aria-label="Paystack">
    <rect width="72" height="32" rx="5" fill="#00C3F7" />
    {/* P letterform */}
    <rect x="10" y="9" width="3.5" height="14" rx="1" fill="#fff" />
    <path d="M13.5 9h6a4.5 4.5 0 010 9h-6" stroke="#fff" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    {/* wordmark */}
    <text x="46" y="20.5" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="8.5" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.3">PAYSTACK</text>
  </svg>
);

const VisaIcon = () => (
  <svg width="52" height="32" viewBox="0 0 52 32" role="img" aria-label="Visa">
    <rect width="52" height="32" rx="5" fill="#1A1F71" />
    <text x="26" y="22" fontFamily="'Times New Roman',Times,serif" fontSize="18" fontWeight="700" fontStyle="italic" fill="#F7B600" textAnchor="middle" letterSpacing="1">VISA</text>
  </svg>
);

const MastercardIcon = () => (
  <svg width="52" height="32" viewBox="0 0 52 32" role="img" aria-label="Mastercard">
    <rect width="52" height="32" rx="5" fill="#252525" />
    <circle cx="20" cy="16" r="9.5" fill="#EB001B" />
    <circle cx="32" cy="16" r="9.5" fill="#F79E1B" />
    {/* overlap blend */}
    <path d="M26 8.3a9.5 9.5 0 010 15.4A9.5 9.5 0 0126 8.3z" fill="#FF5F00" />
  </svg>
);

const VerveIcon = () => (
  <svg width="58" height="32" viewBox="0 0 58 32" role="img" aria-label="Verve">
    <rect width="58" height="32" rx="5" fill="#004B87" />
    <rect x="4" y="13" width="50" height="6" rx="1" fill="#E4002B" />
    <text x="29" y="21" fontFamily="'Helvetica Neue',Arial,sans-serif" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="1.5">VERVE</text>
  </svg>
);

const BankTransferIcon = () => (
  <svg width="72" height="32" viewBox="0 0 72 32" role="img" aria-label="Bank Transfer">
    <rect width="72" height="32" rx="5" fill="#F0F0FA" />
    {/* pediment / roof */}
    <path d="M36 5L16 14h40L36 5z" fill="#4343F0" />
    {/* columns */}
    <rect x="18" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    <rect x="24" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    <rect x="30" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    <rect x="36" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    <rect x="42" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    <rect x="48" y="15" width="3" height="9" rx="0.5" fill="#3D3D5C" />
    {/* base */}
    <rect x="14" y="25" width="44" height="2.5" rx="0.5" fill="#3D3D5C" />
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
            <PaystackIcon />
            <VisaIcon />
            <MastercardIcon />
            <VerveIcon />
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
