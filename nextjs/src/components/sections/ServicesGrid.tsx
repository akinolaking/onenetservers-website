import Link from "next/link";

import { services } from "@/lib/home-data";

import { SectionHeader } from "@/components/shared/SectionHeader";

export function ServicesGrid() {
  return (
    <section className="homepage-section shell">
      <SectionHeader
        eyebrow="What we offer"
        title="Everything to put your business online."
        lead="From your first domain to a fully managed AI-powered stack — built for serious builders in Lagos, London, and everywhere in between."
      />

      <div className="services-grid">
        {services.map((service) => (
          <article
            key={service.title}
            className={`service-card ${service.featured ? "service-card--featured" : ""}`}
          >
            <div className="service-card__tag">{service.tag}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-card__meta">
              <strong>{service.price.USD}</strong>
              <span>{service.price.NGN}</span>
              <span>{service.price.GBP}</span>
            </div>
            <Link href={service.href} className="service-card__cta">
              {service.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
