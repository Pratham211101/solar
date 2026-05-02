import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LightPillar from "../home/LightPillar";

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
            className="bg-[#050505] flex flex-col items-center overflow-hidden relative"
        >
            <div className="absolute inset-0 z-0 opacity-20">
                <LightPillar
                    topColor="#5227FF"
                    bottomColor="#FF9FFC"
                    intensity={0.4}
                    rotationSpeed={0.3}
                    glowAmount={0.002}
                    pillarWidth={3}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={10}
                    mixBlendMode="screen"
                    quality="high"
                />
            </div>
            {/* High-Impact Knockout Header - Commented out for now
            <div className="relative w-full h-[50vh] flex flex-col items-center justify-start overflow-hidden pt-8">
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
                        <source src="/videos/hero-bg.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <div className="absolute inset-0 z-10 bg-black mix-blend-multiply flex items-center justify-center pointer-events-none">
                    <h2 className="font-gilroy text-[20vw] font-[1000] leading-none tracking-[-0.08em] uppercase text-white ">
                        OUR VISION
                    </h2>
                </div>
            </div>
            */}

            {/* Content (Stacked) - Dark Background with Light Text */}
            <div className="relative w-full z-20 px-6 md:px-12 pb-32">
                <div className="container mx-auto max-w-4xl">
                    <div className="flex flex-col gap-24 items-center justify-center pt-12 text-center">

                        {/* Our Vision Block */}
                        <ScrollReveal>
                            <div className="space-y-6 flex flex-col items-center max-w-3xl">
                                <h3 className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Our Vision</h3>
                                <p className="font-gilroy text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                                    To power the <span className="text-primary italic px-2">next generation</span> <br /> of infrastructure with intelligent solutions.
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Separator Line */}
                        <div className="w-12 h-px bg-white/10" />

                        {/* Our Mission Block */}
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-8 flex flex-col items-center max-w-3xl">
                                <h3 className="font-gilroy text-[12px] font-black uppercase tracking-[0.6em] text-primary">Our Mission</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full">
                                    <div className="space-y-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">01</div>
                                        <p className="font-gilroy text-xl font-bold text-white uppercase tracking-tight">Build reliable solar infrastructure</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">02</div>
                                        <p className="font-gilroy text-xl font-bold text-white uppercase tracking-tight">Integrate smart technology everywhere</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">03</div>
                                        <p className="font-gilroy text-xl font-bold text-white uppercase tracking-tight">Make sustainable energy accessible at scale</p>
                                    </div>
                                </div>
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
