
import { Home, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const CareersHero = () => {
    return (
        <>
            <div className="pt-[72px] bg-white"></div>
            <section className="relative h-[calc(100vh-72px)] w-full overflow-hidden bg-white">
                {/* Background Circle Graphic - Right Side */}
                <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[80vh] h-[80vh] rounded-full border border-neutral-200/60 pointer-events-none" />
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full border border-neutral-100/40 pointer-events-none" />

                {/* Main Content Container */}
                <div className="h-full container mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-center relative">

                    {/* Breadcrumb - Top Left */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute top-8 left-6 md:left-12 lg:left-24 flex items-center gap-2 text-sm font-gilroy text-neutral-400"
                    >
                        <Home className="w-4 h-4" strokeWidth={1.5} />
                        <a
                            href="/"
                            className="hover:text-neutral-600 transition-colors cursor-pointer"
                        >
                            Home
                        </a>
                        <span className="mx-1">/</span>
                        <span className="text-neutral-900 font-medium">Careers</span>
                    </motion.div>


                    {/* Grid Layout for Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Main Headline - Left Side */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="lg:col-span-10"
                        >
                            <h1 className="font-gilroy font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight text-neutral-900">
                                Solve what matters
                                <br />
                                with Cluix
                            </h1>
                        </motion.div>
                    </div>
                    {/* Description - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="absolute bottom-12 right-6 md:right-12 lg:right-24 max-w-md"
                    >
                        <p className="font-gilroy text-base md:text-lg text-neutral-600 leading-relaxed">
                            We believe real progress comes from diverse thinkers taking on the hardest problems. At Cluix, we turn ambition into innovation and ideas into lasting impact.
                        </p>
                    </motion.div>


                    {/* Scroll Indicator - Bottom Right Vertical */}
                </div>
            </section>
        </>
    );
};

export default CareersHero;