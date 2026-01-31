import { motion } from "framer-motion";

type ScrollIndicatorProps = {
    variant?: "light" | "dark";
    style?: string;
};

const ScrollIndicator = ({ variant = "light", style }: ScrollIndicatorProps) => {
    const isDark = variant === "dark";

    const colors = {
        text: isDark ? "text-white/80" : "text-neutral-500",
    };

    return (
        <motion.div
            aria-hidden="true"
            className={style || "absolute right-0.5 md:right-1 bottom-12 flex flex-col items-center z-50 pointer-events-none"}
            initial={{ y: -20, opacity: 0 }}
            animate={{
                y: [-20, 0, 0, 20],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 1.8,
                times: [0, 0.35, 0.65, 1],
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.6,
            }}
        >
            {/* Text */}
            <span
                className={`font-gilroy text-[9px] font-bold tracking-[0.5em] uppercase select-none ${colors.text}`}
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                SCROLL DOWN
            </span>
        </motion.div>
    );
};

export default ScrollIndicator;
