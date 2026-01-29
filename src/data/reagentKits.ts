export interface ReagentKitProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  subLinks: { label: string; href: string }[];
}

export const reagentKitsData: ReagentKitProduct[] = [
  {
    id: "reagent-kit-100",
    name: "Complete Reagent Kit (100 Tests)",
    description: "Full kit with reagents for all 12+ parameters. Designed for field use with the C012 analyzer.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    tags: ["100 Tests", "All Parameters"],
    subLinks: [
      { label: "Contents", href: "/products/reagent-kit/reagent-kit-100#contents" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "ph-reagent",
    name: "pH Reagent",
    description: "High-precision pH indicator solution for accurate pH measurement in the 0-14 range.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "pH 0-14"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/ph-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "chlorine-reagent",
    name: "Chlorine Reagent",
    description: "DPD-based reagent for free and total chlorine testing. Range: 0-10 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-10 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/chlorine-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "hardness-reagent",
    name: "Hardness Reagent",
    description: "EDTA titration reagent for total hardness measurement. Range: 0-750 mg/L as CaCO3.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-750 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/hardness-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "nitrate-reagent",
    name: "Nitrate Reagent",
    description: "Cadmium reduction reagent for nitrate-nitrogen testing. Range: 0-100 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-100 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/nitrate-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "iron-reagent",
    name: "Iron Reagent",
    description: "Phenanthroline-based reagent for total iron measurement. Range: 0-10 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-10 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/iron-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "fluoride-reagent",
    name: "Fluoride Reagent",
    description: "SPADNS reagent for fluoride testing. Range: 0-10 mg/L. Critical for drinking water.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-10 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/fluoride-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "turbidity-reagent",
    name: "Turbidity Standards",
    description: "Formazin turbidity standards for calibration and verification. Range: 0-4000 NTU.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Calibration", "0-4000 NTU"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/turbidity-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "do-reagent",
    name: "Dissolved Oxygen Reagent",
    description: "Winkler method reagent set for DO measurement. Range: 0-20 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-20 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/do-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "ammonia-reagent",
    name: "Ammonia Reagent",
    description: "Nessler reagent for ammonia-nitrogen testing. Range: 0-50 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-50 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/ammonia-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "phosphate-reagent",
    name: "Phosphate Reagent",
    description: "Ascorbic acid method reagent for phosphate testing. Range: 0-30 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-30 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/phosphate-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "alkalinity-reagent",
    name: "Alkalinity Reagent",
    description: "Acid titration reagent for total alkalinity. Range: 0-500 mg/L as CaCO3.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-500 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/alkalinity-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "sulphate-reagent",
    name: "Sulphate Reagent",
    description: "Turbidimetric reagent for sulphate measurement. Range: 0-200 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-200 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/sulphate-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
  {
    id: "residual-chlorine-reagent",
    name: "Residual Chlorine Reagent",
    description: "OT (Ortho-tolidine) reagent for residual chlorine. Range: 0-5 mg/L.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    tags: ["Single Parameter", "0-5 mg/L"],
    subLinks: [
      { label: "Specs", href: "/products/reagent-kit/residual-chlorine-reagent#specs" },
      { label: "Order", href: "/contact-us" },
    ],
  },
];
