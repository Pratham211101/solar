import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const products = [
  {
    id: "cluix-c012",
    name: "CLUIX C012",
    category: "WATER QUALITY",
    description: "Advanced multi-parameter water quality analyzer with IoT connectivity.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    href: "/products/cluix-c012"
  },
  {
    id: "reagent-kit",
    name: "REAGENT KIT",
    category: "LAB SOLUTIONS",
    description: "Complete reagent kit for comprehensive water quality testing.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    href: "/products/reagent-kit"
  },
  {
    id: "varunaa",
    name: "VARUNAA",
    category: "MONITORING",
    description: "Smart water level monitoring system with real-time alerts.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    href: "/products/varunaa"
  },
  {
    id: "ocems",
    name: "OCEMS DEVICE",
    category: "COMPLIANCE",
    description: "Online Continuous Emission Monitoring for industrial compliance.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    href: "/products/ocems"
  },
];

export function ProductsShowcaseSection() {
  return (
    <section className="min-h-screen py-24 bg-white relative overflow-hidden flex flex-col justify-center">

      {/* Heading Section */}
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-gilroy text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-none">
            Our <span className="text-gray-300 italic">Products</span>
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full">
          {products.map((product, i) => (
            <Link to={product.href} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: i % 2 === 0 ? 0 : 60 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                className="group relative border border-black/5 p-8 pb-10 h-[500px] flex flex-col justify-between overflow-hidden"
              >
                {/* Black to Cyan Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                {/* Header: Category & Icon */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="font-gilroy text-[10px] tracking-[0.4em] text-primary uppercase font-bold">{product.category}</span>
                  </div>
                  <Plus className="w-5 h-5 text-black/20 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
                </div>

                {/* Center: Image */}
                <div className="relative flex-1 flex flex-col items-center justify-center p-4">
                  <div
                    className="relative z-10 w-full max-w-[220px] aspect-[4/3] overflow-hidden shadow-sm group-hover:shadow-primary/20 transition-transform duration-500 ease-out group-hover:scale-110"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80 group-hover:from-black/60 transition-all duration-300" />
                  </div>
                </div>

                {/* Footer: Title & Description */}
                <div className="relative z-10 pt-6 border-t border-black/5 group-hover:border-white/10 transition-colors duration-300 space-y-4">
                  <div className="block">
                    <h3 className="font-gilroy text-xl font-bold text-black tracking-tighter group-hover:text-white transition-colors uppercase">
                      {product.name}
                    </h3>
                  </div>
                  <div className="h-10">
                    <p className="text-black/40 text-[10px] font-medium leading-relaxed font-gilroy tracking-wider max-w-[90%] uppercase group-hover:text-white/60 transition-colors duration-300 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Hover Sharp Border Glow */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcaseSection;
