"use client";

import { useState } from "react";
import { ArrowRight, Check, Globe, Shield, Lock, RefreshCw, Clock, AlertTriangle } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCurrency } from "@/lib/currency-context";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { DomainSearch } from "@/components/primitives/DomainSearch";

const features = [
  {
    icon: Shield,
    title: "Free WHOIS privacy",
    description: "Your personal details stay private on every transferred domain. No extra charge, ever.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Lock,
    title: "DNSSEC carried over",
    description: "We preserve your DNSSEC records during transfer so your domain's cryptographic security is never interrupted.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: Clock,
    title: "Transfer in 5–7 days",
    description: "Most generic domains complete in 5–7 days. .ng and ccTLDs may vary. We keep you updated at every step.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
  {
    icon: RefreshCw,
    title: "Free year added",
    description: "Every transfer adds one year to your expiry date at no extra cost. You never lose renewal time.",
    bg: "var(--blue-xl)",
    color: "var(--blue)",
  },
  {
    icon: Globe,
    title: "30+ TLD extensions",
    description: "Transfer .com, .co.uk, .ng, .com.ng, .net, .org and 30+ other extensions into one dashboard.",
    bg: "rgb(16 185 129 / 12%)",
    color: "var(--green)",
  },
  {
    icon: AlertTriangle,
    title: "Pre-transfer check",
    description: "We check your domain's lock status and eligibility before you pay. No surprises mid-transfer.",
    bg: "rgb(245 158 11 / 10%)",
    color: "var(--amber)",
  },
];

const steps = [
  {
    n: "01",
    title: "Unlock your domain",
    body: "Log into your current registrar and disable the transfer lock (sometimes called \"registrar lock\" or \"EPP lock\"). Get your authorisation (EPP) code — you'll need it in step 3.",
  },
  {
    n: "02",
    title: "Search for your domain",
    body: "Enter your domain in the transfer search below. We check it's eligible and show you the transfer price plus the one free year added to your expiry.",
  },
  {
    n: "03",
    title: "Enter your auth code",
    body: "Paste your EPP authorisation code during checkout. We submit the transfer request to the registry. You'll receive an email from your old registrar to approve — approve it promptly.",
  },
  {
    n: "04",
    title: "Go live with us",
    body: "Once approved, the transfer completes in 5–7 days. Your DNS, email, and settings move across untouched. We notify you when it's done.",
  },
];

const transferPrices = [
  { ext: ".com",    usd: 15.00 },
  { ext: ".co.uk",  usd: 8.12  },
  { ext: ".uk",     usd: 8.12  },
  { ext: ".net",    usd: 16.50 },
  { ext: ".org",    usd: 14.20 },
  { ext: ".ng",     usd: 23.40 },
  { ext: ".com.ng", usd: 11.25 },
  { ext: ".dev",    usd: 19.04 },
  { ext: ".io",     usd: 44.44 },
  { ext: ".tech",   usd: 10.79 },
];

const faqs = [
  {
    q: "What is an EPP / authorisation code?",
    a: "An EPP code (also called an auth code, authorisation code, or transfer secret) is a unique string your current registrar issues for each domain. It proves you authorise the transfer. Log into your current registrar's control panel and look for 'Transfer lock' or 'Get authorisation code'.",
  },
  {
    q: "Will my website or email go down during a transfer?",
    a: "No. DNS records are not changed during a transfer unless you explicitly update them. Your site and email continue to work throughout the process. The transfer only moves ownership — not your hosting.",
  },
  {
    q: "Can I transfer a .ng or .com.ng domain?",
    a: "Yes. We are a NiRA-accredited registrar, so we accept direct transfers of .ng and .com.ng domains. The process requires NiRA verification and typically takes up to 5 business days after approval.",
  },
  {
    q: "Does the transfer renew my domain?",
    a: "Yes. Every successful transfer adds one year to your domain's current expiry date at no extra cost. If your domain was expiring in 6 months, it will expire in 18 months after transfer.",
  },
  {
    q: "My domain was recently registered. Can I still transfer?",
    a: "Most registries require a 60-day waiting period after initial registration or a previous transfer before allowing another transfer. If your domain is less than 60 days old, you will need to wait before transferring.",
  },
  {
    q: "What if my current registrar won't release the domain?",
    a: "If your registrar refuses to issue an auth code or release the domain, contact us. We can advise on escalation paths including ICANN's Transfer Dispute Resolution Policy (TDRP). You always have the right to transfer your domain.",
  },
];

export default function DomainsTransferPage() {
  const { format } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <head>
        <title>Domain Transfer | OneNet Servers</title>
        <meta name="description" content="Transfer your domain to OneNet Servers in 5–7 days. Free WHOIS privacy, one free year added, and NiRA accreditation for .ng domains." />
        <link rel="canonical" href="https://onenetservers.net/domains/transfer" />
      </head>

      {/* ── Hero ── */}
      <section className="homepage-section wh-hero" aria-label="Domain transfer">
        <div className="shell">
          <Fade inView inViewOnce>
            <div className="hero-trust-strip">
              <span>NiRA Accredited</span>
              <span>Free WHOIS Privacy</span>
              <span>+1 Year Free</span>
              <span>DNSSEC Preserved</span>
              <span>30-Day MBG</span>
            </div>
          </Fade>

          <Fade inView inViewOnce delay={0.05}>
            <div className="section-header" style={{ maxWidth: 640, margin: "0 auto 40px", textAlign: "center" }}>
              <p className="section-eyebrow">Domain Transfer</p>
              <h1 style={{ margin: 0 }}>Move your domain. Keep everything else.</h1>
              <p className="section-lead">
                Transfer to OneNet Servers in 5–7 days. Your DNS, email, and settings
                stay exactly as they are — plus you get a free year added on every transfer.
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
              <span>No credit card required</span>
              <span>Transfer lock check included</span>
              <span>30-day money-back guarantee</span>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="homepage-section" id="how-it-works">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="How it works"
              title="Four steps to bring your domain home."
              lead="Most transfers complete in 5–7 days. We handle the technical side — you just approve one email."
            />
          </Fade>

          <div className="hiw-steps" style={{ marginTop: 56 }}>
            {steps.map((step, i) => (
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

      {/* ── Transfer pricing ── */}
      <section className="homepage-section homepage-section--alt" id="pricing">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="Transfer prices"
              title="Transparent pricing. One year free on every transfer."
            />
          </Fade>

          <div className="tld-grid" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={60}>
              {transferPrices.map((row) => (
                <article key={row.ext} className="tld-card">
                  <span className="tld-card__ext">{row.ext}</span>
                  <span className="tld-card__price">{format(row.usd, 2)}<span className="tld-card__period">/yr</span></span>
                  <span className="tld-card__note">+1 yr free on transfer</span>
                  <a
                    href={`/cart.php?a=add&domain=yourdomain${row.ext}&domainaction=transfer`}
                    className="btn btn-ghost btn-sm"
                    style={{ marginTop: "auto" }}
                  >
                    Transfer
                  </a>
                </article>
              ))}
            </Slides>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="homepage-section" id="features">
        <div className="shell">
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="What's included"
              title="Everything you need, included by default."
            />
          </Fade>

          <div className="features-grid" style={{ marginTop: 48 }}>
            <Slides inView inViewOnce direction="up" holdDelay={70}>
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
          <Shine inView inViewOnce>
            <div className="bottom-cta-card">
              <p className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Transfer today</p>
              <h2 style={{ color: "#fff", margin: "12px 0 16px" }}>Your domain. Our infrastructure.</h2>
              <p style={{ color: "rgba(255,255,255,0.72)", maxWidth: 480, margin: "0 auto 32px" }}>
                Start your transfer now. We add a free year and protect your domain with WHOIS privacy
                from day one.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/domains" className="btn btn-white">
                  Register instead <ArrowRight size={14} style={{ marginLeft: 4 }} />
                </a>
                <a href="/cart.php?a=add&domainaction=transfer" className="btn btn-primary">
                  Start transfer
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
            <SectionHeader eyebrow="FAQs" title="Questions about domain transfers." />
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

      {/* ── Check mark list ── */}
      <section className="homepage-section homepage-section--alt" id="checklist">
        <div className="shell" style={{ maxWidth: 640 }}>
          <Fade inView inViewOnce>
            <SectionHeader
              eyebrow="Before you transfer"
              title="Transfer checklist."
              lead="Run through this before you start to make sure your transfer completes first time."
            />
          </Fade>
          <ul className="check-list" style={{ marginTop: 40 }}>
            {[
              "Domain is more than 60 days old",
              "Transfer lock (registrar lock) is disabled at your current registrar",
              "Your WHOIS contact email is up to date and accessible",
              "You have your EPP / authorisation code ready",
              "Domain is not in a 'redemption grace period' or dispute",
              "For .ng/.com.ng: NiRA registrant details are correct",
            ].map((item) => (
              <li key={item} className="check-list__item">
                <Check size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
