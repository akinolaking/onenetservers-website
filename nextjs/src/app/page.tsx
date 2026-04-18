import { Hero } from "@/components/sections/Hero";
import { ValueCards } from "@/components/sections/ValueCards";
import { PricingBestsellers } from "@/components/sections/PricingBestsellers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { NigeriaSection } from "@/components/sections/NigeriaSection";
import { Differentiators } from "@/components/sections/Differentiators";
import { Testimonials } from "@/components/sections/Testimonials";
import { BottomCTA } from "@/components/sections/BottomCTA";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      {/* 01 — Hero */}
      <Hero />
      {/* 02 — Core value blocks */}
      <ValueCards />
      {/* 04 — Pricing bestsellers */}
      <PricingBestsellers />
      {/* 05 — How it works */}
      <HowItWorks />
      {/* 06 — Social proof */}
      <SocialProof />
      {/* 07 — Nigeria section */}
      <NigeriaSection />
      {/* 08 — Differentiators */}
      <Differentiators />
      {/* 09 — Testimonials */}
      <Testimonials />
      {/* 10 — Blog */}
      <BlogSection />
      {/* 11 — Bottom CTA */}
      <BottomCTA />
    </main>
  );
}
