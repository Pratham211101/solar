import SEO from "../components/SEO";
import Footer from "../components/layout/Footer";
import ProductsShowcaseSection from "@/components/home/ProductsShowcaseSection";

const Products = () => {
  return (
    <>
      <SEO title="Products | SUNBOT" />
      <ProductsShowcaseSection />
      <Footer />
    </>
  );
};

export default Products;
