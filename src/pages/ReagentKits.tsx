import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ChevronRight } from "lucide-react";
import { reagentKitsData } from "@/data/reagentKits";

const ReagentKits = () => {
  return (
    <div className="bg-foreground min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background tracking-tight leading-none">
                REAGENT
                <br />
                KITS
              </h1>
              <p className="text-lg text-muted-background max-w-xl">
                High-quality reagents for accurate colorimetric testing with the C012 analyzer. Available for all parameters.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {reagentKitsData.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group"
                >
                  <div className="relative h-full bg-foreground rounded-2xl border border-gray-300 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    {/* Content wrapper */}
                    <div className="relative z-10 p-6 h-full flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 text-xs font-medium rounded-full border transition-colors duration-500
                              border-gray-300 text-background
                              group-hover:border-foreground/30 group-hover:text-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Image Area */}
                      <div className="relative aspect-[4/3] mb-6 flex items-center justify-center">
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain transition-all duration-500 
                            filter grayscale-0 group-hover:opacity-80"
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="flex-1">
                        <h3 className="font-sans text-xl font-bold mb-2 transition-colors duration-500 text-background group-hover:text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm leading-relaxed transition-colors duration-500 text-gray-400 group-hover:text-foreground/70">
                          {product.description}
                        </p>
                      </div>

                      {/* Sub Links */}
                      <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t transition-colors duration-500 border-gray-300 group-hover:border-foreground/20">
                        {product.subLinks.map((link) => (
                          <Link
                            key={link.label}
                            to={link.href}
                            className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-500
                              text-background hover:text-primary
                              group-hover:text-foreground group-hover:hover:text-primary-background"
                          >
                            <span className="relative">
                              {link.label}
                              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-colors duration-500 group-hover:bg-foreground/50" />
                            </span>
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReagentKits;
