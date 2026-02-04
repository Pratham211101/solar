import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { reagentKitsData } from "@/data/reagentKits";

const ReagentKits = () => {
  // Separate the main kit and the rest
  const mainKit = reagentKitsData.find((p) => p.id === "reagent-kit-100");
  const otherKits = reagentKitsData.filter((p) => p.id !== "reagent-kit-100");

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
                High-quality chemical reagents for accurate colorimetric
                testing. Optimized for decision-grade analysis with the C012
                platform.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main Kit Card - Left aligned, max width as before */}
        {mainKit && (
          <section className="pb-8">
            <div className="container mx-auto px-6 flex justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="group cursor-pointer w-full max-w-[420px]" // max-w as before, left aligned
              >
                <Link
                  to={`/products/reagent-kit/${mainKit.id}`}
                  className="h-full block"
                >
                  <div className="relative h-full bg-white border rounded-xl border-gray-100 overflow-hidden transition-all duration-700 p-8 flex flex-col items-center min-h-[350px] shadow-lg">
                    {/* Dark Hover State Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                    {/* Header */}
                    <div className="z-10 flex justify-between items-start mb-6 w-full">
                      <span className="font-bold text-cyan-400 group-hover:text-cyan-400 transition-colors duration-500 tracking-[0.2em]">
                        Water Quality
                      </span>
                      <Plus className="w-4 h-4 text-gray-200 group-hover:text-cyan-400 transition-all duration-500 group-hover:rotate-90" />
                    </div>
                    {/* Image Area */}
                    <div className="relative z-10 flex-1 flex items-center justify-center mb-6 md:mb-0 md:mr-10 transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={mainKit.image}
                        alt={mainKit.name}
                        className="max-w-full max-h-[220px] object-contain"
                      />
                    </div>

                    {/* Info Area */}
                    <div className="relative z-10 flex-1 flex flex-col h-full tracking-widest text-[8px]">
                      {/* Divider */}
                      <div className="h-px w-full bg-gray-100 group-hover:bg-white/10 mb-4 transition-colors duration-500" />
                      {/* Footer Info */}
                      <div className="mt-auto w-full">
                        <h3 className="font-gilroy text-2xl font-extrabold mb-2 text-black group-hover:text-white transition-colors duration-500 tracking-tighter line-clamp-2 leading-tight">
                          {mainKit.name}
                        </h3>
                        <p className="font-gilroy text-xs font-bold text-gray-400 group-hover:text-gray-300 leading-normal tracking-widest line-clamp-2">
                          {mainKit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        )}

        {/* Other Kits Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {otherKits.map((product, i) => {
                const cardLink = `/products/reagent-kit/${product.id}`;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group cursor-pointer col-span-1"
                  >
                    <Link to={cardLink} className="block h-full">
                      <div className="relative h-full bg-white border rounded-md border-gray-100 overflow-hidden transition-all duration-700 p-5 flex flex-col min-h-[350px]">
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
                          <div className="relative flex-1 flex items-center justify-center mb-6 transition-transform duration-700 group-hover:scale-110">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-w-full max-h-[120px] object-contain"
                            />
                          </div>

                          {/* Divider */}
                          <div className="h-px w-full bg-gray-100 group-hover:bg-white/10 mb-4 transition-colors duration-500" />

                          {/* Footer Info */}
                          <div className="mt-auto">
                            <h3 className="font-gilroy text-sm font-extrabold mb-1.5 text-black group-hover:text-white transition-colors duration-500 tracking-tighter line-clamp-2 leading-tight">
                              {product.name}
                            </h3>
                            <p className="font-gilroy text-[7px] font-bold text-gray-400 group-hover:text-gray-300 leading-normal tracking-widest line-clamp-2">
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
