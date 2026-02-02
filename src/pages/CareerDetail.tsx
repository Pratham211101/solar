import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { ArrowLeft, MapPin, Briefcase, Clock } from "lucide-react";
import AppleGlassButton from "../components/ui/AppleGlassButton";
import ApplicationForm from "../components/careers/ApplicationForm";
import jobsData from "../data/jobs.json";

const CareerDetail = () => {
  const { id } = useParams();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [job, setJob] = useState<any>(null);

  useEffect(() => {
    const foundJob = jobsData.find((j: any) => j.id === id);
    if (foundJob) {
      setJob(foundJob);
    } else {
      // Fallback or handle not found
      setJob(jobsData[0]);
    }
  }, [id]);

  if (!job) return null;

  return (
    <>
      <div className="light-theme bg-background min-h-screen font-gilroy text-foreground">
        <main className="pt-24 lg:pt-32 pb-24">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-all group mb-12"
              >
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <span>Back to all positions</span>
              </Link>
            </ScrollReveal>

            <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <ScrollReveal>
                  <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-[1.1] tracking-tighter-custom">
                      {job.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 pb-12 border-b border-border">
                      <div className="flex items-center gap-2 px-4 py-2 bg-sky-50/50 rounded-full border border-sky-100/50 transition-colors">
                        <Briefcase className="w-4 h-4 text-sky-500" />
                        <span className="text-sm font-medium text-sky-500">{job.department}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50/50 rounded-full border border-emerald-100/50 transition-colors">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm font-medium text-emerald-500">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50/50 rounded-full border border-yellow-100/50 transition-colors">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-yellow-500">{job.type}</span>
                      </div>
                    </div>
                  </header>

                  <div className="space-y-12">
                    {/* About Job Profile */}
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6">About Job Profile</h2>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p><span className="font-bold text-foreground">Salary:</span> {job.salary}</p>
                        <p><span className="font-bold text-foreground">Location:</span> {job.location}</p>
                        <p>
                          <span className="font-bold text-foreground">Description:</span> {job.description}
                        </p>
                      </div>
                    </section>

                    {/* About the Role */}
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6">About the Role</h2>
                      <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                        {job.aboutRole.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    {/* Skill(s) required */}
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6">Skill(s) required</h2>
                      <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                        {job.skills.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    {/* Eligibility */}
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6">Eligibility</h2>
                      <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                        {job.eligibility.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>

                    {/* What we Offer */}
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6">What we Offer</h2>
                      <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                        {job.offers.map((item: string, i: number) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </ScrollReveal>
              </div>

              {/* Sidebar / Apply Now */}
              <div className="lg:col-span-4 lg:pt-16 relative">
                <div className="sticky top-28">
                  <ScrollReveal delay={0.2}>
                    <div className="bg-slate-900 p-10 rounded-[32px] border border-white/10 shadow-2xl overflow-hidden group">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-colors" />

                      <h3 className="text-3xl font-bold text-white mb-4">Apply Now</h3>
                      <p className="text-slate-300 mb-10 leading-relaxed text-sm">
                        Excited about this opportunity? We'd love to learn more about you.
                        Click below to start your application process.
                      </p>

                      <div className="space-y-4">
                        <AppleGlassButton
                          onClick={() => setIsFormOpen(true)}
                          className="w-full py-5 text-xl bg-slate-950 border-white/10"
                        >
                          Apply for this Role
                        </AppleGlassButton>

                        <p className="text-center text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">
                          RESPONDS IN 3-5 BUSINESS DAYS
                        </p>
                      </div>

                      <div className="mt-10 pt-8 border-t border-white/10">
                        <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Questions?</p>
                        <a
                          href="mailto:careers@cluix.com"
                          className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-2 group/link"
                        >
                          careers@cluix.com
                          <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        jobTitle={job.title}
      />

      <Footer />
    </>
  );
};

export default CareerDetail;
