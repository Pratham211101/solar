import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function VisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax movement for the video background
    const videoY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

    return (
        <section
            ref={containerRef}
            className="bg-white flex flex-col items-center overflow-hidden relative"
        >
            {/* High-Impact Knockout Header - Reduced height and padding for better flow */}
            <div className="relative w-full h-[50vh] flex flex-col items-center justify-start overflow-hidden pt-8">
                {/* The Video Layer (Background) */}
                <motion.div
                    style={{ y: videoY, scale }}
                    className="absolute inset-0 z-0 pointer-events-none"
                >
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/videos/182288-868067168_medium.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                {/* The Knockout Overlay */}
                <div className="absolute inset-0 z-10 bg-white mix-blend-screen flex items-center justify-center pointer-events-none">
                    <h2 className="font-gilroy text-[20vw] font-[1000] leading-none tracking-[-0.08em] uppercase text-black ">
                        OUR VISION
                    </h2>
                </div>
            </div>

            {/* Content (Stacked) - Solid White Background with Black Text */}
            <div className="relative w-full z-20 bg-white px-6 md:px-12 pb-32">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col gap-24 items-center justify-center pt-12 text-center">

                        {/* Our Vision Block */}
                        <ScrollReveal>
                            <div className="space-y-6 flex flex-col items-center max-w-2xl">
                                <h3 className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Our Vision</h3>
                                <p className="font-gilroy text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
                                    We aim for a <span className="text-primary italic px-2">sustainable future</span> <br /> with innovations.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Separator Line */}
                        <div className="w-12 h-px bg-black/10" />

                        {/* Our Mission Block */}
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-6 flex flex-col items-center max-w-2xl">
                                <h3 className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Our Mission</h3>
                                <p className="font-gilroy text-4xl md:text-5xl font-black text-black leading-tight uppercase tracking-tighter">
                                    Innovating and deploying disruptive, yet <span className="text-primary italic px-2">affordable</span>, clean tech solutions accessible to all.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Inline ScrollReveal for simplicity
function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay, ease: [0.19, 1, 0.22, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default VisionSection;
