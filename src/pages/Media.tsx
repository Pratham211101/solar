import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pressReleases = [
  {
    date: "January 15, 2024",
    title: "Cluix Launches Next-Generation Water Quality Analyzer",
    excerpt: "New C012 model features AI-powered analytics and enhanced IoT connectivity.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    date: "December 8, 2023",
    title: "Cluix Expands Operations to European Market",
    excerpt: "Opening new offices in Germany and UK to serve growing customer base.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    date: "November 20, 2023",
    title: "Partnership Announcement with Global Water Alliance",
    excerpt: "Strategic partnership to promote sustainable water management practices.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
];

const Media = () => {
  return (
    <>
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Newsroom
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Latest</span>{" "}
                <span className="text-gradient">News & Updates</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay updated with the latest news, press releases, and announcements from Cluix.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pressReleases.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="card-gradient overflow-hidden h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <Calendar className="w-4 h-4" />
                        {item.date}
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3">{item.title}</h2>
                      <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                      <Link
                        to="#"
                        className="inline-flex items-center gap-2 text-primary font-medium link-underline"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Media;
