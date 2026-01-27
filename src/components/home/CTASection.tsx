import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="card-gradient p-12 md:p-20 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Ready to Transform Your</span>
                <br />
                <span className="text-gradient">Environmental Monitoring?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Get a personalized demo and see how Cluix can help you achieve
                environmental compliance while optimizing your operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/demo"
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                  >
                    Schedule a Demo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
                  >
                    Contact Sales
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
