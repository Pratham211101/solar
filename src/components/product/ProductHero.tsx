import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductData } from "@/data/products";
import GlowButton from "../ui/GlowButton";
import ScrollReveal from "../ui/ScrollReveal";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LightPillar from "../home/LightPillar";

interface ProductHeroProps {
  product: ProductData;
}

const ProductHero = ({ product }: ProductHeroProps) => {
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length, currentIndex]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="min-h-screen lg:h-screen py-24 lg:py-0 flex items-center bg-[#050505] overflow-y-auto lg:overflow-hidden font-gilroy relative">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={0.6}
          rotationSpeed={0.8}
          glowAmount={0.002}
          pillarWidth={3}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={25}
          mixBlendMode="screen"
          quality="high"
        />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tighter-custom uppercase">
                {product.name.split(' ').slice(0, -1).join(' ')}
                <span className="text-gradient italic">{` ${product.name.split(' ').pop()}`}</span>
              </h1>

              <p className="text-2xl md:text-3xl font-medium text-white/90 mb-4 max-w-2xl leading-tight">
                {product.tagline || product.description.split('.')[0]}
              </p>

              <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                {product.description}
              </p>

              {/* Features Chips */}
              <div className="flex flex-wrap gap-3 mb-8">
                {product.features.map((feature, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-white/80 shadow-sm transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mb-8">
                <Link to="/demo">
                  <GlowButton
                    className="text-base"
                    icon={<ArrowRight className="w-6 h-6" />}
                  >
                    Request a Demo
                  </GlowButton>
                </Link>

                <a
                  href="#deployment-support"
                  className="inline-flex items-center gap-6 px-8 py-4 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all text-lg"
                >
                  Get a Quote
                </a>
              </div>

              <div className="flex flex-col gap-3">
                {product.brochureLink && (
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={product.brochureLink}
                    className="inline-flex items-center gap-3 text-primary font-bold hover:text-primary/80 transition-colors text-lg group"
                  >
                    <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Download technical specifications
                  </motion.a>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Product Image Carousel */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full max-w-lg mx-auto">
            <ScrollReveal delay={0.3} direction="right" className="w-full">
              <div className="relative group w-full aspect-square flex items-center justify-center overflow-hidden rounded-[40px] bg-white/5 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${product.name} view ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.05, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full object-contain p-12 drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                  />
                </AnimatePresence>

                {/* Floating Stat Badge */}
                {/* {product.stat && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute top-8 right-8 p-4 bg-[#0A0A0A] backdrop-blur-md rounded-2xl shadow-2xl z-20 border border-white/10"
                  >
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-primary leading-none">
                        {product.stat.value}
                      </span>
                      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">
                        {product.stat.label}
                      </span>
                    </div>
                  </motion.div>
                )} */}

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.preventDefault(); prevImage(); }}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); nextImage(); }}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-black/70 hover:scale-110 z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-8" : "bg-white/20"
                            }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
