import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import ContactForm from "../components/forms/ContactForm";
import { Link } from "react-router-dom";
import {
    Calendar,
    LifeBuoy,
    BookOpen,
    Rocket,
    Zap,
    Settings,
    Users,
    Share2,
    Wrench,
    Plus,
    Minus,
    MessageSquare,
    Mail,
    Phone,
    Clock
} from "lucide-react";

const categories = [
    {
        icon: Rocket,
        title: "Getting Started",
        description: "New to SUNBOT? Learn how to set up your account and hardware."
    },
    {
        icon: Zap,
        title: "Using SUNBOT",
        description: "Master the features and get the most out of your analysis."
    },
    {
        icon: Settings,
        title: "Settings",
        description: "Manage your preferences, notifications, and device calibration."
    },
    {
        icon: Users,
        title: "Teams & Access",
        description: "Invite team members and manage role-based permissions."
    },
    {
        icon: Share2,
        title: "Integrations",
        description: "Connect SUNBOT with your existing ERP or data platforms."
    },
    {
        icon: Wrench,
        title: "Troubleshooting",
        description: "Find solutions to common technical issues and error codes."
    }
];

const faqs = [
    {
        question: "How do I set up my C012 analyzer for the first time?",
        answer: "Getting started with the C012 is simple. Charge the device, power it on, and follow the on-screen calibration wizard. For more detailed steps, refer to the printed manual or our Getting Started guide."
    },
    {
        question: "What is the shelf life of the reagents in the kit?",
        answer: "Most solar reagents have a shelf life of 12-24 months when stored in a cool, dry place. Each kit is clearly marked with an expiration date for your safety and accuracy."
    },
    {
        question: "How does IoT connectivity work in remote areas?",
        answer: "Our devices use multi-network eSIM technology that automatically connects to the strongest available cellular signal. We also support offline data logging, which syncs once a connection is re-established."
    },
    {
        question: "Can I export historical water quality data to Excel?",
        answer: "Yes, you can export all your historical data in CSV, Excel, or PDF formats directly from the solar Cloud dashboard."
    },
    {
        question: "What routine maintenance does the device require?",
        answer: "The C012 requires minimal maintenance. We recommend rinsing the sensor probe with distilled water after each use and performing a standard calibration check every 30 days."
    }
];

const HelpCenter = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    return (
        <>
            <div className="light-theme bg-background min-h-screen">
                <main>
                    {/* Hero Section with Black to Cyan Gradient - 100vh */}
                    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-32">
                        {/* Custom Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-primary/80" />

                        {/* Decorative Patterns */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <ScrollReveal>
                                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tight">
                                    Help Center
                                </h1>
                                <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
                                    How can we help you today? Search our documentation or reach out to our team.
                                </p>

                                {/* Support Info Row in Hero */}
                                <div className="flex flex-wrap justify-center gap-8 mb-16 text-white/80">
                                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.open('mailto:support@solar.in')}>
                                        <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                        <span className="font-medium hover:text-white transition-colors">support@solar.in</span>
                                    </div>
                                    <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.open('tel:18001024799')}>
                                        <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                                        <span className="font-medium hover:text-white transition-colors">1 800 102 4799</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span className="font-medium">Mon - Fri: 11 AM - 6 PM</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            {/* Top 3 Large Cards */}
                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                <ScrollReveal delay={0.1}>
                                    <Link to="/demo" className="block h-full group">
                                        <div className="bg-white rounded-3xl shadow-xl p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center border border-slate-100">
                                            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <Calendar className="w-8 h-8 text-amber-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Schedule a demo</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed text-center">See solar in action with a personalized walkthrough.</p>
                                        </div>
                                    </Link>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2}>
                                    <button onClick={() => setIsFormOpen(true)} className="w-full h-full group text-left sm:text-center">
                                        <div className="bg-white rounded-3xl shadow-xl p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center border border-slate-100">
                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <LifeBuoy className="w-8 h-8 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Get support</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed text-center">Need help? Open our support form to send us a query.</p>
                                        </div>
                                    </button>
                                </ScrollReveal>

/*
                                <ScrollReveal delay={0.3}>
                                    <Link to="/blog" className="block h-full group">
                                        <div className="bg-white rounded-3xl shadow-xl p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col items-center border border-slate-100">
                                            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                                <BookOpen className="w-8 h-8 text-purple-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">Read the blog</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed text-center">Industry insights, guides, and technical breakdowns.</p>
                                        </div>
                                    </Link>
                                </ScrollReveal>
                                */
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="py-32 border-t border-slate-200">
                        <div className="container mx-auto px-6">
                            <div className="max-w-3xl mx-auto">
                                <div className="text-center mb-20">
                                    <ScrollReveal>
                                        <h2 className="text-5xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">FAQ's</h2>
                                        <p className="text-slate-600 text-lg">Frequently asked questions about our products and services.</p>
                                    </ScrollReveal>
                                </div>

                                <div className="space-y-6">
                                    {faqs.map((faq, i) => (
                                        <ScrollReveal key={i} delay={i * 0.1}>
                                            <div className="border-b border-slate-100 pb-4">
                                                <button
                                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                                    className="w-full flex items-center justify-between py-6 text-left group"
                                                >
                                                    <span className={`text-xl font-bold transition-colors ${activeFaq === i ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                                                        {faq.question}
                                                    </span>
                                                    {activeFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-slate-400" />}
                                                </button>
                                                <AnimatePresence>
                                                    {activeFaq === i && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="pb-8 text-slate-600 leading-relaxed text-lg">
                                                                {faq.answer}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>

                                {/* All FAQs Link */}
                                <div className="mt-12 text-center">
                                    <ScrollReveal delay={0.5}>
                                        <Link to="/faqs" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group">
                                            <span>VIEW ALL FAQ'S</span>
                                            <MessageSquare className="w-4 h-4" />
                                        </Link>
                                    </ScrollReveal>
                                </div>

                                {/* Contact Support CTA */}
                                <ScrollReveal>
                                    <div className="mt-32 p-12 md:p-16 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="relative z-10">
                                            <h3 className="text-3xl font-bold mb-6">Still have questions?</h3>
                                            <p className="text-slate-400 mb-10 text-lg max-w-md mx-auto">
                                                Our support team is ready to assist you with any technical or general inquiries.
                                            </p>
                                            <div className="flex justify-center">
                                                <motion.button
                                                    onClick={() => setIsFormOpen(true)}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-12 py-4 bg-primary text-primary-foreground rounded-full font-bold shadow-lg shadow-primary/20 transition-all uppercase tracking-widest"
                                                >
                                                    Send a message
                                                </motion.button>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <div className="bg-black">
                <Footer />
            </div>
            <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
};

export default HelpCenter;
