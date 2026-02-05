import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const TermsAndConditions = () => {
  return (
    <>
      <div className="light-theme bg-background min-h-screen">
        <main className="pt-24">
          <section className="py-24">
            <div className="container mx-auto px-6">
              <ScrollReveal className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="text-gradient">Terms & Conditions</span>
                </h1>
                <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

                <div className="prose prose-invert max-w-none space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground">
                      By accessing and using Cluix products and services, you accept and agree to be bound
                      by the terms and provisions of this agreement.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
                    <p className="text-muted-foreground">
                      Permission is granted to temporarily use Cluix products for personal, non-commercial
                      transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Product Warranty</h2>
                    <p className="text-muted-foreground">
                      Cluix products come with a standard warranty period as specified in the product
                      documentation. The warranty covers manufacturing defects and hardware failures
                      under normal use conditions.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
                    <p className="text-muted-foreground">
                      In no event shall Cluix be liable for any damages arising out of the use or inability
                      to use our products or services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">5. Governing Law</h2>
                    <p className="text-muted-foreground">
                      These terms shall be governed and construed in accordance with the laws of the
                      State of California, without regard to its conflict of law provisions.
                    </p>
                  </section>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
