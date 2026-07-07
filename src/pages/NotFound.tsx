import SEO from "../components/SEO";
import GlowButton from '@/components/ui/GlowButton';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {

  // Text splitting for character animation
  const headingText = "PAGE NOT FOUND";
  const characters = headingText.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const charVariants = {
    hidden: {
      y: 100,
      opacity: 0,
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      y: 0,
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0.5 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  };

  const badgeVariants = {
    hidden: {
      scale: 0,
      rotate: -15,
      x: -20
    },
    visible: {
      scale: 1,
      rotate: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.6
      }
    }
  };

  const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.8 + (custom * 0.1)
      }
    })
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <>
      <SEO title="404 - Page Not Found | SUNBOT" />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background subtle texture/gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-b from-cyan-50/50 to-white pointer-events-none"
      />

      <div className="max-w-5xl w-full mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Header with lines and badge */}
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-8 relative">
            {/* Left Line */}
            <motion.div
              variants={lineVariants}
              className="h-[1px] bg-black/10 w-12 md:w-24 origin-left"
            />

            {/* Text Container with Badge */}
            <div className="relative">
              {/* ERROR 404 Badge */}
              <motion.div
                variants={badgeVariants}
                className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-20"
                style={{ y: '-50%' }}
              >
                <span className="inline-block bg-[#00c0c0] text-white text-[10px] md:text-xs font-bold px-2 py-1 rounded-sm tracking-wider shadow-sm">
                  ERROR 404
                </span>
              </motion.div>

              {/* Main Heading with character animation */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-gilroy font-medium text-black tracking-tight overflow-hidden flex uppercase">
                {characters.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={charVariants}
                    className="inline-block"
                    style={{
                      marginRight: char === ' ' ? '0.25em' : '0.01em'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Right Line */}
            <motion.div
              variants={lineVariants}
              className="h-[1px] bg-black/10 w-12 md:w-24 origin-right"
            />
          </div>

          {/* Description */}
          <motion.p
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="max-w-md text-center text-gray-600 text-sm md:text-base leading-relaxed mb-10 font-gilroy font-light"
          >
            The page you were looking for could not be found. It might have been removed, renamed, or did not exist in the first place.
          </motion.p>

          {/* Home Button */}
          <Link to="/">
            <GlowButton
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              className="mt-8"
            >
              Go To Home Page
            </GlowButton>
          </Link>
        </motion.div>
      </div>

      {/* Optional: Decorative elements similar to the Talk logo style if needed */}
    </div>
  
    </>
  );
};

export default NotFound;
