import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <>
      <div className="light-theme bg-background min-h-screen">
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16">
                <div>
                  <ScrollReveal>
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                      Contact Us
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      <span className="text-foreground">Get in</span>{" "}
                      <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-12">
                      Have questions about our products or services? We're here to help.
                    </p>

                    <div className="space-y-6">
                      <a
                        href="mailto:contact@cluix.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="text-foreground font-medium">contact@cluix.com</p>
                        </div>
                      </a>
                      <a
                        href="tel:+1234567890"
                        className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="text-foreground font-medium">+1 (234) 567-890</p>
                        </div>
                      </a>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="text-foreground font-medium">
                            123 Innovation Drive, Tech Park, CA 90210
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={0.2}>
                  <div className="card-gradient p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
