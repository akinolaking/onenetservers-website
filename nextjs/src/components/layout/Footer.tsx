import Image from "next/image";
import Link from "next/link";

import { footerColumns, paymentMethods, phoneNumbers, socialLinks, trustBadges } from "@/lib/site-data";

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
                  {link.label}
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

          <div className="footer-column footer-column--contact">
            <h3>Contact</h3>
            <div className="footer-contact-list">
              {phoneNumbers.map((phone) => (
                <a key={phone.text} href={phone.href} className="footer-contact-item">
                  <span>{phone.label}</span>
                  <strong>{phone.text}</strong>
                </a>
              ))}
              <a href="mailto:support@onenetservers.net" className="footer-contact-item">
                <span>Email</span>
                <strong>support@onenetservers.net</strong>
              </a>
            </div>
          </div>
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
            {paymentMethods.map((method) => (
              <span key={method} className="payment-chip">
                {method}
              </span>
            ))}
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
