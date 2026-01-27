import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-2xl sticky top-32"
                >
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                    alt="Product"
                    className="w-full aspect-square object-cover"
                  />
                </motion.div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <span className="text-primary text-sm font-medium mb-2 block">
                    Water Quality Analyzer
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Cluix C012
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    Advanced multi-parameter water quality analyzer with IoT connectivity,
                    real-time monitoring, and automated reporting capabilities.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "12+ parameter simultaneous analysis",
                      "Cloud-based data management",
                      "Automatic calibration system",
                      "Mobile app for remote monitoring",
                      "Regulatory compliance reporting",
                      "Predictive maintenance alerts",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/demo"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold"
                      >
                        Request Demo
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/contact-us"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-primary/30 text-foreground rounded-full font-semibold"
                      >
                        Contact Sales
                      </Link>
                    </motion.div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2} className="mt-16">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
                  <div className="card-gradient p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { label: "Parameters", value: "12+" },
                        { label: "Accuracy", value: "±0.01%" },
                        { label: "Connectivity", value: "4G/WiFi/Ethernet" },
                        { label: "Power", value: "220V AC" },
                        { label: "Data Storage", value: "Cloud + Local" },
                        { label: "Warranty", value: "2 Years" },
                      ].map((spec) => (
                        <div key={spec.label} className="py-3 border-b border-border/50 last:border-0">
                          <p className="text-sm text-muted-foreground">{spec.label}</p>
                          <p className="text-foreground font-medium">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
