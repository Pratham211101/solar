import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Cluix C012", href: "/products/cluix-c012", description: "Advanced monitoring system" },
      { label: "Reagent Kit", href: "/products/reagent-kit", description: "Complete reagent solutions" },
      { label: "Varunaa Water Monitoring", href: "/products/varunaa", description: "Smart water quality monitoring" },
      { label: "OCEMS Device", href: "/products/ocems", description: "Online continuous emission monitoring" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about-us", description: "Our story and mission" },
      { label: "Careers", href: "/careers", description: "Join our team" },
      { label: "Contact", href: "/contact-us", description: "Get in touch" },
    ],
  },
  {
    label: "Media",
    children: [
      { label: "Newsletter", href: "/news-letter", description: "Stay updated" },
      { label: "Blogs", href: "/blog", description: "Insights and articles" },
      { label: "Newsroom", href: "/media", description: "Press and news" },
    ],
  },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        activeDropdown
          ? "bg-background/95 backdrop-blur-xl shadow-xl"
          : scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-md"
            : "bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <motion.span
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              CLUIX
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors link-underline">
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            ))}

            <Link
              to="https://dashboard.cluix.in"
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Full Width Dropdown */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-4 gap-6">
                  {navItems
                    .find((item) => item.label === activeDropdown)
                    ?.children?.map((child, index) => (
                      <motion.div
                        key={child.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={child.href}
                          className="group block p-4 rounded-xl hover:bg-muted/50 transition-all duration-300"
                        >
                          <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                            {child.label}
                          </span>
                          {child.description && (
                            <p className="mt-1 text-sm text-muted-foreground">{child.description}</p>
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
              className="fixed inset-0 bg-background z-40 lg:hidden"
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
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    to="/demo"
                    className="block w-full py-3 bg-primary text-primary-foreground rounded-full font-medium text-center"
                  >
                    Request Demo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
