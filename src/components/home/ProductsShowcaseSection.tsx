import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "CLUIX C012",
    description: "Advanced multi-parameter water quality analyzer with IoT connectivity",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["12+ Parameters", "IoT Enabled"],
    subLinks: [
      { label: "Features", href: "/products/cluix-c012#features" },
      { label: "Specs", href: "/products/cluix-c012#specs" },
    ],
  },
  {
    id: "reagent-kit",
    name: "Reagent Kit",
    description: "Complete reagent kit for comprehensive water quality testing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    tags: ["100 Tests", "Field Ready"],
    subLinks: [
      { label: "Parameters", href: "/products/reagent-kit#parameters" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "varunaa",
    name: "Varunaa",
    description: "Smart water level monitoring system with real-time alerts",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    tags: ["Solar Powered", "LoRa Enabled"],
    subLinks: [
      { label: "How It Works", href: "/products/varunaa#how-it-works" },
      { label: "Demo", href: "/demo" },
    ],
  },
];

export function ProductsShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-leading water quality monitoring solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-background rounded-2xl border border-border overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                {/* Content wrapper */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-medium rounded-full border transition-colors duration-500
                          border-border text-foreground
                          group-hover:border-background/30 group-hover:text-background"
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
                        filter grayscale-0 group-hover:grayscale group-hover:brightness-200 group-hover:opacity-80"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="font-sans text-xl font-bold mb-2 transition-colors duration-500 text-foreground group-hover:text-background">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-relaxed transition-colors duration-500 text-muted-foreground group-hover:text-background/70">
                      {product.description}
                    </p>
                  </div>

                  {/* Sub Links */}
                  <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t transition-colors duration-500 border-border group-hover:border-background/20">
                    {product.subLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.href}
                        className="inline-flex items-center gap-1 text-sm font-medium transition-colors duration-500
                          text-foreground hover:text-primary
                          group-hover:text-background group-hover:hover:text-primary-foreground"
                      >
                        <span className="relative">
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-colors duration-500 group-hover:bg-background/50" />
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
  );
}

export default ProductsShowcaseSection;
