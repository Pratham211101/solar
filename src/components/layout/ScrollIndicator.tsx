import { motion } from "framer-motion";

const ScrollIndicator = () => {
    return (
        <div className="fixed right-8 md:right-12 bottom-12 flex flex-col items-center gap-3">
            {/* Vertical Line (optional decorative) */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-px bg-white/30 mb-2"
            />

            {/* Text */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-gilroy text-[10px] font-medium tracking-[0.3em] text-white/80 uppercase"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                SCROLL DOWN
            </motion.span>

            {/* 4-Point Star with Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
                </svg>
            </motion.div>
        </div>
    );
};

export default ScrollIndicator;