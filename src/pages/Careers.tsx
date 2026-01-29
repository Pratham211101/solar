import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import WorkLifeSection from "../components/careers/WorkLifeSection";
import EmployeeCarousel from "../components/careers/EmployeeCarousel";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import CareersHero from "@/components/careers/CareersHero";

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
      <main className=" bg-background">
        {/* Hero Section */}
        <CareersHero />

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

        {/* Work Life Section */}
        <WorkLifeSection />

        {/* Employee Carousel */}
        <EmployeeCarousel />
      </main>
      <Footer />
    </>
  );
};

export default Careers;
