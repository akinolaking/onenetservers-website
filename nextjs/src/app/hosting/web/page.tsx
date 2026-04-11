"use client";

import { useState } from "react";
import {
  Shield,
  RefreshCw,
  Zap,
  Lock,
  Globe,
  ArrowRight,
  Check,
  Server,
  Cpu,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FeaturedPricingWrapper } from "@/components/shared/FeaturedPricingWrapper";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";

/* ── Pricing data ─────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    audience: "Your first website",
    monthlyUsd: 3.99,
    annualUsd: 2.99,
    renewalMonthly: "Renews at $3.99/mo after the first term.",
    renewalAnnual: "Renews at $3.99/mo after the first term.",
    features: [
      "1 website",
      "5 GB SSD storage",
      "Free SSL certificate",
      "Free daily backups",
      "CloudLinux isolation",
    ],
    pid: "261",
    featured: false,
  },
  {
    name: "Lite",
    audience: "Growing sites",
    monthlyUsd: 7.99,
    annualUsd: 5.49,
    renewalMonthly: "Renews at $7.99/mo after the first term.",
    renewalAnnual: "Renews at $7.99/mo after the first term.",
    features: [
      "3 websites",
      "20 GB SSD storage",
      "Free SSL certificate",
      "Free daily backups",
      "LiteSpeed web server",
    ],
    pid: "262",
    featured: false,
  },
  {
    name: "Premium",
    audience: "Serious builders",
    monthlyUsd: 18.2,
    annualUsd: 11.83,
    renewalMonthly: "Renews at $18.20/mo after the first term.",
    renewalAnnual: "Renews at $18.20/mo after the first term.",
    features: [
      "Unlimited websites",
      "50 GB SSD storage",
      "Free SSL certificate",
      "Free daily backups",
      "ImmunifyAV+ malware scanning",
    ],
    pid: "263",
    featured: true,
  },
  {
    name: "Ultimate",
    audience: "Agencies and stores",
    monthlyUsd: 32.0,
    annualUsd: 21.99,
    renewalMonthly: "Renews at $32.00/mo after the first term.",
    renewalAnnual: "Renews at $32.00/mo after the first term.",
    features: [
      "Unlimited websites",
      "100 GB SSD storage",
      "Free SSL certificate",
      "Priority daily backups",
      "Dedicated resources",
    ],
    pid: "264",
    featured: false,
  },
];

const features = [
  {
    icon: Lock,
    title: "Free SSL certificate",
    description:
      "Automatic HTTPS on every site from day one. Renews without you lifting a finger.",
    colour: "var(--blue-xl)",
    iconColour: "var(--blue)",
  },
  {
    icon: RefreshCw,
    title: "Free daily backups",
    description:
      "Your files, databases, and email backed up every day. One-click restore if anything goes wrong.",
    colour: "rgb(16 185 129 / 12%)",
    iconColour: "var(--green)",
  },
  {
    icon: Zap,
    title: "LiteSpeed web server",
    description:
      "Up to 10× faster than Apache. Built-in caching at the server level — no plugin required.",
    colour: "rgb(245 158 11 / 10%)",
    iconColour: "var(--amber)",
  },
  {
    icon: Cpu,
    title: "CloudLinux OS",
    description:
      "Your environment is isolated. Another account's traffic spike never touches your site.",
    colour: "var(--blue-xl)",
    iconColour: "var(--blue)",
  },
  {
    icon: Globe,
    title: "Free domain (1st year)",
    description:
      "Choose from .com, .ng, .co.uk and 30+ extensions. Yours free for the first year.",
    colour: "rgb(16 185 129 / 12%)",
    iconColour: "var(--green)",
  },
  {
    icon: Server,
    title: "Free site migration",
    description:
      "Our team moves your files, databases, DNS, and email. No charge. No chasing tickets.",
    colour: "rgb(245 158 11 / 10%)",
    iconColour: "var(--amber)",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Choose your plan",
    description:
      "Pick the plan that fits. All plans include a 30-day money-back guarantee — no questions asked.",
  },
  {
    number: "02",
    title: "We set up your hosting",
    description:
      "Your environment provisions automatically. Average activation: 2–5 minutes. Migrations are handled by our team at no extra charge.",
  },
  {
    number: "03",
    title: "You go live",
    description:
      "Log in to cPanel or your client area. Your site is ready. Support is available 24/7 if you need it.",
  },
];

const comparison = [
  {
    feature: "Starting price",
    onenet: "$2.99/mo",
    ukHost: "$3.49/mo",
    ngHost: "$4.99/mo",
    globalHost: "$2.99/mo*",
  },
  {
    feature: "Free domain",
    onenet: true,
    ukHost: false,
    ngHost: false,
    globalHost: true,
  },
  {
    feature: "Free SSL",
    onenet: true,
    ukHost: true,
    ngHost: false,
    globalHost: true,
  },
  {
    feature: "LiteSpeed",
    onenet: true,
    ukHost: false,
    ngHost: false,
    globalHost: false,
  },
  {
    feature: "30-day MBG",
    onenet: true,
    ukHost: false,
    ngHost: false,
    globalHost: false,
  },
];

const faqs = [
  {
    q: "Can I migrate my existing website?",
    a: "Yes, free for all plans. Our team handles the full migration — files, databases, DNS, and email — at no extra charge. Most migrations complete within 24 hours.",
  },
  {
    q: "What happens after 30 days?",
    a: "Your plan renews at the standard renewal rate shown on your plan card. You will receive a renewal notice before the charge. Cancel anytime from your client area.",
  },
  {
    q: "Do you support WordPress?",
    a: "Yes — one-click WordPress install on all plans. We also offer dedicated WordPress hosting with LiteSpeed caching, automatic updates, and staging environments.",
  },
  {
    q: "Is there a control panel?",
    a: "Yes — cPanel on shared plans, with full file manager, email, database management, and one-click app installs. You can also manage everything from the OneNet Servers client area.",
  },
  {
    q: "Can I host multiple websites?",
    a: "Premium and Ultimate plans support unlimited websites. Starter covers one site and Lite covers three. Upgrade anytime from your client area without losing your data.",
  },
];

const testimonials = [
  {
    name: "Adebola O.",
    role: "E-commerce founder",
    location: "Lagos",
    quote:
      "Migrated from Bluehost, load time dropped from four seconds to under 800ms. The team handled the move without us chasing tickets.",
  },
  {
    name: "Emeka Okonkwo",
    role: "Founder, Emeka Tax Advisory",
    location: "Abuja",
    quote:
      "It made me look like a real company. Because I am one. The site was live before I finished setting up my email.",
  },
  {
    name: "Solape Owolabi",
    role: "Designer & Founder, Adire by Sola",
    location: "Ibadan",
    quote:
      "My international customers found me through Google. I didn't think that was possible for someone like me.",
  },
];

function CheckCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="wh-table-value">{value}</span>;
  }
  return value ? (
    <span className="wh-table-check wh-table-check--yes" aria-label="Yes">✓</span>
  ) : (
    <span className="wh-table-check wh-table-check--no" aria-label="No">✗</span>
  );
}

export default function WebHostingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { format } = useCurrency();

  return (
    <main className="page-shell">
      {/* ── 1. Hero ─────────────────────────────────────────── */}
      <section className="wh-hero">
        <div className="shell">
          <Fade inView inViewOnce className="wh-hero__inner">
            <div className="wh-trust-strip">
              <Slides inView inViewOnce direction="up" holdDelay={60}>
                {["LiteSpeed", "CloudLinux", "cPanel", "NiRA Accredited", "30-day MBG"].map(
                  (item) => (
                    <span key={item} className="wh-trust-badge">
                      {item}
                    </span>
                  )
                )}
              </Slides>
            </div>
            <h1>Web hosting that works as hard as you do.</h1>
            <p className="hero-sub">
              LiteSpeed servers, CloudLinux isolation, free SSL, and daily backups —
              starting from {format(3.99)}/mo.
            </p>
            <div className="hero-actions">
              <a
                href="/cart.php?a=add&pid=261&billingcycle=annually"
                className="wh-btn-primary"
              >
                Get started <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-reassurance">
              <span>30-day money-back</span>
              <span>Free domain included</span>
              <span>Free migration</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── 2. Pricing ──────────────────────────────────────── */}
      <section className="homepage-section" id="plans">
        <div className="shell">
          <SectionHeader
            eyebrow="Pricing"
            title="Plans for every stage."
            lead="All plans include free SSL, daily backups, and a 30-day money-back guarantee."
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
            <span className="wh-savings-badge">Save up to 35% · +2 months free</span>
          </div>

          <div className="wh-pricing-proof">
            <div className="pricing-proof__avatars">
              <span>CO</span>
              <span>AO</span>
              <span>SO</span>
              <span>EO</span>
            </div>
            <div className="wh-stars" aria-label="5 out of 5 stars" role="img">★★★★★</div>
            <p>&ldquo;Migrated from Bluehost, load time went from 4s to under 800ms.&rdquo; — Adebola O.</p>
          </div>

          <div className="pricing-grid wh-pricing-grid">
            <Slides inView inViewOnce direction="up" holdDelay={80}>
              {plans.map((plan) => (
                plan.featured ? (
                  /* FeaturedPricingWrapper: MUI Card owns shadow + hover; Chip badge sits
                     outside Shine's overflow:hidden — fixes clipped badge and square shadow. */
                  <FeaturedPricingWrapper key={plan.name}>
                    <div className="pricing-card pricing-card--featured pricing-card--mui-inner">
                      <div>
                        <h3>{plan.name}</h3>
                        <p>{plan.audience}</p>
                      </div>
                      <div className="pricing-card__price">
                        <strong>
                          {format(billing === "annual" ? plan.annualUsd : plan.monthlyUsd)}
                        </strong>
                        <span>
                          {billing === "annual" ? "/mo billed annually" : "/mo"}
                        </span>
                      </div>
                      <p className="pricing-card__renewal">
                        {billing === "annual" ? plan.renewalAnnual : plan.renewalMonthly}
                      </p>
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
                  </FeaturedPricingWrapper>
                ) : (
                  <div
                    key={plan.name}
                    className="pricing-card"
                  >
                    <div>
                      <h3>{plan.name}</h3>
                      <p>{plan.audience}</p>
                    </div>
                    <div className="pricing-card__price">
                      <strong>
                        {format(billing === "annual" ? plan.annualUsd : plan.monthlyUsd)}
                      </strong>
                      <span>
                        {billing === "annual" ? "/mo billed annually" : "/mo"}
                      </span>
                    </div>
                    <p className="pricing-card__renewal">
                      {billing === "annual" ? plan.renewalAnnual : plan.renewalMonthly}
                    </p>
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

      {/* ── 3. Features grid ────────────────────────────────── */}
      <section className="homepage-section homepage-section--tinted">
        <div className="shell">
          <SectionHeader
            eyebrow="What's included"
            title="Everything included. Nothing held back."
            centered
          />
          <div className="wh-features-grid">
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <Tilt key={feat.title}>
                    <TiltContent>
                      <div
                        className="wh-feature-card"
                      >
                        <div
                          className="wh-feature-icon"
                          style={{ background: feat.colour, color: feat.iconColour }}
                        >
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

      {/* ── 4. How it works ─────────────────────────────────── */}
      <section className="homepage-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Getting started"
            title="Live in three steps."
            centered
          />
          <div className="steps-grid">
            <Slides inView inViewOnce direction="up" holdDelay={100}>
              {howItWorks.map((step) => (
                <div key={step.number} className="step-card">
                  <div className="step-card__number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── 5. Competitor comparison ────────────────────────── */}
      <section className="homepage-section homepage-section--tinted">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="How we compare"
              title="See how we stack up."
              centered
            />
          </Fade>
          <div className="wh-table-scroll-wrap">
            <p className="wh-table-scroll-hint">&#8592; Swipe to compare &#8594;</p>
            <div className="wh-table-inner">
              <table className="wh-comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="wh-col-onenet">OneNet Servers</th>
                    <th scope="col">Popular UK Host</th>
                    <th scope="col">Budget NG Host</th>
                    <th scope="col">Global Budget Host</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <td>{row.feature}</td>
                      <td className="wh-col-onenet">
                        <CheckCell value={row.onenet} />
                      </td>
                      <td>
                        <CheckCell value={row.ukHost} />
                      </td>
                      <td>
                        <CheckCell value={row.ngHost} />
                      </td>
                      <td>
                        <CheckCell value={row.globalHost} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="wh-table-note">
            * Introductory rate. Renewal price may differ significantly.
          </p>
        </div>
      </section>

      {/* ── 6. Testimonials ─────────────────────────────────── */}
      <section className="homepage-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Customer stories"
            title="Real results from real customers."
            centered
          />
          <div className="wh-testimonials-grid">
            <Slides inView inViewOnce direction="up" holdDelay={100}>
              {testimonials.map((t) => (
                <div key={t.name} className="wh-testimonial-card">
                  <div className="wh-stars" aria-label="5 out of 5 stars" role="img">★★★★★</div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <footer>
                    <strong>{t.name}</strong>
                    <span>{t.role} · {t.location}</span>
                  </footer>
                </div>
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ──────────────────────────────────────────── */}
      <section className="homepage-section homepage-section--tinted">
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
                    <span className="wh-faq-chevron" aria-hidden="true">
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

      {/* ── 8. Bottom CTA ───────────────────────────────────── */}
      <section className="homepage-section wh-cta-section">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="wh-cta-box">
              <h2>Start hosting today. Risk free.</h2>
              <p>30-day money-back guarantee. No questions asked.</p>
              <a
                href="/cart.php?a=add&pid=261&billingcycle=annually"
                className="wh-btn-primary"
              >
                Get started free <ArrowRight size={16} />
              </a>
              <div className="hero-reassurance">
                <span>30-day money-back</span>
                <span>Free domain included</span>
                <span>Free migration</span>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </main>
  );
}
