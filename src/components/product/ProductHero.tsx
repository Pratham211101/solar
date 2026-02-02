import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Droplets, Shield } from "lucide-react";
import { ProductData } from "@/data/products";
import AppleGlassButton from "../ui/AppleGlassButton";
import ScrollReveal from "../ui/ScrollReveal";

interface ProductHeroProps {
  product: ProductData;
}

const ProductHero = ({ product }: ProductHeroProps) => {
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

          {/* Right Content - Product Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <ScrollReveal delay={0.3} direction="right">
              <div className="relative group w-full">
                <div className="relative z-10 transition-transform duration-700 hover:scale-105">
                  <div className="relative aspect-square flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
