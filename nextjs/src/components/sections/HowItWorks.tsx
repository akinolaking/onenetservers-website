import { steps } from "@/lib/home-data";

import { SectionHeader } from "@/components/shared/SectionHeader";

export function HowItWorks() {
  return (
    <section className="homepage-section homepage-section--tinted">
      <div className="shell">
        <SectionHeader
          eyebrow="Getting started"
          title="Live in under 10 minutes."
          lead="No technical knowledge required. We handle setup — you get the keys."
          centered
        />

        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.number} className="step-card">
              <div className="step-card__number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
