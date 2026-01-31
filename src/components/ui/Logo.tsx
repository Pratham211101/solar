import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cluixLogo from "@/assets/cluix-logo.png";

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

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  const textColorClasses = {
    light: "text-white",
    dark: "text-gray-900",
    auto: "text-foreground",
  };

  const content = (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <img src={cluixLogo} alt="Cluix Logo" className={`${sizeClasses[size]} w-auto object-contain`} />
      <span
        className={`font-gilroy font-bold tracking-widest ${textSizeClasses[size]} ${textColorClasses[variant]}`}
      >
        CLUIX
      </span>
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
