import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import Logo from "@/components/ui/Logo";
import BackToTop from "./BackToTop";

const footerLinks = {
  products: [
    { label: "Helios", href: "/products/helios" },
    { label: "EOS", href: "/products/eos" },
    { label: "Apollo", href: "/products/apollo" },
    { label: "Astro", href: "/products/astro" },
    { label: "Solar Bench", href: "/products/solar-bench" },
    { label: "Solar Tower", href: "/products/solar-tower" },
    { label: "Smart Pole", href: "/products/smart-pole" },

  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Office Space", href: "/office-space" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Help Center", href: "/help-center" },
    { label: "FAQs", href: "/faqs" },
  ],
  media: [
    { label: "Newsletter", href: "/news-letter" },
    { label: "Blog", href: "/blog" },
    { label: "Newsroom", href: "/media" },
    { label: "Resources", href: "/resources" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Shipping Policy", href: "/shipping-policy" },
    { label: "Return Policy", href: "/return-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

const Footer = () => {
  return (
    <footer className="footer-dark pt-20 pb-8 relative font-gilroy">
      <BackToTop style="absolute right-6 md:right-12 top-20 flex flex-col items-center cursor-pointer z-10" />
      {/* Gradient Curve at Top */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="auto" size="md" className="mb-6" />
            <p className="text-muted-foreground mb-6 max-w-sm">
              Pioneering environmental monitoring solutions for a sustainable future.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:siddhant.solar@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                siddhant.solar@gmail.com
              </a>
              <a
                href="tel:+919984045295"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9984045295
              </a>
              <a
                href="tel:+919456091127"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9456091127
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>RZB 32-A, Mahavir Enclave-I, New Delhi(110045)</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group relative inline-block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group relative inline-block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Media</h4>
            <ul className="space-y-3">
              {footerLinks.media.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group relative inline-block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="group relative inline-block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} solar. All rights reserved.</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.linkedin.com/company/solar/posts/?feedView=all"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/solar_in"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/solar.in?igsh=MW56amljMzBub3R4ag=="
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@solarOfficial"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted transition-all"
            >
              <Youtube className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
