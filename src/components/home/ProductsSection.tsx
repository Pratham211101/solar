import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "Cluix C012",
    description: "Advanced multi-parameter water quality analyzer with IoT connectivity",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    features: ["Multi-parameter analysis", "Cloud connectivity", "Auto-calibration"],
  },
  {
    id: "reagent-kit",
    name: "Reagent Kit",
    description: "Premium quality reagents for accurate water quality testing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    features: ["High purity", "Long shelf life", "Wide range"],
  },
  {
    id: "varunaa",
    name: "Varunaa Water Monitoring",
    description: "Complete water monitoring solution for industrial applications",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    features: ["24/7 monitoring", "Predictive alerts", "Compliance ready"],
  },
  {
    id: "ocems",
    name: "OCEMS Device",
    description: "Online Continuous Emission Monitoring System for industrial compliance",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
    features: ["Real-time data", "Regulatory compliant", "Remote access"],
  },
];

const ProductsSection = () => {
  return (
    <section className="relative py-32 bg-muted/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-curve-top pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-foreground">Cutting-Edge</span>{" "}
              <span className="text-gradient">Technology</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 text-primary font-medium link-underline"
          >
            View All Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl bg-card"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
