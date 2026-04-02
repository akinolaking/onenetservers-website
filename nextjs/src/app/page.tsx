import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { NigeriaSection } from "@/components/sections/NigeriaSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      <AnnouncementBar />
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <PricingPreview />
      <NigeriaSection />
    </main>
  );
}
