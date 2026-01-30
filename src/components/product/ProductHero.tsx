import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Shield, Droplets } from "lucide-react";
import { ProductData } from "@/data/products";

interface ProductHeroProps {
  product: ProductData;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <Shield className="w-4 h-4" />
              {product.badge}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              {product.name}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-lg"
            >
              {product.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                >
                  <svg
                    className="w-4 h-4 text-primary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to={`/products/reagent-kits/${product.name}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>

            {/* Volume Pricing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-gray-500 mb-4"
            >
              Volume pricing available for government and enterprise orders
            </motion.p>

            {/* Brochure Download */}
            {product.brochureLink && (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href={product.brochureLink}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                Download brochure & specifications
              </motion.a>
            )}
          </div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Product Image Placeholder */}
              <div className="bg-gray-50 rounded-xl flex items-center justify-center mb-6 aspect-square">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <Droplets className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-gray-400 text-sm">Product image</p>
                </div>
              </div>

              {/* Stat Badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                <p className="text-xs text-gray-500">Deployed in</p>
                <p className="text-xl font-bold text-gray-900">
                  {product.stat.value} {product.stat.label}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
