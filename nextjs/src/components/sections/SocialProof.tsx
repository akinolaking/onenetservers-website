"use client";

import { Slides } from "@/components/animate-ui/primitives/effects/slide";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { testimonials } from "@/lib/home-data";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* SVG category icons — no emoji (UI/UX Pro Max: no-emoji-icons) */
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  food: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  fashion: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
    </svg>
  ),
  services: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
};

const CATEGORY_META: Record<string, { color: string; bg: string; label: string }> = {
  food:     { color: "#d97706", bg: "#fef3c7", label: "Food & Catering" },
  fashion:  { color: "#7c3aed", bg: "#ede9fe", label: "Fashion & Retail" },
  services: { color: "#0369a1", bg: "#e0f2fe", label: "Professional Services" },
};

const AVATAR_GRADIENTS: Record<string, string> = {
  food:     "linear-gradient(135deg,#fbbf24,#f59e0b)",
  fashion:  "linear-gradient(135deg,#c4b5fd,#8b5cf6)",
  services: "linear-gradient(135deg,#7dd3fc,#0284c7)",
};

/* SVG star for ratings — no emoji */
function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="sp-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="homepage-section sp-section" id="stories">
      <div className="shell">
        <Fade inView inViewOnce>
          <div className="section-header section-header--centered">
            <div className="eyebrow eyebrow--centered">Real businesses. Real results.</div>
            <h2>From first idea to a website that converts.</h2>
            <p className="lead">
              Business owners across Nigeria and the UK — live online in minutes, not months.
            </p>
          </div>
        </Fade>

        <div className="sp-grid">
          <Slides inView inViewOnce direction="up" holdDelay={130}>
            {testimonials.map((t) => {
              const meta = CATEGORY_META[t.categoryKey] ?? { color: "var(--blue)", bg: "var(--blue-xl)", label: t.category };
              const grad = AVATAR_GRADIENTS[t.categoryKey] ?? "linear-gradient(135deg,var(--blue-xl),var(--blue))";
              const icon = CATEGORY_ICONS[t.categoryKey];
              return (
                <Shine key={t.name} enableOnHover color={meta.color} opacity={0.07}>
                  <article className="sp-card">
                    {/* category + business name */}
                    <header className="sp-card__header">
                      <span
                        className="sp-card__cat-badge"
                        style={{ background: meta.bg, color: meta.color }}
                      >
                        {icon}
                        {t.category}
                      </span>
                      <h3 className="sp-card__business">{t.business}</h3>
                    </header>

                    {/* story context */}
                    <p className="sp-card__story">{t.story}</p>

                    {/* pull quote */}
                    <blockquote className="sp-card__quote">
                      <span className="sp-card__quote-glyph" aria-hidden="true">&ldquo;</span>
                      <span>{t.quote}</span>
                    </blockquote>

                    {/* footer */}
                    <footer className="sp-card__footer">
                      <div
                        className="sp-card__avatar"
                        style={{ background: grad }}
                        aria-hidden="true"
                      >
                        {getInitials(t.name)}
                      </div>
                      <div className="sp-card__author">
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                      <div className="sp-card__launch-badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {t.time}
                      </div>
                    </footer>

                    <StarRating />
                  </article>
                </Shine>
              );
            })}
          </Slides>
        </div>
      </div>
    </section>
  );
}
