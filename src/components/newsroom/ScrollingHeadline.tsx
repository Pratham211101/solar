import { motion } from "framer-motion";

const headlines = [
    "CLUIX LAUNCHES NEXT-GEN WATER ANALYZER C012",
    "NEW PARTNERSHIP WITH GLOBAL WATER ALLLIANCE",
    "EXPANDING OPERATIONS TO EUROPEAN MARKET",
    "AI-POWERED ANALYTICS NOW LIVE",
    "SUSTAINABLE WATER MONITORING BREAKTHROUGH",
    "CLUIX RECOGNIZED BY STARTUP INDIA",
];

const ScrollingHeadline = () => {
    return (
        <div className="relative w-full overflow-hidden bg-amber-400 py-4 flex items-center border-y-2 border-slate-900">
            {/* Tape Pattern Background (Slanted Stripes) */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #000 20px,
            #000 40px
          )`
                }}
            />

            <motion.div
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap gap-12 items-center relative z-10"
            >
                {[...headlines, ...headlines].map((text, i) => (
                    <div key={i} className="flex items-center gap-12">
                        <span className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter uppercase italic">
                            {text}
                        </span>
                        <span className="w-3 h-3 bg-slate-900 rotate-45 flex-shrink-0" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ScrollingHeadline;
