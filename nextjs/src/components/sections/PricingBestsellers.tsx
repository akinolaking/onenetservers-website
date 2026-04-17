"use client";

import Link from "next/link";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";

/* ── Feature bullets ─────────────────────────────────────────────── */
function FeatureDot() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" style={{ flexShrink: 0, marginTop: 5 }}>
      <rect width="8" height="8" rx="2" fill="currentColor" />
    </svg>
  );
}

/* ── Business Email — CSS email client mockup ────────────────────── */
function EmailVisual() {
  return (
    <div className="feat-visual feat-visual--email">
      {/* Floating shield badge */}
      <div className="feat-email-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
        <span>name@yourcompany.com</span>
      </div>
      {/* Email client shell */}
      <div className="feat-email-client">
        <div className="feat-email-sidebar">
          <div className="feat-email-sidebar__head">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
            Mail
          </div>
          <div className="feat-email-newbtn">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            New message
          </div>
          <div className="feat-email-nav">
            <div className="feat-email-navitem feat-email-navitem--active">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z"/></svg>
              Inbox
            </div>
            <div className="feat-email-navitem">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Starred
            </div>
            <div className="feat-email-navitem">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Updates
            </div>
          </div>
        </div>
        <div className="feat-email-main">
          <div className="feat-email-main__head">Inbox</div>
          <div className="feat-email-tabs">
            <span className="feat-email-tab feat-email-tab--active">All mail</span>
            <span className="feat-email-tab">Unread</span>
            <span className="feat-email-tab">Read</span>
            <span className="feat-email-tab">Promotions</span>
          </div>
          <div className="feat-email-rows">
            {[80, 60, 90].map((w, i) => (
              <div key={i} className="feat-email-row">
                <div className="feat-email-row__bar" style={{ width: `${w}%` }} />
                <div className="feat-email-row__bar feat-email-row__bar--sm" style={{ width: `${w - 25}%` }} />
              </div>
            ))}
          </div>
        </div>
        {/* Floating mail pill */}
        <div className="feat-email-fab">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
        </div>
      </div>
    </div>
  );
}

/* ── Web Hosting — performance dashboard mockup ──────────────────── */
function HostingVisual() {
  return (
    <div className="feat-visual feat-visual--hosting">
      <div className="feat-hosting-panel">
        {/* Header row */}
        <div className="feat-hosting-header">
          <div className="feat-hosting-dots">
            <span style={{ background: "#ef4444" }} />
            <span style={{ background: "#f59e0b" }} />
            <span style={{ background: "#10b981" }} />
          </div>
          <span className="feat-hosting-url">onenetservers.net</span>
        </div>
        {/* Stats row */}
        <div className="feat-hosting-stats">
          <div className="feat-hosting-stat">
            <div className="feat-hosting-stat__val">99.9<span>%</span></div>
            <div className="feat-hosting-stat__label">Uptime SLA</div>
          </div>
          <div className="feat-hosting-divider" />
          <div className="feat-hosting-stat">
            <div className="feat-hosting-stat__val">780<span>ms</span></div>
            <div className="feat-hosting-stat__label">Avg load time</div>
          </div>
          <div className="feat-hosting-divider" />
          <div className="feat-hosting-stat">
            <div className="feat-hosting-stat__val">A<span>+</span></div>
            <div className="feat-hosting-stat__label">SSL grade</div>
          </div>
        </div>
        {/* Sparkline bars */}
        <div className="feat-hosting-bars">
          {[55, 70, 60, 85, 75, 90, 80, 95, 88, 92, 85, 98].map((h, i) => (
            <div key={i} className="feat-hosting-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="feat-hosting-bar-label">Response time — last 30 days</div>
        {/* Badge row */}
        <div className="feat-hosting-badges">
          <span className="feat-hosting-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Free SSL
          </span>
          <span className="feat-hosting-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
            Free domain
          </span>
          <span className="feat-hosting-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            LiteSpeed
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Domain Registration — search result mockup ─────────────────── */
function DomainVisual() {
  const results = [
    { ext: ".ng",     price: "$23/yr",  available: true },
    { ext: ".com",    price: "$15/yr",  available: true },
    { ext: ".com.ng", price: "$11/yr",  available: true },
    { ext: ".co.uk",  price: "$8/yr",   available: false },
    { ext: ".shop",   price: "$4.99/yr",available: true },
    { ext: ".xyz",    price: "$3.42/yr",available: false },
  ];
  return (
    <div className="feat-visual feat-visual--domain">
      {/* NiRA badge */}
      <div className="feat-domain-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
        NiRA Accredited Registrar
      </div>
      {/* Search panel */}
      <div className="feat-domain-panel">
        {/* Search bar */}
        <div className="feat-domain-searchbar">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="feat-domain-query">yourbusiness</span>
          <span className="feat-domain-cursor" />
          <span className="feat-domain-search-btn">Search</span>
        </div>
        {/* Results */}
        <div className="feat-domain-results">
          {results.map((r) => (
            <div key={r.ext} className={`feat-domain-row${r.available ? " feat-domain-row--available" : " feat-domain-row--taken"}`}>
              <span className="feat-domain-ext">{r.ext}</span>
              <span className="feat-domain-price">{r.price}</span>
              <span className="feat-domain-status">
                {r.available ? (
                  <>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    Available
                  </>
                ) : "Taken"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Cloud VPS — terminal mockup ─────────────────────────────────── */
function VPSVisual() {
  const lines = [
    { prompt: true,  text: "ssh root@shuri.onenetservers.net" },
    { prompt: false, text: "Welcome to Ubuntu 24.04 LTS" },
    { prompt: false, text: "" },
    { prompt: true,  text: "docker ps" },
    { prompt: false, text: "CONTAINER ID   IMAGE       STATUS" },
    { prompt: false, text: "a1b2c3d4e5f6   n8n         Up 3 days" },
    { prompt: false, text: "9f8e7d6c5b4a   nextcloud   Up 3 days" },
    { prompt: true,  text: "htop" },
    { prompt: false, text: "CPU  ██████░░░░  62%   RAM  ████░░░░  3.2/8 GB" },
  ];
  return (
    <div className="feat-visual feat-visual--vps">
      <div className="feat-terminal">
        <div className="feat-terminal__bar">
          <span style={{ background: "#ef4444" }} />
          <span style={{ background: "#f59e0b" }} />
          <span style={{ background: "#10b981" }} />
          <span className="feat-terminal__title">root@shuri — ssh</span>
        </div>
        <div className="feat-terminal__body">
          {lines.map((l, i) => (
            <div key={i} className="feat-terminal__line">
              {l.prompt && <span className="feat-terminal__prompt">$&nbsp;</span>}
              <span className={l.prompt ? "feat-terminal__cmd" : "feat-terminal__out"}>
                {l.text}
              </span>
            </div>
          ))}
          <div className="feat-terminal__line">
            <span className="feat-terminal__prompt">$&nbsp;</span>
            <span className="feat-terminal__cursor" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Card data ───────────────────────────────────────────────────── */
const FEAT_CARDS = [
  {
    key:      "email",
    href:     "/email",
    label:    "Business Email",
    headline: "Inbox that means business.",
    features: [
      "100+ business email addresses",
      "No per-user fees, ever",
      "Webmail and mobile app",
      "Video calls built in",
      "Anti-spam and virus protection",
    ],
    visual: <EmailVisual />,
  },
  {
    key:      "hosting",
    href:     "/hosting/web",
    label:    "Web Hosting",
    headline: "Fast, secure, and always on.",
    features: [
      "LiteSpeed web server",
      "Free SSL on every plan",
      "Daily backups, 14-day retention",
      "Free domain included",
      "99.9% uptime SLA",
    ],
    visual: <HostingVisual />,
  },
  {
    key:      "vps",
    href:     "/hosting/vps",
    label:    "Cloud VPS",
    headline: "Root access. Zero limits.",
    features: [
      "Full root access via SSH",
      "Docker, n8n, Nextcloud ready",
      "9 global data centre regions",
      "NVMe SSD storage",
      "Scalable RAM and vCPU",
    ],
    visual: <VPSVisual />,
  },
  {
    key:      "domain",
    href:     "/domains",
    label:    "Domain Registration",
    headline: "Own the name that matters.",
    features: [
      "500+ TLD extensions available",
      "NiRA-accredited .ng registrar",
      "Free WHOIS privacy included",
      "Instant activation on most TLDs",
      "Easy transfer, no unlock needed",
    ],
    visual: <DomainVisual />,
  },
] as const;

/* ── Section ─────────────────────────────────────────────────────── */
export function PricingBestsellers() {
  return (
    <section className="feat-section homepage-section" id="products" aria-label="Products">
      <div className="shell">
        <Fade inView inViewOnce>
          <div className="section-header section-header--centered">
            <div className="eyebrow eyebrow--centered">What we offer</div>
            <h2>Everything your business needs online.</h2>
            <p className="lead">
              Hosting, domains, email, and infrastructure. Built for Nigeria, the UK, and everywhere in between.
            </p>
          </div>
        </Fade>

        <div className="feat-grid">
          {FEAT_CARDS.map((card, i) => (
            <Fade key={card.key} inView inViewOnce delay={i * 100}>
              <Link href={card.href} className="feat-spotlight-card">
                {/* Label badge */}
                <div className="feat-spotlight-badge">{card.label}</div>

                {/* Text block */}
                <h3 className="feat-spotlight-headline">{card.headline}</h3>
                <ul className="feat-spotlight-features">
                  {card.features.map((f) => (
                    <li key={f}>
                      <FeatureDot />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Visual */}
                {card.visual}
              </Link>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
