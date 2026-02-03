import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { reagentKitsData } from "@/data/reagentKits";

const ReagentKits = () => {
  return (
    <div className="bg-white min-h-screen">
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-16 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl">
              <h1 className="font-gilroy text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-tight mb-10 flex flex-wrap items-center gap-x-4">
                <span className="font-gilroy font-semibold">REAGENT</span>
                <div className="text-gradient italic px-2">KITS</div>
              </h1>
              <p className="font-gilroy text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed tracking-wide uppercase font-bold">
                High-quality chemical reagents for accurate colorimetric testing. Optimized for decision-grade analysis with the C012 platform.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {reagentKitsData.map((product, i) => {
                const cardLink = `/products/reagent-kit/${product.id}`;
                const isLarge = product.id === "reagent-kit-100";

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`group cursor-pointer ${isLarge ? "col-span-2 md:col-span-2 lg:col-span-2" : "col-span-1"}`}
                  >
                    <Link to={cardLink} className="block h-full">
                      <div className="relative h-full bg-white border border-gray-100 overflow-hidden transition-all duration-700 p-5 flex flex-col min-h-[350px]">
                        {/* Dark Hover State Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />

                        <div className="relative z-10 flex flex-col h-full tracking-widest text-[8px] uppercase">
                          {/* Header */}
                          <div className="flex justify-between items-start mb-6">
                            <span className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-500 tracking-[0.2em]">
                              Water Quality
                            </span>
                            <Plus className="w-3.5 h-3.5 text-gray-200 group-hover:text-cyan-400 transition-all duration-500 group-hover:rotate-90" />
                          </div>

                          {/* Image Area */}
                          <div className={`relative flex-1 flex items-center justify-center mb-6 transition-transform duration-700 group-hover:scale-110`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className={`max-w-full ${isLarge ? "max-h-[180px]" : "max-h-[120px]"} object-contain`}
                            />
                          </div>

                          {/* Divider */}
                          <div className="h-px w-full bg-gray-100 group-hover:bg-white/10 mb-4 transition-colors duration-500" />

                          {/* Footer Info */}
                          <div className="mt-auto">
                            <h3 className={`font-gilroy ${isLarge ? "text-lg" : "text-sm"} font-extrabold mb-1.5 text-black group-hover:text-white transition-colors duration-500 tracking-tighter line-clamp-2 leading-tight`}>
                              {product.name}
                            </h3>
                            <p className={`font-gilroy ${isLarge ? "text-[8px]" : "text-[7px]"} font-bold text-gray-400 group-hover:text-gray-300 leading-normal tracking-widest line-clamp-2`}>
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
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

export default ReagentKits;
