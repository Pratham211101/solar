import { motion } from "framer-motion";
import { Building2, Factory, FlaskConical, Heart, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  factory: Factory,
  flask: FlaskConical,
  heart: Heart,
};

export interface WhoItsForSector {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface ProductWhoItsForProps {
  title: string;
  subtitle: string;
  sectors: WhoItsForSector[];
}

const ProductWhoItsFor = ({ title, subtitle, sectors }: ProductWhoItsForProps) => {
  return (
    <section className="min-h-screen flex items-center bg-white py-16 lg:py-0">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, index) => {
            const IconComponent = iconMap[sector.icon] || Building2;
            
            return (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 h-full hover:shadow-md transition-all duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {sector.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {sector.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {sector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-primary hover:underline cursor-pointer"
                      >
                        {tag}
                        {sector.tags.indexOf(tag) < sector.tags.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductWhoItsFor;
