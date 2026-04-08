import { Fade } from "@/components/animate-ui/primitives/effects/fade";

export default function TermsPage() {
  return (
    <>
      <head>
        <title>Terms of Service | OneNet Servers</title>
        <meta name="description" content="Terms of Service for OneNet Servers — trading name of ConqolX Technologies Limited. Read your rights and obligations as a customer." />
        <link rel="canonical" href="https://onenetservers.net/legal/terms" />
      </head>

      <section className="homepage-section">
        <div className="shell" style={{ maxWidth: 780 }}>
          <Fade inView inViewOnce>
            <div className="legal-header">
              <p className="section-eyebrow">Legal</p>
              <h1>Terms of Service</h1>
              <p className="legal-meta">Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 1 March 2026</p>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the services provided by
                OneNet Servers, a trading name of <strong>ConqolX Technologies Limited</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;), registered in England &amp; Wales No. 14565201 and in Nigeria No. 1775966.
                By purchasing or using our services you agree to these Terms in full.
              </p>
            </div>
          </Fade>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Services</h2>
              <p>
                OneNet Servers provides web hosting, domain registration, email hosting, SSL certificates,
                security services, and related infrastructure services (&ldquo;Services&rdquo;). Specific service
                terms, acceptable use policies, and service level agreements (&ldquo;SLA&rdquo;) applicable to
                individual products are incorporated into these Terms by reference and are available in
                your account dashboard.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Account registration</h2>
              <p>
                You must register an account to purchase Services. You agree to provide accurate,
                current, and complete information during registration and to keep your account
                information updated. You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your account. Notify us
                immediately at support@onenetservers.net if you suspect unauthorised access.
              </p>
              <p>
                You must be at least 18 years old to register an account. By registering, you represent
                and warrant that you meet this requirement. We reserve the right to terminate accounts
                that are found to belong to minors.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Payment and billing</h2>
              <p>
                Services are prepaid. Your billing cycle begins on the date your order is confirmed.
                Renewal invoices are generated and charged automatically unless you cancel before the
                renewal date. Prices are as displayed at checkout and may change at renewal — we will
                give you at least 30 days&rsquo; notice of any price increase.
              </p>
              <p>
                We accept payment by card (Stripe), bank transfer, and Paystack (Nigeria). All prices
                are displayed exclusive of applicable VAT or sales tax. UK customers may be charged
                VAT at the prevailing rate. Nigerian customers are subject to applicable taxes under
                Nigerian law.
              </p>
              <p>
                Invoices not paid within 7 days of the due date may result in service suspension.
                Accounts suspended for non-payment are reactivated upon full payment of the outstanding
                balance. Accounts unpaid for 30 days after suspension may be terminated and data deleted.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. 30-day money-back guarantee</h2>
              <p>
                New customers may request a full refund within 30 days of their first purchase of a
                qualifying hosting plan. The 30-day guarantee applies to web hosting, WordPress hosting,
                reseller hosting, cloud VPS, and business email plans. It does not apply to domain
                registrations, SSL certificates, add-on services, or renewal orders.
              </p>
              <p>
                To request a refund, contact support@onenetservers.net within 30 days of your purchase
                date. Refunds are processed within 5–10 business days to the original payment method.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Acceptable use</h2>
              <p>You agree not to use our Services to:</p>
              <ul>
                <li>Host, transmit, or distribute illegal content including but not limited to content that infringes intellectual property rights, child sexual abuse material, or material that incites violence or hatred.</li>
                <li>Send unsolicited bulk email (spam). Violation may result in immediate account termination without refund.</li>
                <li>Conduct distributed denial-of-service attacks, port scanning, or other network intrusion activities.</li>
                <li>Mine cryptocurrency without prior written approval from OneNet Servers.</li>
                <li>Host phishing websites or distribute malware.</li>
                <li>Violate the privacy of other individuals, including unauthorised collection of personal data.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate your account immediately, without notice
                or refund, for violation of this Acceptable Use Policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Uptime and service levels</h2>
              <p>
                We commit to a 99.9% monthly uptime SLA for shared hosting, email, and cloud VPS
                services. Uptime is calculated as the percentage of minutes in a calendar month during
                which the service is available, excluding scheduled maintenance windows (notified at
                least 24 hours in advance) and outages caused by factors outside our control (force
                majeure events, upstream provider failures, DDoS attacks, customer actions).
              </p>
              <p>
                If we fail to meet the 99.9% SLA in any given calendar month, you may request a
                service credit equal to one day&rsquo;s service fee per 30 minutes of excess downtime,
                up to a maximum of one month&rsquo;s fees. Credits must be requested within 15 days of
                the end of the affected month.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Data and backups</h2>
              <p>
                We perform automated daily backups of all shared hosting accounts. Backups are retained
                for 14 days. While we make every reasonable effort to maintain backups, we do not
                guarantee backup availability and recommend that you maintain your own independent
                backups of all data.
              </p>
              <p>
                You retain ownership of all data you store on our Services. We do not claim any rights
                to your content. Upon account termination, your data is deleted from our systems within
                30 days, except where we are required to retain it by law.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Intellectual property</h2>
              <p>
                All software, interfaces, documentation, trademarks, and branding elements of OneNet
                Servers are the intellectual property of ConqolX Technologies Limited. You may not
                copy, reproduce, distribute, modify, or create derivative works from our materials
                without express written permission.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Limitation of liability</h2>
              <p>
                To the fullest extent permitted by applicable law, our total liability to you for any
                claim arising from or related to our Services shall not exceed the total fees paid by
                you to us in the 12 months immediately preceding the claim. We are not liable for
                indirect, incidental, special, consequential, or punitive damages, including loss of
                profit, loss of data, or loss of business, even if advised of the possibility of such
                damages.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Termination</h2>
              <p>
                You may cancel your account at any time from your dashboard or by contacting support.
                We may suspend or terminate your account immediately for breach of these Terms, without
                refund. Upon termination, your right to use the Services ends immediately. We will
                delete your data within 30 days of termination.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes
                by email at least 30 days before they take effect. Continued use of our Services after
                the effective date constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Governing law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of England and
                Wales. Any dispute arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of England and Wales, except where mandatory consumer
                protection laws of another jurisdiction apply.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Contact</h2>
              <p>
                ConqolX Technologies Limited<br />
                Registered in England &amp; Wales No. 14565201<br />
                Registered in Nigeria No. 1775966<br />
                Email: support@onenetservers.net<br />
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
