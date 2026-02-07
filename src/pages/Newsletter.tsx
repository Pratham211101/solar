import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Mail, Check, ArrowUpRight, Calendar, Download } from "lucide-react";
import NewsletterCarousel from "../components/newsletter/NewsletterCarousel";
import AppleGlassButton from "../components/ui/AppleGlassButton";

const Newsletter = () => {
  const latestNewsletter = {
    title: "Advancing Precision in Water Analytics",
    date: "April - June 2025",
    issue: "AMJ '25",
    image: "/images/newsletters/amj_newsletter.png",
    pdf: "/images/newsletters/AMJ Newsletter 2025-26.pdf",
    excerpt: "Exploring the next generation of smart water management solutions, satellite data integration, and our latest hardware breakthroughs in ultra-low detection limits."
  };

  return (
    <>
      <div className="light-theme bg-background min-h-screen font-gilroy">
        <main className="pt-24 lg:pt-32">
          {/* Header Section */}
          <section className="">
            <div className="container mx-auto px-6 mb-8">
              <ScrollReveal>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <h1 className="text-6xl md:text-8xl font-semibold text-slate-900 tracking-tighter uppercase leading-[0.8] mb-4">
                      OUR <span className="text-primary font-bold italic">NEWSLETTER</span>
                    </h1>
                  </div>
                  <p className="text-slate-500 max-w-sm text-lg leading-relaxed font-medium pb-1">
                    Your quarterly deep-dive into the technology and people shaping the future of environmental transparency.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Featured/Latest Edition */}
          <section className="">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <div className="grid lg:grid-cols-12 gap-12 items-center bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                  <div className="lg:col-span-6 overflow-hidden rounded-[2rem] shadow-2xl">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img
                        src={latestNewsletter.image}
                        alt="Latest Newsletter"
                        className="w-full aspect-[4/3] object-cover"
                      />
                    </motion.div>
                  </div>

                  <div className="lg:col-span-6 lg:pl-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                        LATEST EDITION
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5" />
                        {latestNewsletter.date}
                      </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                      {latestNewsletter.title}
                    </h2>

                    <p className="text-slate-500 text-xl leading-relaxed font-medium mb-10">
                      {latestNewsletter.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={latestNewsletter.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="group"
                      >
                        <AppleGlassButton className="bg-slate-900 border-none hover:bg-slate-800 py-4 h-auto">
                          <span className="flex items-center gap-3">
                            DOWNLOAD PDF
                            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                          </span>
                        </AppleGlassButton>
                      </a>
                      <a
                        href={latestNewsletter.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AppleGlassButton
                          textColor="text-slate-900 group-hover:text-white transition-colors duration-300"
                          className="border-2 border-slate-900 bg-transparent hover:bg-slate-900 py-4 h-auto"
                        >
                          <span className="flex items-center gap-3">
                            READ ONLINE
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </AppleGlassButton>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <NewsletterCarousel />

          {/* Subscription Section */}
          <section className="min-h-screen flex items-center bg-slate-900 relative overflow-hidden py-24">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary blur-[150px] rounded-full" />
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-400 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                  <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tighter font-medium">
                    SUBSCRIBE TO OUR <span className="text-primary font-bold italic text-gradient">NEWSLETTER</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                    Get exclusive quarterly insights, early access to new product launches, and expert takes on the water ecosystem.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 text-left mb-10 bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem]">
                    {[
                      { title: "Quarterly Pulse", desc: "Our curated newsletter with the top industry breakthroughs." },
                      { title: "Early Access", desc: "Be the first to test our new products and software betas." },
                      { title: "Deep Dives", desc: "Technical whitepapers and environmental policy insights." },
                      { title: "Community Events", desc: "Invites to webinars and roundtables with industry leaders." }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-6 py-3.5 rounded-full bg-white/10 border border-white/20 focus:border-primary focus:outline-none transition-all text-white backdrop-blur-sm placeholder:text-slate-500 text-sm"
                    />
                    <AppleGlassButton
                      type="submit"
                      textColor="text-slate-900"
                      className="px-8 bg-primary hover:bg-white transition-colors border-none h-[46px]"
                    >
                      <span className="uppercase tracking-widest text-xs font-black">Subscribe Now</span>
                    </AppleGlassButton>
                  </form>
                  <p className="text-[10px] text-slate-500 mt-4 tracking-widest uppercase font-bold opacity-50">
                    Zero Spam. Just Science.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Newsletter;
