import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
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
        <FeaturesSection />
        <ProductsSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
