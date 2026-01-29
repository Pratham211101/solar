import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const RefundPolicy = () => {
  return (
    <>
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Refund Policy</span>
              </h1>
              <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

              <div className="prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Eligibility</h2>
                  <p className="text-muted-foreground">
                    Refunds are available for products returned within the return window as specified
                    in our Return Policy. Products must meet return conditions to be eligible.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Refund Methods</h2>
                  <p className="text-muted-foreground">
                    Refunds are issued to the original payment method. Credit card refunds may take
                    5-10 business days to appear on your statement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Partial Refunds</h2>
                  <p className="text-muted-foreground">
                    Partial refunds may be issued for products that show signs of use or are missing
                    accessories. The refund amount will be determined based on product condition.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Shipping Costs</h2>
                  <p className="text-muted-foreground">
                    Original shipping costs are non-refundable. Return shipping costs are the
                    responsibility of the customer unless the return is due to our error.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact</h2>
                  <p className="text-muted-foreground">
                    For refund inquiries, please contact our support team at refunds@cluix.com.
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

export default RefundPolicy;
