import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowRight, Droplets, Wifi, Gauge, FlaskConical } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "C012 Handheld Water Quality Analyzer",
    tagline: "Lab-grade testing in your pocket",
    description:
      "Multi-parameter field testing device with 12+ parameters, GPS tagging, and cloud sync.",
    icon: Droplets,
    features: ["12+ Parameters", "< 2 min testing", "IP65 rated"],
  },
  {
    id: "ocems",
    name: "Online Monitoring System (OCEMS)",
    tagline: "24/7 compliance monitoring",
    description:
      "Continuous effluent monitoring system for STP/ETP compliance with real-time alerts.",
    icon: Wifi,
    features: ["CPCB Compliant", "Real-time alerts", "Remote access"],
  },
  {
    id: "varunaa",
    name: "Varunaa Water Level Monitor",
    tagline: "Smart groundwater management",
    description:
      "IoT-enabled water level monitoring for borewells and tanks with predictive analytics.",
    icon: Gauge,
    features: ["Solar powered", "LoRa enabled", "Trend analysis"],
  },
  {
    id: "reagent-kit",
    name: "Reagent Kits",
    tagline: "Consumables for C012",
    description:
      "High-quality reagents for accurate colorimetric testing. Available for all parameters.",
    icon: FlaskConical,
    features: ["Long shelf life", "Field-ready", "Bulk available"],
  },
];

const Products = () => {
  return (
    <>
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
                Our Products
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Field-proven water quality monitoring solutions designed for Indian conditions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative h-full"
                  >
                    <Link
                      to={`/products/${product.id}`}
                      className="block h-full"
                    >
                      <div className="relative h-full p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-500">
                        {/* Icon */}
                        <div className="flex items-start gap-5 mb-5">
                          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                            <product.icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-primary text-sm font-medium block mb-1">
                              {product.tagline}
                            </span>
                            <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {product.name}
                            </h3>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {product.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1.5 text-sm rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <span>View details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>

                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </Link>
                  </motion.div>
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
