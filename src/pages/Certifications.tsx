import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, BadgeCheck, FileCheck, Landmark } from "lucide-react";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

const certifications = [
  {
    year: "2024",
    title: "NABL Accreditation",
    description: "National Accreditation Board for Testing and Calibration Laboratories certification for our testing methodologies.",
    icon: Shield,
  },
  {
    year: "2023",
    title: "ISO 9001:2015",
    description: "Certified quality management system ensuring consistent product excellence and customer satisfaction.",
    icon: CheckCircle,
  },
  {
    year: "2023",
    title: "BIS Certification",
    description: "Bureau of Indian Standards certification confirming our products meet national quality benchmarks.",
    icon: BadgeCheck,
  },
  {
    year: "2022",
    title: "CPCB Approved",
    description: "Central Pollution Control Board approval for our Online Continuous Emission Monitoring Systems.",
    icon: FileCheck,
  },
  {
    year: "2022",
    title: "Make in India",
    description: "Proudly designed and manufactured in India, meeting global quality and safety standards.",
    icon: Landmark,
  },
  {
    year: "2021",
    title: "Startup India",
    description: "Recognized by the Government of India's flagship initiative for innovation and entrepreneurship.",
    icon: Award,
  },
];

const Certifications = () => {
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
                Quality &{" "}
                <span className="text-primary italic">Certifications</span>
              </h1>

              {/* Decorative element */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-8 bg-primary/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                <div className="h-px w-8 bg-primary/40" />
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Our products and processes are backed by nationally and internationally recognized 
                certifications, ensuring the highest standards of quality, accuracy, and reliability 
                in every water quality analyzer we deliver.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {certifications.map((cert, i) => (
                <ScrollReveal key={cert.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group text-center"
                  >
                    {/* Certification Badge */}
                    <div className="mb-6">
                      <div className="relative inline-flex items-center justify-center">
                        {/* Outer decorative ring */}
                        <div className="absolute w-28 h-28 border border-dashed border-slate-200 rounded-full group-hover:border-primary/30 transition-colors" />
                        {/* Inner circle with icon */}
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:bg-primary/5 group-hover:border-primary/30 transition-all">
                          <cert.icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                    </div>

                    {/* Year */}
                    <div className="text-sm font-medium text-primary mb-2">
                      {cert.year}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">
                      {cert.description}
                    </p>
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

export default Certifications;
