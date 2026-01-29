import { useParams, Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import ProductHero from "../components/product/ProductHero";
import ProductDeploymentSupport from "../components/product/ProductDeploymentSupport";
import WhyCluixSection from "../components/product/WhyCluixSection";
import { reagentKitsData } from "../data/reagentKits";
import { ProductData } from "@/data/products";

const ReagentKitDetail = () => {
  const { id } = useParams<{ id: string }>();
  const reagentKit = reagentKitsData.find((p) => p.id === id);

  if (!reagentKit) {
    return (
      <div className="bg-white min-h-screen">
        <main className="pt-24">
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The reagent kit you're looking for doesn't exist.</p>
            <Link
              to="/products/reagent-kit"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              ← Back to Reagent Kits
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Convert reagent kit data to ProductData format
  const productData: ProductData = {
    id: reagentKit.id,
    badge: reagentKit.tags[0] || "High Quality",
    name: reagentKit.name,
    tagline: reagentKit.specifications?.parameter || "Laboratory Grade Reagent",
    description: reagentKit.description,
    features: reagentKit.features || [
      "High accuracy",
      "Long shelf life",
      "Field ready",
      "Quality assured",
    ],
    image: reagentKit.image,
    stat: {
      value: reagentKit.specifications?.shelfLife || "24",
      label: "Months Shelf Life"
    },
    deploymentSupport: {
      title: "Ordering & Support",
      description: `Get ${reagentKit.name} delivered to your facility with full technical support. Our team ensures you receive authentic, quality-tested reagents with proper documentation.`,
      features: [
        "Fast delivery across India",
        "Quality certificates included",
        "Technical support available",
        "Bulk ordering discounts",
        "Proper storage guidance",
      ],
      formTitle: "Order Now",
      formSubtitle: `Interested in ${reagentKit.name}? Fill out the form and our team will get back to you with pricing and availability.`,
    },
  };

  // Add specifications section if available
  if (reagentKit.specifications) {
    productData.parametersTitle = "Technical Specifications";
    productData.parametersSubtitle = `Detailed specifications for ${reagentKit.name}`;
    productData.parameters = [
      { icon: "flask", name: "Parameter", range: reagentKit.specifications.parameter },
      { icon: "activity", name: "Range", range: reagentKit.specifications.range },
      { icon: "zap", name: "Method", range: reagentKit.specifications.method },
      { icon: "target", name: "Accuracy", range: reagentKit.specifications.accuracy },
      { icon: "calendar", name: "Shelf Life", range: reagentKit.specifications.shelfLife },
      { icon: "thermometer", name: "Storage", range: reagentKit.specifications.storage },
    ];
  }

  // Add usage/how it works section if available
  if (reagentKit.usage) {
    productData.howItWorks = {
      title: reagentKit.usage.title,
      subtitle: "Simple steps for accurate testing",
      steps: reagentKit.usage.steps.map((step, index) => ({
        icon: ["flask", "droplets", "clock", "check-circle", "upload", "file-check"][index] || "circle",
        step: index + 1,
        title: `Step ${index + 1}`,
        description: step,
      })),
    };
  }

  // Add compatibility/who it's for section
  if (reagentKit.compatibility) {
    productData.whoItsFor = {
      title: "Compatibility",
      subtitle: `${reagentKit.name} is compatible with various testing equipment and systems`,
      sectors: reagentKit.compatibility.map((item, index) => ({
        icon: ["flask", "beaker", "test-tube", "microscope"][index] || "circle",
        title: item,
        description: `Fully compatible with ${item} for accurate and reliable testing.`,
        tags: ["Certified", "Tested"],
      })),
    };
  }

  // Add Why Cluix section with features
  if (reagentKit.features) {
    productData.whyCluix = {
      title: `Why Choose ${reagentKit.name}`,
      description: "Quality-tested reagents designed for reliability and accuracy in field conditions.",
      features: reagentKit.features,
    };
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-8">
        {/* Hero Section */}
        <ProductHero product={productData} />

        {/* Parameters/Specifications Section */}
        {productData.parameters && productData.parametersTitle && productData.parametersSubtitle && (
          <section className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  {productData.parametersTitle}
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  {productData.parametersSubtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productData.parameters.map((param, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary text-xl">•</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{param.name}</h3>
                        <p className="text-slate-600 text-sm">{param.range}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How It Works Section */}
        {productData.howItWorks && (
          <section className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  {productData.howItWorks.title}
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  {productData.howItWorks.subtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productData.howItWorks.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Compatibility Section */}
        {productData.whoItsFor && (
          <section className="py-20 lg:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                  {productData.whoItsFor.title}
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                  {productData.whoItsFor.subtitle}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productData.whoItsFor.sectors.map((sector, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-semibold text-slate-900 mb-2">{sector.title}</h3>
                    <p className="text-slate-600 text-sm mb-4">{sector.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Cluix Section */}
        {productData.whyCluix && (
          <WhyCluixSection
            title={productData.whyCluix.title}
            description={productData.whyCluix.description}
            features={productData.whyCluix.features}
          />
        )}

        {/* Deployment & Support Section */}
        {productData.deploymentSupport && (
          <ProductDeploymentSupport
            title={productData.deploymentSupport.title}
            description={productData.deploymentSupport.description}
            features={productData.deploymentSupport.features}
            formTitle={productData.deploymentSupport.formTitle}
            formSubtitle={productData.deploymentSupport.formSubtitle}
            productName={productData.name}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ReagentKitDetail;
