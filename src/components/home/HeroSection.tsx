import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollIndicator from "../layout/ScrollIndicator";
import GlowButton from "../ui/GlowButton";

const scrollTexts = ["SMART SOLAR LIGHTING", "CLEAN ENERGY SOLUTIONS", "SUSTAINABLE CITIES", "ENERGY INDEPENDENCE"];

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    // Load video after mount to prioritize critical assets (fonts, stylesheets, bundle JS)
    const timer = setTimeout(() => {
      setVideoSrc("/videos/hero-bg2-web.mp4");
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        <div className="hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Gradient Curves */}
      <div className="absolute inset-0 bg-curve-top pointer-events-none opacity-50" />
      <div className="absolute inset-0 bg-curve-bottom pointer-events-none opacity-50" />

      {/* Content anchored to Bottom Left */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24 text-left">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-gilroy font-bold leading-[1.0] md:leading-[0.85] mb-8 md:mb-10 tracking-tighter">
            <span className="text-white">Lighting the Future,</span>
            <br />
            <div className="text-gradient italic">One space at a time, with SUNBOT</div>
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
            <Link to="/products">
              <GlowButton icon={<ArrowUpRight className="w-5 h-5" />} >
                Explore Products
              </GlowButton>
            </Link>

            <p className="text-base md:text-lg lg:text-xl text-white/60 font-gilroy font-light tracking-wide max-w-xl border-l-2 md:border-l border-white/20 pl-4 md:pl-6">
              Building the future of urban infrastructure with intelligent solar lighting, off-grid power systems, and smart city connectivity solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Animated Scroll Text (Top Right) - Subtler */}
      <div className="hidden lg:flex absolute right-12 top-72 flex-col items-end gap-2 z-10">
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

      <ScrollIndicator style="hidden md:flex absolute right-12 bottom-12 flex-col items-center gap-3 z-50 pointer-events-none" />

      {/* Bottom Subtle Highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
