"use client";

import { DomainSearch } from "@/components/primitives/DomainSearch";
import {
  AvatarGroup,
  AvatarGroupItem,
} from "@/components/animate-ui/animate/avatar-group";
import { useCurrency } from "@/lib/currency-context";

/* Placeholder avatar colours — replace src props with real images when available */
const AVATARS = [
  { fallback: "A", gradient: "linear-gradient(135deg,#c7d2fe,#818cf8)" },
  { fallback: "O", gradient: "linear-gradient(135deg,#fde68a,#f59e0b)" },
  { fallback: "C", gradient: "linear-gradient(135deg,#bbf7d0,#10b981)" },
  { fallback: "E", gradient: "linear-gradient(135deg,#fecaca,#ef4444)" },
  { fallback: "M", gradient: "linear-gradient(135deg,#e0e7ff,#6366f1)" },
];

const EXT_HINTS = [
  { ext: ".ng",     usd: 23 },
  { ext: ".com",    usd: 15 },
  { ext: ".co.uk",  usd: 8  },
  { ext: ".com.ng", usd: 11 },
];

export function Hero() {
  const { format } = useCurrency();

  return (
    <section className="hero-home" aria-label="Get your business online">
      <div className="hero-inner shell">
        <h1 className="hero-h1">
          Your business deserves<br />
          to be <span className="hero-h1__accent">online.</span>
        </h1>

        <p className="hero-sub">
          Don&apos;t let your tech setup slow you down. We get your business
          on the internet in under 10&nbsp;minutes. No developer, no stress.
        </p>

        <div className="hero-search-wrap">
          <DomainSearch />
          <div className="hero-ext-hints" aria-label="Popular domain extensions">
            {EXT_HINTS.map((h) => (
              <span key={h.ext} className="hero-ext-hint">
                <strong>{h.ext}</strong> from {format(h.usd, 0)}/yr
              </span>
            ))}
          </div>
        </div>

        <div className="hero-reassurance">
          <span>No credit card required</span>
          <span>Cancel anytime</span>
          <span>Free migration included</span>
        </div>

        <div className="hero-proof">
          <AvatarGroup size={36} overlap={10} aria-label="Customer avatars">
            {AVATARS.map((av) => (
              <AvatarGroupItem
                key={av.fallback}
                fallback={av.fallback}
                gradient={av.gradient}
              />
            ))}
          </AvatarGroup>
          <p>
            <span aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" aria-hidden="true" style={{ display: "inline" }}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </span>
            {" "}Join 500+ businesses already live with OneNet Servers
          </p>
        </div>
      </div>
    </section>
  );
}
