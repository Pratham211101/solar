import SEO from "../components/SEO";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO title="Privacy Policy | SUNBOT" />
      <div className="light-theme bg-background min-h-screen">
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-6">
              <ScrollReveal className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gradient">Privacy Policy</span>
                </h1>
                <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

                <div className="prose prose-invert max-w-none space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account,
                      make a purchase, or contact us for support. This may include your name, email address,
                      phone number, and company information.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground">
                      We use the information we collect to provide, maintain, and improve our services,
                      process transactions, send you technical notices and support messages, and respond
                      to your comments and questions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing</h2>
                    <p className="text-muted-foreground">
                      We do not share your personal information with third parties except as described
                      in this policy. We may share information with vendors and service providers who
                      need access to such information to carry out work on our behalf.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                    <p className="text-muted-foreground">
                      We take reasonable measures to help protect your personal information from loss,
                      theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
                    <p className="text-muted-foreground">
                      If you have any questions about this Privacy Policy, please contact us at
                      siddhant@sunbot.in.
                    </p>
                  </section>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
