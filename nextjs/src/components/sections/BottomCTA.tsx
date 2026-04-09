"use client";

import { Fade } from "@/components/animate-ui/primitives/effects/fade";
import { DomainSearch } from "@/components/primitives/DomainSearch";

export function BottomCTA() {
  return (
    <section className="bottom-cta" id="get-started">
      <div className="shell bottom-cta__inner">
        <Fade inView inViewOnce delay={0}>
          <h2 className="bottom-cta__h2">
            Your business starts online today.
          </h2>
        </Fade>

        <Fade inView inViewOnce delay={80}>
          <p className="bottom-cta__sub">
            Free for your first year. No developer. No stress. Just your business, live.
          </p>
        </Fade>

        <Fade inView inViewOnce delay={160}>
          <div className="bottom-cta__search">
            <DomainSearch />
          </div>
        </Fade>

        <Fade inView inViewOnce delay={240}>
          <p className="bottom-cta__note">
            Free domain + hosting · No credit card · Cancel anytime
          </p>
        </Fade>
      </div>
    </section>
  );
}
