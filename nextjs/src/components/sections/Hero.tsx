"use client";

import Image from "next/image";
import { DomainSearch } from "@/components/primitives/DomainSearch";

const AVATARS = [
  { src: "/assets/avatar-a.svg", alt: "Customer profile" },
  { src: "/assets/avatar-b.svg", alt: "Customer profile" },
  { src: "/assets/avatar-c.svg", alt: "Customer profile" },
];

export function Hero() {
  return (
    <section className="hero-home" aria-label="Get your business online">
      <div className="hero-inner shell">
        <h1 className="hero-h1">
          Your business deserves<br />
          to be online.
        </h1>

        <p className="hero-sub">
          Don&apos;t let your tech setup slow you down. We get your business
          on the internet in under 10&nbsp;minutes. No developer, no stress.
        </p>

        <div className="hero-search-wrap">
          <DomainSearch />
        </div>

        <div className="hero-proof">
          <div className="hero-proof__avatars">
            {AVATARS.map((av, i) => (
              <Image
                key={i}
                src={av.src}
                alt={av.alt}
                width={36}
                height={36}
                className="hero-proof__avatar"
              />
            ))}
          </div>
          <p>Join 500+ businesses already live with OneNet Servers</p>
        </div>
      </div>
    </section>
  );
}
