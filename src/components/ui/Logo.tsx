import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import fullLogo from "@/assets/full-logo-solar.png";

interface LogoProps {
  variant?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  className?: string;
  linkTo?: string;
}

const Logo = ({ variant = "auto", size = "md", className = "", linkTo = "/" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-10",
  };

  const content = (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src={fullLogo}
        alt="solar Logo"
        className={`${sizeClasses[size]} w-auto object-contain brightness-110`}
      />
    </motion.div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="relative z-50">
        {content}
      </Link>
    );
  }

  return content;
};

export default Logo;
