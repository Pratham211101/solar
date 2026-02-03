import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import VisionSection from "../components/about/VisionSection";
import ScrollIndicator from "../components/layout/ScrollIndicator";
import SupportedCarousel from "../components/about/SupportedCarousel";

const AboutUs = () => {
  const founders = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      email: "sarah.chen@cluix.com",
      linkedin: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Founder",
      email: "m.rodriguez@cluix.com",
      linkedin: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
    },
  ];

  const coreTeam = [
    {
      name: "Emily Watson",
      role: "VP Engineering",
      email: "emily.w@cluix.com",
      linkedin: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "David Kim",
      role: "VP Operations",
      email: "david.kim@cluix.com",
      linkedin: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Sophie Taylor",
      role: "Head of Design",
      email: "sophie.t@cluix.com",
      linkedin: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
    },
  ];

  const TeamMember = ({ member, size = "large" }: { member: any, size?: "large" | "small" }) => (
    <ScrollReveal>
      <motion.div
        whileHover={{ y: -10 }}
        className="group flex flex-col items-center text-center"
      >
        <div className={`relative mb-6 ${size === 'large' ? 'w-full aspect-[4/5]' : 'w-full aspect-square'} overflow-hidden bg-gray-100 rounded-2xl`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
        </div>
        <h3 className={`font-gilroy ${size === 'large' ? 'text-2xl' : 'text-xl'} font-black text-black tracking-tighter uppercase whitespace-nowrap`}>
          {member.name}
        </h3>
        <p className="font-gilroy text-[10px] font-bold text-primary tracking-[0.3em] uppercase mt-2">
          {member.role}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`mailto:${member.email}`}
            className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group/link shadow-sm"
          >
            <Mail className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group/link shadow-sm"
          >
            <Linkedin className="w-3.5 h-3.5 group-hover/link:scale-110 transition-transform" />
          </a>
        </div>
      </motion.div>
    </ScrollReveal>
  );

  return (
    <>
      <div className="bg-white min-h-screen">
        <main>
          {/* 1. Hero Section - Dark & Moody */}
          <section className="relative h-screen w-full overflow-hidden flex items-end bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Visionary environment"
                className="w-full h-full object-cover opacity-60 grayscale scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[150px] rounded-full" />
              <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-red-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-12 pb-24 relative z-10 w-full flex flex-col justify-end h-full">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end w-full">
                <div className="md:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="font-gilroy text-7xl md:text-9xl font-black text-white leading-[0.85] tracking-[0.02em] uppercase">
                      ABOUT <br /> <span className="text-gradient italic">CLUIX</span>
                    </h1>
                  </motion.div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-end pb-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="font-gilroy text-lg text-white/70 leading-relaxed max-w-sm ml-auto"
                  >
                    Discover who we are — a precision-focused hardware studio
                    passionate about crafting bold technologies, immersive
                    environmental insights, and innovative water quality solutions.
                  </motion.p>
                </div>
              </div>
            </div>

            <ScrollIndicator style="absolute right-12 bottom-12 flex flex-col items-center gap-3 z-50 pointer-events-none" variant="light" />
          </section>

          {/* 2. Unified Vision & Mission Section (Stacked Content) */}
          <VisionSection />

          {/* 3. Supported & Incubated By - Clean Strip Carousel */}
          <SupportedCarousel />

          {/* 4. Story Section - Asymmetric Chaos (No overlap) */}
          <section className="pt-64 pb-32 bg-[#f8f9fa] overflow-hidden relative min-h-[1000px]">
            {/* Background Giant Text */}
            <div className="absolute top-0 left-10 select-none pointer-events-none z-0">
              <span className="font-gilroy text-[15vw] font-black text-gray-100 leading-none uppercase tracking-tighter">
                STORY
              </span>
            </div>

            <div className="container mx-auto px-6 relative h-full">
              {/* Text Content - Positioned as an anchor in the chaos */}
              <div className="absolute top-0 right-10 lg:right-20 z-30 max-w-lg text-right">
                <ScrollReveal>
                  <h2 className="font-gilroy text-6xl font-black text-black mb-10 leading-none">
                    Sharing is <br /> <span className="text-primary italic">Caring</span>
                  </h2>
                  <div className="space-y-8">
                    <p className="font-gilroy text-xl text-gray-500 leading-relaxed font-bold">
                      At Cluix, we believe in the power of precision, transparency, and action. Our
                      journey began with a simple observation: the world needed better eyes on
                      its most precious resource—water.
                    </p>
                    <p className="font-gilroy text-lg text-gray-400 leading-relaxed font-medium">
                      Today, we are committed to making a difference—one accurate measurement at a time.
                      Whether it's empowering industries or fostering sustainable ecosystems, we
                      craft solutions that matter for a cleaner, safer planet.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              {/* Asymmetric Chaos Image Grid (Explicitly No Overlap) */}
              <div className="relative w-full h-full min-h-[1000px]">

                {/* Image 1: High Left */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="absolute top-[5%] left-[0%] w-[320px] aspect-[3/4] rounded-[30px] overflow-hidden shadow-2xl z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                    alt="Research"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </motion.div>

                {/* Image 2: Center Bottom-Left */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="absolute top-[45%] left-[20%] w-[450px] aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl z-20"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                    alt="Laboratory"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Image 3: Mid Right (Below Text) */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-[65%] right-[5%] w-[380px] aspect-square rounded-[35px] overflow-hidden shadow-2xl z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1576086213369-9713439bb5ad?w=800&q=80"
                    alt="Action"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Image 4: Bottom Left (Separate) */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-[85%] left-[5%] w-[280px] aspect-[4/5] rounded-[25px] overflow-hidden shadow-xl z-20 grayscale"
                >
                  <img
                    src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=800&q=80"
                    alt="Technology"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Faint Circle Path */}
                <div className="absolute top-[30%] left-[10%] w-[600px] h-[600px] border border-black/[0.03] rounded-full -z-10 pointer-events-none" />
              </div>
            </div>
          </section>

          {/* 5. Updated Hierarchical Team Section */}
          <section className="py-48 bg-white overflow-hidden relative pt-24">
            <div className="container mx-auto px-6 relative z-10">
              <ScrollReveal className="text-center mb-24">
                <h2 className="font-gilroy text-5xl md:text-7xl font-black text-black tracking-tighter leading-none mb-6">
                  LEADERSHIP <span className="text-primary italic">TEAM</span>
                </h2>
                <p className="font-gilroy text-gray-400 font-bold uppercase tracking-[0.4em] text-xs">
                  The Visionaries & Builders
                </p>
              </ScrollReveal>

              {/* Founders Row - 2 Columns */}
              <div className="max-w-4xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                  {founders.map((member) => (
                    <TeamMember key={member.name} member={member} size="large" />
                  ))}
                </div>
              </div>

              {/* Core Team Row - 3 Columns */}
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
                  {coreTeam.map((member) => (
                    <TeamMember key={member.name} member={member} size="small" />
                  ))}
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

export default AboutUs;
