import { motion } from "framer-motion";
import { Building2, Factory, FlaskConical, Heart } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Government Utilities",
    description: "PHED, ULBs, Jal Nigam—ensuring drinking water compliance at scale.",
    tags: ["Jal Jeevan Mission", "State Water Boards"],
  },
  {
    icon: Factory,
    title: "Industries",
    description: "ETP/STP monitoring, discharge compliance, and environmental reporting.",
    tags: ["Manufacturing", "Pharmaceuticals", "Textiles"],
  },
  {
    icon: FlaskConical,
    title: "Labs & Institutions",
    description: "Field testing capability for research, quality control, and training.",
    tags: ["Universities", "NABL Labs", "R&D Centers"],
  },
  {
    icon: Heart,
    title: "NGOs & CSR",
    description: "Community water quality programs with data-backed impact measurement.",
    tags: ["WASH Programs", "CSR Initiatives"],
  },
];

export function WhoItsForSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Who it's for
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Trusted across sectors where water quality decisions matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {audience.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {audience.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {audience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-primary hover:text-primary/80 cursor-pointer transition-colors"
                    >
                      {tag}
                      {audience.tags.indexOf(tag) < audience.tags.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoItsForSection;
