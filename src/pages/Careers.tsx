import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";

const openings = [
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    department: "AI/ML",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: "environmental-engineer",
    title: "Environmental Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
];

const benefits = [
  "Competitive salary & equity",
  "Health, dental & vision insurance",
  "Unlimited PTO",
  "Remote-friendly culture",
  "Learning & development budget",
  "Home office stipend",
];

const Careers = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Careers
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Join Our</span>{" "}
                <span className="text-gradient">Mission</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Help us build the future of environmental monitoring. We're looking for
                passionate individuals who want to make a real impact.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-4">
                {benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="px-4 py-2 rounded-full bg-muted text-muted-foreground"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Open</span>{" "}
                <span className="text-gradient">Positions</span>
              </h2>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-4">
              {openings.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 0.1}>
                  <Link to={`/careers/${job.id}`}>
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="group card-gradient p-6 flex items-center justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.div>
                  </Link>
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

export default Careers;
