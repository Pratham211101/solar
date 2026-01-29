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
            <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
              Perks & Benefits
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Quality of work,
            <br />
            quality of life
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative border-r border-b border-border"
            >
              {/* Default State */}
              <div className="relative h-64 p-8 flex flex-col items-center justify-center text-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 relative">
                  {/* Rotating dashed circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-[spin_20s_linear_infinite]" />
                  <perk.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {perk.title}
                </h3>
              </div>

              {/* Hover State - Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-8">
                <div className="w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <perk.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {perk.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  • {perk.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkLifeSection;
