import { motion } from "framer-motion";

const organizations = [
  "IIT Delhi",
  "Invest India",
  "Har Ghar Jal",
  "IIT Palakkad",
  "Startup India",
  "PHED Gujarat",
  "PHED Rajasthan",
  "Jal Jeevan Mission",
  "NABL Labs",
  "State Water Boards",
];

export function TrustedBySection() {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-xl md:text-2xl font-semibold text-slate-900"
        >
          Trusted by Leading Organizations
        </motion.h2>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate organizations for seamless loop */}
          {[...organizations, ...organizations, ...organizations].map((org, i) => (
            <div
              key={`${org}-${i}`}
              className="flex-shrink-0 px-6 py-3 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <span className="text-slate-700 text-sm font-medium whitespace-nowrap">
                {org}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TrustedBySection;
