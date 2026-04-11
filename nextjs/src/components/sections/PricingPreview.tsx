"use client";

import { useState } from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { pricingCategories } from "@/lib/home-data";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { useCurrency } from "@/lib/currency-context";

type BillingMode = "monthly" | "annual";

export function PricingPreview() {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].key);
  const [billing, setBilling] = useState<BillingMode>("monthly");
  const { format } = useCurrency();

  const category =
    pricingCategories.find((item) => item.key === activeCategory) ?? pricingCategories[0];

  /* Parse "$X.XX/mo" → number */
  function parseUSD(str: string): number {
    return parseFloat(str.replace(/[^0-9.]/g, "")) || 0;
  }

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
          const priceObj = billing === "monthly" ? plan.monthly : plan.annual;
          const usdVal = parseUSD(priceObj.USD);
          const suffix = activeCategory === "domains" ? "/yr" : "/mo";

          if (plan.featured) {
            return (
              /* MUI Card owns shadow + border + hover — sits outside Shine's overflow:hidden.
                 Fixes clipped badge and rectangular hover shadow. */
              <Card
                key={plan.name}
                elevation={0}
                sx={{
                  position: 'relative',
                  borderRadius: '16px',
                  border: '1px solid rgba(67, 67, 240, 0.25)',
                  background: 'linear-gradient(160deg, var(--blue-xl) 0%, #fff 60%)',
                  boxShadow: '0 4px 6px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 6%)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  '&:hover': {
                    boxShadow: '0 4px 16px rgb(67 67 240 / 8%), 0 2px 6px rgb(0 0 0 / 4%)',
                    transform: 'translateY(-2px)',
                  },
                  overflow: 'visible',
                }}
              >
                {/* Chip badge: outside any overflow:hidden — always visible */}
                <Chip
                  label="Most popular"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '24px',
                    transform: 'translateY(-50%)',
                    zIndex: 2,
                    bgcolor: 'var(--blue)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '99px',
                    height: '24px',
                    '& .MuiChip-label': { px: '12px' },
                  }}
                />
                <article className="pricing-card pricing-card--featured pricing-card--mui-inner">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                  <div className="pricing-card__price">
                    <strong>{format(usdVal, 2)}{suffix}</strong>
                  </div>
                  <p className="pricing-card__renewal">{plan.renewal}</p>
                  <Link href="/cart.php?a=add&pid=261&billingcycle=monthly" className="pricing-card__cta">
                    Get started →
                  </Link>
                </article>
              </Card>
            );
          }

          return (
            <Card
              key={plan.name}
              elevation={0}
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--line)',
                boxShadow: '0 1px 3px rgb(0 0 0 / 8%), 0 1px 2px rgb(0 0 0 / 6%)',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgb(67 67 240 / 8%), 0 2px 6px rgb(0 0 0 / 4%)',
                  transform: 'translateY(-2px)',
                },
                overflow: 'visible',
              }}
            >
              <article className="pricing-card pricing-card--mui-inner">
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
                <div className="pricing-card__price">
                  <strong>{format(usdVal, 2)}{suffix}</strong>
                </div>
                <p className="pricing-card__renewal">{plan.renewal}</p>
                <Link href="/cart.php?a=add&pid=261&billingcycle=monthly" className="pricing-card__cta">
                  Get started →
                </Link>
              </article>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
