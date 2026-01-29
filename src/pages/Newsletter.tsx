import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Check } from "lucide-react";

const Newsletter = () => {
  return (
    <>
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal>
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                  Newsletter
                </span>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-foreground">Stay</span>{" "}
                  <span className="text-gradient">Updated</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-12">
                  Subscribe to our newsletter for the latest product updates, industry insights,
                  and exclusive content delivered to your inbox.
                </p>

                <div className="space-y-4 text-left mb-12">
                  {[
                    "Monthly product updates and feature releases",
                    "Industry insights and best practices",
                    "Exclusive webinar invitations",
                    "Early access to new products",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold"
                  >
                    Subscribe
                  </motion.button>
                </form>
                <p className="text-sm text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Newsletter;
