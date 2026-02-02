import { motion } from "framer-motion";
import { useState } from "react";
import AppleGlassButton from "../ui/AppleGlassButton";
import ScrollReveal from "../ui/ScrollReveal";
import { CheckCircle2, MessageSquare } from "lucide-react";

interface ProductDeploymentSupportProps {
  title: string;
  description: string;
  features: string[];
  formTitle: string;
  formSubtitle: string;
  productName: string;
}

const ProductDeploymentSupport = ({
  title,
  description,
  features,
  formTitle,
  formSubtitle,
  productName,
}: ProductDeploymentSupportProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    requirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="h-[72px] bg-white"></div>
      <section id="deployment-support" className="min-h-[calc(100vh-72px)] flex items-center bg-white py-8 md:py-10 font-gilroy light-theme">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Info */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    SUPPORT & DEPLOYMENT
                  </span>
                  <div className="h-px w-12 bg-primary/30" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-[1.1] tracking-tighter-custom">
                  {title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-gradient italic">{title.split(' ').pop()}</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-sm font-medium">
                  {description}
                </p>

                {/* Features List - Simplified */}
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary/10 transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-base font-semibold text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="relative bg-white border border-border p-6 md:p-10 rounded-[40px] shadow-2xl overflow-hidden">
                  {/* Decorative Background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16" />

                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Enquiry Sent!</h2>
                      <p className="text-muted-foreground">Our team will get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="mb-6 font-gilroy">
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {formTitle}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {formSubtitle}
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-3.5">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Full Name</label>
                            <input
                              required
                              name="name"
                              type="text"
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Email Address</label>
                            <input
                              required
                              name="email"
                              type="email"
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Phone Number</label>
                            <input
                              required
                              name="phone"
                              type="tel"
                              placeholder="+91 00000 00000"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Organization</label>
                            <input
                              name="organization"
                              type="text"
                              placeholder="Company Name"
                              value={formData.organization}
                              onChange={handleChange}
                              className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider ml-1">Requirements</label>
                          <textarea
                            name="requirements"
                            placeholder={`Interested in ${productName}...`}
                            value={formData.requirements}
                            onChange={handleChange}
                            rows={2}
                            className="w-full bg-muted/20 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-all font-gilroy resize-none text-sm"
                          />
                        </div>

                        <div className="pt-2">
                          <AppleGlassButton
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3.5 bg-slate-900 border-none hover:bg-slate-800 text-base"
                          >
                            {isSubmitting ? "Sending..." : "Submit Enquiry"}
                          </AppleGlassButton>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDeploymentSupport;
