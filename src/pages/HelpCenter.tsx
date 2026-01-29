import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import ContactForm from "../components/forms/ContactForm";
import { Link } from "react-router-dom";

const HelpCenter = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <>
            <Navbar />
            <main className="pt-24 min-h-screen bg-white">
                {/* Top Header Section */}
                <section className="bg-slate-50 py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                                    Support Center
                                </h1>

                                {/* Breadcrumbs */}
                                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 md:mb-0">
                                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                                    <span className="text-slate-300">→</span>
                                    <span className="text-slate-400">Help</span>
                                    <span className="text-slate-300">→</span>
                                    <span className="text-primary font-semibold">Support</span>
                                </nav>
                            </div>

                            {/* Sidebar Links */}
                            <div className="flex flex-col gap-4 text-right">
                                <Link to="#" className="text-primary font-medium hover:underline">Overview</Link>
                                <Link to="#" className="text-primary font-medium hover:underline">Write to us</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section - Uses a bold blue/primary background as in the reference image */}
                <section className="bg-[#00FFFF] py-20 relative">
                    <div className="container mx-auto px-6">
                        {/* White Info Card */}
                        <ScrollReveal>
                            <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 -mt-32 relative z-10 border border-slate-100">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                                    {/* Toll Free */}
                                    <div className="flex flex-col items-center md:items-start space-y-4 pt-8 md:pt-0 md:pr-8">
                                        <p className="text-xs font-semibold text-[#0066A1] uppercase tracking-wider">
                                            For Service & Support Call our Toll Free Number
                                        </p>
                                        <div className="h-px bg-slate-100 w-full" />
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl md:text-4xl font-bold text-slate-900">
                                                1 800 102 4799
                                            </div>
                                        </div>
                                    </div>

                                    {/* Availability */}
                                    <div className="flex flex-col items-center md:items-start space-y-4 pt-8 md:pt-0 md:px-8">
                                        <p className="text-xs font-semibold text-[#0066A1] uppercase tracking-wider">
                                            Availability
                                        </p>
                                        <div className="h-px bg-slate-100 w-full" />
                                        <div className="space-y-1">
                                            <p className="text-2xl text-slate-700 font-medium">Monday - Friday</p>
                                            <p className="text-3xl md:text-4xl text-slate-400">10 AM - 5 PM</p>
                                        </div>
                                    </div>

                                    {/* Write to us */}
                                    <div className="flex flex-col items-center md:items-start space-y-4 pt-8 md:pt-0 md:pl-8">
                                        <p className="text-xs font-semibold text-[#0066A1] uppercase tracking-wider">
                                            Write to us
                                        </p>
                                        <div className="h-px bg-slate-100 w-full" />
                                        <div className="space-y-6 w-full">
                                            <p className="text-2xl md:text-3xl text-slate-600 font-light">
                                                support@elico.co
                                            </p>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full md:w-auto px-8 py-4 bg-[#0066A1] text-white rounded-xl font-bold text-sm hover:bg-[#00FFFF] transition-all uppercase tracking-widest shadow-md"
                                                onClick={() => setIsFormOpen(true)}
                                            >
                                                Send us a message
                                            </motion.button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Bottom space to show background color */}
                        <div className="h-32" />
                    </div>
                </section>
            </main>
            <Footer />
            <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        </>
    );
};

export default HelpCenter;
