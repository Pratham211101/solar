import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cluix has transformed how we monitor water quality across 200+ villages. The data is reliable and the dashboard makes reporting effortless.",
    role: "District Project Manager",
    organization: "Jal Jeevan Mission, Rajasthan",
  },
  {
    quote: "The accuracy matches our lab instruments, but we can now test at source. It's a game-changer for our compliance monitoring.",
    role: "Environmental Officer",
    organization: "Pharmaceutical Company, Gujarat",
  },
  {
    quote: "Finally, a device that works in Indian field conditions. Rugged, fast, and the support team is excellent.",
    role: "Program Lead",
    organization: "WASH NGO, Bihar",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            What our users say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-base leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-slate-200 pt-6">
                  <p className="font-display font-semibold text-slate-900 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
