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
    offset: ["start end", "start start"],
  });

  // Section slides up and covers the previous section
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="relative" style={{ zIndex: index + 1 }}>
      <motion.div
        style={{
          y,
          opacity,
        }}
        className={`relative bg-background ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FullPageSection;
