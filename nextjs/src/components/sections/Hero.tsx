import Image from "next/image";
import Link from "next/link";

import { DomainSearch } from "@/components/primitives/DomainSearch";

const stats = [
  "99.9% Uptime SLA",
  "<800ms Average load",
  "9 Global regions",
  "30-day money-back",
] as const;

const reassuranceItems = [
  "No credit card required",
  "Cancel anytime",
  "Free migration included",
] as const;

export function Hero() {
  return (
    <section className="hero-home">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">NiRA Accredited · Tech Nation Endorsed · 9-Region Infrastructure</div>
          <h1>Your domain. Your identity. Your world online.</h1>
          <p className="lead hero-lead">
            Web hosting, domains, email, and AI tools for the generation building Africa&apos;s
            digital future — from Lagos to London.
          </p>

          <div className="hero-actions">
            <Link href="/cart.php?a=add&pid=261&billingcycle=annually" className="nav-primary-link">
              Get started free
            </Link>
            <Link href="#plans" className="hero-secondary-link">
              See all plans
            </Link>
          </div>

          <div className="hero-reassurance" aria-label="Reassurances">
            {reassuranceItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="hero-search-card">
            <div className="hero-search-card__head">
              <div>
                <strong>Start with the domain you want.</strong>
                <p>Search .ng, .co.uk, .com, and 30+ more extensions without leaving this page.</p>
              </div>
              <Link href="/domains">See all prices</Link>
            </div>
            <DomainSearch />
          </div>

          <div className="hero-proof">
            <div className="hero-proof__avatars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>★★★★★ Join 500+ businesses already hosted with OneNet Servers</p>
          </div>
        </div>

        <div className="hero-visual">
          <figure className="hero-main-shot">
            <Image
              src="/assets/hero-operator.jpg"
              alt="Professional working on a laptop in a modern office environment."
              width={800}
              height={960}
              priority
            />
          </figure>

          <div className="hero-secondary-shots">
            <figure className="hero-secondary-shot">
              <Image
                src="/assets/hero-lagos.jpg"
                alt="Lagos skyline representing the Nigerian market."
                width={600}
                height={400}
              />
              <figcaption>Nigeria · Lagos</figcaption>
            </figure>
            <figure className="hero-secondary-shot">
              <Image
                src="/assets/hero-london.jpg"
                alt="London skyline representing the UK market."
                width={600}
                height={400}
              />
              <figcaption>UK · London</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="shell hero-stat-row" aria-label="Hero statistics">
        {stats.map((stat) => (
          <div key={stat} className="hero-stat-chip">
            {stat}
          </div>
        ))}
      </div>
    </section>
  );
}
