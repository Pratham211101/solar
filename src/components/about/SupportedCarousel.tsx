import { motion } from "framer-motion";

const incubatedImages = [
    "/images/incubated/partner1.svg",
    "/images/incubated/partner13.png",
    "/images/incubated/partner16.png",
    "/images/incubated/partner18.png",
    "/images/incubated/partner19.png",
    "/images/incubated/partner3.jpg",
    "/images/incubated/partner5.svg",
    "/images/incubated/partner6.jpeg",
    "/images/incubated/patner3.svg",
];

export function SupportedCarousel() {
    return (
        <section className="py-20 bg-white overflow-hidden flex flex-col items-center justify-center">
            {/* Label for the strip */}
            <div className="mb-12 opacity-30">
                <span className="font-gilroy text-[10px] font-black tracking-[0.5em] uppercase text-black">
                    Supported & Incubated By
                </span>
            </div>

            <div className="relative w-full group overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee whitespace-nowrap pause-on-hover">
                    {[...incubatedImages, ...incubatedImages].map((img, i) => (
                        <div
                            key={`${img}-${i}`}
                            className="flex-shrink-0 px-12 md:px-20 py-4 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-700 pointer-events-auto cursor-default"
                        >
                            <img
                                src={img}
                                alt="Partner"
                                className="h-24 md:h-32 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SupportedCarousel;
