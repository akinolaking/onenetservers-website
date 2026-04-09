"use client";

import { useState } from "react";
import { ArrowRight, Check, Shield, Globe, Zap, Award, Building2, Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { DomainSearch } from "@/components/primitives/DomainSearch";

const ngExtensions = [
  { ext: ".ng",       usd: 23.40, badge: "Premium", description: "Top-level .ng identity" },
  { ext: ".com.ng",   usd: 11.25, badge: "Popular",  description: "Commercial businesses" },
  { ext: ".edu.ng",   usd: 14.00, badge: "",         description: "Educational institutions" },
  { ext: ".gov.ng",   usd: 14.00, badge: "",         description: "Government bodies only" },
  { ext: ".org.ng",   usd: 11.25, badge: "",         description: "Non-profit organisations" },
  { ext: ".net.ng",   usd: 11.25, badge: "",         description: "Network operators" },
  { ext: ".name.ng",  usd: 10.00, badge: "Lowest",   description: "Personal & creative names" },
];

const whyNg = [
  {
    icon: Award,
    title: "NiRA direct registration",
    description: "We are a NiRA-accredited registrar. Every .ng and .com.ng domain is registered directly — no middleman, faster activation, lower cost.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Shield,
    title: "WHOIS privacy included",
    description: "Your personal information stays private by default. No extra charge. NiRA regulations require registrant data to be accurate — we protect it from public view.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Globe,
    title: "Local credibility, global reach",
    description: "A .ng domain signals you are serious about Nigeria. It builds trust with local customers and shows your commitment to Africa's largest digital economy.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
  {
    icon: Zap,
    title: "Fast NiRA verification",
    description: "Our streamlined NiRA verification process gets your .ng domain live within 24–48 hours of submission. .com.ng typically activates faster.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Building2,
    title: "DNSSEC and auto-renew",
    description: "Cryptographic DNS protection enabled on all .ng domains. Enable auto-renew and we handle the rest — your domain never lapses.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Star,
    title: "NGN billing available",
    description: "Pay for .ng domains in Naira via Paystack. No conversion fees, no exchange rate surprises. Switch to GBP or USD any time.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
];

const faqs = [
  {
    q: "What is NiRA and why does it matter?",
    a: "NiRA (Nigeria Internet Registration Association) is the registry authority that manages all .ng domain extensions. Registrars must be accredited by NiRA to register .ng and .com.ng domains directly. OneNet Servers is NiRA-accredited — meaning we don't go through a third-party reseller, which results in faster registration and lower prices.",
  },
  {
    q: "How long does a .ng domain take to activate?",
    a: "Once you register and NiRA verifies your registrant details, your .ng domain activates within 24–48 hours. .com.ng, .name.ng, and .org.ng typically activate within a few hours. .edu.ng and .gov.ng require additional documentation and may take longer.",
  },
  {
    q: "What documents do I need to register a .ng domain?",
    a: "For .com.ng and .name.ng, no documents are required beyond accurate WHOIS registrant details. For .edu.ng you must provide proof of educational institution status. For .gov.ng, the domain is reserved for verified government entities only.",
  },
  {
    q: "Can I register a .ng domain if I am based outside Nigeria?",
    a: "Yes. NiRA allows international registrants to register .ng domains provided they have a legitimate interest in Nigeria. You do not need to be a Nigerian citizen or resident. Many diaspora businesses and international companies operating in Nigeria register .ng domains.",
  },
  {
    q: "What happens if my .ng domain lapses?",
    a: "If you miss renewal, your domain enters a grace period of 30 days during which you can renew at the standard rate. After that, it enters a redemption grace period (30 days) where recovery carries a fee. After redemption, the domain becomes available for anyone to register. We send renewal reminders well in advance.",
  },
  {
    q: "Is WHOIS privacy available for .ng domains?",
    a: "Yes. OneNet Servers includes WHOIS privacy at no extra charge on all .ng registrations we handle. NiRA requires registrant data to be accurate and on file with us — we simply keep it out of the public WHOIS database.",
  },
];

export default function DomainsNgPage() {
  const { format } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <head>
        <title>.NG Domains | NiRA Accredited Registrar | OneNet Servers</title>
        <meta name="description" content="Register .ng, .com.ng, and all .ng domain extensions directly with OneNet Servers — Nigeria's NiRA-accredited registrar. Fast activation, Naira billing, free WHOIS privacy." />
        <link rel="canonical" href="https://onenetservers.net/domains/ng" />
      </head>

      {/* ── Hero ── */}
      <section className="homepage-section wh-hero" aria-label=".NG domains">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="hero-trust-strip">
              <span>NiRA Accredited</span>
              <span>Direct Registration</span>
              <span>NGN Billing</span>
              <span>24–48hr Activation</span>
              <span>Free WHOIS Privacy</span>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.05}>
            <div className="section-header" style={{ maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
              <p className="section-eyebrow">.NG Domains</p>
              <h1 style={{ margin: 0 }}>Your Nigerian identity online.</h1>
              <p className="section-lead">
                OneNet Servers is a NiRA-accredited registrar. We register .ng and .com.ng
                directly — no reseller, faster activation, and the most competitive prices in the market.
              </p>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.1}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <DomainSearch />
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.15}>
            <div className="hero-reassurance" style={{ justifyContent: "center", marginTop: 20 }}>
              <span>NiRA direct — no middleman</span>
              <span>Free WHOIS privacy</span>
              <span>Pay in Naira via Paystack</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── .ng extension pricing ── */}
      <section className="homepage-section" id="extensions">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow=".NG extensions"
              title="Every .ng extension. One registrar."
              lead="We register all Nigerian country-code domains directly through NiRA. Pick the extension that fits your organisation."
            />
          </Fade>

          <div className="tld-grid" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={60}>
              {ngExtensions.map((row) => (
                <article key={row.ext} className={`tld-card${row.badge === "Popular" ? " tld-card--featured" : ""}`}>
                  {row.badge && (
                    <span className="tld-card__badge">{row.badge}</span>
                  )}
                  <span className="tld-card__ext">{row.ext}</span>
                  <span className="tld-card__desc">{row.description}</span>
                  <span className="tld-card__price">
                    {format(row.usd, 2)}<span className="tld-card__period">/yr</span>
                  </span>
                  <a
                    href={`/cart.php?a=add&domain=yourdomain${row.ext}&domainaction=register`}
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: "auto" }}
                  >
                    Register
                  </a>
                </article>
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── Why .ng ── */}
      <section className="homepage-section homepage-section--alt" id="why-ng">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="Why .NG"
              title="Why your Nigerian business needs a .ng domain."
            />
          </Fade>

          <div className="features-grid" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={70}>
              {whyNg.map((f) => {
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

      {/* ── Registration steps ── */}
      <section className="homepage-section" id="how-to-register">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="How to register"
              title="Get your .ng domain live in 24–48 hours."
            />
          </Fade>

          <div className="hiw-steps" style={{ marginTop: 56 }}>
            {[
              {
                n: "01",
                title: "Search and select",
                body: "Enter your preferred domain name in the search above. Select the .ng extension that fits — .ng for maximum prestige, .com.ng for most commercial businesses.",
              },
              {
                n: "02",
                title: "Complete checkout",
                body: "Pay by card, Paystack (NGN), or bank transfer. Choose your registration period (1–3 years). WHOIS privacy is included at no extra cost.",
              },
              {
                n: "03",
                title: "NiRA verification",
                body: "We submit your registration to NiRA with your registrant details. For most extensions, verification is automatic. Ensure your contact email is accurate — NiRA may send a confirmation.",
              },
              {
                n: "04",
                title: "Your domain goes live",
                body: "Once verified, your .ng domain is active and added to your OneNet Servers dashboard. Point it to your hosting, email, or any IP address — in minutes.",
              },
            ].map((step, i) => (
              <Fade key={step.n} inView inViewOnce delay={i * 0.08}>
                <div className="hiw-step">
                  <div className="hiw-step__n" aria-hidden="true">{step.n}</div>
                  <div>
                    <h3 className="hiw-step__title">{step.title}</h3>
                    <p className="hiw-step__body">{step.body}</p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="homepage-section homepage-section--dark" id="cta">
        <div className="shell" style={{ textAlign: "center" }}>
          <Shine>
            <div className="bottom-cta-card">
              <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>NiRA direct registration</p>
              <h2 style={{ color: "#fff", margin: "12px 0 16px" }}>Claim your .ng domain today.</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto 32px" }}>
                Your Nigerian identity online. Register directly through NiRA — no middleman,
                faster activation, and the best prices in the market.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/domains" className="btn btn-white">
                  See all domains <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
                <a href="/cart.php?a=add&domain=yourdomain.ng&domainaction=register" className="btn btn-primary">
                  Register .ng now
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
            <SectionHeader eyebrow="FAQs" title=".NG domain questions answered." />
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
