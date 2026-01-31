import { motion } from "framer-motion";

const organizations = [
  "IIT DELHI",
  "INVEST INDIA",
  "HAR GHAR JAL",
  "IIT PALAKKAD",
  "STARTUP INDIA",
  "PHED GUJARAT",
  "PHED RAJASTHAN",
  "JAL JEEVAN MISSION",
  "NABL LABS",
  "STATE WATER BOARDS",
  "WASH PROGRAMS",
  "CSR INITIATIVES",
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
          <p className="font-gilroy text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
            ESTABLISHED PARTNERSHIPS — 2024
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative group">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track 1 */}
        <motion.div
          className="flex gap-0"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {[...organizations, ...organizations, ...organizations].map((org, i) => (
            <div
              key={`${org}-${i}`}
              className="flex-shrink-0 px-12 py-8 border-l border-black/5 flex items-center justify-center group/item hover:bg-black/[0.02] transition-colors duration-500"
            >
              <span className="font-gilroy text-lg md:text-xl font-black text-black/10 group-hover/item:text-primary transition-colors duration-700 whitespace-nowrap tracking-tighter italic overflow-hidden">
                {org}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Secondary Opposite Track for Rhythm */}
      <div className="relative mt-0 pt-0 border-t border-black/5">
        <motion.div
          className="flex gap-0"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {[...organizations, ...organizations, ...organizations].reverse().map((org, i) => (
            <div
              key={`${org}-rev-${i}`}
              className="flex-shrink-0 px-12 py-8 border-l border-black/5 flex items-center justify-center group/item hover:bg-black/[0.02] transition-colors duration-500"
            >
              <span className="font-gilroy text-lg md:text-xl font-black text-black/10 group-hover/item:text-primary transition-colors duration-700 whitespace-nowrap tracking-tighter italic">
                {org}
              </span>
            </div>
          ))}
          <div className="border-r border-black/5" />
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedBySection;
