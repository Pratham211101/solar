import { motion } from "framer-motion";
import {
  MapPin,
  Shield,
  Brain,
  Globe,
  Users,
  TrendingUp,
  Heart,
  Coffee
} from "lucide-react";

const perks = [
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work on projects with international impact and collaborate with global partners.",
  },
  {
    icon: MapPin,
    title: "Relocation Assistance",
    description: "Comprehensive support for relocating to our offices worldwide.",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Join a team that values open communication and shared success.",
  },
  {
    icon: Shield,
    title: "Comprehensive Health Care",
    description: "Full medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: Brain,
    title: "Learning & Development",
    description: "Continuous learning opportunities with dedicated training budgets.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Chart your career journey within the organization with clear growth maps.",
  },
];

export function WorkLifeSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-gilroy font-normal tracking-wider text-muted-foreground uppercase">
              PERKS & BENEFITS
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-gilroy font-normal text-foreground leading-tight">
            Quality of work,
            <br />
            quality of life
          </h2>
        </div>

        {/* Grid - 2 rows x 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-border">
          {/* Empty first cell */}
          <div className="hidden lg:block h-64" />

          {/* First 3 perks in row 1 */}
          {perks.slice(0, 3).map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative border-r border-b border-border cursor-pointer z-10 overflow-hidden border-t ${index === 0 ? 'border-l' : ''
                }`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Default State */}
              <div className="relative h-64 p-8 flex flex-col items-center justify-center text-center transition-all duration-200 group-hover:translate-y-[-10px] z-10 group-hover:opacity-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
                  <perk.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-background transition-colors duration-500">
                  {perk.title}
                </h3>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-start justify-end p-8 translate-y-4 group-hover:translate-y-0 z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Last 3 perks in row 2 */}
          {perks.slice(3, 6).map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`group relative border-r border-b border-border cursor-pointer z-10 overflow-hidden ${index === 0 ? 'border-t border-l' : ''
                }`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Default State */}
              <div className="relative h-64 p-8 flex flex-col items-center justify-center text-center transition-all duration-200 group-hover:translate-y-[-10px] z-10 group-hover:opacity-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
                  <perk.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-background transition-colors duration-500">
                  {perk.title}
                </h3>
              </div>

              {/* Hover State */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col items-start justify-end p-8 translate-y-4 group-hover:translate-y-0 z-10">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Empty last cell */}
          <div className="hidden lg:block h-64" />
        </div>
      </div>
    </section>
  );
}

export default WorkLifeSection;
