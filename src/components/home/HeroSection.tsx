import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Check } from "lucide-react";

const scrollTexts = ["ENVIRONMENTAL MONITORING", "WATER QUALITY ANALYSIS", "EMISSION TRACKING", "SUSTAINABLE FUTURE"];

const features = ["NABL-ready accuracy standards", "Government-approved deployments", "Enterprise-grade reliability"];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
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
          <source src="https://cdn.pixabay.com/video/2017/03/10/8281-208046155_large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Gradient Curves */}
      <div className="absolute inset-0 bg-curve-top pointer-events-none" />
      <div className="absolute inset-0 bg-curve-bottom pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Main Text */}
          <div className="lg:col-span-8">
            {/* <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Next-Gen Environmental Monitoring
              </span>
            </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-foreground">Decision-Grade</span>
              <br />
              <span className="text-gradient">Water Quality</span>
              <br />
              <span className="text-foreground">Analyzer</span>
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl mb-8"
            >
              Trusted by government utilities, industries, and institutions for field-ready water quality monitoring
              with real-time compliance reporting.
            </motion.p> */}

            {/* Feature Checkmarks */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>

          {/* Animated Scroll Text */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end justify-center h-full py-20">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative"
            >
              {scrollTexts.map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 3,
                    delay: index * 0.8,
                    repeat: Infinity,
                    repeatDelay: scrollTexts.length * 0.8 - 0.8,
                  }}
                  className="text-right mb-4"
                >
                  <span className="text-sm tracking-[0.3em] text-muted-foreground font-light">{text}</span>
                </motion.div>
              ))}

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="mt-12 flex flex-col items-end"
              >
                <span className="text-xs tracking-[0.2em] text-muted-foreground mb-3 rotate-90 origin-right translate-x-3">
                  SCROLL
                </span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
