import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { 
  Search, 
  FileText, 
  Award, 
  BookOpen, 
  Download, 
  ChevronRight,
  Lightbulb,
  FileCheck,
  Book,
  ScrollText,
  Shield,
  AlertCircle,
  Plus,
  Minus
} from "lucide-react";
import { Input } from "@/components/ui/input";

const patents = [
  { title: "Handheld Water Quality Analyzer", number: "IN202141XXXXX", status: "Granted" },
  { title: "IoT-Based Continuous Monitoring System", number: "IN202241XXXXX", status: "Pending" },
  { title: "Multi-Parameter Detection Method", number: "IN202341XXXXX", status: "Granted" },
];

const caseStudies = [
  { title: "Municipal Water Treatment Plant Optimization", industry: "Government", location: "Maharashtra" },
  { title: "Industrial Effluent Monitoring Success", industry: "Manufacturing", location: "Gujarat" },
  { title: "River Basin Monitoring Network", industry: "Environmental", location: "Karnataka" },
];

const downloadables = {
  brochures: [
    { title: "Cluix Company Brochure", size: "2.4 MB" },
    { title: "Product Portfolio 2024", size: "3.1 MB" },
  ],
  pamphlets: [
    { title: "Cluix C012 Quick Guide", size: "1.2 MB" },
    { title: "OCEMS Overview", size: "0.8 MB" },
  ],
  datasheets: [
    { title: "C012 Technical Datasheet", size: "0.5 MB" },
    { title: "Varunaa Specifications", size: "0.4 MB" },
    { title: "OCEMS Parameters Sheet", size: "0.6 MB" },
  ],
  manuals: [
    { title: "C012 User Manual", size: "4.2 MB" },
    { title: "OCEMS Installation Guide", size: "3.8 MB" },
    { title: "Reagent Kit Usage Manual", size: "1.5 MB" },
  ],
  sops: [
    { title: "Calibration Procedure", size: "0.3 MB" },
    { title: "Maintenance Protocol", size: "0.4 MB" },
    { title: "Sample Collection Guidelines", size: "0.2 MB" },
  ],
  policies: [
    { title: "Privacy Policy", size: "0.1 MB", link: "/privacy-policy" },
    { title: "Terms & Conditions", size: "0.1 MB", link: "/terms-and-conditions" },
    { title: "Disclaimer", size: "0.1 MB" },
  ],
};

const faqs = [
  {
    question: "What parameters can the Cluix C012 measure?",
    answer: "The Cluix C012 can measure multiple water quality parameters including pH, TDS, conductivity, turbidity, dissolved oxygen, and various chemical parameters using our reagent kits."
  },
  {
    question: "How often does the device need calibration?",
    answer: "We recommend calibrating the device every 30 days for optimal accuracy. The calibration process is simple and takes only a few minutes using the provided calibration solutions."
  },
  {
    question: "What is the warranty period for Cluix products?",
    answer: "All Cluix products come with a standard 1-year warranty covering manufacturing defects. Extended warranty options are available for up to 3 years."
  },
  {
    question: "Do you provide on-site installation support?",
    answer: "Yes, we provide comprehensive on-site installation and training support for all our products. Our technical team ensures smooth deployment and knowledge transfer."
  },
  {
    question: "How can I order reagent kit refills?",
    answer: "Reagent kit refills can be ordered through our dashboard, by contacting our sales team, or through authorized distributors. We offer subscription plans for regular supplies."
  },
];

const downloadCategories = [
  { key: "brochures", label: "Brochures", icon: Book },
  { key: "pamphlets", label: "Pamphlets", icon: FileText },
  { key: "datasheets", label: "Datasheets", icon: ScrollText },
  { key: "manuals", label: "Manuals", icon: BookOpen },
  { key: "sops", label: "SOPs", icon: FileCheck },
  { key: "policies", label: "Privacy & Disclaimers", icon: Shield },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("brochures");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredDownloads = downloadables[activeCategory as keyof typeof downloadables].filter(
    item => item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-16 bg-primary/50" />
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Resources</span>
                <div className="h-px w-16 bg-primary/50" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Resource Center
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Access patents, certifications, case studies, and downloadable materials to support your journey with Cluix.
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
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-full border-border bg-background"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Patents Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Patents</h2>
              <p className="text-muted-foreground">Our intellectual property portfolio</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {patents.map((patent, index) => (
                <ScrollReveal key={patent.number} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-background rounded-2xl p-6 border border-border text-center"
                  >
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                      patent.status === "Granted" 
                        ? "bg-green-100 text-green-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {patent.status}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2">{patent.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{patent.number}</p>
                    <button className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                      View on Request <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Certifications</h2>
              <p className="text-muted-foreground mb-6">Industry-recognized quality standards</p>
              <Link 
                to="/quality-certifications"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                View All Certifications <ChevronRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Case Studies</h2>
              <p className="text-muted-foreground">Real-world success stories</p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-background rounded-2xl p-6 border border-border"
                  >
                    <div className="flex gap-2 mb-4">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{study.industry}</span>
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">{study.location}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-4">{study.title}</h3>
                    <button className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                      Request Access <ChevronRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Downloadables Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Downloadables</h2>
              <p className="text-muted-foreground">Documents and materials for your reference</p>
            </ScrollReveal>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {downloadCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeCategory === cat.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Downloads Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {filteredDownloads.length > 0 ? (
                filteredDownloads.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="bg-background rounded-xl p-4 border border-border flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.size}</p>
                        </div>
                      </div>
                      {'link' in item ? (
                        <Link to={item.link} className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </Link>
                      ) : (
                        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                          <Download className="w-5 h-5 text-primary" />
                        </button>
                      )}
                    </motion.div>
                  </ScrollReveal>
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-muted-foreground">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p>No documents found matching "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common queries</p>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    className="bg-background rounded-xl border border-border overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
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
              ))}
            </div>

            <ScrollReveal className="text-center mt-8">
              <Link 
                to="/faqs"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View All FAQs <ChevronRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
