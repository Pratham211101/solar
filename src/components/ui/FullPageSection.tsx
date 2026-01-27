import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FullPageSectionProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

const FullPageSection = ({ children, className = "", index = 0 }: FullPageSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Transform values for the "page coming in" effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default FullPageSection;
