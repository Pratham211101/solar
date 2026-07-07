import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index"; // Keep Homepage eager for instant load
import PageTransition from "./components/layout/PageTransition";

// Lazy load all other routes to massively reduce initial bundle size
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Careers = lazy(() => import('./pages/Careers'));
const CareerDetail = lazy(() => import('./pages/CareerDetail'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Demo = lazy(() => import('./pages/Demo'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const ReagentKits = lazy(() => import('./pages/ReagentKits'));
const ReagentKitDetail = lazy(() => import('./pages/ReagentKitDetail'));
const MonitoringSolutions = lazy(() => import('./pages/MonitoringSolutions'));
const FAQs = lazy(() => import('./pages/FAQs'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));
const Awards = lazy(() => import('./pages/Awards'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Minimal loading spinner for route transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-[#5227FF] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
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
          <Route
            path="/awards"
            element={
              <PageTransition>
                <Awards />
              </PageTransition>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-black text-white/50 font-gilroy">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <AnimatedRoutes />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
