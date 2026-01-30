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
      question: "What is Cluix?",
      answer: "Cluix is a technology company specializing in water quality monitoring solutions. We develop innovative handheld analyzers, online monitoring systems, and reagent kits for accurate water testing."
    },
    {
      question: "Where is Cluix located?",
      answer: "Cluix is headquartered in India with operations across multiple states. We serve customers nationwide and are expanding internationally."
    },
    {
      question: "How can I become a distributor?",
      answer: "To become a Cluix distributor, please contact our sales team through the Contact Us page. We'll evaluate your application and provide partnership details."
    },
  ],
  products: [
    {
      question: "What parameters can the Cluix C012 measure?",
      answer: "The Cluix C012 can measure multiple water quality parameters including pH, TDS, conductivity, turbidity, dissolved oxygen, and various chemical parameters using our reagent kits."
    },
    {
      question: "How often does the device need calibration?",
      answer: "We recommend calibrating the device every 30 days for optimal accuracy. The calibration process is simple and takes only a few minutes using the provided calibration solutions."
    },
    {
      question: "What is the battery life of the C012?",
      answer: "The Cluix C012 has a battery life of approximately 8 hours of continuous use. It can be charged via USB-C and reaches full charge in about 2 hours."
    },
    {
      question: "Are the reagent kits reusable?",
      answer: "Reagent kits are single-use consumables designed for accurate testing. Each kit contains enough reagents for the specified number of tests mentioned on the packaging."
    },
    {
      question: "What is the difference between C012 and OCEMS?",
      answer: "The C012 is a portable handheld analyzer for field testing, while OCEMS is a fixed online continuous monitoring system for permanent installation at monitoring sites."
    },
  ],
  support: [
    {
      question: "What is the warranty period for Cluix products?",
      answer: "All Cluix products come with a standard 1-year warranty covering manufacturing defects. Extended warranty options are available for up to 3 years."
    },
    {
      question: "Do you provide on-site installation support?",
      answer: "Yes, we provide comprehensive on-site installation and training support for all our products. Our technical team ensures smooth deployment and knowledge transfer."
    },
    {
      question: "How do I get technical support?",
      answer: "Technical support is available through our Help Center, email, and phone. Premium support packages include 24/7 assistance and dedicated account managers."
    },
    {
      question: "Where can I find user manuals?",
      answer: "User manuals are available in the Resources section of our website. You can also access them through the Cluix Dashboard after registering your product."
    },
  ],
  orders: [
    {
      question: "How can I order reagent kit refills?",
      answer: "Reagent kit refills can be ordered through our dashboard, by contacting our sales team, or through authorized distributors. We offer subscription plans for regular supplies."
    },
    {
      question: "What are the shipping options?",
      answer: "We offer standard and express shipping across India. International shipping is available for select countries. Shipping times and costs vary by location."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order is shipped, you'll receive a tracking number via email. You can also track orders through your Cluix Dashboard account."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 15 days of delivery for unused products in original packaging. Please refer to our Return Policy page for complete details."
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
      <Footer />
    </>
  );
};

export default FAQs;
