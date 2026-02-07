import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import ScrollIndicator from "../components/layout/ScrollIndicator";
import { Check, Users, Monitor, Coffee, Wifi, Printer, Calendar, Shield, Beaker } from "lucide-react";

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
                <section className="relative h-[100vh] w-full overflow-hidden bg-black flex items-center justify-center">
                    <div className="absolute inset-0 z-0 h-full w-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover opacity-60 scale-[1.33]"
                        >
                            <source src="/videos/research-and-innovation-park2.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 pointer-events-none" />
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
                                        src="/images/research-and-innovation-park2.png"
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

                {/* Lab Section */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <ScrollReveal direction="right" className="flex-1 order-2 lg:order-1">
                                <div className="space-y-8">
                                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                                        <div className="flex items-center gap-2">
                                            <Beaker size={14} className="text-primary" />
                                            <span className="text-primary font-bold tracking-widest text-[10px] uppercase">Research Infrastructure</span>
                                        </div>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                                        Our <span className="text-primary italic">R&D Laboratory</span>
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                                        Our facility houses a cutting-edge laboratory dedicated to advanced water quality
                                        analysis and environmental research. Equipped with high-precision analytical
                                        instruments, it serves as the core of our innovation.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        {[
                                            { title: "Advanced Analytics", desc: "Equipped with latest spectrometry and chromatography tools." },
                                            { title: "ISO Certified", desc: "Processes that meet international quality standards." },
                                            { title: "Rapid Prototyping", desc: "Dedicated space for sensor development and testing." },
                                            { title: "Expert Support", desc: "Collaborate with Ph.D. researchers and engineers." }
                                        ].map((item, idx) => (
                                            <div key={idx} className="space-y-2 group">
                                                <h4 className="font-bold text-black group-hover:text-primary transition-colors">{item.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="left" className="flex-1 order-1 lg:order-2 w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                                        <img
                                            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070"
                                            alt="Cluix Research Lab"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                                            <div className="text-white">
                                                <p className="text-xs font-medium opacity-80 uppercase tracking-widest mb-1">State-of-the-Art</p>
                                                <p className="text-2xl font-bold">Innovation Center</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
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

            <div className="bg-black">
                <Footer />
            </div>
        </div>
    );
};

export default OfficeSpace;
