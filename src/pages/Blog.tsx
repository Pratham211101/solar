import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    slug: "water-quality-monitoring-best-practices",
    title: "Best Practices for Water Quality Monitoring in Industrial Settings",
    excerpt: "Learn the essential practices for maintaining accurate and reliable water quality monitoring systems.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80",
    date: "January 20, 2024",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
  },
  {
    slug: "iot-environmental-monitoring",
    title: "How IoT is Revolutionizing Environmental Monitoring",
    excerpt: "Explore how Internet of Things technology is transforming the way we monitor and protect our environment.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    date: "January 12, 2024",
    readTime: "6 min read",
    author: "Michael Rodriguez",
  },
  {
    slug: "emission-compliance-guide",
    title: "A Complete Guide to Emission Compliance in 2024",
    excerpt: "Stay ahead of regulatory requirements with our comprehensive guide to emission monitoring and compliance.",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&q=80",
    date: "January 5, 2024",
    readTime: "10 min read",
    author: "Emily Watson",
  },
  {
    slug: "predictive-maintenance-sensors",
    title: "Predictive Maintenance for Environmental Sensors",
    excerpt: "Reduce downtime and improve reliability with predictive maintenance strategies for your monitoring equipment.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    date: "December 28, 2023",
    readTime: "7 min read",
    author: "David Kim",
  },
];

const Blog = () => {
  return (
    <div className="light-theme bg-background min-h-screen">
      <main className="pt-24">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-curve-top pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                Blog
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-foreground">Insights &</span>{" "}
                <span className="text-gradient">Articles</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert insights, industry trends, and best practices in environmental monitoring.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.1}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    className="card-gradient overflow-hidden h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <Link
                          to="#"
                          className="inline-flex items-center gap-2 text-primary font-medium link-underline"
                        >
                          Read
                          <ArrowRight className="w-4 h-4" />
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
      <Footer />
    </div>
  );
};

export default Blog;
