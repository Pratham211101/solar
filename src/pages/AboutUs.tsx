import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Committed to creating technology that protects our planet's precious resources.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Building solutions that truly solve our customers' environmental challenges.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries to develop cutting-edge monitoring technology.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering the highest quality products and services in everything we do.",
  },
];

const team = [
  { name: "Dr. Sarah Chen", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Michael Rodriguez", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Emily Watson", role: "VP Engineering", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  { name: "David Kim", role: "VP Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
];

const AboutUs = () => {
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
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Pioneering</span>{" "}
                <span className="text-gradient">Environmental Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Since 2015, Cluix has been at the forefront of environmental monitoring,
                helping industries achieve sustainability goals while maintaining compliance.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal>
                <div className="relative">
                  <motion.img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
                    alt="Cluix Lab"
                    className="rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl bg-primary/20 -z-10" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="text-gradient">Our Story</span>
                </h2>
                <p className="text-muted-foreground mb-4">
                  Founded by a team of environmental scientists and engineers, Cluix emerged
                  from a simple observation: industries needed better, more accessible tools
                  to monitor and protect our environment.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, we've grown from a small startup to a global leader in environmental
                  monitoring solutions, serving over 500 installations across 50+ countries.
                </p>
                <p className="text-muted-foreground">
                  Our mission remains unchanged: to make environmental compliance effortless
                  and empower organizations to become better stewards of our planet.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Our</span>{" "}
                <span className="text-gradient">Values</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="card-gradient p-8 text-center h-full"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Leadership</span>{" "}
                <span className="text-gradient">Team</span>
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="text-center"
                  >
                    <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
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

export default AboutUs;
