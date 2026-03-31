import React from 'react';
import BorderGlow from './BorderGlow';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlowButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  glowColors?: string[];
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  icon,
  className,
  glowColors = ['#c084fc', '#f472b6', '#38bdf8'],
  ...props
}) => {
  return (
    <motion.div
      initial={props.initial}
      animate={props.animate}
      variants={props.variants}
      whileHover={props.whileHover}
      whileTap={props.whileTap}
      transition={props.transition}
      className={cn("inline-block group", className)}
    >
      <BorderGlow
        edgeSensitivity={0}
        glowColor="40 80 80"
        backgroundColor="#060010"
        borderRadius={18}
        glowRadius={45}
        glowIntensity={1.4}
        coneSpread={25}
        animated={true}
        colors={glowColors}
      >
        <motion.button
          className="relative w-full h-full flex items-center justify-center gap-3 px-10 py-4 text-white font-gilroy font-bold tracking-[0.2em] text-[11px] uppercase transition-all rounded-[18px] bg-transparent"
          {...(props as any)}
        >
          <span className="relative z-10">{children}</span>
          {icon && (
            <div className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">
              {icon}
            </div>
          )}
        </motion.button>
      </BorderGlow>
    </motion.div>
  );
};

export default GlowButton;
