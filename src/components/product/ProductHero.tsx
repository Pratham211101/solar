import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Droplets, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductData } from "@/data/products";
import AppleGlassButton from "../ui/AppleGlassButton";
import ScrollReveal from "../ui/ScrollReveal";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

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
    <section className="h-[100vh] flex items-center bg-white overflow-hidden font-gilroy relative">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-white skew-x-[-12deg] translate-x-[20%] pointer-events-none" />
      <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] mb-8 tracking-tighter-custom">
                {product.name.split(' ').slice(0, -1).join(' ')}
                <span className="text-gradient italic">{` ${product.name.split(' ').pop()}`}</span>
              </h1>

              <p className="text-2xl md:text-3xl font-medium text-slate-800 mb-2 max-w-2xl leading-tight opacity-90">
                {product.tagline || product.description.split('.')[0]}
              </p>

              <p className="text-lg text-muted-foreground mb-6 max-w-xl leading-relaxed">
                {product.description}
              </p>

              {/* Features Chips */}
              <div className="flex flex-wrap gap-3 mb-6">
                {product.features.map((feature, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-600 shadow-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 mb-6 ">
                <Link to="/demo">

                  <AppleGlassButton
                    className="w-full bg-slate-900 border-none hover:bg-slate-800 text-base"
                    icon={<ArrowRight className="w-6 h-6" />}
                  >
                    Request a Demo
                  </AppleGlassButton>
                </Link>

                <a
                  href="#deployment-support"
                  className="inline-flex items-center gap-4 px-4 border border-slate-200 text-slate-600 rounded-full font-bold hover:bg-slate-50 transition-all text-lg"
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
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal delay={0.3} direction="right" className="w-full">
              <div className="relative group w-full aspect-square flex items-center justify-center overflow-hidden rounded-2xl bg-gray-50/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${product.name} view ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.1, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full object-contain p-8"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.preventDefault(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white z-20"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-primary w-6" : "bg-slate-300"
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
