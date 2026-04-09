"use client";

import { useState } from "react";
import {
  Zap,
  RefreshCw,
  Shield,
  Lock,
  Layers,
  Database,
  ArrowRight,
  Check,
  PenTool,
  ShoppingBag,
  Users,
  Briefcase,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";

/* ── Pricing data ─────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    audience: "First WordPress site",
    monthlyUsd: 4.99,
    annualUsd: 3.49,
    renewal: "Renews at $4.99/mo after the first term.",
    features: [
      "1 WordPress site",
      "10 GB SSD storage",
      "One-click WordPress install",
      "Automatic WordPress updates",
      "Free SSL certificate",
    ],
    pid: "271",
    featured: false,
  },
  {
    name: "Lite",
    audience: "Growing blogs and portfolios",
    monthlyUsd: 9.99,
    annualUsd: 6.99,
    renewal: "Renews at $9.99/mo after the first term.",
    features: [
      "3 WordPress sites",
      "25 GB SSD storage",
      "LiteSpeed WordPress cache",
      "Daily backups + one-click restore",
      "Staging environment",
    ],
    pid: "272",
    featured: false,
  },
  {
    name: "Premium",
    audience: "Agencies and WooCommerce stores",
    monthlyUsd: 19.99,
    annualUsd: 13.99,
    renewal: "Renews at $19.99/mo after the first term.",
    features: [
      "Unlimited WordPress sites",
      "50 GB SSD storage",
      "Staging environment",
      "WooCommerce optimised",
      "Free domain (1st year)",
    ],
    pid: "273",
    featured: true,
  },
  {
    name: "Ultimate",
    audience: "High-traffic and enterprise sites",
    monthlyUsd: 34.99,
    annualUsd: 24.99,
    renewal: "Renews at $34.99/mo after the first term.",
    features: [
      "Unlimited WordPress sites",
      "100 GB SSD storage",
      "Staging environment",
      "Priority support",
      "Free domain (1st year)",
    ],
    pid: "274",
    featured: false,
  },
];

const wpFeatures = [
  {
    icon: Zap,
    title: "One-click WordPress install",
    description:
      "WordPress up and running in under two minutes. No FTP, no manual configuration. Pick a theme and go.",
  },
  {
    icon: RefreshCw,
    title: "Automatic WordPress updates",
    description:
      "Core, theme, and plugin updates applied automatically. Your site stays secure without you lifting a finger.",
  },
  {
    icon: Shield,
    title: "Daily backups + one-click restore",
    description:
      "Full site backup every day. Restore to any point in seconds from your dashboard — no support ticket needed.",
  },
  {
    icon: Database,
    title: "LiteSpeed cache (optimised for WordPress)",
    description:
      "Server-level caching built for WordPress. Sub-800ms load times without a performance plugin.",
  },
  {
    icon: Lock,
    title: "Free SSL + HTTPS redirect",
    description:
      "Automatic SSL certificate on every site. No manual renewal, no extra cost. HTTPS redirect enabled by default.",
  },
  {
    icon: Layers,
    title: "Staging environment (Lite+)",
    description:
      "Test changes on a private clone before pushing live. Available on Lite, Premium, and Ultimate plans.",
  },
];

const audiences = [
  {
    icon: PenTool,
    title: "Bloggers and creators",
    description:
      "Fast setup, beautiful themes, and a writing experience built around your content.",
  },
  {
    icon: Briefcase,
    title: "Small businesses",
    description:
      "Professional website, contact forms, and local SEO — without hiring a developer.",
  },
  {
    icon: Users,
    title: "Agencies and freelancers",
    description:
      "Manage multiple client sites from one dashboard. Staging, updates, and white-label ready.",
  },
  {
    icon: ShoppingBag,
    title: "WooCommerce stores",
    description:
      "LiteSpeed caching and server resources tuned for WooCommerce. Fast checkouts. Happy customers.",
  },
];

const faqs = [
  {
    q: "Do I need technical knowledge?",
    a: "No. One-click install, automatic updates — we handle the WordPress maintenance. If you can write an email, you can manage your WordPress site on OneNet Servers. No FTP, no server configuration, no technical background required.",
  },
  {
    q: "Can I use page builders like Elementor or Divi?",
    a: "Yes — Elementor, Divi, Beaver Builder, and all major page builders work out of the box. Our LiteSpeed server is compatible with every major WordPress builder. Performance stays fast regardless of which builder you choose.",
  },
  {
    q: "Is WooCommerce supported?",
    a: "Yes, WooCommerce runs on all plans. Premium and Ultimate are recommended for active stores — they include more resources and staging environments for testing checkout flows before going live.",
  },
  {
    q: "Can I migrate from another host?",
    a: "Yes, free migration on all plans. Our team handles the full move — files, database, DNS, and email. Most migrations complete within 24 hours with zero downtime. We've moved sites from Bluehost, SiteGround, GoDaddy, and Kinsta.",
  },
  {
    q: "What's the difference between shared hosting and WordPress hosting?",
    a: "Our WordPress plans are optimised shared hosting — LiteSpeed caching, WordPress-specific server configuration, and automatic updates all included. It's the performance of managed WordPress hosting at shared hosting prices.",
  },
];

export default function WordPressHostingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { format } = useCurrency();

  return (
    <main className="page-shell">
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="wp-hero">
        <div className="shell">
          <Fade inView inViewOnce className="wp-hero__inner">
            <div className="wh-trust-strip">
              <Slides inView inViewOnce direction="up" holdDelay={60}>
                {[
                  "One-click install",
                  "Auto updates",
                  "LiteSpeed cache",
                  "30-day MBG",
                ].map((item) => (
                  <span key={item} className="wh-trust-badge">
                    {item}
                  </span>
                ))}
              </Slides>
            </div>
            <h1>
              WordPress hosting. Fast, managed, and ready in minutes.
            </h1>
            <p className="hero-sub">
              Optimised servers, one-click install, automatic updates, and daily backups.
              From {format(3.49)}/mo.
            </p>
            <div className="hero-actions">
              <a
                href="/cart.php?a=add&pid=271&billingcycle=annually"
                className="wh-btn-primary"
              >
                Get WordPress hosting <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-reassurance">
              <span>30-day money-back</span>
              <span>Free SSL</span>
              <span>Free domain</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 2. Pricing ──────────────────────────────────────── */}
      <section className="homepage-section" id="plans">
        <div className="shell">
          <SectionHeader
            eyebrow="Pricing"
            title="Plans for every WordPress site."
            lead="From a first blog to a busy WooCommerce store — all plans include one-click install, automatic updates, and free SSL."
            centered
          />

          <div className="billing-toggle">
            <button
              className={billing === "monthly" ? "is-active" : ""}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              className={billing === "annual" ? "is-active" : ""}
              onClick={() => setBilling("annual")}
            >
              Annual
            </button>
            {billing === "annual" && (
              <span>Save up to 30% · +2 months free</span>
            )}
          </div>

          <div className="wh-pricing-proof">
            <div className="pricing-proof__avatars">
              <span>CO</span>
              <span>AO</span>
              <span>SO</span>
              <span>EO</span>
            </div>
            <div className="wh-stars" aria-label="5 out of 5 stars" role="img">★★★★★</div>
            <p>&ldquo;Load time dropped from four seconds to under 800ms. Zero downtime during migration.&rdquo; — Adebola O.</p>
          </div>

          <div className="pricing-grid wh-pricing-grid">
            <Slides inView inViewOnce direction="up" holdDelay={80}>
              {plans.map((plan) => (
                plan.featured ? (
                  <Shine key={plan.name} enableOnHover color="#4343F0" opacity={0.12}>
                    <div className="pricing-card pricing-card--featured">
                      <div className="pricing-card__badge">Most popular</div>
                      <div>
                        <h3>{plan.name}</h3>
                        <p>{plan.audience}</p>
                      </div>
                      <div className="pricing-card__price">
                        <strong>
                          {format(billing === "annual" ? plan.annualUsd : plan.monthlyUsd)}
                        </strong>
                        <span>/mo</span>
                      </div>
                      <p className="pricing-card__renewal">{plan.renewal}</p>
                      <ul className="wh-features-list">
                        {plan.features.map((f) => (
                          <li key={f}>
                            <Check size={14} className="wh-check-icon" />
                            {f}
                          </li>
                        ))}
                        <li>
                          <Check size={14} className="wh-check-icon" />
                          <span className="wh-mbg-badge">30-day MBG</span>
                        </li>
                      </ul>
                      <a
                        href={`/cart.php?a=add&pid=${plan.pid}&billingcycle=${billing === "annual" ? "annually" : "monthly"}`}
                        className="wh-card-cta wh-card-cta--featured"
                      >
                        Get started
                      </a>
                    </div>
                  </Shine>
                ) : (
                  <div key={plan.name} className="pricing-card">
                    <div>
                      <h3>{plan.name}</h3>
                      <p>{plan.audience}</p>
                    </div>
                    <div className="pricing-card__price">
                      <strong>
                        {format(billing === "annual" ? plan.annualUsd : plan.monthlyUsd)}
                      </strong>
                      <span>/mo</span>
                    </div>
                    <p className="pricing-card__renewal">{plan.renewal}</p>
                    <ul className="wh-features-list">
                      {plan.features.map((f) => (
                        <li key={f}>
                          <Check size={14} className="wh-check-icon" />
                          {f}
                        </li>
                      ))}
                      <li>
                        <Check size={14} className="wh-check-icon" />
                        <span className="wh-mbg-badge">30-day MBG</span>
                      </li>
                    </ul>
                    <a
                      href={`/cart.php?a=add&pid=${plan.pid}&billingcycle=${billing === "annual" ? "annually" : "monthly"}`}
                      className="wh-card-cta"
                    >
                      Get started
                    </a>
                  </div>
                )
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── 3. WordPress features ───────────────────────────── */}
      <section className="homepage-section homepage-section--tinted">
        <div className="shell">
          <SectionHeader
            eyebrow="What's included"
            title="Built for WordPress. Configured for speed."
            centered
          />
          <div className="wh-features-grid">
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {wpFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <Tilt key={feat.title}>
                    <TiltContent>
                      <div className="wh-feature-card">
                        <div className="wh-feature-icon">
                          <Icon size={20} />
                        </div>
                        <h3>{feat.title}</h3>
                        <p>{feat.description}</p>
                      </div>
                    </TiltContent>
                  </Tilt>
                );
              })}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── 4. Performance claim ────────────────────────────── */}
      <section className="homepage-section">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="wp-perf-strip">
              <div className="wp-perf-stat">
                <strong>Sub-800ms</strong>
                <span>average load time — measured on a standard WordPress site with WooCommerce active</span>
              </div>
              <div className="wp-perf-divider" aria-hidden />
              <div className="wp-perf-stat">
                <strong>99.9%</strong>
                <span>uptime SLA on all plans</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 5. Who it's for ─────────────────────────────────── */}
      <section className="homepage-section homepage-section--tinted">
        <div className="shell">
          <SectionHeader
            eyebrow="Who it's for"
            title="Whatever you're building, WordPress is ready."
            centered
          />
          <div className="wp-audience-grid">
            <Slides inView inViewOnce direction="up" holdDelay={80}>
              {audiences.map((a) => {
                const Icon = a.icon;
                return (
                  <Tilt key={a.title}>
                    <TiltContent>
                      <div className="wp-audience-card">
                        <div className="wh-feature-icon">
                          <Icon size={20} />
                        </div>
                        <h3>{a.title}</h3>
                        <p>{a.description}</p>
                      </div>
                    </TiltContent>
                  </Tilt>
                );
              })}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────── */}
      <section className="homepage-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Questions"
            title="Common questions answered."
            centered
          />
          <Fade inView inViewOnce>
            <div className="wh-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`wh-faq-item${openFaq === i ? " wh-faq-item--open" : ""}`}
                >
                  <button
                    className="wh-faq-trigger"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span className="wh-faq-chevron" aria-hidden>
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="wh-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 7. Bottom CTA ───────────────────────────────────── */}
      <section className="homepage-section wh-cta-section">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="wh-cta-box">
              <h2>Your WordPress site. Live in 10 minutes.</h2>
              <p>
                One-click install. Automatic updates. 30-day money-back guarantee. No technical knowledge required.
              </p>
              <a
                href="/cart.php?a=add&pid=271&billingcycle=annually"
                className="wh-btn-primary"
              >
                Get WordPress hosting <ArrowRight size={16} />
              </a>
              <div className="hero-reassurance">
                <span>30-day money-back</span>
                <span>Free SSL</span>
                <span>Free domain</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
}
