import { useParams, Link, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";
import ProductHero from "../components/product/ProductHero";
import ProductParameters from "../components/product/ProductParameters";
import ProductWhoItsFor from "../components/product/ProductWhoItsFor";
import ProductDeploymentSupport from "../components/product/ProductDeploymentSupport";
import ProductTestimonials from "../components/product/ProductTestimonials";
import ProductFAQ from "../components/product/ProductFAQ";
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



        {/* Who It's For Section */}
        {/* {product.whoItsFor && (
          <ProductWhoItsFor
            title={product.whoItsFor.title}
            subtitle={product.whoItsFor.subtitle}
            sectors={product.whoItsFor.sectors}
          />
        )} */}

        {/* Testimonials Section */}
        {/* {product.testimonials && (
          <ProductTestimonials
            title={product.testimonials.title}
            items={product.testimonials.items}
          />
        )} */}

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

        {/* FAQ Section */}
        {/* <ProductFAQ /> */}
      </main>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetail;
