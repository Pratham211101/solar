import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 5, suffix: "+", label: "Products" },
  { value: 12, suffix: "+", label: "States Covered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10000, suffix: "+", label: "Tests Carried Out" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  const spring = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    duration: 2000 
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [spring]);

  const formattedValue = displayValue.toLocaleString();

  return (
    <span ref={ref}>
      {formattedValue}{suffix}
    </span>
  );
}

export function StatsHighlightSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-slate-800 via-primary/90 to-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsHighlightSection;
