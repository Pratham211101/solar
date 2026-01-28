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
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ProductsShowcaseSection />
        <WhoItsForSection />
        <StatsHighlightSection />
        <WhyCluixSection />
        <TrustedBySection />
        <TestimonialsSection />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
