import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, FileText, Beaker } from "lucide-react";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/ui/ScrollReveal";
import { reagentKitsData } from "../data/reagentKits";

const ReagentKitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = reagentKitsData.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The reagent kit you're looking for doesn't exist.</p>
          <Link
            to="/products/reagent-kit"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Reagent Kits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <Link
              to="/products/reagent-kit"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Reagent Kits
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Product Image */}
              <ScrollReveal>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-square bg-muted rounded-3xl overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </ScrollReveal>

              {/* Product Info */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-medium rounded-full border border-border text-foreground bg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                    {product.name}
                  </h1>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Order Now
                    </Link>
                    <Link
                      to="/demo"
                      className="inline-flex items-center gap-2 px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      Request Demo
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specs" className="py-16 lg:py-24 bg-muted">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Specifications
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-background p-6 rounded-2xl border border-border">
                  <Beaker className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">High Accuracy</h3>
                  <p className="text-muted-foreground text-sm">
                    Precision-formulated reagents ensuring accurate and reproducible results every time.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-background p-6 rounded-2xl border border-border">
                  <Beaker className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Long Shelf Life</h3>
                  <p className="text-muted-foreground text-sm">
                    Stable formulations with extended shelf life for reliable field testing.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-background p-6 rounded-2xl border border-border">
                  <Beaker className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Field Ready</h3>
                  <p className="text-muted-foreground text-sm">
                    Designed for on-site testing in challenging environmental conditions.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contents Section (for complete kit) */}
        {product.id === "reagent-kit-100" && (
          <section id="contents" className="py-16 lg:py-24">
            <div className="container mx-auto px-6">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                  Kit Contents
                </h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {reagentKitsData.slice(1).map((reagent, index) => (
                  <ScrollReveal key={reagent.id} delay={index * 0.05}>
                    <Link
                      to={`/products/reagent-kit/${reagent.id}`}
                      className="block p-4 bg-muted rounded-xl border border-border hover:border-primary transition-colors group"
                    >
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {reagent.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {reagent.tags[1]}
                      </p>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-foreground">
          <div className="container mx-auto px-6 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-muted-background max-w-2xl mx-auto mb-8">
                Contact our team to order reagent kits or learn more about our water quality testing solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Contact Sales
                </Link>
                <Link
                  to="/products/reagent-kit"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-background/30 text-background rounded-full font-medium hover:bg-background/10 transition-colors"
                >
                  View All Reagents
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReagentKitDetail;
