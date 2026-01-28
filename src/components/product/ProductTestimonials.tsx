import { motion } from "framer-motion";

export interface TestimonialItem {
  quote: string;
  role: string;
  organization: string;
}

interface ProductTestimonialsProps {
  title: string;
  items: TestimonialItem[];
}

const ProductTestimonials = ({ title, items }: ProductTestimonialsProps) => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-16 lg:py-0">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            {title}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 shadow-sm">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-primary/30"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {item.role}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {item.organization}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductTestimonials;
