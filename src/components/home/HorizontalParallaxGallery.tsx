import { useEffect, useRef } from "react";
import { clamp, lerp } from "@/utils/math";

const galleryImages = [
  { src: "/images/whoitsdesignedfor/agri-rural-infra.jpg", label: "Rural Infrastructure" },
  { src: "/images/whoitsdesignedfor/campus.png", label: "Campus" },
  { src: "/images/whoitsdesignedfor/eco-resort.jpg", label: "Eco-Resorts" },
  { src: "/images/whoitsdesignedfor/gated-community.jpg", label: "Gated Communities" },
  { src: "/images/whoitsdesignedfor/highways.png", label: "Urban Infrastructure" },
  { src: "/images/whoitsdesignedfor/industrial-zones.jpg", label: "Industrial Zones" },
  { src: "/images/whoitsdesignedfor/sez.avif", label: "Special Economic Zones" },
];

export function HorizontalParallaxGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const scrollRef = useRef({
    current: 0,
    target: 0,
    ease: 0.07,
    limit: 0,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    const scroll = scrollRef.current;
    const images = Array.from(container?.querySelectorAll(".gallery__media__image") || []) as HTMLElement[];

    if (!section || !container || !wrapper) return;

    const setLimit = () => {
      // Limit is the amount we need to translate horizontally
      scroll.limit = container.scrollWidth - window.innerWidth;
    };

    const applyParallaxEffect = () => {
      const vw = window.innerWidth;
      const viewportCenter = vw * 0.5;

      images.forEach((image) => {
        const parent = image.parentElement;
        if (!parent) return;

        const rect = parent.getBoundingClientRect();
        const elementCenter = rect.left + rect.width * 0.5;

        // Normalized distance from center: -1 (left) .. 0 (center) .. 1 (right)
        const t = clamp(-1, 1, (elementCenter - viewportCenter) / viewportCenter);

        // Counter-motion depth shift
        const MAX_SHIFT = 10;
        const shift = -t * MAX_SHIFT;

        image.style.transform = `translate3d(${shift}%, 0, 0)`;
      });
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollHeight = section.offsetHeight - window.innerHeight;
      const scrolled = clamp(0, 1, -rect.top / scrollHeight);
      scroll.target = scrolled * scroll.limit;
    };

    const onResize = () => {
      setLimit();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    let rafid: number;

    const render = () => {
      scroll.current = lerp(scroll.current, scroll.target, scroll.ease);

      if (container) {
        container.style.transform = `translateX(${-scroll.current}px)`;
      }

      applyParallaxEffect();
      rafid = requestAnimationFrame(render);
    };

    setLimit();
    onScroll();
    render();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafid);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[400vh] bg-black font-gilroy">
      <div
        ref={wrapperRef}
        className="gallery__wrapper sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center"
      >
        <div
          ref={containerRef}
          className="gallery__image__container flex gap-12 h-full w-max items-center px-[10vw] will-change-transform"
        >
          {galleryImages.map((item, index) => (
            <picture key={index} className="gallery__media group relative overflow-hidden h-[55vh] aspect-[4/3] flex-shrink-0 bg-black">
              <img
                src={item.src}
                alt={item.label}
                className="gallery__media__image absolute top-0 left-[-12.5%] w-[125%] h-full object-cover will-change-transform"
                draggable="false"
              />
              <div className="absolute inset-0 flex items-end py-8 justify-start px-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <span className="text-white text-3xl md:text-4xl font-gilroy uppercase tracking-tighter max-w-xl font-semibold">
                  {item.label}
                </span>
              </div>
            </picture>
          ))}
        </div>

        {/* Large Decorative Tagline */}
        <div className="absolute bottom-12 left-0 w-full flex justify-center pointer-events-none px-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-gilroy font-medium text-white/30 uppercase md:whitespace-nowrap leading-none select-none tracking-tighter">
            Built for Every Environment
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HorizontalParallaxGallery;
