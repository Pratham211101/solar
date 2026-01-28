import { useParams, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import ProductHero from "../components/product/ProductHero";
import ProductParameters from "../components/product/ProductParameters";
import { productsData } from "@/data/products";
import { ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = id ? productsData[id] : null;

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
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-24">
        {/* Back Link */}
        <div className="container mx-auto px-6 pt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

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
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
