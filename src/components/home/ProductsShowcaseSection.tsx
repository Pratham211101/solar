import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const products = [
  {
    id: "solar-c012",
    name: "solar C012",
    category: "WATER QUALITY ANALYSIS",
    description: "Advanced multi-parameter water quality analyzer with IoT connectivity enabling rapid multi-parameter analysis, digital reporting, and scalable monitoring operations. ",
    image: "/images/products/C012.png",
    href: "/products/solar-c012"
  },
  {
    id: "reagent-kit",
    name: "C012 REAGENT KIT",
    category: "TESTING CONSUMABLES",
    description: "Complete reagent solution ensuring reliable, standardized testing across routine and large-scale water monitoring programs.",
    image: "/images/products/reagent-kit.png",
    href: "/products/reagent-kit"
  },
  {
    id: "monitoring-solutions",
    name: "Smart Online Water Quality Monitoring",
    category: "continuous monitoring",
    description: "Designed for continuous industrial and environmental monitoring, our multi-sensor array tracks key parameters in real time. ",
    image: "/images/products/monitoring.png",
    href: "/products/monitoring-solutions"
  },
  {
    id: "dashboard-dss",
    name: "DASHBOARD DSS",
    category: "DATA ANALYTICS",
    description: "Centralized decision support system providing real-time analytics, automated reporting, and predictive trends for water management.",
    image: "/images/products/dashboard2.jpg",
    href: "/dashboard"
  },
];

export function ProductsShowcaseSection() {
  return (
    <section className="min-h-screen py-24 bg-white relative overflow-hidden flex flex-col justify-center">

      {/* Heading Section */}
      <div className="container mx-auto px-6  mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-gilroy text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-none">
            Our <span className="text-primary italic">Products</span>
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Link to={product.href} key={product.id}>
              <motion.div
                layout
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.04 }
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 26
                }}
                className="relative will-change-transform hover:z-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="group relative border border-black/10 p-8 pb-10 h-[580px] flex flex-col justify-between overflow-hidden bg-white transition-all hover:shadow-2xl hover:shadow-black/10 rounded-md"
                >
                  {/* Black to Cyan Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  {/* Header: Category Badge */}
                  <div className="relative z-10 flex justify-between items-center">
                    <div className="flex justify-center items-center px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] group-hover:border-white/20 group-hover:bg-white/5 transition-colors">
                      <span className="font-gilroy text-[9px] tracking-[0.2em] text-primary uppercase font-bold">{product.category}</span>
                    </div>
                  </div>

                  {/* Center: Image */}
                  <div className="relative flex-1 flex flex-col items-center justify-center py-8">
                    <div
                      className="relative z-10 w-full max-w-[260px] aspect-[4/3] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out"
                      />
                      {/* Subtle vignette */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80 group-hover:from-black/60 transition-all duration-300" /> */}
                    </div>
                  </div>

                  {/* Footer: Title & Description */}
                  <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-gilroy text-2xl font-bold text-black tracking-tight group-hover:text-white transition-colors uppercase">
                        {product.name}
                      </h3>
                      <p className="text-black/50 text-xs font-medium leading-relaxed font-gilroy tracking-wide max-w-[95%] group-hover:text-white/60 transition-colors duration-300 line-clamp-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Sub-link / Action */}
                    <div className="pt-6 flex items-center gap-2 group/link">
                      <span className="font-gilroy text-[10px] font-bold tracking-[0.2em] text-black group-hover:text-primary transition-colors uppercase border-b border-black/20 group-hover:border-primary pb-1">
                        EXPLORE PRODUCT
                      </span>
                      <Plus className="w-3 h-3 text-black/40 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Hover Sharp Border Glow */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-300" />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcaseSection;
