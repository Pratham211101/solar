import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  once?: boolean;
}

const getVariants = (direction: string, duration: number): Variants => {
  const hidden: Record<string, { opacity: number; x?: number; y?: number }> = {
    up: { opacity: 0, y: 60 },
    down: { opacity: 0, y: -60 },
    left: { opacity: 0, x: 60 },
    right: { opacity: 0, x: -60 },
    fade: { opacity: 0 },
  };

  return {
    hidden: hidden[direction],
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants(direction, duration)}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
