import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";

const ShippingPolicy = () => {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ScrollReveal className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-gradient">Shipping Policy</span>
              </h1>
              <p className="text-muted-foreground mb-6">Last updated: January 2024</p>

              <div className="prose max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">1. Shipping Locations</h2>
                  <p className="text-muted-foreground">
                    We ship our products worldwide. Shipping times and costs vary depending on
                    your location and the shipping method selected at checkout.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">2. Processing Time</h2>
                  <p className="text-muted-foreground">
                    Orders are typically processed within 2-3 business days. Custom orders may
                    require additional processing time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">3. Shipping Methods</h2>
                  <p className="text-muted-foreground">
                    We offer standard and express shipping options. Express shipping is available
                    for urgent orders and typically delivers within 3-5 business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-foreground mb-4">4. Tracking</h2>
                  <p className="text-muted-foreground">
                    A tracking number will be provided once your order has been shipped. You can
                    track your order through our website or the carrier's website.
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

export default ShippingPolicy;
