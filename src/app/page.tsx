import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CraftsmanshipSection } from "@/components/home/craftsmanship-section";
import { CustomDesignSection } from "@/components/home/custom-design-section";
import { FeaturedDesigns } from "@/components/home/featured-designs";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { HomeAnimations } from "@/components/home/home-animations";
import { HowItWorks } from "@/components/home/how-it-works";
import { MeasurementTeaser } from "@/components/home/measurement-teaser";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturedDesigns />
        <CustomDesignSection />
        <HowItWorks />
        <CraftsmanshipSection />
        <MeasurementTeaser />
        <FinalCta />
      </main>
      <SiteFooter />
      <HomeAnimations />
    </>
  );
}
