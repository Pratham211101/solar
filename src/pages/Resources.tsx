import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { FileText, Download, Video, BookOpen } from "lucide-react";

const resources = [
  {
    type: "Whitepaper",
    icon: FileText,
    title: "The Future of Environmental Monitoring",
    description: "Comprehensive analysis of emerging trends in environmental monitoring technology.",
    downloadUrl: "#",
  },
  {
    type: "Case Study",
    icon: BookOpen,
    title: "How XYZ Corp Reduced Emissions by 40%",
    description: "Learn how our client achieved significant emission reductions using Cluix solutions.",
    downloadUrl: "#",
  },
  {
    type: "Webinar",
    icon: Video,
    title: "Water Quality Monitoring Best Practices",
    description: "Expert panel discussion on maintaining accurate water quality measurements.",
    downloadUrl: "#",
  },
  {
    type: "Datasheet",
    icon: FileText,
    title: "Cluix C012 Technical Specifications",
    description: "Complete technical specifications and capabilities of our flagship analyzer.",
    downloadUrl: "#",
  },
];

const Resources = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Resources
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Learning</span>{" "}
                <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Access whitepapers, case studies, webinars, and technical documentation
                to help you get the most from Cluix products.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <ScrollReveal key={resource.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="card-gradient p-8 h-full flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-primary font-medium">{resource.type}</span>
                        <h3 className="text-xl font-bold text-foreground">{resource.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">{resource.description}</p>
                    <motion.a
                      href={resource.downloadUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </motion.a>
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

export default Resources;
