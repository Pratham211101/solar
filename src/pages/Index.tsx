import Footer from "../components/layout/Footer";
import HeroSection from "../components/home/HeroSection";
import { StackingSections } from "../components/home/StackingSections";

const Index = () => {
  return (
    <>
      <main>
        <HeroSection />
        <StackingSections />
      </main>
      <Footer />
    </>
  );
};

export default Index;
