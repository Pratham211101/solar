import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Check, Calendar, Users, Zap, CheckCircle2, Building2, Briefcase } from "lucide-react";
import AppleGlassButton from "../components/ui/AppleGlassButton";

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const demoFeatures = [
    { icon: Zap, label: "Live", value: "Product Demonstration" },
    { icon: Users, label: "Expert", value: "Personalized Walkthrough" },
    { icon: Calendar, label: "Flexible", value: "Schedule as per your time" }
  ];

  return (
    <>
      <div className="light-theme bg-background min-h-screen font-gilroy">
        <main className="pt-[72px]">
          <section className="min-h-[calc(100vh-72px)] flex items-center md:py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">

                {/* Left Content Side */}
                <div className="lg:col-span-5">
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                        REQUEST DEMO
                      </span>
                      <div className="h-px w-10 bg-primary/30" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4 text-foreground leading-[1.1] tracking-tighter-custom">
                      See solar <br />
                      <span className="text-gradient italic">in action</span>
                    </h1>

                    <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-sm">
                      Get a personalized demonstration of our environmental monitoring solutions tailored to your needs.
                    </p>

                    <div className="space-y-2">
                      {demoFeatures.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-[16px] bg-white border border-border/50 transition-all group hover:border-primary/30"
                        >
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all">
                            <item.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-0"> {item.label}</p>
                            <p className="text-sm font-semibold text-foreground">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                {/* Right Form Side */}
                <div className="lg:col-span-7">
                  <ScrollReveal delay={0.2}>
                    <div className="relative bg-white border border-border p-6 md:p-8 rounded-[24px] shadow-xl overflow-hidden">
                      {/* Decorative Background */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />

                      {isSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-12 text-center"
                        >
                          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-7 h-7 text-primary" />
                          </div>
                          <h2 className="text-xl font-bold mb-1">Request Received!</h2>
                          <p className="text-sm text-muted-foreground">Our experts will contact you shortly.</p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-0.5">Schedule Your Demo</h2>
                            <p className="text-[13px] text-muted-foreground">Tell us about your needs and we'll reach out.</p>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-3">
                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">First Name</label>
                                <input
                                  required
                                  type="text"
                                  placeholder="John"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Last Name</label>
                                <input
                                  required
                                  type="text"
                                  placeholder="Doe"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Work Email</label>
                                <input
                                  required
                                  type="email"
                                  placeholder="john@company.com"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                              <div className="space-y-1">
                                <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Company</label>
                                <input
                                  required
                                  type="text"
                                  placeholder="solar"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Industry</label>
                              <div className="relative">
                                <select
                                  required
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy appearance-none cursor-pointer"
                                  defaultValue=""
                                >
                                  <option value="" disabled>Select your industry</option>
                                  <option value="manufacturing">Manufacturing</option>
                                  <option value="water-treatment">Water Treatment</option>
                                  <option value="power-generation">Power Generation</option>
                                  <option value="pharmaceuticals">Pharmaceuticals</option>
                                  <option value="other">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                                  <Building2 className="w-3.5 h-3.5" />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-[9px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Tell us more (Optional)</label>
                              <textarea
                                rows={1}
                                placeholder="Any specific requirements?"
                                className="w-full bg-muted/20 border border-border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-primary transition-all font-gilroy resize-none"
                              />
                            </div>

                            <div className="pt-1">
                              <AppleGlassButton
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-3.5 bg-slate-900 border-none hover:bg-slate-800 text-sm"
                              >
                                {isSubmitting ? "Processing..." : "Request Demo"}
                              </AppleGlassButton>
                            </div>
                          </form>
                        </>
                      )}
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

export default Demo;
