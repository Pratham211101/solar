import { motion } from "framer-motion";

const partners = [
    "IIT DELHI",
    "INVEST INDIA",
    "STARTUP INDIA",
    "HAR GHAR JAL",
    "IIT PALAKKAD",
    "PHED GUJARAT",
    "JAL JEEVAN MISSION",
    "NABL LABS",
    "MINISTRY OF AGRICULTURE",
    "CLEAN TECH HUB",
    "UNDP INDIA",
    "GOV OF RAJASTHAN",
];

export function SupportedCarousel() {
    return (
        <section className="py-12 bg-white overflow-hidden flex flex-col items-center justify-center">
            {/* Label for the strip */}
            <div className="mb-6 opacity-30">
                <span className="font-gilroy text-[9px] font-black tracking-[0.5em] uppercase">
                    Supported & Incubated By
                </span>
            </div>

            <div className="relative w-full">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-0"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div
                            key={`${partner}-${i}`}
                            className="flex-shrink-0 px-16 py-4 flex items-center justify-center group"
                        >
                            <span className="font-gilroy text-xl md:text-2xl font-black text-black/10 group-hover:text-primary transition-all duration-700 whitespace-nowrap tracking-tighter italic grayscale group-hover:grayscale-0">
                                {partner}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default SupportedCarousel;
