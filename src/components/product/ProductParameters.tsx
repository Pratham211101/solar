import { motion } from "framer-motion";
import {
  Droplets,
  Thermometer,
  FlaskConical,
  Zap,
  Waves,
  Activity,
  Wind,
  Beaker,
  TestTube,
  Leaf,
  Circle,
  Snowflake,
  Target,
  Calendar,
  Clock,
  Shield,
  Battery,
  Sun,
  Settings,
  Wifi,
  Smartphone,
  Monitor,
  LucideIcon,
} from "lucide-react";
import { ProductParameter } from "@/data/products";
import ScrollReveal from "../ui/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  thermometer: Thermometer,
  flask: FlaskConical,
  zap: Zap,
  waves: Waves,
  activity: Activity,
  wind: Wind,
  beaker: Beaker,
  "test-tube": TestTube,
  leaf: Leaf,
  circle: Circle,
  snowflake: Snowflake,
  target: Target,
  calendar: Calendar,
  clock: Clock,
  shield: Shield,
  battery: Battery,
  sun: Sun,
  settings: Settings,
  wifi: Wifi,
  smartphone: Smartphone,
  monitor: Monitor,
};

interface ProductParametersProps {
  title: string;
  subtitle: string;
  parameters: ProductParameter[];
}

const ProductParameters = ({ title, subtitle, parameters }: ProductParametersProps) => {
  return (
    <section className="min-h-screen flex items-center bg-[#000000] py-24 font-gilroy relative overflow-hidden">
      {/* Background Subtle Polish */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - Centered */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tighter-custom">
              {title.split(' ').length > 1 ? (
                <>
                  {title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-gradient italic">{title.split(' ').slice(-1).join(' ')}</span>
                </>
              ) : (
                <span className="text-gradient italic">{title}</span>
              )}
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
              {subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Parameters Flex Container */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {parameters.map((param, index) => {
            const IconComponent = iconMap[param.icon] || Droplets;

            return (
              <ScrollReveal
                key={param.name}
                delay={index * 0.05}
                direction="up"
                className="w-[calc(50%-1rem)] md:w-[180px]"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full"
                >
                  <div className="bg-[#050505] border border-white/5 rounded-3xl p-6 h-full flex flex-col items-center text-center shadow-sm hover:border-primary/30 transition-all duration-500 overflow-hidden relative">
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Icon Container */}
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 relative z-10 border border-white/10">
                      <IconComponent className="w-6 h-6 text-white/40 group-hover:text-primary transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-primary transition-colors">
                        {param.name}
                      </h3>
                      <div className="inline-flex items-center justify-center px-3 py-1 bg-white/5 rounded-full group-hover:bg-primary/5 transition-colors">
                        <span className="text-[12px] font-bold text-white/30 group-hover:text-primary leading-none">
                          {param.range}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductParameters;
