import Link from "next/link";

import { nigeriaPoints } from "@/lib/home-data";

import { SectionHeader } from "@/components/shared/SectionHeader";

export function NigeriaSection() {
  return (
    <section className="homepage-section homepage-section--dark">
      <div className="shell nigeria-grid">
        <div>
          <SectionHeader
            eyebrow="Built for Nigeria"
            title="Built for Nigeria. Powered from London."
            lead="We are the only hosting company with roots in Lagos, a registered office in London, and the infrastructure to serve both markets at the same quality standard."
          />
          <div className="nigeria-points">
            {nigeriaPoints.map((point) => (
              <div key={point} className="nigeria-point">
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="nigeria-panel">
          <h3>Your Nigeria-first advantage</h3>
          <p>
            Local domain credibility, naira billing, UK-grade operational discipline, and a team
            that understands how both markets actually buy.
          </p>
          <div className="nigeria-panel__actions">
            <Link href="/digital-identity" className="nav-primary-link">
              Explore the DII
            </Link>
            <Link href="/domains/ng" className="hero-secondary-link">
              .NG domain pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
