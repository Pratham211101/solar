import { motion } from "framer-motion";

const clientImages = [
  "/images/clients/img1.jpg",
  "/images/clients/img2.jpg",
  "/images/clients/img3.jpg",
  "/images/clients/img4.jpg",
  "/images/clients/img5.jpg",
  "/images/clients/img6.png",
  "/images/clients/img7.png",
  "/images/clients/img8.png",
  "/images/clients/img10.png",
  "/images/clients/img11.png",
  "/images/clients/img12.webp",
  "/images/clients/img13.jpeg",
  "/images/clients/img14.jpg",
  "/images/clients/img92.png",
];

export function TrustedBySection() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <h2 className="font-gilroy text-xs font-bold tracking-[0.5em] text-black/30 uppercase">
            Trusted Ecosystem
          </h2>
          <div className="h-px flex-1 bg-black/5 mx-6 hidden md:block" />
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative group pause-on-hover">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track 1 */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...clientImages, ...clientImages].map((img, i) => (
              <div
                key={`client-1-${i}`}
                className="flex-shrink-0 px-16 py-12 border-l border-black/5 flex items-center justify-center transition-all duration-700"
              >
                <img
                  src={img}
                  alt="Client"
                  loading="lazy"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Opposite Track for Rhythm */}
        <div className="overflow-hidden border-t border-black/5">
          <div className="flex w-max animate-marquee-reverse whitespace-nowrap">
            {[...clientImages, ...clientImages].reverse().map((img, i) => (
              <div
                key={`client-2-${i}`}
                className="flex-shrink-0 px-16 py-12 border-l border-black/5 flex items-center justify-center transition-all duration-700"
              >
                <img
                  src={img}
                  alt="Client"
                  loading="lazy"
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBySection;
