import { motion } from "framer-motion";

const employeeImages = [
  { id: 1, placeholder: "Team Celebration" },
  { id: 2, placeholder: "Office Fun" },
  { id: 3, placeholder: "Learning Session" },
  { id: 4, placeholder: "Team Outing" },
  { id: 5, placeholder: "Wellness Day" },
  { id: 6, placeholder: "Hackathon" },
  { id: 7, placeholder: "Annual Party" },
  { id: 8, placeholder: "Sports Day" },
];

export function EmployeeCarousel() {
  // Duplicate images for seamless loop
  const allImages = [...employeeImages, ...employeeImages];

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      {/* Film Reel Marquee */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <motion.div
          className="flex gap-4"
          animate={{
            x: [0, -50 * employeeImages.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 via-muted to-primary/10 border border-border"
            >
              {/* Placeholder image content */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default EmployeeCarousel;
