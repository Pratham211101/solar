import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from "lucide-react";

const newsletters = [
    {
        id: 1,
        title: "Advancing Precision in Water Analytics",
        date: "April - June 2025",
        issue: "AMJ '25",
        image: "/images/newsletters/amj_newsletter.png",
        pdf: "/images/newsletters/AMJ Newsletter 2025-26.pdf",
        description: "Exploring the next generation of smart water management solutions and satellite integration.",
    },
    {
        id: 2,
        title: "Innovations in Field Monitoring",
        date: "January - March 2025",
        issue: "JFM '25",
        image: "/images/newsletters/jfm_newsletter.png",
        pdf: "/images/newsletters/JFM year end newsletter 24-25.pdf",
        description: "Year-end reflections on deploying hardware at scale across varied Indian terrains.",
    },
    {
        id: 3,
        title: "Scaling Impact Across Ecosystems",
        date: "October - December 2024",
        issue: "OND '24",
        image: "/images/newsletters/ond_newsletter.png",
        pdf: "/images/newsletters/OND Newsletter.pdf",
        description: "How centralized data dashboards are empowering urban local bodies with real-time insights.",
    },
    {
        id: 4,
        title: "The Science of Sustainable Water",
        date: "July - September 2024",
        issue: "JAS '24",
        image: "/images/newsletters/jas_newsletter.png",
        pdf: "/images/newsletters/JAS Newsletter.pdf",
        description: "A deep dive into reagent chemistry and its critical role in nationwide compliance monitoring.",
    },
];

const NewsletterCarousel = () => {
    const [index, setIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const next = () => {
        setIndex((prev) => (prev + 1) % newsletters.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + newsletters.length) % newsletters.length);
    };

    const getCardIndex = (cardIndex: number) => {
        const total = newsletters.length;
        let diff = cardIndex - index;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    const isMobile = windowWidth < 768;
    const cardOffset = isMobile ? 180 : 320;

    return (
        <section className="py-12 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-gilroy font-extrabold text-slate-900 mb-4 uppercase">Previous Editions</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Stay ahead of the curve with our archived newsletters. Expert insights, technical guides,
                            and the latest environmental monitoring breakthroughs.
                        </p>
                    </motion.div>
                </div>

                <div className="relative h-[500px] flex items-center justify-center">
                    {/* Controls */}
                    <div className="absolute top-1/2 left-0 md:left-12 -translate-y-1/2 z-40">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prev}
                            className="p-4 rounded-full bg-white shadow-xl border border-slate-100 text-slate-600 hover:text-primary transition-colors flex items-center justify-center group"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                        </motion.button>
                    </div>
                    <div className="absolute top-1/2 right-0 md:right-12 -translate-y-1/2 z-40">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={next}
                            className="p-4 rounded-full bg-white shadow-xl border border-slate-100 text-slate-600 hover:text-primary transition-colors flex items-center justify-center group"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Cards Container */}
                    <div className="relative w-full max-w-5xl h-full flex items-center justify-center perspective-1000">
                        {newsletters.map((newsletter, i) => {
                            const relativeIndex = getCardIndex(i);
                            const isActive = relativeIndex === 0;
                            const isVisible = Math.abs(relativeIndex) <= 1;

                            return (
                                <motion.div
                                    key={newsletter.id}
                                    initial={false}
                                    animate={{
                                        x: relativeIndex * cardOffset,
                                        scale: isActive ? 1 : 0.8,
                                        rotateY: relativeIndex * -35,
                                        zIndex: isActive ? 30 : 20 - Math.abs(relativeIndex),
                                        opacity: isVisible ? 1 : 0,
                                        filter: isActive ? "blur(0px)" : "blur(2px)",
                                    }}
                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className={`absolute w-[280px] md:w-[350px] h-[450px] cursor-pointer ${!isVisible ? "pointer-events-none" : ""}`}
                                    onClick={() => {
                                        if (relativeIndex !== 0) {
                                            setIndex(i);
                                        }
                                    }}
                                >
                                    <div className="w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col bg-slate-900 border-[12px] border-white group relative">
                                        {/* Background Image with Gradient Overlay */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={newsletter.image}
                                                alt={newsletter.title}
                                                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                        </div>

                                        <div className="p-8 h-full flex flex-col relative z-20">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] uppercase border border-white/30">
                                                    {newsletter.issue}
                                                </span>
                                                <a
                                                    href={newsletter.pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-primary/80 transition-colors"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                                </a>
                                            </div>

                                            <div className="mt-auto">
                                                <div className="flex items-center gap-2 text-white/90 text-[11px] font-medium tracking-wide mb-4 uppercase">
                                                    <Calendar className="w-4 h-4 opacity-70" />
                                                    {newsletter.date}
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-[1.1] mb-5 group-hover:translate-x-1 transition-transform">
                                                    {newsletter.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-4 mt-4">
                    {newsletters.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className="py-4 px-2"
                        >
                            <div className={`h-1.5 transition-all duration-500 rounded-full ${index === i ? "w-10 bg-primary" : "w-3 bg-slate-200 hover:bg-slate-300"
                                }`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsletterCarousel;
