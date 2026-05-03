import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Plus, Minus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const faqCategories = [
  { key: "all", label: "All" },
  { key: "general", label: "General" },
  { key: "products", label: "Products" },
  { key: "support", label: "Support" },
  { key: "orders", label: "Orders & Shipping" },
];

const allFaqs = {
  general: [
    {
      question: "What is SUNBOT?",
      answer: "SUNBOT is a leader in intelligent solar infrastructure. We design and manufacture advanced solar lighting, smart city poles, and interactive urban furniture like our smart solar benches."
    },
    {
      question: "Are your products suitable for extreme climates?",
      answer: "Yes, our products like Helios and EOS are specifically engineered for harsh environments. They are built with high-grade aluminum alloys and feature patented self-cleaning or vertical integration to withstand dust, sand, and high temperatures."
    },
    {
      question: "Do you offer smart city integration?",
      answer: "Absolutely. Our Smart Poles and lighting systems are IoT-ready, supporting sensors for air quality, traffic monitoring, and public Wi-Fi, all manageable via a centralized dashboard."
    },
  ],
  products: [
    {
      question: "What is the benefit of the Helios vertical solar pole?",
      answer: "The Helios series features vertical solar panels integrated into a triangular pole. This prevents dust accumulation, offers high wind resistance, and captures sunlight from all 360 degrees throughout the day."
    },
    {
      question: "How does the EOS self-cleaning system work?",
      answer: "EOS features a patented dual-motor brush system that automatically sweeps the solar panel twice daily. This maintains up to 98% efficiency in dusty or sandy regions without manual intervention."
    },
    {
      question: "What features does the Smart Solar Bench have?",
      answer: "Our smart benches offer wireless and USB charging for devices, built-in cooling fans and humidifiers for user comfort, Bluetooth speakers, and even dedicated e-scooter parking with charging."
    },
    {
      question: "What is the lifespan of your solar batteries?",
      answer: "We use high-capacity LiFePO4 batteries with over 4000+ cycles, providing a service life of approximately 8 to 10 years depending on usage and environment."
    },
    {
      question: "Can I customize the light output for my project?",
      answer: "Yes, our products range from 3,000 LM for residential use to over 40,000 LM for high-mast applications like sports arenas and ports. We also offer Dialux simulations to optimize your lighting plan."
    },
  ],
  support: [
    {
      question: "What kind of warranty do you provide?",
      answer: "All solar products come with a standard 1 to 3-year warranty covering manufacturing defects. We also offer extended maintenance contracts for large-scale installations."
    },
    {
      question: "Do you provide installation services?",
      answer: "We provide comprehensive deployment support, including lighting simulations, structural engineering for poles, on-site installation supervision, and remote IoT dashboard configuration."
    },
    {
      question: "How do I monitor my lighting network?",
      answer: "You can monitor and control all your devices through our IoT dashboard using Zigbee, GSM, or 4G connectivity. This allows for real-time performance tracking and automated dimming schedules."
    },
  ],
  orders: [
    {
      question: "Do you handle bulk international orders?",
      answer: "Yes, we have a global logistics network and have successfully deployed projects in Dubai, Europe, and Asia. We specialize in large-scale municipal and industrial lighting projects."
    },
    {
      question: "How can I request a quote?",
      answer: "You can request a customized quote through our 'Contact Us' page or by using the 'Start Your Project' forms on individual product pages. Our team typically responds within 24 hours."
    },
    {
      question: "What is the typical lead time for a project?",
      answer: "Lead times vary based on project scale and customization requirements, but standard products usually ship within 4 to 6 weeks for large orders."
    },
  ],
};

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Get all FAQs flattened with category info
  const getAllFaqs = () => {
    const all: { question: string; answer: string; category: string }[] = [];
    Object.entries(allFaqs).forEach(([category, faqs]) => {
      faqs.forEach(faq => all.push({ ...faq, category }));
    });
    return all;
  };

  // Filter logic: if searching, always search across ALL categories
  const currentFaqs = (() => {
    if (searchQuery.trim()) {
      // Search across all categories
      return getAllFaqs().filter(
        faq =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // No search query - filter by category
    if (activeCategory === "all") {
      return getAllFaqs();
    }
    return allFaqs[activeCategory as keyof typeof allFaqs].map(faq => ({ ...faq, category: activeCategory }));
  })();

  return (
    <>
      <div className="light-theme bg-background min-h-screen">
        <main className="pt-24">
          {/* Hero */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <ScrollReveal className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="h-px w-16 bg-primary/50" />
                  <span className="text-primary font-medium tracking-wider uppercase text-sm">Support</span>
                  <div className="h-px w-16 bg-primary/50" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Find answers to common questions about our products, services, and support.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* Search Bar */}
          <section className="pb-12">
            <div className="container mx-auto px-6">
              <ScrollReveal className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 rounded-full border-border bg-background"
                  />
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Category Tabs */}
          <section className="pb-8">
            <div className="container mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setOpenFaq(null);
                    }}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs List */}
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto space-y-4">
                {currentFaqs.length > 0 ? (
                  currentFaqs.map((faq, index) => (
                    <ScrollReveal key={index} delay={index * 0.05}>
                      <motion.div
                        className="bg-background rounded-xl border border-border overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{faq.question}</span>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                          >
                            {openFaq === index ? (
                              <Minus className="w-5 h-5 text-primary" />
                            ) : (
                              <Plus className="w-5 h-5 text-muted-foreground" />
                            )}
                          </motion.div>
                        </button>
                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === index ? "auto" : 0,
                            opacity: openFaq === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-4 text-muted-foreground">{faq.answer}</p>
                        </motion.div>
                      </motion.div>
                    </ScrollReveal>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>No FAQs found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
              <ScrollReveal className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
                <p className="text-muted-foreground mb-6">Our support team is here to help you</p>
                <a
                  href="/contact-us"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </a>
              </ScrollReveal>
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

export default FAQs;
