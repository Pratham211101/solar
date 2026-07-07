import { motion } from "framer-motion";
import { Building2, Factory, Shield, Trees, ArrowUpRight } from "lucide-react";
import GlowButton from "../ui/GlowButton";

const audiences = [
  {
    icon: Shield,
    title: "Smart Cities & Govt",
    category: "01 / PUBLIC INFRA",
    description: "POWERING INDIA'S 100 SMART CITIES AND NATIONAL HIGHWAYS WITH INTELLIGENT, DATA-DRIVEN LIGHTING NETWORKS.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop",
    tags: ["Smart Cities", "NHAI Networks"],
  },
  {
    icon: Factory,
    title: "Industries & SEZs",
    category: "02 / INDUSTRIAL",
    description: "ROBUST ENERGY SOLUTIONS FOR LARGE-SCALE MANUFACTURING PLANTS, WAREHOUSING CORRIDORS, AND LOGISTICS CENTERS.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    tags: ["Manufacturing", "Logistics"],
  },
  {
    icon: Building2,
    title: "Gated Communities",
    category: "03 / RESIDENTIAL",
    description: "ENHANCING THE CURB APPEAL AND SAFETY OF LUXURY TOWNSHIPS, RWAs, AND PRIVATE INTEGRATED RESIDENTIAL SPACES.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&get=80",
    tags: ["Luxury Villas", "Townships"],
  },
  {
    icon: Trees,
    title: "Agri & Eco-Resorts",
    category: "04 / OFF-GRID",
    description: "BRINGING RENEWABLE AUTONOMY TO OFF-GRID FARM ESTATES, LUXURY GETAWAYS, AND ECO-SENSITIVE HOSPITALITY ZONES.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&get=80",
    tags: ["Farm Life", "Eco-Tourism"],
  },
];

export function WhoItsForSection() {
  return (
    <section className="h-screen pt-[72px] bg-white relative overflow-hidden flex items-center border-t border-black/5">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center py-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-gilroy text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Ecosystem Reach</span>
            <h2 className="font-gilroy text-4xl md:text-5xl font-bold text-black tracking-tighter leading-none">
              Who It's <span className="text-primary italic">Designed</span> For
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-black/40 text-sm md:text-base max-w-md font-gilroy font-medium uppercase"
          >
            Sustainable infrastructure for sectors where energy independence and safety matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-black/5">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative border-l border-b border-black/5 h-[65vh] flex flex-col justify-between overflow-hidden last:border-r"
            >
              {/* Image Layer - Full Opacity Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={audience.image}
                  alt={audience.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Default Light Bottom Gradient for title readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Hover Gradient Overlay - Black to Cyan */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-8 lg:p-10 justify-between">
                {/* Top: Category & Icon */}
                <div className="flex justify-between items-start">
                  <span className="font-gilroy text-[9px] font-bold tracking-[0.3em] text-white/70 uppercase group-hover:text-primary transition-colors">
                    {audience.category}
                  </span>
                  <div className="w-10 h-10 flex items-center justify-center border border-white/20 bg-white/10 backdrop-blur-md group-hover:border-primary/40 group-hover:bg-primary/20 transition-all duration-500">
                    <audience.icon className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="mt-auto">
                  <h3 className="font-gilroy text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors drop-shadow-md">
                    {audience.title}
                  </h3>

                  {/* Animated Content Cluster */}
                  <div className="max-h-0 group-hover:max-h-[300px] overflow-hidden transition-all duration-700 ease-in-out">
                    <p className="text-white/70 text-[11px] font-medium leading-relaxed font-gilroy tracking-wider uppercase mb-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {audience.description}
                    </p>

                    <div className="pt-6 border-t border-white/10 flex flex-col gap-6 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-700 delay-200">
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {audience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-gilroy font-bold tracking-widest text-primary uppercase"
                          >
                            # {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Sharp Border Glow */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoItsForSection;
