import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import StyledContactForm from "../components/product/StyledContactForm";
import LightPillar from "../components/home/LightPillar";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="bg-[#050505] min-h-screen font-gilroy relative overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
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
            mixBlendMode="screen"
            quality="high"
          />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
        </div>

        <main className="pt-[72px] relative z-10">
          <section className="min-h-[calc(100vh-72px)] flex items-center py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
                <div className="lg:col-span-5">
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[10px] font-medium tracking-[0.3em] text-primary uppercase opacity-80">
                        GET IN TOUCH
                      </span>
                      <div className="h-px w-8 bg-primary/30" />
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white leading-[1.1] tracking-tighter-custom uppercase">
                      Let's start a <br />
                      <span className="text-gradient italic font-medium">conversation</span>
                    </h1>

                    <p className="text-base text-white/50 mb-10 leading-relaxed max-w-sm font-medium">
                      Have questions about our technology or want to explore partnership opportunities? We're here to help.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: Mail, label: "Email", value: "siddhant.solar@gmail.com", href: "mailto:siddhant.solar@gmail.com" },
                        { icon: Phone, label: "Phone", value: "+91 9984045295", href: "tel:+919984045295" },
                        { icon: MapPin, label: "Office", value: "RZB 32-A, Mahavir Enclave-I, New Delhi(110045)", href: "#" }
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.href}
                          whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.05)" }}
                          className="flex items-center gap-4 p-4 rounded-[20px] bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-[9px] font-medium text-white/30 uppercase tracking-[0.15em] mb-0.5">{item.label}</p>
                            <p className="text-sm font-medium text-white/90">{item.value}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-7">
                  <ScrollReveal delay={0.2}>
                    <div className="relative overflow-hidden">
                      {isSuccess ? (
                        <div className="bg-[#0A0A0A] border border-white/5 p-8 md:p-10 rounded-[32px] shadow-2xl">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-16 text-center"
                          >
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                              <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2 text-white">Message Sent!</h2>
                            <p className="text-white/60">We'll get back to you within 24 hours.</p>
                          </motion.div>
                        </div>
                      ) : (
                        <StyledContactForm
                          title="Send us a message"
                          formSubtitle="Fill out the form below and we'll be in touch shortly."
                          isSubmitting={isSubmitting}
                          onSubmit={handleSubmit}
                          formData={formData}
                          onChange={handleChange}
                          isGeneralContact={true}
                        />
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
