import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Plus, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollingHeadline from "../components/newsroom/ScrollingHeadline";

const pressReleases = [
  {
    date: "Jan 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Global Innovation Center\nSector 62, Noida, UP\nIndia",
    title: "solar Launches Next-Generation Water Quality Analyzer",
    excerpt: "New C012 model features AI-powered analytics and enhanced IoT connectivity for real-time field testing.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    date: "Dec 08, 2023",
    time: "11:00 AM - 5:00 PM",
    location: "Environmental Tech Expo\nMain Convention Hall\nBerlin, Germany",
    title: "solar Expands Operations to European Market",
    excerpt: "Opening new offices in Germany and UK to serve growing customer base and support green initiatives.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    date: "Nov 20, 2023",
    time: "09:30 AM - 2:30 PM",
    location: "Water Summit Plaza\nDowntown Business District\nSingapore",
    title: "Partnership Announcement with Global Water Alliance",
    excerpt: "Strategic partnership to promote sustainable water management practices and technological integration.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
];

const featuredNews = {
  date: "2024.01.25",
  title: "Exploring the range and connectivity options for environmental sensors",
  excerpt: "Discover how advanced IoT protocols and standardized communication methods are enabling a more interconnected ecosystem for environmental monitoring.",
  image: "https://images.unsplash.com/photo-1542382257-80dedb725088?w=1200&q=80",
};

const Media = () => {
  return (
    <>
      <div className="light-theme bg-background min-h-screen font-gilroy">
        <main className="pt-24 lg:pt-32">
          {/* Header & Featured News */}
          <section className="pb-12">
            <div className="container mx-auto px-6 mb-8">
              <ScrollReveal>
                <h1 className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tight uppercase">
                  Newsroom
                </h1>
              </ScrollReveal>
            </div>

            {/* Scrolling Headline Ticker - Full Width */}
            <div className="mb-12 border-y-2 border-slate-900">
              <ScrollingHeadline />
            </div>

            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                  <ScrollReveal>
                    <motion.div
                      className="relative group cursor-pointer overflow-hidden rounded-sm"
                      whileHover={{ scale: 0.99 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={featuredNews.image}
                        alt="Featured news"
                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      </div>
                    </motion.div>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-5">
                  <ScrollReveal delay={0.2}>
                    <p className="text-sm font-medium text-slate-500 mb-4">{featuredNews.date}</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 group cursor-pointer">
                      <span className="hover:text-primary transition-colors duration-300">
                        {featuredNews.title}
                      </span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 max-w-lg">
                      {featuredNews.excerpt}
                    </p>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>

          {/* Recent News Header */}
          <section className="">
            <div className="container mx-auto px-6 py-8">
              <ScrollReveal>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 uppercase tracking-tighter">Recent</span>
                  <span className="text-4xl font-bold text-slate-300 uppercase tracking-tighter -mt-2">News</span>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* News Grid */}
          <section className="pb-32">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {pressReleases.map((item, index) => (
                  <ScrollReveal key={item.title} delay={index * 0.1}>
                    <motion.article
                      className="group flex flex-col h-full"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="overflow-hidden mb-8">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-primary transition-colors cursor-pointer">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                          {item.excerpt}
                        </p>

                        <div className="mt-auto">
                          <hr className="border-slate-100 mb-6" />
                          <div className="space-y-4">
                            <div>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Time</p>
                              <p className="text-xs font-semibold text-slate-600 mb-1">{item.date} • {item.time}</p>
                              <p className="text-xs text-slate-500 whitespace-pre-line leading-relaxed">
                                {item.location}
                              </p>
                            </div>

                            <motion.div
                              className="inline-flex items-center gap-2 pt-4 cursor-pointer group/link"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em]">Read More</span>
                              <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover/link:translate-x-1" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Media;
