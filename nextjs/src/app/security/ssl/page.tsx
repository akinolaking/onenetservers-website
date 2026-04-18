"use client";

import { useState } from "react";
import { ArrowRight, Check, Shield, Lock, Globe, Award, Zap, Eye } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeaturedPricingWrapper } from "@/components/shared/FeaturedPricingWrapper";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";

/* ── Pricing data ────────────────────────────────────────────── */
const plans = [
  {
    key: "dv",
    name: "PositiveSSL",
    audience: "Personal sites and blogs",
    monthly: { usd: 1.99,  ngn: 1499,  gbp: 1.49  },
    annual:  { usd: 13.02, ngn: 10013, gbp: 9.31  },
    description: "Fastest issuance. Validates domain ownership only. The padlock your visitors expect.",
    features: [
      "256-bit encryption",
      "Free automated installation",
      "Auto-renewal available",
      "Issued within minutes",
      "Single domain",
      "Free reissues",
    ],
    pid: "19",
    featured: false,
  },
  {
    key: "dv_multidomain",
    name: "PositiveSSL Multi-Domain",
    audience: "Sites with multiple domains",
    monthly: { usd: 5.99,  ngn: 4499,  gbp: 4.29  },
    annual:  { usd: 47.69, ngn: 36688, gbp: 34.12 },
    description: "One certificate covers multiple domains. Ideal for businesses running several web properties.",
    features: [
      "256-bit encryption",
      "Up to 3 domains included",
      "Free automated installation",
      "Auto-renewal available",
      "Issued within minutes",
      "Free reissues",
    ],
    pid: "21",
    featured: true,
  },
  {
    key: "ev",
    name: "BusinessTrust EV SAN",
    audience: "E-commerce and enterprise",
    monthly: { usd: 38.99,  ngn: 29999, gbp: 27.99 },
    annual:  { usd: 333.12, ngn: 256246, gbp: 238.31 },
    description: "The highest level of trust. Full company vetting with Subject Alternative Names for enterprise deployments.",
    features: [
      "256-bit encryption",
      "Full company vetting (EV)",
      "Subject Alternative Names (SAN)",
      "Issued within 5–10 business days",
      "Multiple domains supported",
      "Enterprise SLA support",
    ],
    pid: "58",
    featured: false,
  },
];

const features = [
  {
    icon: Shield,
    title: "256-bit encryption",
    description: "All certificates use 256-bit AES encryption, the same standard used by banks, governments, and global payment platforms.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Zap,
    title: "Automated installation",
    description: "We install your SSL certificate automatically in your hosting control panel. No manual configuration, no technical knowledge needed.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Globe,
    title: "Browser and device compatible",
    description: "Compatible with 99.9% of browsers and devices worldwide: Chrome, Safari, Firefox, Edge, iOS, Android. No exclusions.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
  {
    icon: Award,
    title: "Issued by trusted CAs",
    description: "Certificates issued through globally trusted Certificate Authorities. Your visitors see a valid, trusted padlock, no browser warnings.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Lock,
    title: "Free Let's Encrypt included",
    description: "Every OneNet Servers hosting plan includes a free Let's Encrypt SSL. Paid certificates add validation depth, warranty, and OV/EV assurance.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Eye,
    title: "Warranty coverage",
    description: "Paid SSL certificates include a warranty that protects your customers if a mis-issuance causes financial loss. DV from $10k, EV up to $1.75m.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
];

const faqs = [
  {
    q: "Do I need a paid SSL if my hosting already includes a free one?",
    a: "Free Let's Encrypt certificates cover encryption, so your site gets the padlock. Paid certificates add validation depth: OV confirms your business identity, EV adds the highest trust level. For e-commerce, enterprise, or any site handling payments, a paid certificate signals a higher level of vetting to your visitors.",
  },
  {
    q: "What is the difference between DV, OV, and EV?",
    a: "DV (Domain Validation) verifies domain ownership only, fastest to issue and lowest cost. OV (Organisation Validation) verifies your business identity against public records and takes 1–3 days. EV (Extended Validation) requires the most thorough company vetting and displays maximum trust indicators in browsers, making it the standard for banking and finance.",
  },
  {
    q: "What is a Wildcard certificate?",
    a: "A Wildcard SSL covers your main domain and all subdomains at one level, e.g., *.yourdomain.com covers shop.yourdomain.com, mail.yourdomain.com, app.yourdomain.com, and any other subdomain. Instead of buying separate certificates for each subdomain, one Wildcard covers them all.",
  },
  {
    q: "How long does installation take?",
    a: "For hosting plans on our platform, SSL installation is automated and your certificate is active within minutes of issuance. If you are installing on an external server, we provide full installation guides for Apache, Nginx, cPanel, and Plesk.",
  },
  {
    q: "Does SSL affect my Google ranking?",
    a: "Yes. Google has used HTTPS as a ranking signal since 2014. Sites without SSL are marked as 'Not Secure' in Chrome, which increases bounce rate and reduces trust. An SSL certificate is a baseline requirement for any site that expects to rank.",
  },
  {
    q: "What happens when my SSL expires?",
    a: "Browsers display a security warning and your visitors are blocked from accessing your site. Enable auto-renewal in your OneNet Servers dashboard to ensure your certificate renews automatically before it expires. We also send email reminders 30, 14, and 7 days before expiry.",
  },
];

export default function SecuritySslPage() {
  const { currency } = useCurrency();
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function showPrice(p: { usd: number; ngn: number; gbp: number }) {
    if (currency === "NGN") return `₦${Math.round(p.ngn).toLocaleString("en-US")}`;
    if (currency === "GBP") return `£${p.gbp.toFixed(2)}`;
    return `$${p.usd.toFixed(2)}`;
  }

  const billingCycle = billing === "annual" ? "annually" : "monthly";
  const period = billing === "annual" ? "/yr" : "/mo";

  return (
    <>
      <head>
        <title>SSL Certificates | OneNet Servers</title>
        <meta name="description" content="SSL certificates from £8.99/yr: DV, Wildcard, OV, and EV. Automated installation, 256-bit encryption, and trusted CAs. For every site, every level of validation." />
        <link rel="canonical" href="https://onenetservers.net/security/ssl" />
      </head>

      {/* ── Hero ── */}
      <section className="homepage-section wh-hero" aria-label="SSL certificates">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="hero-trust-strip">
              <span>256-bit encryption</span>
              <span>Auto-installation</span>
              <span>99.9% browser compatibility</span>
              <span>Trusted CAs</span>
              <span>30-Day MBG</span>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.05}>
            <div className="section-header" style={{ maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
              <p className="section-eyebrow">SSL Certificates</p>
              <h1 style={{ margin: 0 }}>The padlock your visitors trust.</h1>
              <p className="section-lead">
                From a basic DV certificate to full Extended Validation, we cover every
                site, every level of trust. Automated installation included on all OneNet Servers hosting plans.
              </p>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.1}>
            <div className="hero-reassurance" style={{ justifyContent: "center" }}>
              <span>No credit card required to start</span>
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
              eyebrow="SSL plans"
              title="Every level of validation. One trusted registrar."
              lead="All plans include 256-bit encryption, auto-renewal, and free reissues. Choose your validation level."
            />
          </Fade>

          <div className="billing-toggle">
            <div className="billing-tabs">
              <button className={billing === "monthly" ? "is-active" : ""} onClick={() => setBilling("monthly")}>Monthly</button>
              <button className={billing === "annual" ? "is-active" : ""} onClick={() => setBilling("annual")}>Annual</button>
            </div>
            <span className="wh-savings-badge">Save up to 35% · +2 months free</span>
          </div>

          <div className="plans-grid plans-grid--3" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {plans.map((plan) =>
                plan.featured ? (
                  <FeaturedPricingWrapper key={plan.key} badgeAlign="center">
                    <article className="plan-card plan-card--featured">
                      <div className="plan-card__header">
                        <p className="plan-card__audience">{plan.audience}</p>
                        <h3>{plan.name}</h3>
                        <p className="plan-card__desc">{plan.description}</p>
                      </div>
                      <div className="plan-card__price">
                        <span className="plan-card__amount">{showPrice(billing === "annual" ? plan.annual : plan.monthly)}</span>
                        <span className="plan-card__period">{period}</span>
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
                          href={`/cart.php?a=add&pid=${plan.pid}&billingcycle=${billingCycle}`}
                          className="btn btn-primary btn-full"
                        >
                          Get {plan.name}
                        </a>
                      </Shine>
                      <p className="plan-card__renewal">Renews at same rate. Cancel anytime.</p>
                    </article>
                  </FeaturedPricingWrapper>
                ) : (
                  <article key={plan.key} className="plan-card plan-card--standalone">
                    <div className="plan-card__header">
                      <p className="plan-card__audience">{plan.audience}</p>
                      <h3>{plan.name}</h3>
                      <p className="plan-card__desc">{plan.description}</p>
                    </div>
                    <div className="plan-card__price">
                      <span className="plan-card__amount">{showPrice(billing === "annual" ? plan.annual : plan.monthly)}</span>
                      <span className="plan-card__period">{period}</span>
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
                        href={`/cart.php?a=add&pid=${plan.pid}&billingcycle=${billingCycle}`}
                        className="btn btn-ghost btn-full"
                      >
                        Get {plan.name}
                      </a>
                    </Shine>
                    <p className="plan-card__renewal">Renews at same rate. Cancel anytime.</p>
                  </article>
                )
              )}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="homepage-section homepage-section--alt" id="features">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="What's included"
              title="Enterprise-grade security. Starter-friendly price."
            />
          </Fade>

          <div className="wh-features-grid">
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <Tilt key={f.title}>
                    <TiltContent>
                      <div className="wh-feature-card">
                        <div className="wh-feature-icon" style={{ background: f.bg, color: f.color }}>
                          <Icon size={20} />
                        </div>
                        <h3>{f.title}</h3>
                        <p>{f.description}</p>
                      </div>
                    </TiltContent>
                  </Tilt>
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
              <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Secure your site today</p>
              <h2 style={{ color: "#fff", margin: "12px 0 16px" }}>Your visitors are watching the padlock.</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto 32px" }}>
                A single SSL certificate protects your reputation, your Google ranking, and your
                customers&apos; trust. From {showPrice(plans[0].annual)} per year.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/security/oneguard" className="btn btn-white">
                  See OneGuard Security <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
                <a href="/cart.php?a=add&pid=19&billingcycle=annually" className="btn btn-primary">
                  Get PositiveSSL
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
            <SectionHeader eyebrow="FAQs" title="SSL questions answered." />
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
