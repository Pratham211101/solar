import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "CLUIX HAS TRANSFORMED HOW WE MONITOR WATER QUALITY ACROSS 200+ VILLAGES. THE DATA IS RELIABLE AND THE DASHBOARD MAKES REPORTING EFFORTLESS.",
    role: "DISTRICT PROJECT MANAGER",
    organization: "JAL JEEVAN MISSION, RAJASTHAN",
    index: "01",
  },
  {
    quote: "THE ACCURACY MATCHES OUR LAB INSTRUMENTS, BUT WE CAN NOW TEST AT SOURCE. IT'S A GAME-CHANGER FOR OUR COMPLIANCE MONITORING.",
    role: "ENVIRONMENTAL OFFICER",
    organization: "PHARMACEUTICAL CORP, GUJARAT",
    index: "02",
  },
  {
    quote: "FINALLY, A DEVICE THAT WORKS IN INDIAN FIELD CONDITIONS. RUGGED, FAST, AND THE SUPPORT TEAM IS EXCELLENT.",
    role: "PROGRAM LEAD",
    organization: "WASH NGO, BIHAR",
    index: "03",
  },
  {
    quote: "OUR REAL-TIME MONITORING CAPABILITIES HAVE SCALED OVERNIGHT. THE CLOUD INTEGRATION IS SEAMLESS AND HIGHLY SECURE.",
    role: "TECHNICAL DIRECTOR",
    organization: "STATE WATER BOARD, UP",
    index: "04",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-primary font-gilroy text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">Impact Stories</span>
            <h2 className="font-gilroy text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-none">
              Voices of <span className="text-primary italic">Precision</span>
            </h2>
          </div>
          <div className="flex gap-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-black/5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: i % 2 === 0 ? 0 : 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-l border-b border-black/5 p-10 min-h-[450px] flex flex-col justify-between overflow-hidden last:border-r bg-white"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              <div className="relative z-10">
                {/* Index & Quote Icon */}
                <div className="flex justify-between items-center mb-12">
                  <span className="font-gilroy text-[10px] font-bold tracking-[0.3em] text-black/20 group-hover:text-primary transition-colors">
                    {testimonial.index} / IMPACT
                  </span>
                  <Quote className="w-6 h-6 text-primary opacity-20 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Quote Text */}
                <p className="font-gilroy text-lg font-bold text-black/40 leading-tight group-hover:text-white transition-colors duration-500 line-clamp-6 uppercase">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 pt-10 border-t border-black/5 group-hover:border-white/10 transition-colors duration-500">
                <h4 className="font-gilroy text-sm font-bold text-black group-hover:text-primary transition-colors uppercase tracking-widest">
                  {testimonial.role}
                </h4>
                <p className="text-black/40 text-[9px] font-bold mt-2 font-gilroy tracking-[0.2em] group-hover:text-white/60 transition-colors uppercase">
                  {testimonial.organization}
                </p>
              </div>

              {/* Sharp Corner Glow */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 pointer-events-none transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Branding */}
      <div className="container mx-auto px-6 mt-16 flex justify-center opacity-5">
        <span className="font-gilroy font-black text-[12vw] tracking-tighter text-black select-none pointer-events-none">
          TESTIMONIALS
        </span>
      </div>
    </section>
  );
}

export default TestimonialsSection;
