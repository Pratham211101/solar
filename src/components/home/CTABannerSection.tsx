import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AppleGlassButton from "../ui/AppleGlassButton";

export function CTABannerSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Decorative Glow Elements (Matching the image's arcs) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Main Bottom Arc - Cyan */}
      <div className="absolute -bottom-[400px] left-1/2 -translate-x-1/2 w-[200%] aspect-square rounded-full border border-cyan-500/20 bg-gradient-to-t from-cyan-500/[0.05] to-transparent blur-sm pointer-events-none" />

      {/* Symmetrical Side Arcs - Cyan */}
      <div className="absolute -bottom-20 left-[-10%] w-[60%] aspect-square border-[1px] border-cyan-500/30 rounded-full blur-[2px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 right-[-10%] w-[60%] aspect-square border-[1px] border-cyan-500/30 rounded-full blur-[2px] opacity-20 pointer-events-none" />

      {/* Symmetrical Side Glows - Cyan */}
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-gilroy text-4xl md:text-7xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Ready to scale your <br />
              <span className="text-cyan-400 italic">Water Intelligence?</span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white/50 text-base md:text-xl font-gilroy max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Join 50+ government utilities and enterprises who trust Cluix for accurate, reliable water quality monitoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link to="/contact-us">
                <AppleGlassButton
                  icon={<ArrowUpRight className="w-5 h-5" />}
                  className="bg-cyan-500/20 border-cyan-400/30 hover:bg-cyan-500/30 hover:border-cyan-400/50 shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                >
                  TALK TO EXPERTS
                </AppleGlassButton>
              </Link>

              <Link to="/demo">
                <AppleGlassButton
                  className="bg-white/5 border-white/10 hover:bg-white/10"
                >
                  REQUEST DEMO
                </AppleGlassButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Branding / Details (Subtle) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-gilroy text-[10px] font-bold tracking-[0.3em] text-white/30 uppercase">
              Enterprise Grade Infrastructure
            </span>
          </div>
          <p className="font-gilroy text-[10px] font-bold tracking-[0.3em] text-white/20 uppercase">
            © 2024 CLUIX PRIVATE LIMITED
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:sales@cluix.in" className="font-gilroy text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-cyan-400 transition-colors uppercase">
              sales@cluix.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABannerSection;

