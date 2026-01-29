import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Shield, CheckCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "5+", label: "Products" },
  { value: "12+", label: "States Covered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Accuracy Rate" },
];

const awards = [
  {
    year: "2024",
    title: "Innovation Excellence Award",
    description: "Recognized for breakthrough water quality analysis technology enabling real-time multi-parameter testing.",
    icon: Trophy,
  },
  {
    year: "2023",
    title: "Government Partnership Award",
    description: "Awarded for successful deployment across multiple state water quality monitoring programs.",
    icon: Award,
  },
  {
    year: "2023",
    title: "Startup India Recognition",
    description: "Selected among top innovative startups driving technological advancement in environmental monitoring.",
    icon: Star,
  },
  {
    year: "2022",
    title: "Environmental Impact Award",
    description: "Honored for contributions to sustainable water management and public health protection.",
    icon: Medal,
  },
];

const certifications = [
  {
    title: "NABL Accredited",
    description: "Our testing methodologies meet National Accreditation Board standards.",
    icon: Shield,
  },
  {
    title: "ISO 9001:2015",
    description: "Certified quality management system ensuring consistent product excellence.",
    icon: CheckCircle,
  },
  {
    title: "Make in India",
    description: "Proudly designed and manufactured in India for global standards.",
    icon: Star,
  },
];

const Awards = () => {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Trophy className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Excellence in Water Quality</span>
                </div>
                
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Awards &{" "}
                  <span className="text-primary">Recognitions</span>
                </h1>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                  Our commitment to innovation and quality in water testing technology has been recognized 
                  by industry leaders and government bodies across India.
                </p>
              </motion.div>

              {/* Right Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Awards Journey Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Our Journey
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                  Our Award-Winning{" "}
                  <span className="text-primary">Journey</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {awards.map((award, i) => (
                <ScrollReveal key={award.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Year Badge */}
                    <div className="absolute -top-3 left-8 px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                      {award.year}
                    </div>

                    {/* Icon with Laurel Effect */}
                    <div className="flex items-center gap-4 mb-4 mt-2">
                      <div className="relative">
                        {/* Decorative circles */}
                        <div className="absolute inset-0 w-16 h-16 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <award.icon className="w-7 h-7 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        {award.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 leading-relaxed">
                      {award.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  Quality Assurance
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
                  Certifications &{" "}
                  <span className="text-primary">Standards</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-4">
                  Our commitment to quality is backed by internationally recognized certifications.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {certifications.map((cert, i) => (
                <ScrollReveal key={cert.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-6">
                      <cert.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                      {cert.title}
                    </h3>
                    <p className="text-slate-600">
                      {cert.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-r from-slate-800 via-primary/90 to-primary">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Partner with Excellence
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Join the growing list of organizations trusting Cluix for their water quality monitoring needs.
              </p>
              <motion.a
                href="/contact-us"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-slate-50 transition-colors"
              >
                Get in Touch
              </motion.a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Awards;
