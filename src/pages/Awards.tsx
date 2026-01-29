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
  },
  {
    year: "2023",
    title: "Government Partnership Award",
    description: "Awarded for successful deployment across multiple state water quality monitoring programs under Jal Jeevan Mission.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Startup India Recognition",
    description: "Selected among top innovative startups driving technological advancement in environmental monitoring sector.",
    icon: Star,
  },
  {
    year: "2022",
    title: "Environmental Impact Award",
    description: "Honored for contributions to sustainable water management and public health protection initiatives.",
    icon: Leaf,
  },
  {
    year: "2022",
    title: "NABL Accreditation",
    description: "Our testing methodologies meet National Accreditation Board standards for laboratory excellence.",
    icon: Shield,
  },
  {
    year: "2021",
    title: "Make in India Excellence",
    description: "Proudly designed and manufactured in India, recognized for achieving global quality standards.",
    icon: Medal,
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
                    className="group text-center"
                  >
                    {/* Award Badge */}
                    <div className="mb-6">
                      <div className="relative inline-flex items-center justify-center">
                        {/* Outer decorative ring */}
                        <div className="absolute w-28 h-28 border border-dashed border-slate-200 rounded-full group-hover:border-primary/30 transition-colors" />
                        {/* Inner circle with icon */}
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all">
                          <award.icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Year */}
                    <div className="text-sm font-medium text-primary mb-2">
                      {award.year}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                      {award.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {award.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Gallery */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Moments of Recognition
                </h2>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Celebrating our achievements and the milestones that mark our journey of innovation.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Innovation Award Ceremony", year: "2024" },
                { title: "Government Partnership Recognition", year: "2023" },
                { title: "Startup India Summit", year: "2023" },
                { title: "Environmental Excellence Award", year: "2022" },
                { title: "Industry Leadership Recognition", year: "2022" },
                { title: "Make in India Showcase", year: "2021" },
              ].map((photo, i) => (
                <ScrollReveal key={photo.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    {/* Placeholder Image */}
                    <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                      <div className="relative z-10 text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-lg shadow-sm flex items-center justify-center">
                          <Trophy className="w-8 h-8 text-primary/60" />
                        </div>
                        <p className="text-sm text-slate-400">Award Photo</p>
                      </div>
                    </div>
                    {/* Caption */}
                    <div className="p-4 bg-white">
                      <h3 className="font-display font-semibold text-slate-900">{photo.title}</h3>
                      <p className="text-sm text-slate-500">{photo.year}</p>
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
