import { motion } from "framer-motion";
import { useState } from "react";
import GlowButton from "../ui/GlowButton";
import ScrollReveal from "../ui/ScrollReveal";
import { CheckCircle2, MessageSquare } from "lucide-react";
import StyledContactForm from "./StyledContactForm";
import LightPillar from "../home/LightPillar";

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
      <section id="deployment-support" className="min-h-screen flex items-center bg-[#050505] py-16 md:py-24 font-gilroy relative overflow-hidden">
        {/* Cinematic Background Elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.6}
            rotationSpeed={0.8}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            mixBlendMode="screen"
            quality="high"
          />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
            style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-16 items-center max-w-7xl mx-auto">
            {/* Left - Info */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-medium tracking-[0.3em] text-primary uppercase opacity-80">
                    SUPPORT & DEPLOYMENT
                  </span>
                  <div className="h-px w-8 bg-primary/30" />
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-[1.1] tracking-tighter-custom uppercase">
                  {title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-gradient italic font-medium">{title.split(' ').pop()}</span>
                </h2>

                <p className="text-base text-white/50 mb-10 leading-relaxed max-w-sm font-medium">
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
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-all">
                        <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors tracking-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <div className="relative overflow-hidden">
                  {isSuccess ? (
                    <div className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-[40px] shadow-2xl">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-16 text-center"
                      >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-white">Enquiry Sent!</h2>
                        <p className="text-white/60">Our team will get back to you within 24 hours.</p>
                      </motion.div>
                    </div>
                  ) : (
                    <StyledContactForm 
                      title={formTitle}
                      formSubtitle={formSubtitle}
                      isSubmitting={isSubmitting}
                      onSubmit={handleSubmit}
                      formData={formData}
                      onChange={handleChange}
                      productName={productName}
                    />
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
