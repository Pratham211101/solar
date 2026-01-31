import { motion } from "framer-motion";

type BackToTopProps = {
    style?: string;
};

const BackToTop = ({ style }: BackToTopProps) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <motion.div
            aria-hidden="true"
            className={style || "flex flex-col items-center cursor-pointer"}
            onClick={scrollToTop}
            initial={{ y: 20, opacity: 0 }}
            animate={{
                y: [20, 0, 0, -20],
                opacity: [0, 1, 1, 0],
            }}
            transition={{
                duration: 1.8,
                times: [0, 0.35, 0.65, 1],
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.6,
            }}
            whileHover={{ scale: 1.1 }}
        >
            <span
                className="font-gilroy text-[9px] font-bold tracking-[0.5em] uppercase select-none text-muted-foreground hover:text-primary transition-colors"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
                BACK TO TOP
            </span>
        </motion.div>
    );
};

export default BackToTop;
