import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

export function CTABannerSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-primary/90 via-primary to-primary/80">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Water Quality Operations?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Join <span className="font-semibold">50+ government utilities and enterprises</span> who trust Cluix for accurate, reliable water quality monitoring and compliance reporting.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="w-5 h-5" />
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Request a Demo
            </Link>
          </div>

          {/* Email Note */}
          <p className="text-white/80 text-sm">
            Or email us at{" "}
            <a
              href="mailto:sales@cluix.in"
              className="text-white underline hover:no-underline"
            >
              sales@cluix.in
            </a>
            {" "}• Volume pricing available for government and enterprise orders
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CTABannerSection;
