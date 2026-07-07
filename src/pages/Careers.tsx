import SEO from "../components/SEO";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import WorkLifeSection from "../components/careers/WorkLifeSection";
import EmployeeCarousel from "../components/careers/EmployeeCarousel";
import { ArrowRight, MapPin, Briefcase, Search, Filter } from "lucide-react";
import CareersHero from "@/components/careers/CareersHero";

const openings = [
  {
    id: "sales-manager-government",
    title: "Sales Manager – Government Business",
    department: "Sales",
    location: "Delhi (Travel Required)",
    type: "Full-time",
  },
  {
    id: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    department: "AI/ML",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    id: "environmental-engineer",
    title: "Environmental Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
  },
];

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const departments = ["All", ...new Set(openings.map(job => job.department))];

  const filteredOpenings = useMemo(() => {
    return openings.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDept = selectedDept === "All" || job.department === selectedDept;
      return matchesSearch && matchesDept;
    });
  }, [searchQuery, selectedDept]);

  return (
    <>
      <SEO title="Careers | SUNBOT" />
      <div className="light-theme bg-background min-h-screen">
        <main className="bg-background">
          <CareersHero />

          <section className="py-24 bg-muted/10">
            <div className="container mx-auto px-6">
              {/* Header - Left Aligned */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-gilroy font-normal tracking-wider text-muted-foreground uppercase">
                    JOIN THE TEAM
                  </span>
                  <div className="h-px w-16 bg-border" />
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-gilroy font-semibold text-foreground leading-tight flex flex-wrap items-center gap-x-4">
                  <span>Open</span>
                  <span className="text-primary italic px-2">positions</span>
                </h2>
              </div>

              {/* Search and Filters */}
              <div className="flex flex-col md:flex-row gap-4 mb-12">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search roles or departments..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-gilroy"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2 bg-white border border-border p-2 rounded-xl w-full md:w-auto overflow-hidden">
                  <Filter className="w-5 h-5 text-muted-foreground ml-2 shrink-0" />
                  <div className="flex gap-1 overflow-x-auto max-w-full pb-1 scrollbar-none flex-nowrap">
                    {departments.map((dept) => (
                      <button
                        key={dept}
                        onClick={() => setSelectedDept(dept)}
                        className={`px-4 py-2 rounded-lg text-sm font-gilroy font-medium transition-all shrink-0 ${selectedDept === dept
                          ? "bg-primary text-white"
                          : "hover:bg-muted text-muted-foreground"
                          }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredOpenings.map((job, index) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={job.id}
                    >
                      <Link to={`/careers/${job.id}`}>
                        <motion.div
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                          className="group card-gradient p-8 flex items-center justify-between h-full border border-border hover:border-primary/30 shadow-sm hover:shadow-2xl bg-white transition-colors duration-300"
                        >
                          <div>
                            <span className="text-[10px] font-bold text-primary italic uppercase tracking-widest mb-2 block">
                              {job.department}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                              {job.title}
                            </h3>
                            <div className="flex items-center gap-6 text-muted-foreground">
                              <span className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </span>
                              <span className="flex items-center gap-2 text-sm">
                                <Briefcase className="w-4 h-4" />
                                {job.type}
                              </span>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredOpenings.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground font-gilroy">No positions found matching your criteria.</p>
                </div>
              )}
            </div>
          </section>

          <WorkLifeSection />
          {/* <EmployeeCarousel /> */}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
