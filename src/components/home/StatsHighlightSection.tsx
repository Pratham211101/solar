import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Products" },
  { value: "12+", label: "States Covered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10,000+", label: "Tests Carried Out" },
];

export function StatsHighlightSection() {
  return (
    <section className="py-16 lg:py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsHighlightSection;
