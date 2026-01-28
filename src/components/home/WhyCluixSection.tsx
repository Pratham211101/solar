import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Lab-grade accuracy in field conditions",
  "Auto data sync with GPS tagging",
  "Rugged, IP65-rated hardware",
  "Training & calibration support",
  "< 2 min per multi-parameter test",
  "Compliance-ready reports (BIS/CPCB)",
  "Cloud dashboard with role-based access",
  "Made in India, for Indian conditions",
];

export function WhyCluixSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Why Cluix
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Built for the reality of field water testing in India—reliable, accurate, and designed for scale.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-muted rounded-2xl border border-border flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              {/* Play Button */}
              <div className="w-16 h-16 rounded-full bg-card shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-foreground mb-1">
                Product Video
              </h3>
              <p className="text-muted-foreground text-sm">See Cluix in action</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyCluixSection;
