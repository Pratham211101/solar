import SEO from "../components/SEO";
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
    <>
      <SEO title="Reagent Kits | SUNBOT" />
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

        {/* Main Kit Card */}
        {mainKit && (
          <section className="pb-16">
            <div className="container mx-auto px-6 flex justify-start">
              <Link
                to={`/products/reagent-kit/${mainKit.id}`}
                className="w-full max-w-[420px]"
              >
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
                        <span className="font-gilroy text-[9px] tracking-[0.2em] text-primary uppercase font-bold">TESTING CONSUMABLES</span>
                      </div>
                    </div>

                    {/* Center: Image Area */}
                    <div className="relative flex-1 flex flex-col items-center justify-center py-8">
                      <div className="relative z-10 w-full max-w-[280px] aspect-[4/3] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                        <img
                          src={mainKit.image}
                          alt={mainKit.name}
                          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out"
                        />
                      </div>
                    </div>

                    {/* Footer: Title & Description */}
                    <div className="relative z-10 space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-gilroy text-2xl font-bold text-black tracking-tight group-hover:text-white transition-colors uppercase leading-tight">
                          {mainKit.name}
                        </h3>
                        <p className="text-black/50 text-xs font-medium leading-relaxed font-gilroy tracking-wide max-w-[95%] group-hover:text-white/60 transition-colors duration-300 line-clamp-4">
                          {mainKit.description}
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
            </div>
          </section>
        )}

        {/* Other Kits Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {otherKits.map((product, i) => (
                <Link to={`/products/reagent-kit/${product.id}`} key={product.id}>
                  <motion.div
                    layout
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.05 }
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 26
                    }}
                    className="relative will-change-transform hover:z-20"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.03 }}
                      className="group relative border border-black/10 p-5 pb-6 h-[340px] flex flex-col justify-between overflow-hidden bg-white transition-all hover:shadow-xl hover:shadow-black/5 rounded-md"
                    >
                      {/* Black -> Cyan Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                      {/* Header: Category Badge - Smaller */}
                      <div className="relative z-10 flex justify-between items-center">
                        <div className="flex justify-center items-center px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] group-hover:border-white/20 group-hover:bg-white/5 transition-colors">
                          <span className="font-gilroy text-[7px] tracking-[0.2em] text-cyan-400 group-hover:text-primary uppercase font-bold">WATER QUALITY</span>
                        </div>
                      </div>

                      {/* Center: Image Area - Compact */}
                      <div className="relative flex-1 flex flex-col items-center justify-center py-4">
                        <div className="relative z-10 w-full max-w-[140px] aspect-[4/3] overflow-hidden group-hover:scale-110 transition-transform duration-700 ease-out">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 ease-out"
                          />
                        </div>
                      </div>

                      {/* Footer: Title & Description - Tiny */}
                      <div className="relative z-10 space-y-2">
                        <div className="space-y-1">
                          <h3 className="font-gilroy text-xs font-bold text-black tracking-tight group-hover:text-white transition-colors uppercase leading-tight line-clamp-1">
                            {product.name}
                          </h3>
                          <p className="text-black/50 text-[8px] font-medium leading-relaxed font-gilroy tracking-wide max-w-[95%] group-hover:text-white/60 transition-colors duration-300 line-clamp-2">
                            {product.description}
                          </p>
                        </div>

                        {/* Sub-link / Action - Minimal */}
                        <div className="pt-2 flex items-center gap-1.5 group/link">
                          <span className="font-gilroy text-[7px] font-bold tracking-[0.2em] text-black group-hover:text-primary transition-colors uppercase border-b border-black/20 group-hover:border-primary pb-0.5">
                            EXPLORE
                          </span>
                          <Plus className="w-2.5 h-2.5 text-black/40 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
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
      </main>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  
    </>
  );
};

export default ReagentKits;
