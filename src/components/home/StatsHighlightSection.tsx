import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "States covered" },
  { value: 6, suffix: "+", label: "National & International awards" },
  { value: 20, suffix: "+", label: "Clients" },
  { value: 10000, suffix: "+", label: "Water Tests Done using our solutions" },
];

export function StatsHighlightSection() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Simple intersection observer for reveal
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-[#00f8fc] to-[#009dff] overflow-hidden"
    >
      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle shimmer accent */}
      <motion.div
        initial={{ opacity: 0, x: "-30%" }}
        animate={isInView ? { opacity: 0.15, x: "120%" } : {}}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-white/0 via-white/60 to-white/0 blur-2xl pointer-events-none z-10"
      />

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} trigger={isInView} />
          ))}
        </div>
      </div>

      {/* Bottom Subtle Sand Slope */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </section>
  );
}

function StatCard({ stat, index, trigger }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => {
        setRevealed(true);
      }, 400 + index * 200); // Staggered reveal
      return () => clearTimeout(timer);
    }
  }, [trigger, index]);

  return (
    <div className="text-center relative">
      <div className="relative inline-block mb-4 overflow-hidden py-4 px-2">
        {/* The Number */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={revealed ? {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          } : {}}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1],
            delay: 0.1
          }}
          className="font-gilroy text-5xl md:text-7xl font-extrabold text-[#ffffff] tracking-tighter"
        >
          {stat.value.toLocaleString()}{stat.suffix}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={revealed ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-gilroy font-bold text-[10px] tracking-[0.4em] text-[#deeff9] uppercase"
      >
        {stat.label}
      </motion.div>

      {/* Bubbles animation on reveal */}
      {revealed && (
        <div className="absolute inset-0 pointer-events-none">
          {[1, 2, 3].map((b) => (
            <motion.div
              key={b}
              initial={{ opacity: 0.4, y: 0, x: 0, scale: 0 }}
              animate={{ opacity: 0, y: -30, x: (b - 2) * 16, scale: 1.2 }}
              transition={{ duration: 0.8, delay: b * 0.08 }}
              className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full border border-white/40"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default StatsHighlightSection;