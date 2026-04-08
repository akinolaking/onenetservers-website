import { Fade } from "@/components/animate-ui/primitives/effects/fade";

export default function PrivacyPage() {
  return (
    <>
      <head>
        <title>Privacy Policy | OneNet Servers</title>
        <meta name="description" content="Privacy Policy for OneNet Servers — how we collect, use, and protect your personal data in compliance with UK GDPR and Nigerian data protection law." />
        <link rel="canonical" href="https://onenetservers.net/legal/privacy" />
      </head>

      <section className="homepage-section">
        <div className="shell" style={{ maxWidth: 780 }}>
          <Fade inView inViewOnce>
            <div className="legal-header">
              <p className="section-eyebrow">Legal</p>
              <h1>Privacy Policy</h1>
              <p className="legal-meta">Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 1 March 2026</p>
              <p>
                This Privacy Policy explains how <strong>ConqolX Technologies Limited</strong> (trading as
                OneNet Servers, registered in England &amp; Wales No. 14565201 and Nigeria No. 1775966)
                collects, uses, and protects your personal data. We are registered with the UK ICO as a
                data controller. This Policy complies with UK GDPR, the Data Protection Act 2018, and
                the Nigeria Data Protection Regulation (NDPR).
              </p>
            </div>
          </Fade>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Data we collect</h2>
              <p>We collect the following categories of personal data:</p>
              <ul>
                <li><strong>Account data:</strong> Name, email address, password (hashed), billing address, phone number.</li>
                <li><strong>Payment data:</strong> We do not store card numbers. Payment is processed by Stripe (UK/global) and Paystack (Nigeria). We store billing references, transaction IDs, and invoices.</li>
                <li><strong>Domain registrant data:</strong> For domain registrations, we collect and store WHOIS registrant details as required by ICANN and NiRA policies.</li>
                <li><strong>Usage data:</strong> IP addresses, browser type, pages visited, time on site, referring URLs — collected via server logs and analytics.</li>
                <li><strong>Support data:</strong> Content of support tickets, live chat transcripts, emails you send us.</li>
                <li><strong>Cookie data:</strong> Session cookies, preference cookies, analytics cookies — described in our Cookie Policy.</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>2. How we use your data</h2>
              <p>We use your personal data to:</p>
              <ul>
                <li>Provide, maintain, and improve our Services.</li>
                <li>Process payments and issue invoices.</li>
                <li>Register and manage domain names on your behalf.</li>
                <li>Communicate with you about your account, services, and support requests.</li>
                <li>Send service notifications, renewal reminders, and security alerts.</li>
                <li>Comply with legal obligations including tax law, ICANN policy, and NiRA requirements.</li>
                <li>Detect and prevent fraud, abuse, and security threats.</li>
                <li>Send marketing communications where you have consented or where we have a legitimate interest (you can opt out at any time).</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. Legal basis for processing</h2>
              <p>We process your personal data under the following legal bases:</p>
              <ul>
                <li><strong>Contract performance:</strong> Processing necessary to deliver the Services you have purchased.</li>
                <li><strong>Legal obligation:</strong> Compliance with tax law, ICANN/NiRA registrant requirements, and anti-money laundering regulations.</li>
                <li><strong>Legitimate interests:</strong> Fraud prevention, security, analytics, and service improvement.</li>
                <li><strong>Consent:</strong> Marketing emails and non-essential cookies (you may withdraw consent at any time).</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Data sharing</h2>
              <p>We share your personal data only where necessary:</p>
              <ul>
                <li><strong>Payment processors:</strong> Stripe and Paystack process payments on our behalf. They are subject to their own privacy policies and security standards.</li>
                <li><strong>Domain registries:</strong> Registrant data is shared with ICANN, NiRA, and relevant TLD registries as required by domain policy.</li>
                <li><strong>Infrastructure providers:</strong> Our servers and email delivery are provided by third-party cloud and infrastructure companies under data processing agreements.</li>
                <li><strong>Legal requirements:</strong> We may disclose data to law enforcement or regulatory bodies when required by law or court order.</li>
              </ul>
              <p>We do not sell your personal data to third parties.</p>
            </section>

            <section className="legal-section">
              <h2>5. International transfers</h2>
              <p>
                We operate in the UK and Nigeria. Your data may be processed in both jurisdictions and
                in data centres in the EU and US operated by our infrastructure providers. Where data
                is transferred outside the UK or EEA, we ensure appropriate safeguards are in place —
                including Standard Contractual Clauses or adequacy decisions.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Data retention</h2>
              <p>
                We retain your personal data for as long as your account is active and for up to 7
                years after account termination for tax and legal compliance purposes. Domain registrant
                data is retained for the duration of registration and for 2 years after expiry, as
                required by ICANN. You may request deletion of personal data not subject to a legal
                retention obligation.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Your rights</h2>
              <p>Under UK GDPR and NDPR, you have the right to:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data where it is no longer necessary for the purpose it was collected.</li>
                <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
                <li><strong>Portability:</strong> Receive your personal data in a structured, machine-readable format.</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing purposes.</li>
                <li><strong>Withdraw consent:</strong> Withdraw consent for marketing communications or non-essential cookies at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, contact privacy@onenetservers.net. We will respond
                within 30 days. You have the right to lodge a complaint with the UK ICO (ico.org.uk)
                or the Nigeria Data Protection Commission if you believe your data has been mishandled.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Cookies</h2>
              <p>
                We use essential cookies required for service operation, and optional cookies for
                analytics and personalisation. A cookie consent banner is presented on your first
                visit. You can manage cookie preferences at any time via the cookie settings link
                in the footer. Declining non-essential cookies does not affect your access to our
                Services.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Security</h2>
              <p>
                We implement industry-standard security measures including TLS encryption in transit,
                AES-256 encryption at rest for sensitive data, hashed passwords (bcrypt), two-factor
                authentication options, and regular security audits. No system is completely secure —
                if you become aware of a security incident involving your account, contact us
                immediately at security@onenetservers.net.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Material changes will be notified
                by email at least 30 days before taking effect. Continued use of our Services after the
                effective date constitutes acceptance of the updated Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Contact the data controller</h2>
              <p>
                ConqolX Technologies Limited (trading as OneNet Servers)<br />
                Data Protection enquiries: privacy@onenetservers.net<br />
                UK: +44 7333 880 7775<br />
                Nigeria: +234 201 330 9154
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
