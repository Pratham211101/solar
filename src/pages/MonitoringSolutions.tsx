import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { productsData } from "@/data/products";

const MonitoringSolutions = () => {
    // Filter for monitoring solutions
    const solutions = [
        {
            ...productsData.varunaa,
            category: "GROUNDWATER",
        },
        {
            ...productsData.ocems,
            category: "COMPLIANCE",
        }
    ];

    return (
    <>
      <SEO title="Monitoring Solutions | SUNBOT" />
      <div className="bg-white min-h-screen">
            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative pt-24 pb-16 overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <ScrollReveal className="max-w-4xl text-left">
                            <h1 className="font-gilroy text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-tight mb-10 flex flex-wrap items-center gap-x-4">
                                <span className="font-gilroy font-semibold">MONITORING</span>
                                <div className="text-gradient italic px-2">SOLUTIONS</div>
                            </h1>
                            <p className="font-gilroy text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed tracking-wide uppercase font-bold">
                                Continuous, IoT-enabled surveillance systems for industrial effluents, groundwater resources, and urban water infrastructure.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Solutions Grid - Matching ProductsShowcaseSection Style */}
                <section className="pb-32">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {solutions.map((product, i) => {
                                const isComingSoon = (product as any).comingSoon;
                                const cardLink = isComingSoon ? "#" : `/products/${product.id}`;

                                return (
                                    <Link to={cardLink} key={product.id} className={isComingSoon ? "cursor-default" : "cursor-pointer"}>
                                        <motion.div
                                            layout
                                            initial="rest"
                                            animate="rest"
                                            whileHover={isComingSoon ? "rest" : "hover"}
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
                                                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
                                                className="group relative border border-black/10 p-8 pb-10 h-[580px] flex flex-col justify-between overflow-hidden bg-white transition-all hover:shadow-2xl hover:shadow-black/10 rounded-md"
                                            >
                                                {/* Black to Cyan Gradient Background on Hover */}
                                                {!isComingSoon && (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                                                )}

                                                {/* Header: Category Badge */}
                                                <div className="relative z-10 flex justify-between items-center">
                                                    <div className="flex justify-center items-center px-4 py-1.5 rounded-full border border-black/5 bg-black/[0.02] group-hover:border-white/20 group-hover:bg-white/5 transition-colors">
                                                        <span className="font-gilroy text-[9px] tracking-[0.2em] text-primary uppercase font-bold">{product.category}</span>
                                                    </div>
                                                </div>

                                                {/* Center: Image Area */}
                                                <div className="relative flex-1 flex flex-col items-center justify-center py-8">
                                                    <div className="relative z-10 w-full max-w-[280px] aspect-[4/3] overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className={`w-full h-full object-contain transition-all duration-300 ${isComingSoon ? 'opacity-30 grayscale' : 'opacity-90 group-hover:opacity-100'}`}
                                                        />
                                                    </div>
                                                    {isComingSoon && (
                                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                                            <span className="font-gilroy text-[9px] font-bold text-black tracking-[0.3em] uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">
                                                                Coming Soon
                                                            </span>
                                                        </div>
                                                    )}
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
                                                            {isComingSoon ? 'PRE-ORDER NOW' : 'EXPLORE PRODUCT'}
                                                        </span>
                                                        <Plus className="w-3 h-3 text-black/40 group-hover:text-primary group-hover:rotate-90 transition-all duration-300" />
                                                    </div>
                                                </div>

                                                {/* Hover Sharp Border Glow */}
                                                {!isComingSoon && (
                                                    <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-300" />
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    </Link>
                                );
                            })}
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

export default MonitoringSolutions;
