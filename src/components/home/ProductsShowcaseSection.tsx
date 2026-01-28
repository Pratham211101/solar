import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    id: "cluix-c012",
    name: "CLUIX C012",
    description: "Advanced multi-parameter water quality analyzer with IoT connectivity",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    featured: true,
  },
  {
    id: "reagent-kit",
    name: "Reagent Kit (100 Test)",
    description: "Complete reagent kit for comprehensive water quality testing",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    featured: false,
  },
  {
    id: "varunaa",
    name: "Varunaa",
    description: "Smart water level monitoring system with real-time alerts",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    featured: false,
  },
];

export function ProductsShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Products
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image Area with Dark Gradient Background */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-primary/30 overflow-hidden">
                  {/* Decorative particles/bubbles effect */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full" />
                    <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full" />
                    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full" />
                    <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 bg-white rounded-full" />
                  </div>
                  
                  {/* Featured Badge */}
                  {product.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-contain p-8 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
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
      </div>
    </section>
  );
}

export default ProductsShowcaseSection;
