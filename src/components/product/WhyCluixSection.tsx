import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

interface WhyCluixSectionProps {
  title?: string;
  description?: string;
  features?: string[];
}

export function WhyCluixSection({
  title = "Why Cluix",
  description = "Built for the reality of field water testing in India—reliable, accurate, and designed for scale.",
  features = [
    "Lab-grade accuracy in field conditions",
    "Auto data sync with GPS tagging",
    "Rugged, IP65-rated hardware",
    "Training & calibration support",
    "< 2 min per multi-parameter test",
    "Compliance-ready reports (BIS/CPCB)",
    "Cloud dashboard with role-based access",
    "Made in India, for Indian conditions",
  ],
}: WhyCluixSectionProps) {
  return (
    <div className="bg-gray-100 font-gilroy">
      {/* Spacer for Navbar */}
      <div className="h-[72px]" />

      <section className="h-[calc(100vh-72px)] flex items-center bg-gray-100 py-16 lg:py-0 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 bg-blue-400/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-background mb-6 leading-[1.1] tracking-tighter-custom">
                {title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-gradient italic">{title.split(' ').pop()}</span>
              </h2>
              <p className="text-slate-600 text-xl mb-10 max-w-lg leading-relaxed font-medium">
                {description}
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1 group-hover:bg-primary transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-700 text-[15px] font-bold uppercase tracking-tight group-hover:text-slate-900 transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right - Premium Visual / Video Area */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <div className="aspect-square relative rounded-[48px] overflow-hidden bg-white shadow-2xl border border-white/50 group">
                  {/* Decorative Background for visual */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30" />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Floating Status Cards */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 left-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 border border-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-bold text-slate-800 tracking-tight">Lab Grade Precision</span>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-12 right-10 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20 border border-white"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm font-bold text-slate-800 tracking-tight">On-Field Data Sync</span>
                    </div>
                  </motion.div>

                  {/* Centered Interaction Area */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center mb-8 cursor-pointer group-hover:bg-primary transition-all duration-500 hover:shadow-primary/20"
                    >
                      <div className="w-0 h-0 border-l-[28px] border-l-primary group-hover:border-l-white border-t-[18px] border-t-transparent border-b-[18px] border-b-transparent ml-2" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors tracking-tight">
                      Product Architecture
                    </h3>
                    <p className="text-slate-500 font-medium leading-tight max-w-[200px]">
                      Watch how we redefine testing at scale
                    </p>
                  </div>

                  {/* Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
                </div>

                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyCluixSection;
