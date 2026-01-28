import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import { WhatWeDoSection } from "../components/home/WhatWeDoSection";
import { ProductsShowcaseSection } from "../components/home/ProductsShowcaseSection";
import { WhoItsForSection } from "../components/home/WhoItsForSection";
import { StatsHighlightSection } from "../components/home/StatsHighlightSection";
import { WhyCluixSection } from "../components/home/WhyCluixSection";
import { TrustedBySection } from "../components/home/TrustedBySection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTABannerSection } from "../components/home/CTABannerSection";

const Index = () => {
  return (
    <>
      <main className="h-screen overflow-y-auto snap-y snap-mandatory">
        <section className="snap-start snap-always min-h-screen">
          <HeroSection />
        </section>
        <section className="snap-start snap-always">
          <WhatWeDoSection />
        </section>
        <section className="snap-start snap-always">
          <ProductsShowcaseSection />
        </section>
        <section className="snap-start snap-always">
          <WhoItsForSection />
        </section>
        <section className="snap-start snap-always">
          <StatsHighlightSection />
        </section>
        <section className="snap-start snap-always">
          <WhyCluixSection />
        </section>
        <section className="snap-start snap-always">
          <TrustedBySection />
        </section>
        <section className="snap-start snap-always">
          <TestimonialsSection />
        </section>
        <section className="snap-start snap-always">
          <CTABannerSection />
        </section>
        <section className="snap-start snap-always">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Index;
