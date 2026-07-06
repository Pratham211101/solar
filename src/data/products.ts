
export interface ProductParameter {
  icon: string;
  name: string;
  range: string;
}

export interface HowItWorksStepData {
  icon: string;
  step: number;
  title: string;
  description: string;
}

export interface ProductFeatureDetail {
  icon?: string;
  title: string;
  description: string;
}

export interface ProductData {
  id: string;
  badge: string;
  category: string;
  href: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  featuresDetails? : ProductFeatureDetail[];
  image: string;
  images: string[];
  stat: { value: string; label: string };
  parametersTitle: string;
  parametersSubtitle: string;
  parameters: ProductParameter[];
  brochureLink: string;
  howItWorks: {
    title: string;
    subtitle: string;
    steps: HowItWorksStepData[];
  };
  whysolar: {
    title: string;
    description: string;
    features: string[];
  };
  whoItsFor: {
    title: string;
    subtitle: string;
    sectors: {
      icon: string;
      title: string;
      description: string;
      tags: string[];
    }[];
  };
  testimonials: {
    title: string;
    items: {
      quote: string;
      role: string;
      organization: string;
    }[];
  };
  deploymentSupport: {
    title: string;
    description: string;
    features: string[];
    formTitle: string;
    formSubtitle: string;
  };
}

export const productsData: Record<string, ProductData> = {
  helios: {
    id: "helios",
    badge: "Patented Design",
    category: "STREET LIGHTING",
    href: "/products/helios",
    name: "Helios Solar Pole Light",
    tagline: "Vertical Power for Modern Streets",
    description:
      "A revolutionary vertical solar lighting system. Its modular, triangular pole design with triple-sided solar panels ensures maximum energy harvest even in low-sun conditions.",
    features: [
      "Vertical Solar Integration",
      "Triangular Aluminum Pole",
      "Advanced MPPT Tracking",
      "Modular LED Head",
      "IoT Remote Management",
    ],
    image: "/images/NOMO pictures/pictures/Helios/H10.png",
    images: [
      "/images/NOMO pictures/pictures/Helios/H10.png",
      "/images/NOMO pictures/pictures/Helios/hls_5000.171.png",
      "/images/NOMO pictures/pictures/Helios/hls_5000.163.png",
    ],
    stat: { value: "24,000", label: "Max Lumens" },
    parametersTitle: "High-Performance Specifications",
    parametersSubtitle: "Engineered for durability and maximum efficiency in urban environments.",
    parameters: [
      { icon: "zap", name: "PV Power", range: "160W - 480W" },
      { icon: "battery", name: "Battery Type", range: "LiFePO4" },
      { icon: "sun", name: "Luminous", range: "Up to 24000 LM" },
      { icon: "thermometer", name: "Working Temp", range: "-15°C to 70°C" },
      { icon: "settings", name: "Cycle Life", range: "4000+ Cycles" },
      { icon: "shield", name: "Protection", range: "IP65 Rated" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "How it works",
      subtitle: "360° Energy Capture and Intelligent Management.",
      steps: [
        {
          icon: "sun",
          step: 1,
          title: "Capture",
          description: "Triple-sided vertical panels capture sunlight from all angles throughout the day.",
        },
        {
          icon: "settings",
          step: 2,
          title: "Process",
          description: "Internal MPPT controller optimizes energy conversion with 99% efficiency.",
        },
        {
          icon: "battery",
          step: 3,
          title: "Store",
          description: "High-capacity LiFePO4 battery stores power safely within the pole structure.",
        },
        {
          icon: "cloud",
          step: 4,
          title: "Control",
          description: "Cloud-based IoT system manages lighting schedules and monitors performance.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Helios",
      description: "Setting the standard for architectural solar lighting.",
      features: [
        "No dust accumulation on vertical panels",
        "High wind resistance design",
        "100% rust-proof aluminum alloy",
        "Hidden battery for anti-theft",
        "Tool-free maintenance",
        "8-year battery service life",
        "Customizable pole heights",
        "Smart city sensor integration",
      ],
    },
    whoItsFor: {
      title: "Ideal Applications",
      subtitle: "Premium lighting for premium locations.",
      sectors: [
        {
          icon: "building",
          title: "Corporate Parks",
          description: "Clean, architectural lighting for modern business districts and campuses.",
          tags: ["Office Parks", "Tech Hubs"],
        },
        {
          icon: "map-pin",
          title: "Urban Boulevards",
          description: "Aesthetic street lighting that complements modern city skylines.",
          tags: ["Main Streets", "Plazas"],
        },
        {
          icon: "factory",
          title: "Industrial Zones",
          description: "Rugged and reliable lighting for large-scale logistics and factories.",
          tags: ["Logistics", "Seaports"],
        },
        {
          icon: "leaf",
          title: "Eco-Resorts",
          description: "Sustainable lighting that preserves nature with zero emissions.",
          tags: ["Resorts", "Public Parks"],
        },
      ],
    },
    testimonials: {
      title: "Client Feedback",
      items: [
        {
          quote: "The Helios series transformed our waterfront promenade. The design is sleek and the light quality is unmatched.",
          role: "City Planner",
          organization: "Dubai Municipality",
        },
        {
          quote: "Maintenance costs dropped by 80% after switching to vertical panels. Dust is no longer an issue.",
          role: "Operations Manager",
          organization: "Desert Logistics Park",
        },
        {
          quote: "Integrated IoT allows us to dim lights during low-traffic hours, extending battery life significantly.",
          role: "Sustainability Lead",
          organization: "Global Tech Campus",
        },
      ],
    },
    deploymentSupport: {
      title: "Global Support",
      description: "We provide comprehensive services from design to installation.",
      features: [
        "Dialux lighting simulations",
        "Customized mounting solutions",
        "On-site installation supervision",
        "IoT dashboard configuration",
        "24/7 technical helpdesk",
      ],
      formTitle: "Start Your Project",
      formSubtitle: "Get a customized quote for your Helios installation.",
    },
  },
  eos: {
    id: "eos",
    badge: "Self-Cleaning",
    category: "SELF-CLEANING LIGHT",
    href: "/products/eos",
    name: "EOS Self-Cleaning Light",
    tagline: "Uninterrupted Power in Dusty Environments",
    description:
      "The world's first patented self-cleaning solar street light. Designed for arid regions where dust and sand significantly reduce solar panel efficiency.",
    features: [
      "Auto-Cleaning System",
      "Nano-Coating Panels",
      "High Efficiency LED",
      "Tool-free modularity",
      "Intelligent Task Planning",
    ],
    image: "/images/NOMO pictures/pictures/EOS(ALL IN ONE)/100W/100W_1.png",
    images: [
      "/images/NOMO pictures/pictures/EOS(ALL IN ONE)/100W/100W_1.jpg",
      "/images/NOMO pictures/pictures/EOS(ALL IN ONE)/100W/100W_2.jpg",
    ],
    stat: { value: "98%", label: "Efficiency Maintained" },
    parametersTitle: "Technical Specifications",
    parametersSubtitle: "Built to perform in the harshest conditions on Earth.",
    parameters: [
      { icon: "zap", name: "Solar Panel", range: "120W - 160W" },
      { icon: "battery", name: "Storage", range: "825WH - 1200WH" },
      { icon: "sun", name: "Lumen Output", range: "10,000 - 15,000 LM" },
      { icon: "droplets", name: "Cleaning", range: "Dual-motor system" },
      { icon: "settings", name: "LED Chip", range: "Philips 5050" },
      { icon: "shield", name: "Protection", range: "IP65" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Maintenance-Free Operation",
      subtitle: "Automation that keeps your lights burning bright.",
      steps: [
        {
          icon: "settings",
          step: 1,
          title: "Schedule",
          description: "System triggers a cleaning cycle twice daily via the IoT platform.",
        },
        {
          icon: "droplets",
          step: 2,
          title: "Clean",
          description: "Integrated brush system sweeps dust and debris off the panel surface.",
        },
        {
          icon: "zap",
          step: 3,
          title: "Charge",
          description: "Clear panels achieve up to 30% more power harvest than dusty alternatives.",
        },
        {
          icon: "cloud",
          step: 4,
          title: "Notify",
          description: "System sends health reports to your dashboard after every cycle.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose EOS",
      description: "Engineered for maximum ROI in challenging climates.",
      features: [
        "Patented dual-motor cleaning system",
        "Resistant to sand, bird droppings, and dust",
        "Maintenance costs reduced by 95%",
        "Extends battery life through optimal charging",
        "High-efficiency monocrystalline cells",
        "Smart IoT dimming and scheduling",
        "Adjustable solar panel angle",
        "Aluminum alloy heat dissipation",
      ],
    },
    whoItsFor: {
      title: "Application Areas",
      subtitle: "Reliable light where manual cleaning is impossible.",
      sectors: [
        {
          icon: "map-pin",
          title: "Desert Regions",
          description: "High-performance lighting for oil fields, desert roads, and remote outposts.",
          tags: ["Oil & Gas", "Mining"],
        },
        {
          icon: "factory",
          title: "Industrial Plants",
          description: "Overcoming heavy dust and soot in coal plants and construction sites.",
          tags: ["Cement Plants", "Steel Mills"],
        },
        {
          icon: "building",
          title: "Smart Cities",
          description: "Future-ready lighting with automated maintenance tracking.",
          tags: ["Municipalities", "Utilities"],
        },
        {
          icon: "leaf",
          title: "Agriculture",
          description: "Lighting for farm roads where dust and pollen are prevalent.",
          tags: ["Farm Roads", "Orchards"],
        },
      ],
    },
    testimonials: {
      title: "User Reviews",
      items: [
        {
          quote: "EOS is a life-saver for our remote mining camp. No one has to climb poles for cleaning anymore.",
          role: "Site Manager",
          organization: "Rio Tinto Projects",
        },
        {
          quote: "The light output remains consistent even after months of sandstorms. The cleaning system really works.",
          role: "Technical Director",
          organization: "KSA Street Lights",
        },
        {
          quote: "IoT integration makes monitoring 5,000 units effortless. We know exactly when a part needs replacement.",
          role: "Maintenance Lead",
          organization: "Oman Smart City",
        },
      ],
    },
    deploymentSupport: {
      title: "Project Support",
      description: "From lighting design to long-term maintenance contracts.",
      features: [
        "Site environment analysis",
        "Customized cleaning intervals",
        "Remote troubleshooting via IoT",
        "Spare parts kit included",
        "Training for local teams",
      ],
      formTitle: "Get a Technical Sheet",
      formSubtitle: "Interested in self-cleaning technology? Contact us for specs.",
    },
  },
  apollo: {
    id: "apollo",
    badge: "Versatile Choice",
    category: "VERSATILE LIGHTING",
    href: "/products/apollo",
    name: "Apollo Solar Street Light",
    tagline: "The All-Rounder for Every Infrastructure",
    description:
      "A high-efficiency, multi-configaration solar lighting series. Known for its streamlined design and extreme reliability across residential and commercial sectors.",
    features: [
      "Intergrated & Split Options",
      "High Luminous Efficiency",
      "Zigbee Remote Control",
      "Durable AL-Alloy Body",
      "Fast Installation",
    ],
    image: "/images/NOMO pictures/pictures/Apollo/白底图/1744789387685.png",
    images: [
      "/images/NOMO pictures/pictures/Apollo/白底图/1744789387685.jpg",
      "/images/NOMO pictures/pictures/Apollo/白底图/1744789402841.jpg",
    ],
    stat: { value: "100,000", label: "Hours LED Life" },
    parametersTitle: "Technical Features",
    parametersSubtitle: "Versatility meets precision engineering.",
    parameters: [
      { icon: "zap", name: "PV Power", range: "80W - 160W" },
      { icon: "battery", name: "Battery", range: "275WH - 768WH" },
      { icon: "sun", name: "Lumen Output", range: "3,000 - 12,000 LM" },
      { icon: "settings", name: "Efficiency", range: "Up to 200 lm/W" },
      { icon: "wifi", name: "Connectivity", range: "Zigbee / GSM / 4G" },
      { icon: "shield", name: "Durability", range: "IP67 Rated" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Simple & Smart",
      subtitle: "Ease of use without compromising performance.",
      steps: [
        {
          icon: "settings",
          step: 1,
          title: "Install",
          description: "All-in-one design allows for 5-minute installation on existing poles.",
        },
        {
          icon: "sun",
          step: 2,
          title: "Sense",
          description: "Intelligent sunlight sensors automatically trigger dusk-to-dawn operation.",
        },
        {
          icon: "activity",
          step: 3,
          title: "Adapt",
          description: "PIR motion sensors optimize brightness based on pedestrian movement.",
        },
        {
          icon: "cloud",
          step: 4,
          title: "Manage",
          description: "Remote group control enables energy saving during late-night hours.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Apollo",
      description: "The most cost-effective solution for large-scale deployments.",
      features: [
        "Lightweight for easy shipping",
        "Anti-corrosion powder coating",
        "High-performance LiFePO4 cells",
        "Adjustable bracket for optimal sun",
        "Wide light distribution optics",
        "Auto-dimming for rainy days",
        "Tested to survive hurricane winds",
        "Minimal cabling required",
      ],
    },
    whoItsFor: {
      title: "Who it's for",
      subtitle: "Universal lighting for diverse environments.",
      sectors: [
        {
          icon: "building",
          title: "Housing Societies",
          description: "Safe and bright lighting for residential streets and gated communities.",
          tags: ["Residential", "Townships"],
        },
        {
          icon: "map-pin",
          title: "Public Roads",
          description: "Reliable illumination for secondary roads and highways.",
          tags: ["Highways", "State Roads"],
        },
        {
          icon: "factory",
          title: "Remote Worksites",
          description: "Off-grid power for security and operations in remote areas.",
          tags: ["Construction", "Logistics"],
        },
        {
          icon: "leaf",
          title: "Education",
          description: "Well-lit campuses and parking lots for student safety.",
          tags: ["Universities", "Schools"],
        },
      ],
    },
    testimonials: {
      title: "Customer Stories",
      items: [
        {
          quote: "Apollo lights were the only ones that survived the last monsoon season. Very impressed with the build.",
          role: "Society President",
          organization: "Green Valley Estates",
        },
        {
          quote: "Installation was so fast we finished 10km of road in just three days. Saved on labor significantly.",
          role: "Contractor",
          organization: "Roadways Infra",
        },
        {
          quote: "The brightness is consistent throughout the night. Excellent value for money.",
          role: "Facility Manager",
          organization: "Industrial Zone A",
        },
      ],
    },
    deploymentSupport: {
      title: "Support Services",
      description: "We help you scale your lighting infrastructure efficiently.",
      features: [
        "Batch customization options",
        "Detailed installation guides",
        "Extended warranty plans",
        "Regional maintenance centers",
        "Performance audit services",
      ],
      formTitle: "Request a Bulk Quote",
      formSubtitle: "Planning a large installation? Let's talk bulk pricing.",
    },
  },
  astro: {
    id: "astro",
    badge: "High Mast",
    category: "HIGH MAST LIGHT",
    href: "/products/astro",
    name: "Astro High Mast Light",
    tagline: "Maximum Coverage, Miniature Footprint",
    description:
      "A powerful high-mast solar solution designed for large areas. Featuring a 360-degree swivel stand and ultra-high lumen output for sports arenas, squares, and ports.",
    features: [
      "Up to 40,000 LM Output",
      "360° Swivel Stand",
      "High-Bright 5050 Chips",
      "Multi-Angle Adjustable",
      "Massive Battery Storage",
    ],
    image: "/images/NOMO pictures/pictures/Astro/120W/120W.01.png",
    images: [
      "/images/NOMO pictures/pictures/Astro/120W/120W.01.png",
      "/images/NOMO pictures/pictures/Astro/120W/120W.02.png",
    ],
    stat: { value: "40,000", label: "Max Lumens" },
    parametersTitle: "High-Area Specifications",
    parametersSubtitle: "Lighting up the night on a grand scale.",
    parameters: [
      { icon: "zap", name: "PV Power", range: "120W - 400W" },
      { icon: "battery", name: "Capacity", range: "825WH - 2340WH" },
      { icon: "sun", name: "Luminous", range: "10,000 - 40,000 LM" },
      { icon: "settings", name: "Pole Height", range: "8m - 20m" },
      { icon: "wifi", name: "IoT Ready", range: "4G / Zigbee" },
      { icon: "shield", name: "Waterproof", range: "IP65 Rated" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Area Coverage Strategy",
      subtitle: "Optimizing light distribution for large spaces.",
      steps: [
        {
          icon: "settings",
          step: 1,
          title: "Adjust",
          description: "Solar panels can be tilted 15, 25, or 35 degrees for max sun absorption.",
        },
        {
          icon: "sun",
          step: 2,
          title: "Illuminate",
          description: "High-mast design provides wide-angle dispersion across thousands of sq. meters.",
        },
        {
          icon: "battery",
          step: 3,
          title: "Endure",
          description: "Huge LiFePO4 bank ensures 10+ days of autonomy during rainy seasons.",
        },
        {
          icon: "cloud",
          step: 4,
          title: "Monitor",
          description: "Real-time performance tracking for critical infrastructure lighting.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Astro",
      description: "Unmatched power for high-demand applications.",
      features: [
        "Unique 360-degree panel rotation",
        "Superior heat dissipation design",
        "Customizable optic lens for beam control",
        "80% power retention over 25 years",
        "Supports high mast poles up to 20m",
        "Built-in DTU for remote operation",
        "Hurricane-resistant construction",
        "Auto-activated on/off cycles",
      ],
    },
    whoItsFor: {
      title: "Primary Use Cases",
      subtitle: "Large-scale illumination for critical areas.",
      sectors: [
        {
          icon: "factory",
          title: "Seaports & Rail",
          description: "Continuous 24/7 lighting for logistics hubs and loading docks.",
          tags: ["Ports", "Rail Yards"],
        },
        {
          icon: "map-pin",
          title: "Massive Squares",
          description: "Bright lighting for public squares and gathering places.",
          tags: ["City Squares", "Event Grounds"],
        },
        {
          icon: "building",
          title: "Airports",
          description: "Reliable apron and parking lot lighting with zero cabling.",
          tags: ["Apron Lighting", "Parking"],
        },
        {
          icon: "leaf",
          title: "Sports Arenas",
          description: "Sustainable lighting for community sports and play grounds.",
          tags: ["Sports Fields", "Arenas"],
        },
      ],
    },
    testimonials: {
      title: "Expert Opinions",
      items: [
        {
          quote: "Astro High Mast is the only off-grid solution that provides enough light for our logistics hub.",
          role: "Operations Director",
          organization: "EuroPort S.A.",
        },
        {
          quote: "The swivel stand made alignment so much easier. We capture 20% more sun than fixed units.",
          role: "Lead Engineer",
          organization: "Solar Projects Asia",
        },
        {
          quote: "No grid connection meant we could install these in just one week across the entire project.",
          role: "Project Manager",
          organization: "Federal Airport Authority",
        },
      ],
    },
    deploymentSupport: {
      title: "Engineering Support",
      description: "End-to-end solutions for high-mast infrastructure.",
      features: [
        "3D lighting simulations",
        "Pole design and structural engineering",
        "Remote DTU configuration",
        "Global logistics support",
        "On-site technical training",
      ],
      formTitle: "Start Your Large-Scale Project",
      formSubtitle: "Talk to our engineers about high-mast coverage.",
    },
  },
  "solar-bench": {
    id: "solar-bench",
    badge: "Smart City",
    category: "SMART FURNITURE",
    href: "/products/solar-bench",
    name: "Smart Solar Bench",
    tagline: "The Future of Urban Interaction",
    description:
      "A revolutionary self-powered urban hub that redefines public seating. It features 186W auto-cleaning solar panels, wireless and USB charging for all devices, and an integrated 360° cooling and humidification system that adapts to user presence.",
    features: [
      "Auto-Cleaning Solar Panels",
      "Wireless & USB Charging",
      "360° Cooling & Humidification",
      "LED Advertising Screen",
      "Built-in Bluetooth Speakers",
      "Dedicated Scooter Parking",
    ],
    featuresDetails: [
      {
        title: "Solar-Powered Efficiency",
        description: "Maximize energy harvest with self-maintaining 186W monocrystalline panels featuring an integrated auto-cleaning system. Rated IP65 for durability in all weather conditions, ensuring uninterrupted performance year-round."
      },
      {
        title: "Smart User Experience",
        description: "Power devices effortlessly with integrated wireless Qi pads and high-speed USB ports. The bench also features auto-activated cooling fans and humidifiers that adjust based on occupancy sensors, paired with an ergonomic backrest and anti-slip seating."
      },
      {
        title: "Advertising & Engagement",
        description: "Serve as a community hub with a high-brightness outer LED advertising screen for dynamic content. The unit also includes inner flyer space for notices and built-in premium speakers for music or announcements."
      },
      {
        title: "Safety & Accessibility",
        description: "Features ground-level washer light illumination for nighttime visibility and safety. A dedicated scooter parking area with optional charging ports supports micro-mobility integration for urban travelers."
      }
    ],
    image: "/images/NOMO pictures/pictures/Solar Bench/Solar_Bench_M.png",
    images: [
      "/images/NOMO pictures/pictures/Solar Bench/Solar Bench_M.jpg",
      "/images/NOMO pictures/pictures/Solar Bench/Solar Bench_D01.jpg",
    ],
    stat: { value: "186W", label: "Self-Cleaning PV" },
    parametersTitle: "Smart Infrastructure Features",
    parametersSubtitle: "Engineered for maximum utility and citizen comfort.",
    parameters: [
      { icon: "zap", name: "Solar Panel", range: "186W (Auto-Cleaning)" },
      { icon: "smartphone", name: "Charging", range: "Qi + USB + E-Scooter" },
      { icon: "wind", name: "Microclimate", range: "Cooling & Humidification" },
      { icon: "monitor", name: "Advertising", range: "Outer LED + Inner Flyer" },
      { icon: "volume-2", name: "Audio", range: "Built-in BT Speakers" },
      { icon: "shield", name: "Durability", range: "IP65 Waterproof" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "How it works",
      subtitle: "A self-sustaining ecosystem for smart city life.",
      steps: [
        {
          icon: "sun",
          step: 1,
          title: "Maximize",
          description: "186W monocrystalline panels feature auto-cleaning technology for 98%+ efficiency.",
        },
        {
          icon: "activity",
          step: 2,
          title: "Sense",
          description: "Occupancy sensors and inductor heads detect presence to activate fans and lights.",
        },
        {
          icon: "zap",
          step: 3,
          title: "Power",
          description: "Dual charging methods (wired and wireless) support phones, tablets, and e-scooters.",
        },
        {
          icon: "wind",
          step: 4,
          title: "Comfort",
          description: "360° fans and humidifiers adjust the local climate for a refreshing user experience.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Bench",
      description: "Combining durability with next-generation smart features.",
      features: [
        "Patented auto self-cleaning system",
        "IP65 rated for extreme weather",
        "360° cooling and humidification fans",
        "Inner flyer space for community engagement",
        "Outer LED advertising screen (AD.TV)",
        "Washer light for ground illumination",
        "Dedicated scooter parking with charging",
        "Ergonomic backrest and anti-slip seating",
      ],
    },
    whoItsFor: {
      title: "Target Locations",
      subtitle: "Transforming every public space into a smart hub.",
      sectors: [
        {
          icon: "map-pin",
          title: "Public Parks",
          description: "Eco-friendly seating that keeps visitors connected and cool.",
          tags: ["Recreation", "Parks"],
        },
        {
          icon: "building",
          title: "University Campuses",
          description: "Outdoor study spots with laptop power and high-speed WiFi.",
          tags: ["Education", "R&D"],
        },
        {
          icon: "map-pin",
          title: "City Squares",
          description: "Modernizing urban centers with IoT-connected advertising hubs.",
          tags: ["Smart City", "Municipalities"],
        },
        {
          icon: "factory",
          title: "Transit Hubs",
          description: "Micro-mobility stops for e-scooter parking and passenger charging.",
          tags: ["Workplace", "Transit"],
        },
      ],
    },
    testimonials: {
      title: "Community Impact",
      items: [
        {
          quote: "The auto-cleaning panels are a game changer. Maintenance is practically non-existent.",
          role: "City Planner",
          organization: "Melbourne City Council",
        },
        {
          quote: "The cooling fans make outdoor work possible in the summer. It's my favorite campus spot.",
          role: "Architecture Student",
          organization: "State University",
        },
        {
          quote: "Integrated advertising covers the cost of the unit. It's a self-financing smart city asset.",
          role: "Regional Director",
          organization: "ClearChannel Outdoor",
        },
      ],
    },
    deploymentSupport: {
      title: "Implementation Support",
      description: "Full-cycle support for smart furniture deployment.",
      features: [
        "Custom branding and outer wrapping",
        "Remote management & AD console",
        "On-site installation and testing",
        "Maintenance kits and training",
        "IoT usage data dashboard",
      ],
      formTitle: "Upgrade Your City",
      formSubtitle: "Get a customized proposal for our Smart Solar Benches.",
    },
  },
  "solar-tower": {
    id: "solar-tower",
    badge: "Hybrid Mobile Power",
    category: "MOBILE LIGHTING TOWER",
    href: "/products/solar-tower",
    name: "Hybrid Solar Lighting Tower",
    tagline: "Industrial-Grade Illumination Anywhere",
    description:
      "A powerhouse of off-grid lighting, the Hybrid Solar Lighting Tower combines 1200W of solar harvesting with a massive 200AH LiFePO4 battery. Delivering an ultra-bright 64,000 LM output, it is engineered for the harshest environments, providing 25-30 hours of continuous, silent, and sustainable lighting.",
    features: [
      "3 * 400W Monocrystalline Panels",
      "51.2V 200AH LiFePO4 Battery",
      "64,000 LM High-Bright LEDs",
      "8-Meter Rising Mast",
      "80km/h Tow Capacity Trailer",
      "60A/MPPT Solar Controller",
    ],
    featuresDetails: [
      {
        title: "Industrial-Grade Illumination",
        description: "Four 100W high-power LED heads provide an exceptional 64,000 LM total flux. Designed for a 100,000-hour lifespan with IP65 weatherproofing, operating reliably between -25°C and +70°C."
      },
      {
        title: "Intelligent Power Hybrid System",
        description: "Equipped with 1200W of Class A MONO solar harvesting and a 51.2V, 200AH LiFePO4 battery bank. Provides up to 30 hours of continuous light, with a full solar recharge cycle achieved in 10-16 hours."
      },
      {
        title: "Adaptive Mobile Design",
        description: "Features an 8-meter rising pole with four adjustable legs for perfect positioning. The heavy-duty trailer supports 80km/h tow capacity and includes forklift slots and a drawer-type track for compact storage."
      }
    ],
    image: "/images/NOMO pictures/pictures/solar tower/5134f7fc44be7a6f5c3f73974fea1b9.png",
    images: [
      "/images/NOMO pictures/pictures/solar tower/5134f7fc44be7a6f5c3f73974fea1b9.png",
      "/images/NOMO pictures/pictures/solar tower/bef094a21f60ed6bdf630f081a497c2.jpg",
    ],
    stat: { value: "64,000", label: "Total Lumens" },
    parametersTitle: "Technical Data & Performance",
    parametersSubtitle: "Industrial-grade specifications for mission-critical operations.",
    parameters: [
      { icon: "zap", name: "Solar Panel", range: "3 * 400W Monocrystalline" },
      { icon: "battery", name: "Battery Capacity", range: "200AH (51.2V) LiFePO4" },
      { icon: "sun", name: "Light Source", range: "4 * 100W (64,000 LM)" },
      { icon: "settings", name: "Mast Height", range: "8-Meter Rising Pole" },
      { icon: "thermometer", name: "Operating Temp", range: "-25°C to +70°C" },
      { icon: "shield", name: "Trailer", range: "Towable + Forklift Slots" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Engineered for Efficiency",
      subtitle: "Silent, zero-emission power delivery.",
      steps: [
        {
          icon: "sun",
          step: 1,
          title: "Harvest",
          description: "Three 400W single crystal panels recharge the 200AH battery in 10-16 hours of sunlight.",
        },
        {
          icon: "settings",
          step: 2,
          title: "Control",
          description: "An advanced 60A/MPPT controller manages energy flow with support for time, space, and manual control.",
        },
        {
          icon: "activity",
          step: 3,
          title: "Deploy",
          description: "The drawer-type heavy track and movable legs allow for rapid setup on any industrial terrain.",
        },
        {
          icon: "sun",
          step: 4,
          title: "Illuminate",
          description: "Four 100W LED heads with 100,000h service life provide up to 30 hours of continuous high-intensity light.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Tower",
      description: "Industrial performance meets environmental sustainability.",
      features: [
        "1200W total solar power harvesting",
        "Rugged IP65 waterproof construction",
        "80km/h tow-capacity heavy-duty trailer",
        "Compact storage with drawer-type track",
        "Adjustable mast height and head angles",
        "Forklift slots for versatile site transport",
        "Zero fuel costs and silent operation",
        "1000-cycle battery life (LiFePO4)",
      ],
    },
    whoItsFor: {
      title: "Primary Use Cases",
      subtitle: "Powerful lighting where the grid doesn't reach.",
      sectors: [
        {
          icon: "factory",
          title: "Construction Zones",
          description: "Powerful night-shift lighting with zero noise pollution.",
          tags: ["Industrial", "Night Work"],
        },
        {
          icon: "shield",
          title: "Emergency Rescue",
          description: "Rapidly deployable lighting for disaster relief and search operations.",
          tags: ["Crisis", "Relief"],
        },
        {
          icon: "map-pin",
          title: "Outdoor Events",
          description: "Sustainable lighting for large-scale festivals and sporting arenas.",
          tags: ["Festivals", "Arenas"],
        },
        {
          icon: "building",
          title: "Road Maintenance",
          description: "Ensuring highway safety during essential overnight repairs.",
          tags: ["Highways", "Safety"],
        },
      ],
    },
    testimonials: {
      title: "Field Performance",
      items: [
        {
          quote: "The 30-hour runtime is exceptional. We no longer worry about refueling during long operations.",
          role: "Site Manager",
          organization: "Roadways Infra",
        },
        {
          quote: "Sturdy even in high-wind conditions. The 8-meter mast provides incredible coverage.",
          role: "Safety Lead",
          organization: "Emergency Services",
        },
        {
          quote: "Significant savings on energy and carbon footprint. A true sustainability win for our project.",
          role: "Project Director",
          organization: "Global Construction Group",
        },
      ],
    },
    deploymentSupport: {
      title: "Fleet Support",
      description: "Comprehensive support for large-scale industrial deployments.",
      features: [
        "Fleet management software integration",
        "Global logistics and spare parts support",
        "Remote MPPT configuration setup",
        "On-site operation training",
        "Scheduled maintenance checkups",
      ],
      formTitle: "Power Your Project",
      formSubtitle: "Contact us for large-scale lighting tower solutions.",
    },
  },
  "solar-system": {
    id: "solar-system",
    badge: "Off-Grid Power",
    category: "OFF-GRID POWER",
    href: "/products/solar-system",
    name: "Solar Home System",
    tagline: "Clean Energy for Off-Grid Living",
    description:
      "A complete energy solution for homes and small businesses in remote locations. Includes panels, batteries, and inverters for a seamless plug-and-play experience.",
    features: [
      "Plug-and-Play Setup",
      "Expandable Battery Bank",
      "High-Efficiency Inverter",
      "Remote Health Monitoring",
      "Long-Life PV Panels",
    ],
    image: "/images/NOMO pictures/pictures/solar system/大系统抠图/png/3KW.png",
    images: [
      "/images/NOMO pictures/pictures/solar system/大系统抠图/png/3KW.png",
      "/images/NOMO pictures/pictures/solar system/大系统抠图/png/单独.png",
    ],
    stat: { value: "3 - 10 kW", label: "Power Range" },
    parametersTitle: "System Components",
    parametersSubtitle: "Quality parts for reliable energy.",
    parameters: [
      { icon: "zap", name: "PV Capacity", range: "1kW to 10kW+" },
      { icon: "battery", name: "Storage", range: "Modular LiFePO4" },
      { icon: "settings", name: "Inverter", range: "Pure Sine Wave" },
      { icon: "monitor", name: "Monitor", range: "LCD + Mobile App" },
      { icon: "shield", name: "Safety", range: "Built-in Protection" },
      { icon: "thermometer", name: "Warranty", range: "Up to 5 Years" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Energy Independence",
      subtitle: "Simple steps to power your home.",
      steps: [
        {
          icon: "sun",
          title: "Generate",
          step: 1,
          description: "Roof-mounted panels convert sunlight into DC electricity.",
        },
        {
          icon: "battery",
          title: "Store",
          step: 2,
          description: "Excess energy is stored in safe, long-life Lithium batteries.",
        },
        {
          icon: "zap",
          title: "Convert",
          step: 3,
          description: "The smart inverter turns DC power into AC for your appliances.",
        },
        {
          icon: "smartphone",
          title: "Observe",
          step: 4,
          description: "Track your usage and savings in real-time via our app.",
        },
      ],
    },
    whysolar: {
      title: "Why Go Solar with Us",
      description: "Reliable power where the grid doesn't reach.",
      features: [
        "Complete kit: Panels, Batteries, Inverter",
        "Easy installation (No expert needed for small units)",
        "Safety certified battery management",
        "Supports Fans, TVs, and Low-power AC",
        "Modular growth: Add more power anytime",
        "Zero emissions and silent operation",
        "25-year panel performance guarantee",
        "Low lifetime cost of energy",
      ],
    },
    whoItsFor: {
      title: "Empowering People",
      subtitle: "Bringing light and power to everyone.",
      sectors: [
        {
          icon: "building",
          title: "Rural Households",
          description: "Reliable electricity for lighting, cooling, and entertainment.",
          tags: ["Off-grid", "Rural"],
        },
        {
          icon: "factory",
          title: "Small Businesses",
          description: "Keep shops and workshops running during grid outages.",
          tags: ["SME", "Shops"],
        },
        {
          icon: "heart",
          title: "Medical Clinics",
          description: "Essential power for vaccine storage and emergency lighting.",
          tags: ["Healthcare", "Relief"],
        },
        {
          icon: "building",
          title: "Telecom Shelters",
          description: "Uninterrupted power for remote communication towers.",
          tags: ["Telecom", "Tech"],
        },
      ],
    },
    testimonials: {
      title: "User Stories",
      items: [
        {
          quote: "Finally, we have lights and a fan at night. It has changed our children's education completely.",
          role: "Homeowner",
          organization: "Rural Community Project",
        },
        {
          quote: "Our vaccination fridge hasn't lost power once since we installed the solar system.",
          role: "Clinic Manager",
          organization: "Regional Health Center",
        },
        {
          quote: "The app is so easy to use. I can see exactly how much money I'm saving every day.",
          role: "Shop Owner",
          organization: "Village General Store",
        },
      ],
    },
    deploymentSupport: {
      title: "Energy Solutions",
      description: "Helping you transition to clean energy.",
      features: [
        "Custom load analysis",
        "Remote monitoring setup",
        "Local technician network",
        "Flexible payment plans",
        "System upgrade paths",
      ],
      formTitle: "Get an Energy Audit",
      formSubtitle: "Find out which system is right for your home.",
    },
  },
  "smart-pole": {
    id: "smart-pole",
    badge: "5G & IoT Urban Hub",
    category: "CITY INFRASTRUCTURE",
    href: "/products/smart-pole",
    name: "Smart Solar Pole",
    tagline: "The Backbone of Intelligent Cities",
    description:
      "A sophisticated urban nexus designed for the digital age. Powered by 360W Class A monocrystalline solar panels, it integrates high-speed WiFi 6 (2.4Gbps), 4MP AI surveillance, and a comprehensive environmental monitoring suite. It serves as a decentralized hub for 5G connectivity and sustainable revenue through high-brightness advertising.",
    features: [
      "360W Class A MONO PV",
      "4MP AI Ball Camera (360°)",
      "WiFi 6 Hotspot (2.4Gbps)",
      "Networked PA System",
      "Environmental Monitoring",
      "High-Brightness AD Display",
    ],
    featuresDetails: [
      {
        title: "Intelligent Power & Control",
        description: "Equipped with a high-efficiency 360W Class A MONO solar panel protected by 3.2mm toughened glass. A patented MPPT controller offers 99% efficiency with real-time temperature monitoring for safe operation between -35°C and 75°C."
      },
      {
        title: "Advanced AI Surveillance",
        description: "Features a 4-megapixel, 7-inch HD smart dome camera with 360° horizontal coverage and 150-meter infrared range. It supports automatic flipping and intelligent tracking for robust public security."
      },
      {
        title: "Urban Connectivity Hub",
        description: "Provides high-speed WiFi 6 (802.11ax) hotspots with max rates of 2.4Gbps and 5G ready connectivity. It also serves as a public broadcasting center with a high-quality networked PA system."
      },
      {
        title: "Environmental Intelligence",
        description: "Onboard sensor suite monitors wind speed, wind direction, temperature, humidity, and critical air quality indicators likes PM2.5 and PM10 to support city planning and public health."
      },
      {
        title: "Revenue & Charging Infrastructure",
        description: "Features a double-sided LED advertising display with 7000CD/m² brightness for clear visibility in daylight. Includes an integrated charging pile for EV cars, electric bikes, and mobile phones with wired and wireless options."
      }
    ],
    image: "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart_Solar_Pole_M.png",
    images: [
      "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart Solar Pole_M.jpg",
      "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart Solar Pole_D01.jpg",
    ],
    stat: { value: "2.4 Gbps", label: "WiFi Speed" },
    parametersTitle: "Smart City Capabilities",
    parametersSubtitle: "Consolidating essential urban services into a single intelligent structure.",
    parameters: [
      { icon: "zap", name: "Solar Power", range: "360W Class A MONO" },
      { icon: "video", name: "CCTV", range: "4MP AI Smart Ball (150m IR)" },
      { icon: "wifi", name: "Connectivity", range: "WiFi 6 (802.11ax) + 5G" },
      { icon: "volume-2", name: "Public Audio", range: "Networked PA (20Hz-20KHz)" },
      { icon: "droplets", name: "Env. Sensors", range: "PM2.5 / PM10 / Wind / Noise" },
      { icon: "monitor", name: "Advertising", range: "Double-sided (7000CD/m²)" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Omni-Connected Network",
      subtitle: "Seamless integration for modern city management.",
      steps: [
        {
          icon: "sun",
          step: 1,
          title: "Optimize",
          description: "High-efficiency 360W panels and 99% efficient MPPT controllers maximize off-grid power.",
        },
        {
          icon: "activity",
          step: 2,
          title: "Surveil",
          description: "AI Ball cameras provide 360° horizontal coverage with infrared monitoring up to 150 meters.",
        },
        {
          icon: "wifi",
          step: 3,
          title: "Connect",
          description: "High-speed WiFi hotspots and 5G micro-stations provide reliable public connectivity.",
        },
        {
          icon: "cloud",
          step: 4,
          title: "Manage",
          description: "A centralized platform monitors PV, battery, and sensors while controlling lighting and ads.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Smart Pole",
      description: "Defining the standard for modular urban infrastructure.",
      features: [
        "Consolidated design reduces urban clutter",
        "WiFi 6 ready with up to 2.4Gbps speed",
        "Revenue-generating 7000CD/m² LED display",
        "Comprehensive environmental data suite",
        "Public safety with 4MP AI surveillance",
        "High-quality networked audio broadcasting",
        "Charging for EVs, e-bikes, and mobile devices",
        "Extreme temp battery range: -35°C to 75°C",
      ],
    },
    whoItsFor: {
      title: "Urban Applications",
      subtitle: "Tailored solutions for diverse metropolitan needs.",
      sectors: [
        {
          icon: "building",
          title: "Public Squares",
          description: "Providing public WiFi, safety, and community information.",
          tags: ["City Centers", "Plazas"],
        },
        {
          icon: "map-pin",
          title: "Smart Streets",
          description: "Unified infrastructure for lighting, 5G, and env. monitoring.",
          tags: ["Main Roads", "Highways"],
        },
        {
          icon: "shield",
          title: "High-Security Areas",
          description: "Robust AI surveillance and PA systems for crowd control.",
          tags: ["Transport Hubs", "Stadiums"],
        },
        {
          icon: "factory",
          title: "Industrial Parks",
          description: "Connectivity and charging solutions for large-scale campuses.",
          tags: ["Logistics", "Tech Hubs"],
        },
      ],
    },
    testimonials: {
      title: "City Manager Feedback",
      items: [
        {
          quote: "The environmental sensors provided the data we needed to tackle local pollution effectively.",
          role: "Planning Commissioner",
          organization: "Future City Initiative",
        },
        {
          quote: "High-speed public WiFi has transformed business for local vendors on our main street.",
          role: "BIA Director",
          organization: "Greater Downtown Assoc.",
        },
        {
          quote: "Advertising revenue from the poles allowed us to pay off the project costs in under two years.",
          role: "Public Works Director",
          organization: "Municipality of TechVille",
        },
      ],
    },
    deploymentSupport: {
      title: "Turnkey Integration",
      description: "Partnering with cities from design to daily operations.",
      features: [
        "Network topology and coverage surveys",
        "Integrated gateway configuration",
        "Advertising content management setup",
        "On-site mounting and certification",
        "24/7 cloud-based network monitoring",
      ],
      formTitle: "Start Your Smart City Project",
      formSubtitle: "Talk to our experts about pole-based infrastructure solutions.",
    },
  },
  elf: {
    id: "elf",
    badge: "Compact & Versatile",
    category: "COMPACT LIGHTING",
    href: "/products/elf",
    name: "Solar Elf Light",
    tagline: "All-in-One Compact Lighting Solution",
    description:
      "A compact, high-efficiency solar lighting series designed for gardens, paths, bridges, and walls. With precision adjustable optics and high-performance LiFePO4 battery storage, it delivers reliable lighting in any weather condition.",
    features: [
      "Compact All-in-One Design",
      "Adjustable Beam Angle (60°-120°)",
      "Aviation Grade Aluminum (6063)",
      "10+ Days Rainy Day Backup",
      "Tool-Free Fast Installation",
    ],
    image: "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-1.jpg",
    images: [
      "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-1.jpg",
      "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-2.jpg",
      "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-3.jpg",
      "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-4.jpg",
      "/images/NOMO pictures/pictures/ELF/白底图/Solar-Elf-15W-5.jpg",
    ],
    stat: { value: "1,500", label: "Max Lumens" },
    parametersTitle: "Compact Specifications",
    parametersSubtitle: "Engineered to fit and illuminate any outdoor spaces.",
    parameters: [
      { icon: "zap", name: "PV Power", range: "5W - 15W" },
      { icon: "battery", name: "Battery", range: "20WH - 60WH" },
      { icon: "sun", name: "Lumen Output", range: "500 - 1,500 LM" },
      { icon: "settings", name: "Material", range: "AL-6063 Alloy" },
      { icon: "shield", name: "Durability", range: "IP65 Waterproof" },
      { icon: "activity", name: "Controller", range: "Intelligent MPPT" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Smart Performance",
      subtitle: "Automatic intelligence in a compact size.",
      steps: [
        {
          icon: "settings",
          step: 1,
          title: "Mounting",
          description: "Flexible wall, bridge, or ground mounting with zero cabling.",
        },
        {
          icon: "sun",
          step: 2,
          title: "Sunlight Tracking",
          description: "Optimal charging via premium monocrystalline PV panels.",
        },
        {
          icon: "activity",
          step: 3,
          title: "Dimming Control",
          description: "Smart light control schedules power saving mode during mid-night hours.",
        },
        {
          icon: "shield",
          step: 4,
          title: "Long-lasting Power",
          description: "High capacity LiFePO4 battery powers through up to 10 rainy days.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Solar Elf",
      description: "The most cost-effective and flexible lighting choice for paths, parks, and accent lighting.",
      features: [
        "Ultra-compact form factor",
        "60° to 120° adjustable beam angles",
        "Highly efficient monocrystalline solar panel (up to 24%)",
        "High-grade anti-oxidation aluminum casing",
        "No wiring, zero electricity bills, 100% clean energy",
        "Extended working temperature (-15°C to +70°C)",
        "IP65 rated for extreme weather durability",
        "More than 4,000 battery life cycles",
      ],
    },
    whoItsFor: {
      title: "Who it's for",
      subtitle: "Ideal lighting for residential and commercial landscaping.",
      sectors: [
        {
          icon: "home",
          title: "Private Gardens & Courtyards",
          description: "Add aesthetic lighting to walks, gazebos, and landscape architecture.",
          tags: ["Residential", "Villas"],
        },
        {
          icon: "map-pin",
          title: "Bridges & Pathways",
          description: "Safe wayfinding illumination for community walking trails and bridges.",
          tags: ["Pathways", "Parks"],
        },
        {
          icon: "building",
          title: "Commercial Exterior Walls",
          description: "Accentuate facades, perimeters, and signage with clean solar lighting.",
          tags: ["Security", "Hotels"],
        },
      ],
    },
    testimonials: {
      title: "Tested & Trusted",
      items: [
        {
          quote: "We deployed the Solar Elf lights along our courtyard paths and lakefront bridge. They were extremely easy to install and the adjustable beam made focusing the light exactly where we needed it simple.",
          role: "Landscape Coordinator",
          organization: "Lakeside Resort & Spa",
        },
      ],
    },
    deploymentSupport: {
      title: "Compact Logistics",
      description: "Available for immediate bulk shipping with simple DIY instructions.",
      features: [
        "Standard mounting brackets included",
        "Comprehensive setup guides",
        "5-year hardware warranty",
        "Priority shipping globally",
        "Custom bulk branding available",
      ],
      formTitle: "Request Specs & Quote",
      formSubtitle: "Inquire about Solar Elf for your project today.",
    },
  },
};
