import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Check } from "lucide-react";

const Demo = () => {
  return (
    <>
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <ScrollReveal>
                  <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                    Request Demo
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="text-foreground">See Cluix</span>{" "}
                    <span className="text-gradient">in Action</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-12">
                    Get a personalized demo of our environmental monitoring solutions
                    tailored to your industry needs.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Live product demonstration",
                      "Customized use case walkthrough",
                      "Q&A with our experts",
                      "Pricing and implementation discussion",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.2}>
                <div className="card-gradient p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Schedule Your Demo
                  </h2>
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
                        Work Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Industry
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors">
                        <option value="">Select your industry</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="water-treatment">Water Treatment</option>
                        <option value="power-generation">Power Generation</option>
                        <option value="pharmaceuticals">Pharmaceuticals</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-primary text-primary-foreground rounded-full font-semibold"
                    >
                      Request Demo
                    </motion.button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Demo;
