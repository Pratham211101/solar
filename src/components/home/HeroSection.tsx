import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollIndicator from "../layout/ScrollIndicator";
import AppleGlassButton from "../ui/AppleGlassButton";

const scrollTexts = ["ENVIRONMENTAL MONITORING", "WATER QUALITY ANALYSIS", "EMISSION TRACKING", "SUSTAINABLE FUTURE"];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Gradient Curves */}
      <div className="absolute inset-0 bg-curve-top pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-curve-bottom pointer-events-none opacity-50" />

      {/* Content anchored to Bottom Left */}
      <div className="relative z-10 container mx-auto px-12 pb-24 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-gilroy font-bold leading-[0.85] mb-10 tracking-tighter"
          >
            <span className="text-white">Precision</span>
            <br />
            <div className="text-gradient italic">Simplified</div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-12"
          >
            <Link to="/products">
              <AppleGlassButton icon={<ArrowUpRight className="w-5 h-5" />} >
                Explore Products
              </AppleGlassButton>
            </Link>

            <motion.p
              className="text-lg md:text-xl text-white/60 font-gilroy font-light tracking-wide max-w-md border-l border-white/20 pl-6"
            >
              Building the future of environmental monitoring with decision-grade accuracy.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Text (Top Right) - Subtler */}
      <div className="hidden lg:flex absolute right-12 top-24 flex-col items-end gap-2 z-10">
        {scrollTexts.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 5,
              delay: index * 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-right"
          >
            <span className="text-[9px] tracking-[0.6em] text-white font-gilroy uppercase whitespace-nowrap">{text}</span>
          </motion.div>
        ))}
      </div>

      <ScrollIndicator style="absolute right-12 bottom-12 flex flex-col items-center gap-3 z-50 pointer-events-none" />

      {/* Bottom Subtle Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
