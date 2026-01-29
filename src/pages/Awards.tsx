import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Shield, Leaf } from "lucide-react";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const awards = [
  {
    year: "2024",
    title: "Innovation Excellence Award",
    description: "Recognized for breakthrough water quality analysis technology enabling real-time multi-parameter testing across India.",
    icon: Trophy,
    image: "/placeholder.svg",
  },
  {
    year: "2023",
    title: "Government Partnership Award",
    description: "Awarded for successful deployment across multiple state water quality monitoring programs under Jal Jeevan Mission.",
    icon: Award,
    image: "/placeholder.svg",
  },
  {
    year: "2023",
    title: "Startup India Recognition",
    description: "Selected among top innovative startups driving technological advancement in environmental monitoring sector.",
    icon: Star,
    image: "/placeholder.svg",
  },
  {
    year: "2022",
    title: "Environmental Impact Award",
    description: "Honored for contributions to sustainable water management and public health protection initiatives.",
    icon: Leaf,
    image: "/placeholder.svg",
  },
  {
    year: "2022",
    title: "NABL Accreditation",
    description: "Our testing methodologies meet National Accreditation Board standards for laboratory excellence.",
    icon: Shield,
    image: "/placeholder.svg",
  },
  {
    year: "2021",
    title: "Make in India Excellence",
    description: "Proudly designed and manufactured in India, recognized for achieving global quality standards.",
    icon: Medal,
    image: "/placeholder.svg",
  },
];

const Awards = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              {/* Decorative element */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary/40" />
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="h-px w-12 bg-primary/40" />
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Awards &{" "}
                <span className="text-primary italic">Accolades</span>
              </h1>

              {/* Decorative element */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <div className="h-px w-8 bg-primary/40" />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our commitment to innovation and quality in water testing technology has been recognized 
                by industry leaders and government bodies across India. These accolades reflect our 
                dedication to making water quality testing accessible and reliable.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Awards Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {awards.map((award, i) => (
                <ScrollReveal key={award.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    {/* Award Ceremony Image */}
                    <div className="mb-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 aspect-[4/3] group-hover:border-primary/30 transition-colors">
                      <img 
                        src={award.image} 
                        alt={award.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 mb-3">
                        <award.icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{award.year}</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                        {award.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Awards;
