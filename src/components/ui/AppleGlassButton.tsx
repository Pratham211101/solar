import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppleGlassButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    soundUrl?: string;
}

const AppleGlassButton: React.FC<AppleGlassButtonProps> = ({
    children,
    icon,
    className,
    soundUrl = "/sounds/water-drip.mp3",
    ...props
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [audio] = useState(() => {
        const a = new Audio(soundUrl);
        a.preload = "auto";
        return a;
    });

    const playSound = () => {
        audio.currentTime = 0;
        audio.volume = 0.3;
        audio.play().catch(() => {
            // Browsers block autoplay until user interaction
        });
    };

    return (
        <motion.button
            onMouseEnter={() => {
                setIsHovered(true);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={playSound}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                "relative group flex items-center gap-2 rounded-full",
                icon ? "pl-2 pr-6 py-2" : "px-8 py-2",
                "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                "transition-all duration-500 hover:bg-white/20 hover:border-white/30",
                className
            )}
            {...props}
        >
            {/* Liquid reflection effect */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "200%" } : { x: "-100%" }}
                    transition={{
                        duration: isHovered ? 2.5 : 0.5,
                        repeat: isHovered ? Infinity : 0,
                        repeatType: "loop",
                        ease: "linear",
                    }}
                    className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
            </div>

            {/* Icon Circle (Liquid Lens) */}
            {icon && (
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md shadow-inner border border-white/10 overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50" />
                    <div className="relative z-10 text-white">
                        {icon}
                    </div>
                </div>
            )}

            {/* Button Text */}
            <span className={cn(
                "font-gilroy font-medium text-lg tracking-wide text-white drop-shadow-sm flex-1 text-center",
                icon && "pl-2"
            )}>
                {children}
            </span>

            {/* Inner Glow */}
            <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
        </motion.button>
    );
};

export default AppleGlassButton;
