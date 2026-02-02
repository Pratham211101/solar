
import { Home, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollIndicator from "../layout/ScrollIndicator";

const CareersHero = () => {
    return (
        <>
            <section className="relative h-screen w-full overflow-hidden flex items-center">
                {/* Background Photo */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/careers-hero.png"
                        alt="Office background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
                </div>

                {/* Main Content Container */}
                <div className="h-full relative z-10 w-full container mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center">
                    {/* Grid Layout for Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Main Headline - Left Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="lg:col-span-10"
                        >
                            <h1 className="font-gilroy font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-white">
                                Solve what matters
                                <br />
                                <div className="flex items-center gap-[0.2em]">
                                    <span>with</span>
                                    <div className="text-gradient italic pr-4 py-2">Cluix</div>
                                </div>
                            </h1>
                        </motion.div>
                    </div>

                    {/* Description - Bottom Right Positioning */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="absolute bottom-12 right-6 md:right-12 lg:right-24 max-w-md"
                    >
                        <p className="font-gilroy text-base md:text-lg text-white/80 leading-relaxed">
                            We believe real progress comes from diverse thinkers taking on the hardest problems. At <span className="text-white font-semibold italic">Cluix</span>, we turn ambition into innovation and ideas into lasting impact.
                        </p>
                    </motion.div>

                    {/* Scroll Indicator - Positioning it like original */}
                    <ScrollIndicator variant="dark" />
                </div>
            </section>
        </>
    );
};

export default CareersHero;