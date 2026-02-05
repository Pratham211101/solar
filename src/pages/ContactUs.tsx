import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import AppleGlassButton from "../components/ui/AppleGlassButton";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <>
      <div className="light-theme bg-background min-h-screen font-gilroy">
        <main className="pt-[72px]">
          <section className="min-h-[calc(100vh-72px)] flex items-center py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-center">
                <div className="lg:col-span-5">
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        GET IN TOUCH
                      </span>
                      <div className="h-px w-12 bg-primary/30" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-[1.1] tracking-tighter-custom">
                      Let's start a <br />
                      <span className="text-gradient italic">conversation</span>
                    </h1>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-sm">
                      Have questions about our technology or want to explore partnership opportunities? We're here to help.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: Mail, label: "Email", value: "contact@cluix.com", href: "mailto:contact@cluix.com" },
                        { icon: Phone, label: "Phone", value: "+91 (123) 456-7890", href: "tel:+911234567890" },
                        { icon: MapPin, label: "Office", value: "New Delhi, India", href: "#" }
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.href}
                          whileHover={{ x: 6 }}
                          className="flex items-center gap-4 p-4 rounded-[20px] bg-white border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{item.label}</p>
                            <p className="text-base font-semibold text-foreground">{item.value}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-7">
                  <ScrollReveal delay={0.2}>
                    <div className="relative bg-white border border-border p-8 md:p-10 rounded-[32px] shadow-2xl overflow-hidden">
                      {/* Decorative Background */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-3xl rounded-full -mr-24 -mt-24" />

                      {isSuccess ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="py-16 text-center"
                        >
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                          <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                        </motion.div>
                      ) : (
                        <>
                          <div className="mb-8">
                            <h2 className="text-2xl font-bold text-foreground mb-1">Send us a message</h2>
                            <p className="text-sm text-muted-foreground">Fill out the form below and we'll be in touch shortly.</p>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">First Name</label>
                                <input
                                  required
                                  type="text"
                                  placeholder="John"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Last Name</label>
                                <input
                                  required
                                  type="text"
                                  placeholder="Doe"
                                  className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                                />
                              </div>
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Email Address</label>
                              <input
                                required
                                type="email"
                                placeholder="john@example.com"
                                className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                              />
                            </div>

                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Message</label>
                              <textarea
                                required
                                rows={3}
                                placeholder="How can we help you?"
                                className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy resize-none"
                              />
                            </div>

                            <div className="pt-2">
                              <AppleGlassButton
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-slate-900 border-none hover:bg-slate-800"
                              >
                                {isSubmitting ? "Sending..." : "Send Message"}
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
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
