import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <main className="pt-24">
        <section className="py-24 min-h-[60vh] flex items-center">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold"
                >
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
