import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";

const CareerDetail = () => {
  const { id } = useParams();

  return (
    <>
      <div className="light-theme bg-background min-h-screen">
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Careers
                </Link>
              </ScrollReveal>

              <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <ScrollReveal>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                      Senior Software Engineer
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 mb-8 text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        Engineering
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        San Francisco, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Full-time
                      </span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <h2 className="text-2xl font-bold text-foreground mb-4">About the Role</h2>
                      <p className="text-muted-foreground mb-6">
                        We're looking for a Senior Software Engineer to join our team and help
                        build the next generation of environmental monitoring solutions. You'll
                        work on challenging problems at the intersection of IoT, cloud computing,
                        and data analytics.
                      </p>

                      <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
                      <ul className="text-muted-foreground space-y-2 mb-6">
                        <li>• Design and implement scalable backend services</li>
                        <li>• Lead technical architecture decisions</li>
                        <li>• Mentor junior engineers</li>
                        <li>• Collaborate with product and design teams</li>
                        <li>• Contribute to open-source projects</li>
                      </ul>

                      <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                      <ul className="text-muted-foreground space-y-2 mb-6">
                        <li>• 5+ years of software engineering experience</li>
                        <li>• Strong proficiency in TypeScript/JavaScript</li>
                        <li>• Experience with cloud platforms (AWS/GCP)</li>
                        <li>• Knowledge of IoT protocols and systems</li>
                        <li>• Excellent communication skills</li>
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-1">
                  <ScrollReveal delay={0.2}>
                    <div className="card-gradient p-8 sticky top-32">
                      <h3 className="text-xl font-bold text-foreground mb-4">Apply Now</h3>
                      <p className="text-muted-foreground mb-6">
                        Interested in this role? We'd love to hear from you.
                      </p>
                      <motion.a
                        href="mailto:careers@cluix.com"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full py-3 bg-primary text-primary-foreground rounded-full font-semibold text-center"
                      >
                        Apply for this Position
                      </motion.a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default CareerDetail;
