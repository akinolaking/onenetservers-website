import { Fade } from "@/components/animate-ui/primitives/effects/fade";

export default function HostingAgreementPage() {
  return (
    <>
      <head>
        <title>Hosting Agreement | OneNet Servers</title>
        <meta name="description" content="OneNet Servers Hosting Agreement — SLA, resource usage policy, fair use, data handling, and backup terms for all hosting plans." />
        <link rel="canonical" href="https://onenetservers.net/legal/agreement" />
      </head>

      <section className="homepage-section">
        <div className="shell" style={{ maxWidth: 780 }}>
          <Fade inView inViewOnce>
            <div className="legal-header">
              <p className="section-eyebrow">Legal</p>
              <h1>Hosting Agreement</h1>
              <p className="legal-meta">Effective date: 1 January 2026 &nbsp;·&nbsp; Last updated: 1 March 2026</p>
              <p>
                This Hosting Agreement (&ldquo;Agreement&rdquo;) is between you (&ldquo;Customer&rdquo;) and
                <strong> ConqolX Technologies Limited</strong> trading as OneNet Servers (&ldquo;OneNet
                Servers&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). This Agreement governs your use of shared web
                hosting, WordPress hosting, reseller hosting, cloud VPS, and business email services.
                It supplements and is incorporated into our Terms of Service.
              </p>
            </div>
          </Fade>

          <div className="legal-body">
            <section className="legal-section">
              <h2>1. Service availability and SLA</h2>
              <p>
                OneNet Servers guarantees 99.9% monthly uptime (&ldquo;SLA&rdquo;) for all hosting services.
                Uptime is measured as the percentage of minutes in a calendar month during which the
                service is accessible, excluding:
              </p>
              <ul>
                <li>Scheduled maintenance (notified at least 24 hours in advance).</li>
                <li>Emergency maintenance required to protect the integrity or security of the network.</li>
                <li>Outages caused by events beyond our reasonable control (force majeure).</li>
                <li>Outages caused by actions or omissions of the Customer or their end users.</li>
              </ul>
              <p>
                If we fail to meet the 99.9% SLA in a calendar month, you may request a service credit
                equal to one day&rsquo;s fee per 30 minutes of excess downtime, up to a maximum of one month&rsquo;s
                fees. Credits must be claimed within 15 days of the end of the affected month by
                contacting support@onenetservers.net with evidence of the outage.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Resource usage — shared hosting</h2>
              <p>
                Shared hosting plans operate under a fair use policy. The following limits apply per account:
              </p>
              <ul>
                <li><strong>CPU:</strong> 25% of a single CPU core in any 60-second period. Sustained CPU usage above this threshold may result in process throttling or account review.</li>
                <li><strong>MySQL connections:</strong> Maximum 25 concurrent connections per database user.</li>
                <li><strong>Inodes:</strong> Maximum 300,000 inodes per account (files + directories).</li>
                <li><strong>Email sending:</strong> Maximum 500 outbound emails per hour per account. Bulk email must be sent via an approved transactional email provider.</li>
                <li><strong>Cron jobs:</strong> Minimum interval of 1 minute. Maximum 5 concurrent cron jobs per account.</li>
              </ul>
              <p>
                Accounts consistently exceeding resource limits may be moved to a higher plan or
                temporarily suspended to protect other customers on the shared infrastructure. We will
                contact you before any action is taken where possible.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Cloud VPS terms</h2>
              <p>
                Cloud VPS plans provide dedicated virtual resources (RAM, vCPU, storage, bandwidth).
                You are responsible for the security and configuration of your VPS, including:
              </p>
              <ul>
                <li>Keeping the operating system and installed software up to date.</li>
                <li>Configuring and maintaining a firewall.</li>
                <li>Implementing appropriate access controls (SSH key authentication recommended).</li>
              </ul>
              <p>
                Root access is provided by default. Misuse of root access that results in damage to
                shared infrastructure or other customers may result in immediate suspension.
                Bandwidth included per plan is measured as outbound transfer. Inbound transfer is
                not counted. Overage is charged at the rate shown in your account dashboard.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. Backups</h2>
              <p>
                We perform automated daily backups of all shared hosting accounts. Backups are retained
                for 14 days. Backup restoration is available on request via your dashboard at no charge
                (up to 2 restorations per month; additional restorations are charged at £10 each).
              </p>
              <p>
                Cloud VPS backups are not included by default and must be enabled as an add-on.
                We strongly recommend all VPS customers enable automated backups or implement their own
                backup solution. We do not accept liability for data loss on accounts without active backup.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Migrations</h2>
              <p>
                Free website migration is included with all hosting plans. We migrate:
              </p>
              <ul>
                <li>Up to 10 websites per account on shared and reseller plans.</li>
                <li>Full file and database content as-at the time of migration.</li>
                <li>From any cPanel, Plesk, DirectAdmin, or manually configured hosting environment.</li>
              </ul>
              <p>
                Migration timescales depend on the size and complexity of your site. We target
                completion within 48–72 hours of receiving access credentials. You are responsible
                for testing your site after migration and pointing DNS to our servers.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Prohibited content and activities</h2>
              <p>The following are prohibited on all OneNet Servers infrastructure:</p>
              <ul>
                <li>Copyright-infringing content (pirated software, media, publications).</li>
                <li>Adult content or sexually explicit material unless on an approved adult hosting plan.</li>
                <li>Cryptocurrency mining without prior written approval.</li>
                <li>IRC servers or Tor exit nodes without prior written approval.</li>
                <li>Any content that is illegal under UK or Nigerian law.</li>
                <li>Phishing, malware distribution, or botnet command and control.</li>
              </ul>
              <p>
                Violation may result in immediate account termination without refund and referral to
                law enforcement where required by law.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. IP addresses</h2>
              <p>
                Shared hosting accounts share IP addresses with other customers. A dedicated IP address
                is available as a paid add-on. IP addresses are assigned by OneNet Servers and remain
                our property. They are not portable upon account cancellation.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Email hosting</h2>
              <p>
                Business Email plans include mailbox storage as specified per plan. Email is delivered
                over SMTP/IMAP/POP3 with TLS encryption. We do not scan the content of your emails
                except for the purpose of spam and malware filtering. We are not responsible for the
                content of emails sent from your domain.
              </p>
              <p>
                Sending unsolicited bulk email (spam) is a serious breach of our Acceptable Use Policy
                and will result in immediate account termination. We cooperate with anti-spam
                organisations and may report abusive sending to relevant blocklists.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Account suspension and termination</h2>
              <p>
                We reserve the right to suspend or terminate your hosting service in the following circumstances:
              </p>
              <ul>
                <li>Non-payment of invoices after a 7-day grace period.</li>
                <li>Breach of the Acceptable Use Policy.</li>
                <li>Resource abuse affecting other customers on shared infrastructure.</li>
                <li>Court order or legal requirement.</li>
                <li>Security threat to our infrastructure or other customers.</li>
              </ul>
              <p>
                Where possible, we will provide advance notice and an opportunity to remedy the breach.
                For immediate security threats or legal requirements, suspension may occur without notice.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Changes to this Agreement</h2>
              <p>
                We may update this Agreement at any time. Material changes will be notified by email
                at least 30 days before taking effect. Continued use of the Services after the
                effective date constitutes acceptance of the updated Agreement.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. Contact</h2>
              <p>
                For questions about this Agreement:<br />
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
