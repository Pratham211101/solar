import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";
import ProductsSection from "../components/home/ProductsSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";
import FullPageSection from "../components/ui/FullPageSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <FullPageSection index={1}>
          <FeaturesSection />
        </FullPageSection>
        <FullPageSection index={2}>
          <ProductsSection />
        </FullPageSection>
        <FullPageSection index={3}>
          <StatsSection />
        </FullPageSection>
        <FullPageSection index={4}>
          <CTASection />
        </FullPageSection>
      </main>
      <Footer />
    </>
  );
};

export default Index;
