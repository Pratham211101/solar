import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "Cluix C012",
    tagline: "Advanced Water Quality Analyzer",
    description:
      "Multi-parameter water quality analyzer with IoT connectivity, real-time monitoring, and automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    features: [
      "12+ parameter analysis",
      "Cloud connectivity",
      "Auto-calibration",
      "Mobile app control",
    ],
  },
  {
    id: "reagent-kit",
    name: "Reagent Kit",
    tagline: "Premium Testing Reagents",
    description:
      "High-purity reagents for accurate water quality testing, designed for compatibility with all Cluix analyzers.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    features: ["High purity", "Long shelf life", "Wide parameter range", "Easy handling"],
  },
  {
    id: "varunaa",
    name: "Varunaa Water Monitoring",
    tagline: "Complete Monitoring Solution",
    description:
      "End-to-end water monitoring solution for industrial applications with predictive analytics and compliance automation.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    features: [
      "24/7 monitoring",
      "Predictive alerts",
      "Compliance ready",
      "Custom dashboards",
    ],
  },
  {
    id: "ocems",
    name: "OCEMS Device",
    tagline: "Emission Monitoring System",
    description:
      "Online Continuous Emission Monitoring System for industrial compliance with real-time data and automated reporting.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    features: ["Real-time data", "Regulatory compliant", "Remote access", "API integration"],
  },
];

const Products = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Our Products
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Innovative</span>{" "}
                <span className="text-gradient">Monitoring Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our range of cutting-edge environmental monitoring products
                designed for accuracy, reliability, and ease of use.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products List */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="space-y-24">
              {products.map((product, index) => (
                <ScrollReveal key={product.id}>
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative overflow-hidden rounded-2xl ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </motion.div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <span className="text-primary text-sm font-medium mb-2 block">
                        {product.tagline}
                      </span>
                      <h2 className="text-4xl font-bold text-foreground mb-4">{product.name}</h2>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/products/${product.id}`}
                        className="group inline-flex items-center gap-2 text-primary font-medium link-underline"
                      >
                        Learn More
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Products;
