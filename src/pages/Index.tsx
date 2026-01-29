import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import { ProductsShowcaseSection } from "../components/home/ProductsShowcaseSection";
import { WhoItsForSection } from "../components/home/WhoItsForSection";
import { StatsHighlightSection } from "../components/home/StatsHighlightSection";
import { TrustedBySection } from "../components/home/TrustedBySection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTABannerSection } from "../components/home/CTABannerSection";

const Index = () => {
  return (
    <>
      <main>
        <HeroSection />
        <ProductsShowcaseSection />
        <StatsHighlightSection />
        <WhoItsForSection />
        <TrustedBySection />
        <TestimonialsSection />
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
