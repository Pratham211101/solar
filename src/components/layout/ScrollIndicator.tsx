import { motion } from "framer-motion";
import { Droplet, Waves } from "lucide-react";

type ScrollIndicatorProps = {
    variant?: "light" | "dark";
    style?: string;
};

const ScrollIndicator = ({ variant = "light", style }: ScrollIndicatorProps) => {
    const isDark = variant === "dark";

    const colors = {
        line: isDark ? "bg-white/40" : "bg-neutral-400/50",
        text: isDark ? "text-white/70" : "text-neutral-500",
        drop: isDark ? "text-white/80" : "text-neutral-600",
    };

    return (
        <motion.div
            aria-hidden="true"
            className={style || "absolute right-0.5 md:right-1 bottom-12 flex flex-col items-center gap-3 z-50 pointer-events-none"}
            initial={{ y: -36, opacity: 0 }}
            animate={{
                y: [-36, 0, 0, 28],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 1.8,
                times: [0, 0.35, 0.65, 1], // ← pit stop window
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.6,
            }}
        >
            {/* Line */}
            <div className={`w-px h-10 mb-2 ${colors.line}`} />

            {/* Text */}
            <span
                className={`font-gilroy text-[10px] font-medium tracking-[0.3em] uppercase select-none ${colors.text}`}
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                SCROLL DOWN
            </span>

            {/* Water Drop — pulses ONLY while stopped */}
            <motion.div
                className={`${colors.drop} translate-x-[2px]`}
                transition={{
                    duration: 0.9,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 0.3,
                }}
            >
                <Droplet className={`w-4 h-4 ${colors.text}`} />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator;
