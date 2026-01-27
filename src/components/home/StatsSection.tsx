import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";

const stats = [
  { value: 500, suffix: "+", label: "Installations Worldwide" },
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
  { value: 24, suffix: "/7", label: "Customer Support" },
  { value: 50, suffix: "+", label: "Countries Served" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8"
              >
                <div className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
