import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowRight, ChevronDown } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "C012 Handheld Water Quality Analyzer",
    tagline: "Lab-grade testing in your pocket",
    description: "Multi-parameter field testing device with 12+ parameters, GPS tagging, and cloud sync.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    features: ["12+ Parameters", "< 2 min testing", "IP65 rated"],
    size: "large",
  },
  {
    id: "ocems",
    name: "Online Monitoring System (OCEMS)",
    tagline: "24/7 compliance monitoring",
    description: "Continuous effluent monitoring system for STP/ETP compliance with real-time alerts.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    features: ["CPCB Compliant", "Real-time alerts", "Remote access"],
    size: "medium",
  },
  {
    id: "varunaa",
    name: "Varunaa Water Level Monitor",
    tagline: "Smart groundwater management",
    description: "IoT-enabled water level monitoring for borewells and tanks with predictive analytics.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    features: ["Solar powered", "LoRa enabled", "Trend analysis"],
    size: "medium",
  },
  {
    id: "reagent-kit",
    name: "Reagent Kits",
    tagline: "Consumables for C012",
    description: "High-quality reagents for accurate colorimetric testing. Available for all parameters.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    features: ["Long shelf life", "Field-ready", "Bulk available"],
    size: "small",
  },
];

const Products = () => {
  return (
    <div className="bg-background min-h-screen">
      <main className="pt-24">
        {/* Hero Section - Light theme */}
        <section className="relative py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-5xl">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight leading-none">
                OUR
                <br />
                PRODUCTS
              </h1>
              <p className="text-lg text-muted-foreground mt-8 max-w-xl">
                Field-proven water quality monitoring solutions designed for Indian conditions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid - Masonry style like reference */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {products.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  delay={index * 0.1}
                  className={index === 0 ? "md:col-span-1 lg:row-span-2" : index === 1 ? "md:col-span-1" : ""}
                >
                  <Link to={`/products/${product.id}`} className="block h-full group">
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`relative overflow-hidden bg-muted rounded-xl ${
                        index === 0 ? "min-h-[500px] lg:min-h-full" : "min-h-[280px] lg:min-h-[320px]"
                      }`}
                    >
                      {/* Product Image */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="text-primary text-sm font-medium mb-1">{product.tagline}</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">{product.name}</h3>
                        <p className="text-white/80 text-sm mb-4 line-clamp-2">{product.description}</p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {product.features.slice(0, 3).map((feature) => (
                            <span
                              key={feature}
                              className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span>View details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        {/* <div className="flex justify-center pb-16">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll down to discover more</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
