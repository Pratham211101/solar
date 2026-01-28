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
  LucideIcon
} from "lucide-react";
import { ProductParameter } from "@/data/products";

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
};

interface ProductParametersProps {
  title: string;
  subtitle: string;
  parameters: ProductParameter[];
}

const ProductParameters = ({ title, subtitle, parameters }: ProductParametersProps) => {
  return (
    <section className="min-h-screen flex items-center bg-white py-16 lg:py-0">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Parameters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {parameters.map((param, index) => {
            const IconComponent = iconMap[param.icon] || Droplets;
            
            return (
              <motion.div
                key={param.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{param.name}</h3>
                  <p className="text-sm text-gray-500">{param.range}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductParameters;
