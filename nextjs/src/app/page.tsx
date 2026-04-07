import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueCards } from "@/components/sections/ValueCards";
import { PricingBestsellers } from "@/components/sections/PricingBestsellers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { Differentiators } from "@/components/sections/Differentiators";
import { Testimonials } from "@/components/sections/Testimonials";
import { BottomCTA } from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      <Hero />
      <TrustBar />
      <ValueCards />
      <PricingBestsellers />
      <HowItWorks />
      <SocialProof />
      <Differentiators />
      <Testimonials />
      <BottomCTA />
    </main>
  );
}
