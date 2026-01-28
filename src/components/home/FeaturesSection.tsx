import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, Wifi, BarChart3, ArrowRight } from "lucide-react";

const offerings = [
  {
    icon: Droplets,
    title: "Handheld Analyzer",
    description: "Multi-parameter water quality testing in the field. Lab-grade accuracy, no lab required.",
    href: "/products/c012",
  },
  {
    icon: Wifi,
    title: "Online Monitoring",
    description: "24/7 continuous monitoring with OCEMS compliance. Real-time alerts and remote access.",
    href: "/products/ocems",
  },
  {
    icon: BarChart3,
    title: "Data Dashboard",
    description: "Centralized analytics platform. Track trends, generate reports, and make informed decisions.",
    href: "/dashboard",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            What we do
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            End-to-end water quality intelligence—from sample to decision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.href}
                className="group block h-full p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
