import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  Minus,
  X,
  Mail,
  MessageSquare
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
  { key: "all", label: "All", icon: FileText },
  { key: "brochures", label: "Brochures", icon: Book },
  { key: "pamphlets", label: "Pamphlets", icon: FileText },
  { key: "datasheets", label: "Datasheets", icon: ScrollText },
  { key: "manuals", label: "Manuals", icon: BookOpen },
  { key: "sops", label: "SOPs", icon: FileCheck },
  { key: "policies", label: "Privacy & Disclaimers", icon: Shield },
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
  });

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFormOpen]);

  const handleRequestAccess = (documentTitle: string) => {
    setSelectedDocument(documentTitle);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedDocument("");
    setFormData({ email: "", subject: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, document: selectedDocument });
    // Add your form submission logic here
    handleCloseForm();
  };

  // Get all documents flattened with category info
  const getAllDocuments = () => {
    const all: { title: string; size: string; link?: string; category: string }[] = [];
    Object.entries(downloadables).forEach(([category, docs]) => {
      docs.forEach(doc => all.push({ ...doc, category }));
    });
    return all;
  };

  // Filter logic: if searching, always search across ALL categories
  const filteredDownloads = (() => {
    if (searchQuery.trim()) {
      // Search across all categories
      return getAllDocuments().filter(
        item => item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // No search query - filter by category
    if (activeCategory === "all") {
      return getAllDocuments();
    }
    return downloadables[activeCategory as keyof typeof downloadables].map(doc => ({ ...doc, category: activeCategory }));
  })();

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
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${patent.status === "Granted"
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                      }`}>
                      {patent.status}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2">{patent.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{patent.number}</p>
                    <button
                      onClick={() => handleRequestAccess(patent.title)}
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
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
            <ScrollReveal className="text-center mb-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Certifications</h2>
              <p className="text-muted-foreground">Industry-recognized quality standards</p>
            </ScrollReveal>

            {/* Certificate Placeholders Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {[
                { title: "NABL Certificate", subtitle: "Laboratory Accreditation" },
                { title: "ISO 9001:2015", subtitle: "Quality Management System" },
                { title: "BIS License", subtitle: "Bureau of Indian Standards" },
              ].map((doc, i) => (
                <ScrollReveal key={doc.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
                  >
                    {/* Placeholder Image */}
                    <div className="aspect-[4/3] bg-muted/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 to-muted" />
                      <div className="relative z-10 text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 bg-background rounded-lg shadow-sm flex items-center justify-center">
                          <FileCheck className="w-8 h-8 text-primary/60" />
                        </div>
                        <p className="text-sm text-muted-foreground">Certificate Image</p>
                      </div>
                    </div>
                    {/* Caption */}
                    <div className="p-4 bg-background">
                      <h3 className="font-semibold text-foreground">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground">{doc.subtitle}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="text-center">
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
                    <button
                      onClick={() => handleRequestAccess(study.title)}
                      className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1"
                    >
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
            <ScrollReveal className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Downloadables</h2>
              <p className="text-muted-foreground">Documents and materials for your reference</p>
            </ScrollReveal>

            {/* Search Bar */}
            <ScrollReveal className="max-w-xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-full border-border bg-background"
                />
              </div>
            </ScrollReveal>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {downloadCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${activeCategory === cat.key
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

      {/* Request Form Modal */}
      {isFormOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          onClick={handleCloseForm}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Form Content */}
            <div className="p-8 overflow-y-auto" style={{ maxHeight: '90vh' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request Document Access</h2>
              <p className="text-gray-600 mb-6">Fill out the form below to request access to this document.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Document Title (Non-editable) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Document Title
                  </label>
                  <div className="relative">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={selectedDocument}
                      readOnly
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject / Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Please provide details about your request..."
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>,
        document.body
      )}

    </>
  );
};

export default Resources;
