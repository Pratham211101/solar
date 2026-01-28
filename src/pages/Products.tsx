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
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="h-full bg-card rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Image Area with Dark Gradient Background */}
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-foreground via-foreground/90 to-primary/30 overflow-hidden">
                    {/* Decorative particles/bubbles effect */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full" />
                      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full" />
                      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full" />
                      <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full" />
                    </div>

                    {/* Featured Badge */}
                    {/* {product.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )} */}

                    {/* Product Image */}
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-contain p-8"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-sans text-lg font-bold text-foreground mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{product.description}</p>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Link
                        to={`/products/${product.id}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact-us"
                        className="inline-flex items-center justify-center px-4 py-2.5 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary/10 transition-colors"
                      >
                        Enquiry
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
