import { useState, useEffect, useRef, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Target, Shield, Cpu, Globe, Battery, Sun, Lightbulb } from "lucide-react";
import { productsData } from "@/data/products";
import ScrollReveal from "../ui/ScrollReveal";
import { cn } from "@/lib/utils";
import BorderGlow from "../ui/BorderGlow";

const LightPillar = lazy(() => import("./LightPillar"));

const bentoProducts = [
  {
    ...productsData.helios,
    color: "bg-[#080808]",
    glowColor: "142 70% 50%", // Greenish
    textColor: "text-white",
    span: "md:col-span-2 md:row-span-2",
    icon: Sun,
    imageClass: "w-full max-w-[280px] h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-1000",
    revealDirection: "up" as const
  },
  {
    ...productsData.eos,
    color: "bg-[#080808]",
    glowColor: "45 93% 47%", // Yellowish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Target,
    imageClass: "absolute -right-2 -bottom-4 w-32 h-32 object-contain group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "right" as const
  },
  {
    ...productsData.apollo,
    color: "bg-[#080808]",
    glowColor: "25 95% 53%", // Orangish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Zap,
    imageClass: "absolute -right-4 -bottom-4 w-32 h-32 object-contain group-hover:opacity-100 group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "left" as const
  },
  {
    ...productsData["solar-bench"],
    color: "bg-[#080808]",
    glowColor: "199 89% 48%", // Bluish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Globe,
    imageClass: "absolute -right-2 bottom-2 w-32 h-32 object-contain group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "left" as const
  },
  {
    ...productsData["smart-pole"],
    color: "bg-[#080808]",
    glowColor: "270 95% 60%", // Purplish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-2",
    icon: Cpu,
    imageClass: "absolute right-0 bottom-0 md:-bottom-20 w-48 md:w-96 h-64 md:h-[500px] object-contain origin-bottom group-hover:scale-110 transition-all duration-1000",
    revealDirection: "up" as const
  },
  {
    ...productsData["solar-tower"],
    color: "bg-[#080808]",
    glowColor: "0 91% 62%", // Reddish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Battery,
    imageClass: "absolute -right-2 bottom-2 w-32 h-32 object-contain group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "up" as const
  },
  {
    ...productsData.astro,
    color: "bg-[#080808]",
    glowColor: "220 15% 30%", // Dark grey/zinc
    textColor: "text-white",
    span: "md:col-span-2 md:row-span-1",
    icon: Lightbulb,
    imageClass: "absolute right-8 -bottom-8 w-46 h-48 object-contain origin-bottom group-hover:scale-110 transition-all duration-700",
    revealDirection: "right" as const
  },
  {
    ...productsData["solar-system"],
    color: "bg-[#080808]",
    glowColor: "300 100% 50%", // Magenta/pinkish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Battery,
    imageClass: "absolute -right-2 bottom-2 w-32 h-32 object-contain group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "up" as const
  },
  {
    ...productsData.elf,
    color: "bg-[#080808]",
    glowColor: "120 75% 50%", // Lime/Greenish
    textColor: "text-white",
    span: "md:col-span-1 md:row-span-1",
    icon: Lightbulb,
    imageClass: "absolute -right-2 bottom-2 w-32 h-32 object-contain group-hover:scale-110 group-hover:-translate-y-6 transition-all duration-700",
    revealDirection: "down" as const
  }
];

export function ProductsShowcaseSection() {
  const [loadLightPillar, setLoadLightPillar] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoadLightPillar(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] relative overflow-hidden flex flex-col justify-center font-gilroy">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-60">
        {loadLightPillar && (
          <Suspense fallback={null}>
            <LightPillar
              topColor="#5227FF"
              bottomColor="#FF9FFC"
              intensity={0.6}
              rotationSpeed={0.8}
              glowAmount={0.002}
              pillarWidth={3}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={25}
              // interactive
              mixBlendMode="screen"
              quality="high"
            />
          </Suspense>
        )}

        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      <div className="container mx-auto px-6 mb-16 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 ">
            <div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-gilroy text-white font-semibold tracking-tighter leading-[0.90] mb-6 uppercase md:whitespace-nowrap">
                The Next{" "} <span className="text-gradient italic">Generation</span>
              </h2>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {bentoProducts.map((product, i) => (
            <ScrollReveal
              key={product.id}
              delay={i * 0.05}
              direction={product.revealDirection}
              className={product.span}
            >
              <Link to={product.href} className="group block h-full">
                <BorderGlow
                  glowColor={product.glowColor}
                  backgroundColor="#080808"
                  glowRadius={60}
                  className="h-full w-full"
                  borderRadius={8}
                  glowIntensity={0.8}
                  animated={true}
                  delay={1000 + i * 200}
                >
                  <div
                    className={cn(
                      "relative h-full w-full overflow-hidden p-8 flex flex-col transition-all duration-500"
                    )}
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 blur-[60px] -mr-24 -mt-24 rounded-sm" />

                    {/* Middle: Title & Images */}
                    <div className="relative z-20 flex-1 flex flex-col">
                      <h3 className={cn("text-2xl md:text-3xl font-semibold tracking-tighter leading-[0.9] uppercase mb-1", product.textColor)}>
                        {product.name.split(' ').slice(0, 2).join(' ')}<br />
                        <span className="opacity-60">{product.name.split(' ').slice(2).join(' ')}</span>
                      </h3>
                      <div className={cn("text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 mb-4", product.textColor)}>
                        {product.category}
                      </div>

                      {/* Image handling only for centered row-span-2 cards that AREN'T the new purple style */}
                      {product.span.includes("row-span-2") && product.id !== "smart-pole" && (
                        <div className="flex-1 flex items-center justify-center p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            decoding="async"
                            className={product.imageClass}
                          />
                        </div>
                      )}
                    </div>

                    {/* Bottom: Description & Action */}
                    <div className="relative z-20 mt-auto">
                      {product.id !== "smart-pole" && (
                        <div className="flex items-end justify-between gap-4">
                          <div className="max-w-[140px] md:max-w-none lg:max-w-[140px]">
                            <p className={cn("text-[10px] font-semibold leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity line-clamp-2", product.textColor)}>
                              {product.description}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Floating Image for non-span cards AND the new purple style card */}
                    {(!product.span.includes("row-span-2") || product.id === "smart-pole") && (
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                        className={product.imageClass}
                      />
                    )}
                  </div>
                </BorderGlow>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcaseSection;
