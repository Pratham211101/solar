import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Calendar, Clock, ArrowRight, User, Search, Newspaper, Zap, Info, Briefcase, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import AppleGlassButton from "../components/ui/AppleGlassButton";
import { useState } from "react";

const blogPosts = [
  {
    slug: "water-quality-monitoring-best-practices",
    title: "Best Practices for Water Quality Monitoring in Industrial Settings",
    excerpt: "Learn the essential practices for maintaining accurate and reliable water quality monitoring systems.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    date: "Jan 24, 2024",
    category: "Product Updates",
    icon: <Rocket className="w-3 h-3" />,
  },
  {
    slug: "iot-environmental-monitoring",
    title: "How IoT is Revolutionizing Environmental Monitoring",
    excerpt: "Explore how Internet of Things technology is transforming the way we monitor and protect our environment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    date: "Jan 24, 2024",
    category: "Spotlight",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    slug: "emission-compliance-guide",
    title: "A Complete Guide to Emission Compliance in 2024",
    excerpt: "Stay ahead of regulatory requirements with our comprehensive guide to emission monitoring and compliance.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
    date: "Jan 24, 2024",
    category: "Product Updates",
    icon: <Rocket className="w-3 h-3" />,
  },
  {
    slug: "predictive-maintenance-sensors",
    title: "Predictive Maintenance for Environmental Sensors",
    excerpt: "Reduce downtime and improve reliability with predictive maintenance strategies for your monitoring equipment.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    date: "Dec 28, 2023",
    category: "Spotlight",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    slug: "using-heatmaps-ux",
    title: "Using heatmaps to improve your website's UX: 5 ways to get started",
    excerpt: "From page design to site usability, there are plenty of factors that impact user experience. Pinpointing what leads to a bad experience can seem like a daunting task.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600&q=80",
    date: "Feb 10, 2024",
    category: "Productivity",
    icon: <Briefcase className="w-3 h-3" />,
  },
  {
    slug: "rise-of-ai",
    title: "The Rise of AI in Everyday Life: Transforming the Norm",
    excerpt: "AI is no longer a futuristic concept. It's here, and it's changing how we live and work in ways we never imagined.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    date: "Jan 24, 2024",
    category: "Spotlight",
    icon: <Zap className="w-3 h-3" />,
  },
];

const categories = [
  { label: "All Articles", icon: <Newspaper className="w-3 h-3" /> },
  { label: "Spotlight", icon: <Zap className="w-3 h-3" /> },
  { label: "Product Updates", icon: <Rocket className="w-3 h-3" /> },
  { label: "Company", icon: <Info className="w-3 h-3" /> },
  { label: "Productivity", icon: <Briefcase className="w-3 h-3" /> },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="light-theme bg-white min-h-screen font-gilroy">
        <main className="pt-36">

          {/* All Articles Heading & Filter */}
          <section className="pb-24">
            <div className="container mx-auto px-6">
              <div className="mb-12">
                <h2 className="font-gilroy text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 hidden md:flex flex-wrap items-center gap-x-4 tracking-tighter leading-tight uppercase">
                  <span className="font-semibold">All</span>
                  <div className="text-gradient italic px-2">Articles</div>
                </h2>
                <h2 className="font-gilroy text-3xl font-black text-slate-900 mb-4 md:hidden tracking-tighter leading-tight uppercase flex flex-wrap items-center gap-x-2">
                  <span className="font-semibold">Latest</span>
                  <div className="text-gradient italic px-1">Blog</div>
                </h2>
                <p className="text-slate-500 text-sm max-w-xl mb-10 leading-relaxed font-light font-gilroy">
                  Find or list tools that will help designers build to last. Simplify design with our comprehensive
                  and carefully vetted library from the start.
                </p>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                  {/* Search */}
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-100 bg-cyan-50 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-light"
                    />
                  </div>

                  {/* Filters */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    {categories.map((cat) => (
                      <button
                        key={cat.label}
                        onClick={() => setActiveCategory(cat.label)}
                        className={`inline-flex items-center gap-2 px-5 py-2 rounded-sm text-[10px] font-bold uppercase tracking-[0.1em] transition-all border ${activeCategory === cat.label
                          ? "bg-slate-900 text-white border-slate-900 shadow-md"
                          : "bg-transparent text-slate-400 border-slate-200 hover:text-slate-600 hover:border-slate-300"
                          }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.slug} delay={index * 0.05}>
                    <motion.article
                      className="group flex flex-col h-full cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="overflow-hidden mb-6">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 mb-4">
                          <span>{post.category}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300" />
                          <span className="text-gray-400 font-medium font-gilroy">{post.date}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors font-gilroy">
                          {post.title}
                        </h3>

                        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light line-clamp-3 font-gilroy">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto">
                          <hr className="border-slate-100 mb-4" />
                          <Link to={`/blog/${post.slug}`}>
                            <motion.div
                              className="inline-flex items-center gap-2 group/link cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              <span className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] font-gilroy">Read Article</span>
                              <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover/link:translate-x-1" />
                            </motion.div>
                          </Link>
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

export default Blog;
