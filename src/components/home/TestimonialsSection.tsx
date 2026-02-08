import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "The EOS self-cleaning solar poles have been a game-changer for our national highway stretches in Rajasthan. We've seen a 95% reduction in manual maintenance visits, and the light output remains consistently high despite the heavy sandstorms.",
    role: "CHIEF ENGINEER",
    name: "RAHUL SHARMA",
    organization: "NHAI PROJECTS",
    index: "01",
  },
  {
    quote: "Implementing the Smart Solar Bench across our corporate campus was the best decision for our employee breakout zones. It's more than just seating—it's a hub for connectivity that aligns perfectly with our sustainability goals.",
    role: "OPERATIONS DIRECTOR",
    name: "ANANYA GUPTA",
    organization: "CYBER CITY BANGALORE",
    index: "02",
  },
  {
    quote: "As a gated community, security is our top priority. The Helios vertical solar poles not only look architecturally stunning but provide reliable, theft-proof lighting throughout the night. Our residents feel safer than ever.",
    role: "MANAGEMENT COMMITTEE",
    name: "PRIYA DESHMUKH",
    organization: "HARMONY RESIDENCY",
    index: "03",
  },
];

export function TestimonialsSection() {
  return (
    <section className="min-h-screen py-24 bg-white relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <span className="text-primary font-gilroy text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Impact Stories</span>
            <h2 className="font-gilroy text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-none">
              Voices of <span className="text-primary italic">Efficiency</span>
            </h2>
          </div>
          <div className="flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.index}
              layout
              initial="rest"
              animate="rest"
              whileHover="hover"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.04 }
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 26
              }}
              className="relative will-change-transform hover:z-20"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                className="group relative border border-black/10 p-8 pt-12 h-[500px] flex flex-col justify-between overflow-hidden bg-white transition-all hover:shadow-2xl hover:shadow-black/10 rounded-md"
              >
                {/* Black to Cyan Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <Quote className="w-8 h-8 text-primary group-hover:text-primary transition-colors opacity-60" />
                  </div>

                  {/* Quote Text */}
                  <div className="relative">
                    <p className="font-gilroy text-sm font-bold text-black/40 group-hover:text-white/90 leading-tight transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Info */}
                <div className="relative z-10 pt-8 border-t border-black/5 group-hover:border-white/10 transition-colors">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-gilroy text-lg font-bold text-black group-hover:text-white uppercase tracking-tight transition-colors">
                      {testimonial.name}
                    </h4>
                    <span className="font-gilroy text-[10px] font-bold text-primary tracking-widest uppercase">
                      {testimonial.role}
                    </span>
                    <p className="text-black/40 group-hover:text-white/40 text-[9px] font-bold mt-1 font-gilroy tracking-[0.2em] uppercase transition-colors">
                      {testimonial.organization}
                    </p>
                  </div>
                </div>

                {/* Hover Sharp Border Glow */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
