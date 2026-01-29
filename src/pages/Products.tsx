import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ChevronRight } from "lucide-react";

interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  isCategory?: boolean;
  subLinks: { label: string; href: string }[];
}

const products: ProductItem[] = [
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
    id: "ocems",
    name: "Online Monitoring System (OCEMS)",
    description: "Continuous effluent monitoring system for STP/ETP compliance with real-time alerts.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
    tags: ["CPCB Compliant", "Real-time Alerts"],
    subLinks: [
      { label: "How It Works", href: "/products/ocems#how-it-works" },
      { label: "Compliance", href: "/products/ocems#compliance" },
    ],
  },
  {
    id: "varunaa",
    name: "Varunaa Water Level Monitor",
    description: "IoT-enabled water level monitoring for borewells and tanks with predictive analytics.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    tags: ["Solar Powered", "LoRa Enabled"],
    subLinks: [
      { label: "How It Works", href: "/products/varunaa#how-it-works" },
      { label: "Demo", href: "/demo" },
    ],
  },
  {
    id: "reagent-kit",
    name: "Reagent Kits",
    description: "High-quality reagents for accurate colorimetric testing. Available for all parameters.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    tags: ["Long Shelf Life", "Field Ready"],
    isCategory: true,
    subLinks: [
      { label: "View All", href: "/products/reagent-kit" },
      { label: "Order", href: "/contact-us" },
    ],
  },
];

const Products = () => {
  return (
    <div className="bg-foreground min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative ">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-5xl">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background tracking-tight leading-none">
                OUR
                <br />
                PRODUCTS
              </h1>
              <p className="text-lg text-muted-background  max-w-xl">
                Field-proven water quality monitoring solutions designed for Indian conditions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid - Same as home page */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, i) => {
                const cardLink = product.isCategory ? `/products/${product.id}` : `/products/${product.id}`;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-full bg-foreground rounded-2xl border border-gray-300 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                      {/* Content wrapper */}
                      <div className="relative z-10 p-6 h-full flex flex-col">
                        <Link to={cardLink} className="flex-1 flex flex-col">
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
                        </Link>

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
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
