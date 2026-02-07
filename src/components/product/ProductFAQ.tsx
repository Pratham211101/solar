import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ui/ScrollReveal";

const productFaqs = [
    {
        question: "How accurate are solar portable analyzers?",
        answer: "Our devices provide lab-grade accuracy (±2-5% for most parameters) and are validated by NABL labs. They are designed to deliver reliable results in field conditions, matching high-end spectrophotometers."
    },
    {
        question: "Do I need special training to use these devices?",
        answer: "No. solar devices are designed for 'precision simplified'. Most users can learn to perform tests in less than 30 minutes. We also provide comprehensive on-site and remote training as part of our deployment support."
    },
    {
        question: "Are the products compatible with mobile apps?",
        answer: "Yes, all our recent devices feature IoT connectivity via LoRa, Bluetooth, or GSM. Data is automatically synced to the solar dashboard, and real-time alerts can be received on mobile devices and via email."
    },
    {
        question: "How long does a typical test take?",
        answer: "For handheld analyzers like the C012, most parameters can be measured in under 2 minutes. For OCEMS systems, monitoring is continuous (24/7) with data points transmitted every few seconds."
    },
    {
        question: "What is the maintenance required for the sensors?",
        answer: "Maintenance is minimal. Portable sensors require periodic calibration (every 30 days recommended) and cleaning with distilled water. OCEMS systems may require sensor replacement every 6-12 months depending on water conditions."
    }
];

export function ProductFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white border-t border-slate-100 min-h-[80vh] flex flex-col justify-center">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <ScrollReveal>
                            <h2 className=" font-gilroy text-4xl md:text-5xl font-semibold text-slate-900 mb-4 uppercase tracking-tighter">
                                FAQ's
                            </h2>
                            <p className="text-slate-500 text-lg">
                                Frequently asked questions about our technology and support.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="space-y-2">
                        {productFaqs.map((faq, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <div className="border-b border-slate-100">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full flex items-center justify-between py-6 text-left group transition-all"
                                    >
                                        <span className={` font-gilroy text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-slate-900 group-hover:text-primary'}`}>
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0 ml-4">
                                            {openIndex === index ? (
                                                <Minus className="w-5 h-5 text-primary" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-8 font-gilroy font-normal text-slate-400 leading-relaxed text-lg">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <ScrollReveal delay={0.5}>
                            <Link
                                to="/faqs"
                                className="  font-gilroy inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group uppercase tracking-widest text-sm"
                            >
                                <span>VIEW ALL FAQ'S</span>
                                <MessageSquare className="w-4 h-4" />
                            </Link>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductFAQ;
