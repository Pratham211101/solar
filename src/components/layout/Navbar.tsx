import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import AppleGlassButton from "../ui/AppleGlassButton";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "solar C012", href: "/products/solar-c012", description: "Handheld water quality analyzer" },
      { label: "Monitoring Solutions", href: "/products/monitoring-solutions", description: "OCEMS, Varunaa & more" },
      { label: "Reagent Kits", href: "/products/reagent-kit", description: "Testing consumables" },
      { label: "Dashboard DSS", href: "/dashboard", description: "Decision Support System" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about-us", description: "Our story and mission" },
      { label: "Careers", href: "/careers", description: "Join our team" },
      { label: "Contact", href: "/contact-us", description: "Get in touch" },
      { label: "Awards & Recognitions", href: "/awards", description: "Awards & Recognitions" },
      { label: "Quality & Certifications", href: "/quality-certifications", description: "Quality & Certifications" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Newsletter", href: "/news-letter", description: "Stay updated" },
      { label: "Blogs", href: "/blog", description: "Insights and articles" },
      { label: "Newsroom", href: "/media", description: "Press and news" },
      { label: "Resources", href: "/resources", description: "resources and downloads" },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-gilroy ${activeDropdown
        ? "bg-background shadow-xl"
        : scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md"
          : "bg-gradient-to-b from-background/70 to-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          {/* Logo Container */}
          <div className="flex-1 flex justify-start">
            <Logo variant="auto" size="md" />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href && !item.children ? (
                  <Link
                    to={item.href}
                    className="group flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className="group flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </span>
                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA/Dashboard - Right side */}
          <div className="flex-1 flex justify-end items-center gap-4">
            <div className="hidden lg:block">
              <Link to="https://dashboard.solar.in">
                <AppleGlassButton >
                  Dashboard
                </AppleGlassButton>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>

        {/* Full Width Dropdown - Split Layout */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-full bg-background border-b border-border overflow-hidden"
              onMouseEnter={() => activeDropdown && handleMouseEnter(activeDropdown)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                  {navItems
                    .find((item) => item.label === activeDropdown)
                    ?.children?.map((child, index) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link to={child.href} className="group block p-4 rounded-xl transition-all duration-300 hover:bg-muted/50">
                          <span className="relative inline-block text-lg font-semibold text-foreground transition-colors">
                            {child.label}
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                          </span>
                          {child.description && (
                            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{child.description}</p>
                          )}
                        </Link>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 z-40 lg:hidden"
            >
              <div className="pt-24 px-6 pb-8 h-full overflow-y-auto">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="mb-6"
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="text-lg font-semibold text-foreground mb-3 block hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <span className="text-lg font-semibold text-foreground mb-3 block">{item.label}</span>
                        <div className="space-y-2 pl-4">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              className="block py-2 text-muted-foreground hover:text-primary transition-colors link-underline"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
                <Link to="https://dashboard.solar.in" target="_blank">
                  <AppleGlassButton >
                    Dashboard
                  </AppleGlassButton>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
