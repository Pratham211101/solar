import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import CareerDetail from "./pages/CareerDetail";
import ContactUs from "./pages/ContactUs";
import Demo from "./pages/Demo";
import Media from "./pages/Media";
import OfficeSpace from "./pages/OfficeSpace";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import ReagentKits from "./pages/ReagentKits";
import ReagentKitDetail from "./pages/ReagentKitDetail";
import MonitoringSolutions from "./pages/MonitoringSolutions";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import Resources from "./pages/Resources";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingPolicy from "./pages/ShippingPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import HelpCenter from "./pages/HelpCenter";
import Awards from "./pages/Awards";
import Certifications from "./pages/Certifications";
import NotFound from "./pages/NotFound";
import PageTransition from "./components/layout/PageTransition";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Index />
            </PageTransition>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageTransition>
              <AboutUs />
            </PageTransition>
          }
        />
        <Route
          path="/careers"
          element={
            <PageTransition>
              <Careers />
            </PageTransition>
          }
        />
        <Route
          path="/careers/:id"
          element={
            <PageTransition>
              <CareerDetail />
            </PageTransition>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PageTransition>
              <ContactUs />
            </PageTransition>
          }
        />
        <Route
          path="/demo"
          element={
            <PageTransition>
              <Demo />
            </PageTransition>
          }
        />
/*
        <Route
          path="/media"
          element={
            <PageTransition>
              <Media />
            </PageTransition>
          }
        />
*/
        <Route
          path="/office-space"
          element={
            <PageTransition>
              <OfficeSpace />
            </PageTransition>
          }
        />
        <Route
          path="/products"
          element={
            <PageTransition>
              <Products />
            </PageTransition>
          }
        />
        <Route
          path="/products/monitoring-solutions"
          element={
            <PageTransition>
              <MonitoringSolutions />
            </PageTransition>
          }
        />
        <Route
          path="/products/reagent-kit"
          element={
            <PageTransition>
              <ReagentKits />
            </PageTransition>
          }
        />
        <Route
          path="/products/reagent-kit/:id"
          element={
            <PageTransition>
              <ReagentKitDetail />
            </PageTransition>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PageTransition>
              <ProductDetail />
            </PageTransition>
          }
        />
/*
        <Route
          path="/blog"
          element={
            <PageTransition>
              <Blog />
            </PageTransition>
          }
        />
*/
/*
        <Route
          path="/news-letter"
          element={
            <PageTransition>
              <Newsletter />
            </PageTransition>
          }
        />
*/
/*
        <Route
          path="/resources"
          element={
            <PageTransition>
              <Resources />
            </PageTransition>
          }
        />
*/
        <Route
          path="/faqs"
          element={
            <PageTransition>
              <FAQs />
            </PageTransition>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PageTransition>
              <PrivacyPolicy />
            </PageTransition>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <PageTransition>
              <TermsAndConditions />
            </PageTransition>
          }
        />
        <Route
          path="/shipping-policy"
          element={
            <PageTransition>
              <ShippingPolicy />
            </PageTransition>
          }
        />
/*
        <Route
          path="/return-policy"
          element={
            <PageTransition>
              <ReturnPolicy />
            </PageTransition>
          }
        />
*/
/*
        <Route
          path="/refund-policy"
          element={
            <PageTransition>
              <RefundPolicy />
            </PageTransition>
          }
        />
*/
/*
        <Route
          path="/help-center"
          element={
            <PageTransition>
              <HelpCenter />
            </PageTransition>
          }
        />
*/
        <Route
          path="/awards"
          element={
            <PageTransition>
              <Awards />
            </PageTransition>
          }
        />
/*
        <Route
          path="/quality-certifications"
          element={
            <PageTransition>
              <Certifications />
            </PageTransition>
          }
        />
*/
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
