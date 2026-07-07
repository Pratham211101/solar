import SEO from "../components/SEO";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import { ProductsShowcaseSection } from "../components/home/ProductsShowcaseSection";
import { WhoItsForSection } from "../components/home/WhoItsForSection";
import { StatsHighlightSection } from "../components/home/StatsHighlightSection";
import { TrustedBySection } from "../components/home/TrustedBySection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { CTABannerSection } from "../components/home/CTABannerSection";
import { HorizontalParallaxGallery } from "../components/home/HorizontalParallaxGallery";

const Index = () => {
  return (
    <>
      <SEO 
        title="SUNBOT | Intelligent Solar Infrastructure & Smart Solutions" 
        description="Discover SUNBOT's advanced solar-powered infrastructure, smart street lighting, and environmental monitoring solutions for modern cities and industries." 
      />
      <main>
        <HeroSection />
        <ProductsShowcaseSection />
        {/* <StatsHighlightSection /> */}
        {/* <WhoItsForSection /> */}
        <HorizontalParallaxGallery />
        {/* <TrustedBySection /> */}
        {/* <TestimonialsSection /> */}
        <CTABannerSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
