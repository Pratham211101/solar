import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

interface NavItem {
  label: string;
  href?: string;
  description?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    label: "Products",
    description: "Explore our water intelligence hardware and platforms",
    children: [
      {
        label: "Cluix C012",
        href: "/products/cluix-c012",
        description: "Handheld water quality analyzer",
      },
      {
        label: "OCEMS",
        href: "/products/ocems",
        description: "Online continuous monitoring system",
      },
      {
        label: "Varunaa",
        href: "/products/varunaa",
        description: "IoT-based water level monitoring",
      },
      {
        label: "Reagent Kits",
        href: "/products/reagent-kit",
        description: "Consumables for chemical testing",
      },
    ],
  },
  {
    label: "Company",
    description: "Who we are and how we build",
    children: [
      {
        label: "About Us",
        href: "/about-us",
        description: "Our mission, vision, and story",
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join our growing team",
      },
      {
        label: "Contact",
        href: "/contact-us",
        description: "Get in touch with us",
      },
    ],
  },
  {
    label: "Media",
    description: "News, updates, and publications",
    children: [
      {
        label: "Newsletter",
        href: "/news-letter",
        description: "Monthly updates from CLUIX",
      },
      {
        label: "Blogs",
        href: "/blog",
        description: "Insights and technical articles",
      },
      {
        label: "Newsroom",
        href: "/media",
        description: "Press releases and coverage",
      },
    ],
  },
];

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

  const activeItem = navItems.find((i) => i.label === activeDropdown);

  return (
    <motion.header
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
          <Logo variant="auto" size="md" />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
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
              className="ml-4 px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ================= MEGA DROPDOWN ================= */}
      <AnimatePresence>
        {activeDropdown && activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full h-[60vh] bg-background/95 backdrop-blur-xl border-b border-border"
            onMouseEnter={() => setActiveDropdown(activeDropdown)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="container mx-auto h-full grid grid-cols-12">
              {/* LEFT PANEL */}
              <div className="col-span-4 px-10 py-16 flex flex-col justify-center border-r border-border">
                <h2 className="text-4xl font-semibold text-foreground">{activeItem.label}</h2>
                <p className="mt-4 text-muted-foreground max-w-sm">{activeItem.description}</p>
              </div>

              {/* RIGHT PANEL */}
              <div className="col-span-8 px-12 py-16 overflow-y-auto">
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  {activeItem.children?.map((child, index) => (
                    <motion.div
                      key={child.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link to={child.href} className="group block">
                        <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                          {child.label}
                        </h4>
                        {child.description && (
                          <p className="mt-1 text-sm text-muted-foreground max-w-md">{child.description}</p>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background z-40 lg:hidden"
          >
            <div className="pt-24 px-6 space-y-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  <h3 className="text-lg font-semibold mb-3">{item.label}</h3>
                  <div className="space-y-2 pl-4">
                    {item.children?.map((child) => (
                      <Link key={child.href} to={child.href} className="block text-muted-foreground hover:text-primary">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
