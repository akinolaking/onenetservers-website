"use client";

import { useState } from "react";
import { ArrowRight, Check, Shield, Lock, Zap, Eye, RefreshCw, AlertTriangle, Activity } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";

const plans = [
  {
    key: "single",
    name: "OneGuard Essential",
    audience: "Single website",
    usd: 4.99,
    period: "mo",
    description: "Daily malware scanning, automatic removal, and web application firewall for one site.",
    features: [
      "Daily malware scanning",
      "Automatic malware removal",
      "Web application firewall (WAF)",
      "DDoS protection",
      "Blacklist monitoring",
      "SSL certificate included",
    ],
    pid: "450",
    featured: false,
  },
  {
    key: "pro",
    name: "OneGuard Pro",
    audience: "Growing businesses",
    usd: 12.99,
    period: "mo",
    description: "Everything in Essential plus continuous scanning, priority removal, and site seal.",
    features: [
      "Continuous malware scanning",
      "Priority automatic removal",
      "Advanced WAF rules",
      "DDoS mitigation",
      "Site seal badge",
      "Uptime monitoring",
      "Email alerts",
    ],
    pid: "451",
    featured: true,
  },
  {
    key: "enterprise",
    name: "OneGuard Enterprise",
    audience: "High-traffic and e-commerce",
    usd: 29.99,
    period: "mo",
    description: "Comprehensive security suite: SIEM-grade logging, emergency response, and dedicated analyst support.",
    features: [
      "Real-time threat detection",
      "SIEM-grade audit logs",
      "Emergency response SLA: 4hr",
      "Dedicated security analyst",
      "Advanced bot management",
      "PCI-DSS compliance assist",
      "Custom WAF rules",
    ],
    pid: "452",
    featured: false,
  },
];

const features = [
  {
    icon: Shield,
    title: "Malware scanning and removal",
    description: "We scan your site daily (continuous on Pro+) for malware, viruses, and injected code. If we find anything, we remove it automatically — no manual intervention needed.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Zap,
    title: "Web Application Firewall",
    description: "Our WAF blocks SQL injection, XSS, and common OWASP Top 10 attacks before they reach your site. Rules updated in real time as new threats emerge.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: AlertTriangle,
    title: "DDoS protection",
    description: "Distributed denial-of-service attacks are detected and mitigated at the edge — before they impact your server or your visitors' experience.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
  {
    icon: Eye,
    title: "Blacklist monitoring",
    description: "We monitor 30+ blacklists — Google Safe Browsing, McAfee, Norton, and others. If your site is flagged, we alert you immediately and assist with delisting.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Activity,
    title: "Uptime and anomaly monitoring",
    description: "OneGuard Pro and Enterprise include uptime checks every 60 seconds from multiple locations. Anomalies — traffic spikes, error rate changes — trigger instant alerts.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Lock,
    title: "HTTPS and SSL enforcement",
    description: "OneGuard enforces HTTPS across your entire site and monitors your SSL certificate validity. We alert you before any certificate expires.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
  {
    icon: RefreshCw,
    title: "Automated backups",
    description: "Daily encrypted backups stored off-site. If a breach does occur, restore your clean site in one click from your OneNet Servers dashboard.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Shield,
    title: "Bot management",
    description: "Distinguish real visitors from bots and scrapers. Block credential stuffing, content theft, and automated vulnerability probing — while keeping legitimate crawlers through.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
];

const faqs = [
  {
    q: "What is OneGuard and how is it different from a standard SSL?",
    a: "An SSL certificate encrypts data in transit between your visitors and your server. OneGuard goes much further: it scans your site for malware and removes it automatically, blocks attacks via a web application firewall, monitors blacklists, detects DDoS, and alerts you to anomalies. SSL and OneGuard work together — SSL is the foundation, OneGuard is the active defence.",
  },
  {
    q: "How does automatic malware removal work?",
    a: "OneGuard scans your site's files and database for known malware signatures, injected scripts, backdoors, and suspicious modifications. When a threat is found, our system isolates and removes it automatically within minutes. You receive an email report of what was found and what was removed. For complex infections on Enterprise plans, a security analyst reviews and confirms the clean.",
  },
  {
    q: "Does OneGuard work with WordPress?",
    a: "Yes. OneGuard is compatible with WordPress, WooCommerce, Joomla, Drupal, Magento, and any PHP-based site. The malware scanner is CMS-aware and checks for WordPress-specific threats including plugin backdoors, theme injections, and compromised core files.",
  },
  {
    q: "Will the WAF break my site?",
    a: "Our WAF is pre-configured with rules tuned to avoid false positives on standard web applications. In the unlikely event a legitimate request is blocked, you can whitelist specific URLs or parameters from your OneNet Servers dashboard in seconds. Enterprise plans include custom rule authoring.",
  },
  {
    q: "What happens if my site gets blacklisted by Google?",
    a: "OneGuard monitors Google Safe Browsing and 30+ other blacklists continuously. The moment your site is flagged, we alert you and begin the remediation process — malware removal, clean verification, and Google Search Console delisting request submission. Most sites are delisted within 24–48 hours of a successful clean.",
  },
  {
    q: "Is OneGuard required for PCI-DSS compliance?",
    a: "OneGuard Enterprise assists with several PCI-DSS requirements including malware scanning, audit logging, and web application security. However, PCI-DSS compliance is a certification process involving your full payment stack. We recommend consulting a qualified security assessor (QSA) for full certification. Our security team can advise on scope.",
  },
];

export default function SecurityOneguardPage() {
  const { format } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <head>
        <title>OneGuard Security | OneNet Servers</title>
        <meta name="description" content="OneGuard Security: daily malware scanning, automatic removal, WAF, DDoS protection, and blacklist monitoring for your website. From £4.99/mo." />
        <link rel="canonical" href="https://onenetservers.net/security/oneguard" />
      </head>

      {/* ── Hero ── */}
      <section className="homepage-section wh-hero" aria-label="OneGuard security">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="hero-trust-strip">
              <span>Malware Scanning</span>
              <span>Auto Removal</span>
              <span>WAF Protection</span>
              <span>DDoS Mitigation</span>
              <span>30-Day MBG</span>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.05}>
            <div className="section-header" style={{ maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
              <p className="section-eyebrow">OneGuard Security</p>
              <h1 style={{ margin: 0 }}>Your site defended. Around the clock.</h1>
              <p className="section-lead">
                OneGuard combines malware scanning, automatic removal, web application firewall,
                and DDoS protection into one plan. No security expertise required.
              </p>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.1}>
            <div className="hero-reassurance" style={{ justifyContent: "center" }}>
              <span>No credit card required</span>
              <span>Cancel anytime</span>
              <span>30-day money-back guarantee</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="homepage-section" id="plans">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="OneGuard plans"
              title="Active security for every site."
              lead="Choose the level of protection that matches your risk. Upgrade any time — downgrade any time."
            />
          </Fade>

          <div className="plans-grid plans-grid--3" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {plans.map((plan) => (
                <article key={plan.key} className={`plan-card${plan.featured ? " plan-card--featured" : ""}`}>
                  {plan.featured && (
                    <div className="plan-card__badge">Most Popular</div>
                  )}
                  <div className="plan-card__header">
                    <p className="plan-card__audience">{plan.audience}</p>
                    <h3>{plan.name}</h3>
                    <p className="plan-card__desc">{plan.description}</p>
                  </div>
                  <div className="plan-card__price">
                    <span className="plan-card__amount">{format(plan.usd, 2)}</span>
                    <span className="plan-card__period">/{plan.period}</span>
                  </div>
                  <ul className="plan-card__features">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <Check size={14} aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Shine>
                    <a
                      href={`/cart.php?a=add&pid=${plan.pid}&billingcycle=monthly`}
                      className={`btn ${plan.featured ? "btn-primary" : "btn-ghost"} btn-full`}
                    >
                      Get {plan.name.replace("OneGuard ", "")}
                    </a>
                  </Shine>
                  <p className="plan-card__renewal">Renews monthly. Cancel anytime.</p>
                </article>
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="homepage-section homepage-section--alt" id="features">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="How OneGuard protects you"
              title="Eight layers of active defence."
            />
          </Fade>

          <div className="features-grid" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={60}>
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <article key={f.title} className="feature-card">
                    <div
                      className="feature-card__icon"
                      style={{ background: f.bg, color: f.color }}
                      aria-hidden="true"
                    >
                      <Icon size={20} />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.description}</p>
                  </article>
                );
              })}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="homepage-section homepage-section--dark" id="cta">
        <div className="shell" style={{ textAlign: "center" }}>
          <Shine>
            <div className="bottom-cta-card">
              <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Activate today</p>
              <h2 style={{ color: "#fff", margin: "12px 0 16px" }}>Stop a breach before it happens.</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto 32px" }}>
                The average time to detect a website compromise without a security tool is 6 months.
                OneGuard finds and removes threats in minutes — from {format(4.99, 2)}/mo.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/security/ssl" className="btn btn-white">
                  View SSL Certificates <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
                <a href="/cart.php?a=add&pid=451&billingcycle=monthly" className="btn btn-primary">
                  Get OneGuard Pro
                </a>
              </div>
            </div>
          </Shine>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="homepage-section" id="faq">
        <div className="shell" style={{ maxWidth: 780 }}>
          <Fade inView inViewOnce>
            <SectionHeader eyebrow="FAQs" title="Security questions answered." />
          </Fade>

          <div className="faq-list" style={{ marginTop: 48 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="faq-chevron" aria-hidden="true">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
