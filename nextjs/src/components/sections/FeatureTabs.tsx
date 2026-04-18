"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TABS = [
  {
    key: "speed",
    headline: "10 minutes. From signup to live website.",
    body: "No developer. No waiting. Pick a template, add your details, and publish before your coffee gets cold. Go online at the speed of your idea.",
    image: "/assets/hero-operator.jpg",
    cta: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    key: "free",
    headline: "Zero Cost. Your first year online. On us.",
    body: "Free domain, hosting, and business email for qualifying founders, creators, students, and freelancers through the Digital Identity Initiative. No credit card required.",
    image: "/assets/hero-lagos.jpg",
    cta: { label: "Apply free →", href: "/digital-identity" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 9a3.5 3.5 0 0 0-5 0v6a3.5 3.5 0 0 0 5 0" />
        <line x1="12" y1="6" x2="12" y2="8" />
        <line x1="12" y1="16" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    key: "community",
    headline: "Digital Credits for Community growth.",
    body: "Businesses, communities, and organisations operating for over 12 months can receive up to NGN 10,000,000 in Digital Growth Credits to help their members get online.",
    image: "/assets/digital-growth-cover.png",
    cta: { label: "Apply for DGC →", href: "/partners" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
] as const;

export function FeatureTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="ftabs-section" aria-label="What we offer">
      <div className="shell ftabs-inner">
        {/* ── Left: image panel ── */}
        <div className="ftabs-image-panel" aria-hidden="true">
          {TABS.map((tab, i) => (
            <div
              key={tab.key}
              className={`ftabs-img-wrap${active === i ? " ftabs-img-wrap--active" : ""}`}
            >
              <Image
                src={tab.image}
                alt=""
                fill
                className="ftabs-img"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* ── Right: tab list ── */}
        <div className="ftabs-list" role="tablist" aria-label="Features">
          {TABS.map((tab, i) => {
            const isActive = active === i;
            return (
              <div
                key={tab.key}
                className={`ftab${isActive ? " ftab--active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                role="tab"
                aria-selected={isActive}
                tabIndex={0}
              >
                <div className="ftab__icon">{tab.icon}</div>
                <div className="ftab__content">
                  <h3 className="ftab__headline">{tab.headline}</h3>
                  <div className={`ftab__details${isActive ? " ftab__details--open" : ""}`}>
                    <div>
                      <p className="ftab__body">{tab.body}</p>
                      {tab.cta && (
                        <Link href={tab.cta.href} className="ftab__cta">
                          {tab.cta.label}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
