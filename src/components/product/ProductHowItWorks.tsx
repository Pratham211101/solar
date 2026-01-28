import { motion, useInView } from "framer-motion";
import { FlaskConical, Zap, Cloud, FileCheck, LucideIcon } from "lucide-react";
import { useRef } from "react";


const iconMap: Record<string, LucideIcon> = {
  flask: FlaskConical,
  zap: Zap,
  cloud: Cloud,
  "file-check": FileCheck,
};

export interface HowItWorksStep {
  icon: string;
  step: number;
  title: string;
  description: string;
}

interface ProductHowItWorksProps {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
}

const ProductHowItWorks = ({ title, subtitle, steps }: ProductHowItWorksProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-16 lg:py-0">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || FlaskConical;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Icon Container */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <motion.div
  initial={{ backgroundColor: "#ffffff" }}
  animate={isInView ? { backgroundColor: "rgba(99,102,241,0.08)" } : {}}
  transition={{ delay: index * 0.2, duration: 0.4 }}
  className="w-20 h-20 rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm"
>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    {/* Connector dot */}
                    {index < steps.length - 1 && (
                      <motion.div
  ref={ref}
  className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gray-200 overflow-hidden"
>
  {/* Animated Fill */}
  <motion.div
    initial={{ scaleX: 0 }}
    animate={isInView ? { scaleX: 1 } : {}}
    transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
    style={{ transformOrigin: "left" }}
    className="h-full bg-primary"
  />
</div>
                    )}
                  </div>

                  {/* Step Badge */}
                  {/* <div className="inline-flex items-center justify-center px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                    Step {step.step}
                  </div> */}

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHowItWorks;
