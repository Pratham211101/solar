import { useParams, Link, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import ProductHero from "../components/product/ProductHero";
import ProductParameters from "../components/product/ProductParameters";
import ProductHowItWorks from "../components/product/ProductHowItWorks";
import ProductWhoItsFor from "../components/product/ProductWhoItsFor";
import ProductDeploymentSupport from "../components/product/ProductDeploymentSupport";
import WhyCluixSection from "../components/product/WhyCluixSection";
import { productsData } from "@/data/products";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? productsData[id] : null;

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#productQuote") {
      const el = document.getElementById("productQuote");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  if (!product) {
    return (
      <div className="bg-white min-h-screen">
        <main className="pt-24">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-0">
        {/* Hero Section */}
        <ProductHero product={product} />

        {/* Parameters Section */}
        {product.parameters && product.parametersTitle && product.parametersSubtitle && (
          <ProductParameters
            title={product.parametersTitle}
            subtitle={product.parametersSubtitle}
            parameters={product.parameters}
          />
        )}

        {/* How It Works Section */}
        {product.howItWorks && (
          <ProductHowItWorks
            title={product.howItWorks.title}
            subtitle={product.howItWorks.subtitle}
            steps={product.howItWorks.steps}
          />
        )}

        {/* Why Cluix Section */}
        {product.whyCluix && (
          <WhyCluixSection
            title={product.whyCluix.title}
            description={product.whyCluix.description}
            features={product.whyCluix.features}
          />
        )}

        {/* Deployment & Support Section */}
        {product.deploymentSupport && (
          <ProductDeploymentSupport
            title={product.deploymentSupport.title}
            description={product.deploymentSupport.description}
            features={product.deploymentSupport.features}
            formTitle={product.deploymentSupport.formTitle}
            formSubtitle={product.deploymentSupport.formSubtitle}
            productName={product.name}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
