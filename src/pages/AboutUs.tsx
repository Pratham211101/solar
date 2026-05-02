import { motion } from "framer-motion";
import LightPillar from "../components/home/LightPillar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowDown, Mail, Linkedin, Zap, Shield, Cpu, Layers, Activity, Target } from "lucide-react";
import VisionSection from "../components/about/VisionSection";
import ScrollIndicator from "../components/layout/ScrollIndicator";
import SupportedCarousel from "../components/about/SupportedCarousel";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#050505] min-h-screen">
        <main>
          {/* 1. Hero Section - Minimal & Premium */}
          <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1509391366360-fe5bb548d1bb?q=80&w=2070&auto=format&fit=crop"
                alt="Solar Architecture"
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-gilroy text-5xl md:text-8xl text-white leading-[1.1] tracking-[-0.03em] font-medium max-w-5xl mx-auto uppercase">
                  Building the Future of <span className="text-primary italic font-bold">Intelligent</span> Solar Infrastructure
                </h1>
                <p className="font-gilroy text-lg md:text-2xl text-white/60 mt-8 max-w-2xl mx-auto font-medium">
                  We design smart, scalable, and sustainable energy solutions for modern environments.
                </p>
              </motion.div>
            </div>

            <ScrollIndicator style="absolute left-1/2 -translate-x-1/2 bottom-12 z-50 pointer-events-none" variant="light" />
          </section>

          {/* 2. Problem Statement Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-30">
              <LightPillar
                topColor="#5227FF"
                bottomColor="#FF9FFC"
                intensity={0.6}
                rotationSpeed={0.8}
                glowAmount={0.002}
                pillarWidth={3}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                pillarRotation={25}
                // interactive
                mixBlendMode="screen"
                quality="high"
              />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <ScrollReveal>
                  <div className="space-y-6">
                    <span className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">The Challenge</span>
                    <h2 className="font-gilroy text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                      Infrastructure stuck in the <span className="text-primary italic">past</span>.
                    </h2>
                    <p className="font-gilroy text-xl text-white/60 leading-relaxed font-medium">
                      Urban and rural infrastructure still relies heavily on inefficient, grid-dependent lighting systems.
                    </p>
                    <p className="font-gilroy text-xl text-white/50 leading-relaxed font-medium">
                      High energy costs, unreliable power supply, and lack of intelligent monitoring limit scalability and sustainability.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="relative flex justify-end">
                    <div className=" bg-gray-50 overflow-hidden h-[80vh] w-[27vw]">
                      <img
                        src="public\images\power-grid.jpg"
                        alt="Outdated Infrastructure"
                        className="h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* 3. Our Solution Section */}
          <section className="py-32 bg-[#050505] text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] blur-[150px] rounded-full" />
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl">
                <ScrollReveal>
                  <span className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Our Solution</span>
                  <h2 className="font-gilroy text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mt-6 mb-10">
                    Smarter, Cleaner, and <span className="text-primary italic">Autonomous</span>.
                  </h2>
                  <p className="font-gilroy text-2xl md:text-3xl text-white/80 leading-relaxed font-medium tracking-tight">
                    We build intelligent solar-powered systems that combine energy generation, smart controls, and modern infrastructure design — enabling reliable, scalable, and future-ready deployments.
                  </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                  <ScrollReveal delay={0.1}>
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Zap className="w-6 h-6" />
                      </div>
                      <h4 className="font-gilroy text-xl font-bold uppercase">Generation</h4>
                      <p className="text-white/50 font-medium leading-relaxed font-gilroy">High-efficiency solar harvesting even in low light environments.</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <h4 className="font-gilroy text-xl font-bold uppercase">Smart Controls</h4>
                      <p className="text-white/50 font-medium leading-relaxed font-gilroy">AI-driven energy management and real-time monitoring dashboard.</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={0.3}>
                    <div className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                        <Layers className="w-6 h-6" />
                      </div>
                      <h4 className="font-gilroy text-xl font-bold uppercase">Integration</h4>
                      <p className="text-white/50 font-medium leading-relaxed font-gilroy">Sleek, modular designs that blend seamlessly with modern urbanity.</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Vision & Mission Section */}
          <VisionSection />

          {/* 7. Story Section */}
          <section className="py-32 bg-[#050505] text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] blur-[150px] rounded-full" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7">
                  <ScrollReveal>
                    <span className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">The Origin</span>
                    <h2 className="font-gilroy text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mt-6 mb-10">
                      Our <span className="text-primary italic px-2">Story</span>
                    </h2>
                    <div className="space-y-8 max-w-2xl">
                      <p className="font-gilroy text-2xl text-white/70 leading-relaxed font-bold italic border-l-4 border-primary pl-8">
                        We started with a simple question — why is essential infrastructure still dependent on outdated energy systems?
                      </p>
                      <p className="font-gilroy text-xl text-white/50 leading-relaxed font-medium">
                        What began as a small initiative has grown into a focused effort to build smarter, cleaner, and more efficient infrastructure solutions. We're not just making products; we're redefining how cities and rural areas interact with light and energy.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="lg:col-span-5">
                  <ScrollReveal delay={0.3}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <img src="public\images\use-case-image.png" alt="Process" className="w-full h-full object-cover" />
                      </div>
                      <div className="aspect-[3/4] rounded-lg overflow-hidden">
                        <img src="public\images\use-case-img2.png" alt="Engineers" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Why Us Section - Trust Card Grid */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <LightPillar
                topColor="#5227FF"
                bottomColor="#FF9FFC"
                intensity={0.4}
                rotationSpeed={0.4}
                glowAmount={0.001}
                pillarWidth={2.4}
                pillarHeight={0.3}
                noiseIntensity={0.5}
                pillarRotation={-15}
                mixBlendMode="screen"
                quality="high"
              />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <ScrollReveal className="text-center mb-20">
                <span className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Capabilities</span>
                <h2 className="font-gilroy text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mt-4">
                  Why <span className="text-primary italic">Solar</span>
                </h2>
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Engineering-first approach", icon: <Cpu />, desc: "Focus on technical excellence and efficiency." },
                  { title: "Prototype-driven", icon: <Activity />, desc: "Rapid iteration based on real-world data." },
                  { title: "Real-world deployment", icon: <Target />, desc: "Solutions built for actual environment challenges." },
                  { title: "Scalable and modular", icon: <Layers />, desc: "Designed to grow with your infrastructure needs." }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="bg-[#0A0A0A] p-10 rounded-[30px] border border-white/5 h-full flex flex-col gap-6 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <h3 className="font-gilroy text-2xl font-bold uppercase leading-tight tracking-tight text-white/90">{item.title}</h3>
                      <p className="font-gilroy text-white/40 font-medium">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* 9. Future Roadmap Section */}
          <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.05] blur-[150px] rounded-full" />
            </div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal>
                  <span className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">The Future</span>
                  <h2 className="font-gilroy text-5xl md:text-7xl font-black text-white leading-tight uppercase tracking-tighter mt-6 mb-8">
                    Scaling the <br /><span className="text-primary italic">Horizon</span>
                  </h2>
                  <p className="font-gilroy text-xl text-white/50 leading-relaxed font-medium max-w-xl">
                    We are expanding our intelligent monitoring systems to support city-wide autonomous grids, ensuring that sustainable energy is not just a luxury, but a standard.
                  </p>
                </ScrollReveal>

                <div className="space-y-4">
                  {[
                    { year: "Phase 01", title: "Smart City Integration", status: "In Progress" },
                    { year: "Phase 02", title: "Global Modular Network", status: "Coming Soon" },
                    { year: "Phase 03", title: "Autonomous Grid Control", status: "Research Phase" }
                  ].map((step, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.2}>
                      <div className="group border border-white/10 p-8 rounded-[20px] flex items-center justify-between hover:bg-white/5 transition-colors">
                        <div>
                          <span className="text-primary font-gilroy font-black text-xs uppercase tracking-widest">{step.year}</span>
                          <h4 className="font-gilroy text-xl font-bold uppercase mt-1">{step.title}</h4>
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-white/20 rounded-full text-white/30 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                          {step.status}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof / Partners */}
          {/* <SupportedCarousel /> */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
