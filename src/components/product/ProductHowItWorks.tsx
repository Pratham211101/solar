import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import {
  FlaskConical,
  Zap,
  Cloud,
  FileCheck,
  Droplets,
  Clock,
  CheckCircle,
  Upload,
  LucideIcon,
  ArrowRight,
  Sun,
  Settings,
  Battery,
  Activity,
  Wifi,
  Smartphone,
  MapPin,
  Monitor,
} from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  flask: FlaskConical,
  zap: Zap,
  cloud: Cloud,
  "file-check": FileCheck,
  droplets: Droplets,
  clock: Clock,
  "check-circle": CheckCircle,
  upload: Upload,
  sun: Sun,
  settings: Settings,
  battery: Battery,
  activity: Activity,
  wifi: Wifi,
  smartphone: Smartphone,
  "map-pin": MapPin,
  monitor: Monitor,
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

const StepItem = ({
  step,
  index,
  totalSteps,
  progress
}: {
  step: HowItWorksStep;
  index: number;
  totalSteps: number;
  progress: MotionValue<number>;
}) => {
  const IconComponent = iconMap[step.icon] || FlaskConical;

  // Calculate when this specific step becomes "active" based on the line progress range [0.3, 0.7]
  const startRange = 0.3;
  const endRange = 0.7;
  const threshold = startRange + ((endRange - startRange) * (index / (totalSteps - 1)));

  // Color transforms: Blue fill and white icon when active
  const cardBgColor = useTransform(
    progress,
    [threshold - 0.05, threshold],
    ["#ffffff", "#3b82f6"] // White to Primary Blue
  );

  const iconColor = useTransform(
    progress,
    [threshold - 0.05, threshold],
    ["#3b82f6", "#ffffff"] // Primary Blue to White
  );

  const scale = useTransform(
    progress,
    [threshold - 0.05, threshold, threshold + 0.1],
    [1, 1.05, 1]
  );

  const shadow = useTransform(
    progress,
    [threshold - 0.05, threshold],
    ["0 10px 15px -3px rgb(0 0 0 / 0.1)", "0 20px 25px -5px rgb(59 130 246 / 0.3)"]
  );

  const isDense = totalSteps > 4;

  return (
    <div className="relative group">
      <ScrollReveal delay={index * 0.1}>
        {/* Icon Container */}
        <div className={`relative flex justify-center ${isDense ? "mb-6" : "mb-8"}`}>
          <motion.div
            style={{ backgroundColor: cardBgColor, boxShadow: shadow, scale }}
            className={`${isDense ? "w-24 h-24 rounded-[24px]" : "w-32 h-32 rounded-[32px]"
              } border border-slate-100 flex items-center justify-center transition-all duration-300 relative z-10 overflow-hidden`}
          >
            <motion.div style={{ color: iconColor }}>
              <IconComponent
                className={`${isDense ? "w-8 h-8" : "w-12 h-12"} transition-transform duration-500 group-hover:scale-110`}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className={`font-bold text-slate-900 ${isDense ? "text-lg" : "text-2xl"}`}>
            {step.title}
          </h3>
          <p className={`text-slate-600 leading-relaxed font-medium px-2 ${isDense ? "text-xs" : "text-base"}`}>
            {step.description}
          </p>
        </div>

        {/* Mobile/Tablet Arrow (Mobile only) */}
        {index < totalSteps - 1 && (
          <div className="lg:hidden flex justify-center py-6 mt-4">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6 text-primary/30 rotate-90" />
            </motion.div>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
};

const ProductHowItWorks = ({ title, subtitle, steps }: ProductHowItWorksProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="h-screen flex items-center bg-white font-gilroy relative overflow-hidden">
      {/* Background Polish */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Centered */}
        <div className="mb-20 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                THE PROCESS
              </span>
              <div className="h-px w-10 bg-primary/30" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-[1.1] tracking-tighter-custom mx-auto">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Main Horizontal Line (Desktop) */}
          <div
            className={`hidden lg:block absolute left-[10%] right-[10%] h-[2px] bg-slate-100 overflow-hidden ${steps.length > 4 ? "top-[48px]" : "top-[64px]"
              }`}
          >
            <motion.div
              style={{ width: lineProgress }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-blue-400 origin-left"
            />
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:gap-8 relative ${steps.length > 4 ? "lg:grid-cols-6 gap-6" : "lg:grid-cols-4 gap-12"
              }`}
          >
            {steps.map((step, index) => (
              <StepItem
                key={step.step}
                step={step}
                index={index}
                totalSteps={steps.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHowItWorks;
