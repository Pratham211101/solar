import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatWeDoSection } from "./WhatWeDoSection";
import { ProductsShowcaseSection } from "./ProductsShowcaseSection";
import { WhoItsForSection } from "./WhoItsForSection";
import { StatsHighlightSection } from "./StatsHighlightSection";
import { WhyCluixSection } from "./WhyCluixSection";
import { TrustedBySection } from "./TrustedBySection";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTABannerSection } from "./CTABannerSection";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: "what-we-do", component: WhatWeDoSection },
  { id: "products-showcase", component: ProductsShowcaseSection },
  { id: "who-its-for", component: WhoItsForSection },
  { id: "stats-highlight", component: StatsHighlightSection },
  { id: "why-cluix", component: WhyCluixSection },
  { id: "trusted-by", component: TrustedBySection },
  { id: "testimonials", component: TestimonialsSection },
  { id: "cta-banner", component: CTABannerSection },
];

export function StackingSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, i) => {
        if (!section) return;

        // Pin each section and create stacking effect
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
          id: `section-${i}`,
        });

        // Add scale and opacity animation for depth effect
        if (i < sections.length - 1) {
          gsap.to(section, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(4px)",
            scrollTrigger: {
              trigger: sectionsRef.current[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {sections.map((Section, index) => (
        <div
          key={Section.id}
          ref={(el) => (sectionsRef.current[index] = el)}
          className="relative will-change-transform"
          style={{ zIndex: sections.length - index }}
        >
          <Section.component />
        </div>
      ))}
    </div>
  );
}

export default StackingSections;
