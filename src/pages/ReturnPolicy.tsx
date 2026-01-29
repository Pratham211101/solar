import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const ReturnPolicy = () => {
  return (
    <>
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Return Policy</span>
              </h1>
              <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Return Window</h2>
                  <p className="text-muted-foreground">
                    You may return products within 30 days of delivery for a full refund.
                    Products must be in original condition with all accessories and packaging.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Return Process</h2>
                  <p className="text-muted-foreground">
                    To initiate a return, please contact our support team at returns@cluix.com.
                    We will provide you with a return authorization number and shipping instructions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Non-Returnable Items</h2>
                  <p className="text-muted-foreground">
                    Consumables such as reagent kits and calibration solutions cannot be returned
                    once opened. Custom-configured products may also be non-returnable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Refund Processing</h2>
                  <p className="text-muted-foreground">
                    Refunds are processed within 5-7 business days after we receive and inspect
                    the returned product.
                  </p>
                </section>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ReturnPolicy;
