import Navbar from "../components/layout/Navbar";
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
import { FeaturesSection } from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";
const Index = () => {
  return (
    <>
      <Navbar />
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
        {/* <FeaturesSection /> */}
        {/* <ProductsSection /> */}
        {/* <StatsSection /> */}
        {/* <CTASection /> */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
