import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import { Droplets, Wind, BarChart3, Shield, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Water Quality Monitoring",
    description:
      "Real-time analysis of water parameters including pH, turbidity, dissolved oxygen, and contamination levels.",
  },
  {
    icon: Wind,
    title: "Air Emission Tracking",
    description:
      "Continuous monitoring of industrial emissions to ensure compliance with environmental regulations.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "AI-powered insights and predictive analytics for proactive environmental management.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description:
      "Automated reporting and documentation for EPA, CPCB, and international environmental standards.",
  },
  {
    icon: Zap,
    title: "Real-time Alerts",
    description:
      "Instant notifications for parameter exceedances and equipment anomalies.",
  },
  {
    icon: Globe,
    title: "Remote Access",
    description:
      "Cloud-based platform accessible from anywhere, enabling remote monitoring and management.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Curves */}
      <div className="absolute inset-0 bg-curve-top pointer-events-none" />
      <div className="absolute inset-0 bg-curve-bottom pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Why Choose Cluix
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Comprehensive</span>{" "}
            <span className="text-gradient">Monitoring Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From water quality to air emissions, our integrated platform provides
            everything you need for environmental compliance.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="card-gradient p-8 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
