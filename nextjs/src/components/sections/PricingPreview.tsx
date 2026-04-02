"use client";

import { useState } from "react";

import { pricingCategories } from "@/lib/home-data";

import { SectionHeader } from "@/components/shared/SectionHeader";

type BillingMode = "monthly" | "annual";

export function PricingPreview() {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].key);
  const [billing, setBilling] = useState<BillingMode>("monthly");

  const category =
    pricingCategories.find((item) => item.key === activeCategory) ?? pricingCategories[0];

  return (
    <section className="homepage-section shell" id="plans">
      <SectionHeader
        eyebrow="Pricing"
        title="Plans for every stage of growth."
        lead="All plans include free SSL, daily backups, free domain migration, and 24/7 support. No hidden fees."
        centered
      />

      <div className="pricing-proof">
        <div className="pricing-proof__avatars" aria-hidden="true">
          <span>AO</span>
          <span>TC</span>
          <span>SB</span>
          <span>+</span>
        </div>
        <p>★★★★★ Trusted by 500+ businesses across Nigeria, the UK, and beyond.</p>
      </div>

      <div className="billing-toggle">
        <button
          type="button"
          className={billing === "monthly" ? "is-active" : ""}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          type="button"
          className={billing === "annual" ? "is-active" : ""}
          onClick={() => setBilling("annual")}
        >
          Annual
        </button>
        <span>Save up to 35% · +2 months free</span>
      </div>

      <div className="pricing-tabs">
        {pricingCategories.map((item) => (
          <button
            key={item.key}
            type="button"
            className={item.key === activeCategory ? "is-active" : ""}
            onClick={() => setActiveCategory(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="pricing-grid">
        {category.plans.map((plan) => {
          const price = billing === "monthly" ? plan.monthly : plan.annual;

          return (
            <article
              key={plan.name}
              className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
            >
              {plan.featured ? <div className="pricing-card__badge">Most popular</div> : null}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="pricing-card__price">
                <strong>{price.USD}</strong>
                <span>{price.NGN}</span>
                <span>{price.GBP}</span>
              </div>
              <p className="pricing-card__renewal">{plan.renewal}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
