import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

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
      { label: "Cluix C012", href: "/products/cluix-c012", description: "Handheld water quality analyzer" },
      { label: "OCEMS", href: "/products/ocems", description: "Online monitoring system" },
      { label: "Varunaa", href: "/products/varunaa", description: "Water level monitor" },
      { label: "Reagent Kits", href: "/products/reagent-kit", description: "Testing consumables" },
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

const DROPDOWN_OFFSET = -8;

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.header
      animate={{
        y: activeDropdown ? DROPDOWN_OFFSET : 0,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 ${
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
          <Logo variant="auto" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || "#"}
                  className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors link-underline"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
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
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* DESKTOP DROPDOWN — SAME ORIGIN ANIMATION */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: DROPDOWN_OFFSET }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: DROPDOWN_OFFSET }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full bg-background/95 backdrop-blur-xl border-b border-border"
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
                          <span className="text-lg font-medium group-hover:text-primary">{child.label}</span>
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

        {/* MOBILE MENU (UNCHANGED) */}
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
                    {item.href ? (
                      <Link to={item.href} className="text-lg font-semibold block">
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <span className="text-lg font-semibold block">{item.label}</span>
                        <div className="space-y-2 pl-4">
                          {item.children?.map((child) => (
                            <Link key={child.href} to={child.href} className="block py-2">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
