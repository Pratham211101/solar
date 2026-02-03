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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-1/2 max-w-4xl mx-auto">
                            {solutions.map((product, i) => {
                                const isComingSoon = (product as any).comingSoon;
                                const cardLink = isComingSoon ? "#" : `/products/${product.id}`;

                                return (
                                    <Link to={cardLink} key={product.id} className={isComingSoon ? "cursor-default" : "cursor-pointer"}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
                                            className="group relative border border-black/5 p-8 pb-10 h-[500px] flex flex-col justify-between overflow-hidden"
                                        >
                                            {/* Black to Cyan Gradient Background on Hover */}
                                            {!isComingSoon && (
                                                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                            )}

                                            {/* Header: Category & Icon */}
                                            <div className="relative z-10 flex justify-between items-start">
                                                <div>
                                                    <span className="font-gilroy text-[10px] tracking-[0.4em] text-primary uppercase font-bold">
                                                        {product.category}
                                                    </span>
                                                </div>
                                                <Plus className={`w-5 h-5 transition-all duration-300 ${isComingSoon ? 'text-black/10' : 'text-black/20 group-hover:text-primary group-hover:rotate-90'}`} />
                                            </div>

                                            {/* Center: Image Area */}
                                            <div className="relative flex-1 flex flex-col items-center justify-center p-4">
                                                <div className="relative z-10 w-full max-w-[220px] aspect-[4/3] overflow-hidden transition-transform duration-500 ease-out group-hover:scale-110">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className={`w-full h-full object-cover transition-all duration-300 ${isComingSoon ? 'opacity-30 grayscale' : 'opacity-90 group-hover:opacity-100'}`}
                                                    />
                                                    {/* Subtle vignette */}
                                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80 transition-all duration-300 ${!isComingSoon && 'group-hover:from-black/60'}`} />
                                                </div>
                                                {isComingSoon && (
                                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                                        <span className="font-gilroy text-[10px] font-black text-black tracking-[0.3em] uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5">
                                                            Coming Soon
                                                        </span>
                                                    </div>
                                                )}
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
                                            {!isComingSoon && (
                                                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-300" />
                                            )}
                                        </motion.div>
                                    </Link>
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

export default MonitoringSolutions;
