"use client";

import Link from "next/link";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { useCurrency } from "@/lib/currency-context";
import { CartButton } from "@/components/shared/CartButton";

interface BestsellerCard {
  key: string;
  label: string;
  headline: string;
  description: string;
  priceUsd: number;
  period: string;
  features: string[];
  href: string;
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
}

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CARDS: BestsellerCard[] = [
  {
    key: "hosting",
    label: "Web Hosting",
    headline: "Web Hosting Premium",
    description: "CloudLinux isolation, ImmunifyAV+, and LiteSpeed. Built for serious sites.",
    priceUsd: 18.20,
    period: "/mo",
    features: [
      "Unlimited websites",
      "Free domain included",
      "ImmunifyAV+ malware scanning",
      "LiteSpeed + CloudLinux",
      "Free SSL, daily backups",
    ],
    href: "/cart.php?a=add&pid=262&billingcycle=monthly",
    cta: "Start hosting",
    popular: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    key: "domain",
    label: "Domain",
    headline: ".COM.NG Domain",
    description: "NiRA-accredited direct registration. WHOIS privacy and DNSSEC included.",
    priceUsd: 11.25,
    period: "/yr",
    features: [
      "NiRA direct registration",
      "Free WHOIS privacy",
      "DNSSEC protection",
      "Instant activation",
      "Auto-renew available",
    ],
    href: "/domains",
    cta: "Register domain",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    key: "email",
    label: "Business Email",
    headline: "Business Email",
    description: "5–100 addresses on one flat plan. Video calls, team chat, shared storage.",
    priceUsd: 2.33,
    period: "/mo",
    features: [
      "Up to 100 email addresses",
      "CrossBox webmail + mobile app",
      "Video calls built in",
      "Team chat and file sharing",
      "No per-user fees",
    ],
    href: "/cart.php?a=add&pid=263&billingcycle=monthly",
    cta: "Get email",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    key: "vps",
    label: "Cloud VPS",
    headline: "Cloud VPS Starter",
    description: "Root access, unlimited bandwidth, one-click Docker, n8n, and Nextcloud.",
    priceUsd: 12.42,
    period: "/mo",
    features: [
      "8GB RAM · 4 vCPU",
      "Unlimited bandwidth",
      "One-click app deploy",
      "Docker and Wireguard ready",
      "Full root access",
    ],
    href: "/cart.php?a=add&pid=264&billingcycle=monthly",
    cta: "Deploy VPS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

function PriceDisplay({ usd }: { usd: number }) {
  const { format } = useCurrency();
  return <>{format(usd)}</>;
}

function CardInner({ card }: { card: BestsellerCard }) {
  /* Shared card body used for non-popular cards */
  const cardBody = (
    <>
      <div className="pb-card__header">
        <div className="pb-card__icon" aria-hidden="true">
          {card.icon}
        </div>
        <span className="pb-card__label">{card.label}</span>
      </div>
      <h3 className="pb-card__headline">{card.headline}</h3>
      <p className="pb-card__desc">{card.description}</p>
      <div className="pb-card__price">
        <span className="pb-card__amount">
          <PriceDisplay usd={card.priceUsd} />
        </span>
        <span className="pb-card__period">{card.period}</span>
      </div>
      <ul className="pb-card__features" aria-label={`${card.headline} features`}>
        {card.features.map((f) => (
          <li key={f} className="pb-card__feature">
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>
      {card.href.startsWith("/cart.php") ? (
        <CartButton
          href={card.href}
          label={card.cta}
          variant={card.popular ? "primary" : "ghost"}
          className={`pb-card__cta${card.popular ? " pb-card__cta--solid" : " pb-card__cta--ghost"}`}
        />
      ) : (
        <Link
          href={card.href}
          className={`pb-card__cta${card.popular ? " pb-card__cta--solid" : " pb-card__cta--ghost"}`}
        >
          {card.cta}
        </Link>
      )}
    </>
  );

  if (card.popular) {
    return (
      /* MUI Card is the shadow/border/hover owner — outside Shine's overflow:hidden.
         This fixes both the clipped badge and the rectangular hover shadow. */
      <Card
        elevation={0}
        sx={{
          position: 'relative',
          borderRadius: '16px',
          border: '1px solid var(--blue)',
          boxShadow: '0 0 0 1px var(--blue), var(--sh-sm)',
          transition: 'box-shadow 0.22s ease, transform 0.22s ease',
          '&:hover': {
            boxShadow: '0 0 0 1px var(--blue), var(--sh-lg)',
            transform: 'translateY(-2px)',
          },
          height: '100%',
          bgcolor: 'transparent',
          overflow: 'visible',
        }}
      >
        {/* Chip badge: outside Shine — never clipped by overflow:hidden */}
        <Chip
          label="Most Popular"
          aria-label="Most popular plan"
          size="small"
          sx={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            bgcolor: 'var(--blue)',
            color: '#fff',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.04em',
            borderRadius: '99px',
            height: '24px',
            '& .MuiChip-label': { px: '12px' },
          }}
        />
        <Shine enableOnHover color="#4343f0" opacity={0.06} duration={1.6} style={{ borderRadius: '16px', height: '100%' }}>
          {/* pb-card--mui-inner resets duplicate border/shadow so MUI Card is the sole visual container */}
          <article className="pb-card pb-card--popular pb-card--mui-inner">
            {cardBody}
          </article>
        </Shine>
      </Card>
    );
  }
  return <article className="pb-card">{cardBody}</article>;
}

export function PricingBestsellers() {
  return (
    <section className="pb-section homepage-section" id="pricing-bestsellers" aria-label="Pricing bestsellers">
      <div className="shell">
        <Fade inView inViewOnce>
          <div className="section-header section-header--centered">
            <div className="eyebrow eyebrow--centered">Pricing</div>
            <h2>Bestsellers across the OneNet stack.</h2>
            <p className="lead">
              The plans Nigerian and UK businesses choose most. All include a 30-day money-back guarantee.
            </p>
          </div>
        </Fade>

        <div className="pb-grid">
          {CARDS.map((card, i) => (
            <Fade key={card.key} inView inViewOnce delay={i * 100}>
              <CardInner card={card} />
            </Fade>
          ))}
        </div>

        <Fade inView inViewOnce delay={500}>
          <p className="pb-footnote">
            Annual plans save up to 35%. Prices shown exclude applicable VAT.{" "}
            <Link href="/hosting/web" className="pb-footnote__link">
              See all plans →
            </Link>
          </p>
        </Fade>
      </div>
    </section>
  );
}
