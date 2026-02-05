import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import ScrollIndicator from "../components/layout/ScrollIndicator";
import { Check, Users, Monitor, Coffee, Wifi, Printer, Calendar, Shield } from "lucide-react";

const OfficeSpace = () => {
    const offerings = [
        {
            title: "Co-working Spaces",
            description: "Flexible 'Plug & Play' workspaces designed for startups and freelancers. Options include single seats, shared tables, and private cabins.",
            features: ["High-speed Wi-Fi", "Locker Facilities", "Printing & Scanning", "ESDM Rooms"],
            icon: Users,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
        },
        {
            title: "Meeting & Event Spaces",
            description: "Professional spaces for all your business needs, from board meetings to large conferences.",
            features: ["Auditorium (110 seats)", "Board Rooms (35 pax)", "Video Conferencing", "Training Rooms"],
            icon: Calendar,
            image: "https://images.unsplash.com/photo-1517502884422-41e157d4ed4c?w=800&q=80"
        },
        {
            title: "Guest Suites",
            description: "Fully furnished residential suites for visiting researchers, faculty, and business guests.",
            features: ["Air Conditioned", "En-suite Bathroom", "Pantry & TV", "Laundry Services"],
            icon: Coffee,
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
        }
    ];

    const amenities = [
        { icon: Wifi, label: "High-Speed Internet" },
        { icon: Coffee, label: "Cafeteria & Pantry" },
        { icon: Printer, label: "Business Center" },
        { icon: Shield, label: "24/7 Security" },
        { icon: Monitor, label: "Tech Support" },
        { icon: Users, label: "Networking Events" }
    ];

    return (
        <div className="bg-white min-h-screen font-gilroy">

            <main>
                {/* Hero Section */}
                <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                    <div className="absolute inset-0 z-0">
                        <img
                            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                            alt="Office Space"
                            className="w-full h-full object-cover opacity-50"
                        />
                        {/* Original vertical gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                        <div className="relative h-full w-full">
                            {/* Headline - Left Aligned */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 md:left-4 max-w-4xl">
                                <ScrollReveal>
                                    <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight tracking-tight">
                                        Our <span className="text-gradient italic">Office Space</span>
                                    </h1>
                                </ScrollReveal>
                            </div>

                            {/* Bottom Right Content */}
                            <div className="absolute bottom-12 md:bottom-24 right-0 max-w-xl text-right">
                                <ScrollReveal delay={0.2}>
                                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light">
                                        A state-of-the-art managed facility where scholars, industry, and entrepreneurs
                                        collaborate to create the future.
                                    </p>
                                </ScrollReveal>
                            </div>

                            {/* Scroll Indicator - Bottom Right Absolute */}
                            <ScrollIndicator style="absolute -right-4 md:-right-8 bottom-32 md:bottom-24 flex flex-col items-center gap-3 z-50 pointer-events-none scale-75 md:scale-100" variant="light" />
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <ScrollReveal direction="right">
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80"
                                        alt="Innovation Hub"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left">
                                <h2 className="text-4xl font-bold text-black mb-6">
                                    Where Ideas <span className="text-primary italic">Thrive</span>
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Our Research and Innovation Park allows industry and startups to interface with
                                    cutting-edge technology and expertise. Unlike typical real estate, we offer an
                                    ecosystem designed to foster product development and technological breakthroughs.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Proximity to Research Labs",
                                        "Access to Technical Mentorship",
                                        "Vibrant Startup Community",
                                        "Strategic Location in South Delhi"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Offerings Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                Our <span className="text-primary italic">Spaces</span>
                            </h2>
                            <p className="text-gray-500 max-w-2xl mx-auto">
                                Whether you need a single desk, a private suite, or a conference hall,
                                we have the perfect space for you.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {offerings.map((offer, index) => (
                                <ScrollReveal key={index} delay={index * 0.1}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={offer.image}
                                                alt={offer.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                                <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                                            </div>
                                        </div>

                                        <div className="p-8 flex flex-col flex-grow">
                                            <p className="text-gray-600 mb-6 leading-relaxed">{offer.description}</p>

                                            <div className="mt-auto">
                                                <h4 className="font-bold text-sm text-black uppercase tracking-wider mb-4">Includes:</h4>
                                                <ul className="space-y-2">
                                                    {offer.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Amenities Grid */}
                <section className="py-24 bg-black text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Amenities</span></h2>
                                <p className="text-gray-400 max-w-md">Everything you need to focus on what matters most—your work.</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 w-full md:w-auto">
                                {amenities.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-xl flex items-center gap-3 min-w-[150px]"
                                    >
                                        <item.icon className="text-primary w-5 h-5" />
                                        <span className="text-sm font-medium text-gray-200">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            <Footer />
        </div>
    );
};

export default OfficeSpace;
