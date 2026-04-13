"use client";

import Link from "next/link";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";

/* ── Mini UI mockups — CSS-drawn product snapshots ─────────────── */

const HostingVisual = () => (
  <div className="feat-visual feat-visual--hosting">
    {/* Browser chrome */}
    <div className="fv-browser">
      <div className="fv-browser__bar">
        <span className="fv-dot" style={{ background: "#ff5f57" }} />
        <span className="fv-dot" style={{ background: "#febc2e" }} />
        <span className="fv-dot" style={{ background: "#28c840" }} />
        <div className="fv-url-bar">onenetservers.net/cpanel</div>
      </div>
      <div className="fv-browser__body">
        {/* Stat row */}
        <div className="fv-row">
          <span className="fv-stat-label">Uptime</span>
          <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: "99.9%", background: "#22c55e" }} /></div>
          <span className="fv-stat-val" style={{ color: "#22c55e" }}>99.9%</span>
        </div>
        <div className="fv-row">
          <span className="fv-stat-label">Load time</span>
          <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: "18%", background: "#4343F0" }} /></div>
          <span className="fv-stat-val" style={{ color: "#4343F0" }}>0.4s</span>
        </div>
        <div className="fv-row">
          <span className="fv-stat-label">SSL</span>
          <div className="fv-bar-track"><div className="fv-bar-fill" style={{ width: "100%", background: "#22c55e" }} /></div>
          <span className="fv-stat-val" style={{ color: "#22c55e" }}>Active</span>
        </div>
        {/* File tree */}
        <div className="fv-divider" />
        <div className="fv-file-row"><span className="fv-file-icon">📁</span> public_html</div>
        <div className="fv-file-row fv-file-row--indent"><span className="fv-file-icon">📄</span> index.html</div>
        <div className="fv-file-row fv-file-row--indent"><span className="fv-file-icon">📁</span> wp-content</div>
        <div className="fv-badge" style={{ background: "#4343F0" }}>LiteSpeed · CloudLinux</div>
      </div>
    </div>
  </div>
);

const DomainVisual = () => (
  <div className="feat-visual feat-visual--domain">
    <div className="fv-domain-search">
      <div className="fv-domain-bar">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <span>mybusiness</span>
        <span className="fv-domain-tld">.com.ng</span>
      </div>
      <div className="fv-domain-result fv-domain-result--available">
        <span>mybusiness.com.ng</span>
        <span className="fv-available-badge">Available</span>
      </div>
      <div className="fv-domain-result">
        <span>mybusiness.ng</span>
        <span className="fv-taken-badge">Taken</span>
      </div>
      <div className="fv-domain-result fv-domain-result--available">
        <span>mybusiness.co.uk</span>
        <span className="fv-available-badge">Available</span>
      </div>
    </div>
    <div className="fv-tld-grid">
      {[".com.ng", ".ng", ".co.uk", ".com", ".net", ".org"].map(t => (
        <span key={t} className="fv-tld-chip">{t}</span>
      ))}
    </div>
  </div>
);

const EmailVisual = () => (
  <div className="feat-visual feat-visual--email">
    <div className="fv-inbox">
      <div className="fv-inbox__header">
        <span className="fv-inbox__title">Inbox</span>
        <span className="fv-inbox__badge">3</span>
      </div>
      {[
        { from: "Tunde A.", subj: "Partnership proposal", time: "9:42 am", unread: true },
        { from: "Sarah M.", subj: "Invoice #1042 approved", time: "Yesterday", unread: true },
        { from: "Team", subj: "Weekly report attached", time: "Mon", unread: false },
      ].map((m, i) => (
        <div key={i} className={`fv-msg${m.unread ? " fv-msg--unread" : ""}`}>
          <div className="fv-msg__avatar">{m.from[0]}</div>
          <div className="fv-msg__body">
            <div className="fv-msg__from">{m.from}</div>
            <div className="fv-msg__subj">{m.subj}</div>
          </div>
          <div className="fv-msg__time">{m.time}</div>
        </div>
      ))}
      <div className="fv-compose">
        <div className="fv-compose__btn">Compose</div>
        <span>you@yourbusiness.com</span>
      </div>
    </div>
  </div>
);

const VpsVisual = () => (
  <div className="feat-visual feat-visual--vps">
    <div className="fv-terminal">
      <div className="fv-terminal__bar">
        <span className="fv-dot" style={{ background: "#ff5f57" }} />
        <span className="fv-dot" style={{ background: "#febc2e" }} />
        <span className="fv-dot" style={{ background: "#28c840" }} />
        <span className="fv-terminal__title">root@shuri-vps-01</span>
      </div>
      <div className="fv-terminal__body">
        <div className="fv-line"><span className="fv-prompt">$</span> docker ps</div>
        <div className="fv-line fv-line--dim">CONTAINER ID   IMAGE        STATUS</div>
        <div className="fv-line"><span className="fv-green">●</span> n8n           Up 14 days</div>
        <div className="fv-line"><span className="fv-green">●</span> nextcloud     Up 14 days</div>
        <div className="fv-line"><span className="fv-green">●</span> nginx         Up 14 days</div>
        <div className="fv-line fv-line--gap"><span className="fv-prompt">$</span> uptime</div>
        <div className="fv-line fv-line--dim">up 14 days, 4 GB RAM free</div>
        <div className="fv-line"><span className="fv-prompt">$</span> <span className="fv-cursor">█</span></div>
      </div>
    </div>
    <div className="fv-vps-stats">
      <div className="fv-vps-stat"><span>CPU</span><span className="fv-vps-val">12%</span></div>
      <div className="fv-vps-stat"><span>RAM</span><span className="fv-vps-val">4/8 GB</span></div>
      <div className="fv-vps-stat"><span>Disk</span><span className="fv-vps-val">40/160 GB</span></div>
    </div>
  </div>
);

/* ── Card data ───────────────────────────────────────────────────── */
const CARDS = [
  {
    key:         "hosting",
    href:        "/hosting/web",
    bg:          "linear-gradient(145deg,#0f1729 0%,#1a2346 100%)",
    accentColor: "#4343F0",
    label:       "Web Hosting",
    headline:    "Your site. Fast, secure, live.",
    description: "LiteSpeed + CloudLinux isolation. Free SSL, daily backups, and a free domain included.",
    visual:      <HostingVisual />,
  },
  {
    key:         "domain",
    href:        "/domains",
    bg:          "linear-gradient(145deg,#0a1f12 0%,#133220 100%)",
    accentColor: "#22c55e",
    label:       "Domain Registration",
    headline:    "Own the name that matters.",
    description: "NiRA-accredited .ng registrar. Search 500+ TLDs with instant WHOIS privacy.",
    visual:      <DomainVisual />,
  },
  {
    key:         "email",
    href:        "/email",
    bg:          "linear-gradient(145deg,#1a0f2e 0%,#2d1a4a 100%)",
    accentColor: "#a855f7",
    label:       "Business Email",
    headline:    "Inbox that means business.",
    description: "Up to 100 addresses, no per-user fees. Webmail, mobile app, video calls built in.",
    visual:      <EmailVisual />,
  },
  {
    key:         "vps",
    href:        "/hosting/vps",
    bg:          "linear-gradient(145deg,#0f1a1a 0%,#0f2a2a 100%)",
    accentColor: "#06b6d4",
    label:       "Cloud VPS",
    headline:    "Root access. Zero limits.",
    description: "8 GB RAM · 4 vCPU · unlimited bandwidth. Docker, n8n, Nextcloud — one click away.",
    visual:      <VpsVisual />,
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
              Hosting, domains, email, and infrastructure — built for Nigeria, the UK, and everywhere in between.
            </p>
          </div>
        </Fade>

        <div className="feat-grid">
          {CARDS.map((card, i) => (
            <Fade key={card.key} inView inViewOnce delay={i * 80}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: card.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                  height: "100%",
                  transition: "transform 0.22s ease, border-color 0.22s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(255,255,255,0.16)",
                  },
                }}
              >
                <CardActionArea
                  component={Link}
                  href={card.href}
                  sx={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "stretch" }}
                >
                  {/* Visual area */}
                  <div className="feat-card__visual">
                    {card.visual}
                  </div>

                  {/* Text area */}
                  <div className="feat-card__body">
                    <span className="feat-card__label" style={{ color: card.accentColor }}>
                      {card.label}
                    </span>
                    <h3 className="feat-card__headline">{card.headline}</h3>
                    <p className="feat-card__desc">{card.description}</p>
                    <span className="feat-card__cta" style={{ color: card.accentColor }}>
                      Explore
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </CardActionArea>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
