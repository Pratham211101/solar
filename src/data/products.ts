
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

export interface ProductData {
  id: string;
  badge: string;
  category: string;
  href: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
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
    image: "/images/NOMO pictures/pictures/EOS(ALL IN ONE)/100W/100W_1.jpg",
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
    image: "/images/NOMO pictures/pictures/Apollo/白底图/1744789387685.jpg",
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
      "More than just a seat. This self-powered hub provides wireless charging, WiFi hotspots, and microclimate control while offering a modern aesthetic for parks and squares.",
    features: [
      "Wireless & USB Charging",
      "WiFi Hotspot Integrated",
      "Bluetooth Audio System",
      "Smart Cooling Fans",
      "Advertising LED Screen",
    ],
    image: "/images/NOMO pictures/pictures/Solar Bench/Solar Bench_M.jpg",
    images: [
      "/images/NOMO pictures/pictures/Solar Bench/Solar Bench_M.jpg",
      "/images/NOMO pictures/pictures/Solar Bench/Solar Bench_D01.jpg",
    ],
    stat: { value: "1.2 kWh", label: "Modular Battery" },
    parametersTitle: "Bench Features",
    parametersSubtitle: "Sustainable comfort for modern citizens.",
    parameters: [
      { icon: "zap", name: "Solar Panel", range: "186W Monocrystalline" },
      { icon: "smartphone", name: "Charging", range: "Qi + USB ports" },
      { icon: "wifi", name: "Connectivity", range: "4G WiFi Hotspot" },
      { icon: "wind", name: "Cooling", range: "Auto-activated fans" },
      { icon: "monitor", name: "Display", range: "Optional AD TV" },
      { icon: "shield", name: "Durability", range: "IP66 / Aluminum" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Interactive Ecosystem",
      subtitle: "A self-sustaining hub for the community.",
      steps: [
        {
          icon: "sun",
          step: 1,
          title: "Power",
          description: "Top-mounted solar panels continuously charge the internal battery bank.",
        },
        {
          icon: "wifi",
          step: 2,
          title: "Connect",
          description: "Integrated WiFi and Bluetooth systems activate upon user presence.",
        },
        {
          icon: "smartphone",
          step: 3,
          title: "Charge",
          description: "Users place phones on Qi pads or plug into USB ports for 15W fast charging.",
        },
        {
          icon: "wind",
          step: 4,
          title: "Relax",
          description: "Micro-climate sensors activate fans or humidifiers during hot days.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Bench",
      description: "Enhancing public spaces with smart technology.",
      features: [
        "Aerospace-grade aluminum body",
        "Vandalism-resistant tempered glass",
        "Autonomous evening lighting",
        "Public announcement speakers",
        "Emergency SOS button integrated",
        "Air quality monitoring sensors",
        "Modular repair-friendly design",
        "Custom colors for city branding",
      ],
    },
    whoItsFor: {
      title: "Target Locations",
      subtitle: "Where technology meets public life.",
      sectors: [
        {
          icon: "map-pin",
          title: "Public Parks",
          description: "Connected seating for nature lovers and families.",
          tags: ["Recreation", "Parks"],
        },
        {
          icon: "building",
          title: "University Campuses",
          description: "Outdoor study spots with laptop power and WiFi.",
          tags: ["Education", "R&D"],
        },
        {
          icon: "map-pin",
          title: "Smart Cities",
          description: "Modernizing urban centers with IoT infrastructure.",
          tags: ["Smart City", "Muncipality"],
        },
        {
          icon: "factory",
          title: "Business Districts",
          description: "Outdoor charging stops for professionals on the go.",
          tags: ["Workplace", "Transit"],
        },
      ],
    },
    testimonials: {
      title: "Community Feedback",
      items: [
        {
          quote: "The charging bench is always full. It's the most popular feature in our park now.",
          role: "Park Administrator",
          organization: "City of Melbourne",
        },
        {
          quote: "Finally, a way to stay connected while enjoying the outdoors. The WiFi speed is great.",
          role: "University Student",
          organization: "State University",
        },
        {
          quote: "Excellent branding tool. The LED screen allows us to show community messages easily.",
          role: "Marketing Manager",
          organization: "Downtown Business Assoc.",
        },
      ],
    },
    deploymentSupport: {
      title: "City Integration",
      description: "Supporting smart city rollouts globally.",
      features: [
        "Custom branding and logos",
        "IoT dashboard for usage data",
        "On-site assembly services",
        "Maintenance and cleaning kits",
        "Remote diagnostic support",
      ],
      formTitle: "Modernize Your City",
      formSubtitle: "Contact us for smart furniture solutions.",
    },
  },
  "solar-tower": {
    id: "solar-tower",
    badge: "Mobile Power",
    category: "MOBILE POWER",
    href: "/products/solar-tower",
    name: "Mobile Solar Tower",
    tagline: "High-Visibility Light Anywhere",
    description:
      "A rugged, mobile lighting tower for construction, emergencies, and events. Featuring telescopic masts and powerful LED floodlights with zero noise or fuel costs.",
    features: [
      "Telescopic 7m Mast",
      "High-Output Floodlights",
      "Zero Emissions / Silent",
      "Trailer-Mounted Portability",
      "LCD Monitoring System",
    ],
    image: "/images/NOMO pictures/pictures/solar tower/cb717328e6d2daa15dcca3c9d208afc.jpg",
    images: [
      "/images/NOMO pictures/pictures/solar tower/cb717328e6d2daa15dcca3c9d208afc.jpg",
      "/images/NOMO pictures/pictures/solar tower/bef094a21f60ed6bdf630f081a497c2.jpg",
    ],
    stat: { value: "3 - 7 m", label: "Telescopic Mast" },
    parametersTitle: "Rigid Specifications",
    parametersSubtitle: "Engineered for mission-critical lighting.",
    parameters: [
      { icon: "zap", name: "PV Power", range: "80W x 2 Monocrystalline" },
      { icon: "battery", name: "Battery Capacity", range: "Up to 1100WH" },
      { icon: "sun", name: "LED Power", range: "2 x 100W Floodlights" },
      { icon: "settings", name: "Mast Height", range: "3m to 7m adjustable" },
      { icon: "thermometer", name: "LED Life", range: "50,000+ Hours" },
      { icon: "shield", name: "Chassis", range: "Galvanized Steel" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Rapid Deployment",
      subtitle: "Operational in minutes, regardless of the terrain.",
      steps: [
        {
          icon: "map-pin",
          title: "Deploy",
          step: 1,
          description: "Tow the unit to the site and stabilize with built-in outriggers.",
        },
        {
          icon: "settings",
          title: "Raise",
          step: 2,
          description: "Extend the telescopic mast manually or via hydraulic controls to desired height.",
        },
        {
          icon: "sun",
          title: "Illuminate",
          step: 3,
          description: "Adjust the floodlight heads to provide optimal area coverage.",
        },
        {
          icon: "cloud",
          title: "Monitor",
          step: 4,
          description: "Use the LCD screen to track battery levels and charge rates.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Tower",
      description: "The superior alternative to diesel lighting.",
      features: [
        "No fuel costs or refueling trips",
        "Silent operation for urban areas",
        "Low maintenance compared to generators",
        "Fast 360° light head adjustment",
        "AC grid charging option available",
        "Weatherproof and wind-resistant",
        "Eco-friendly for 'green' sites",
        "Easy-to-use control interface",
      ],
    },
    whoItsFor: {
      title: "Professional Sectors",
      subtitle: "Reliable power for temporary needs.",
      sectors: [
        {
          icon: "factory",
          title: "Construction",
          description: "Night work illumination for busy sites with zero noise pollution.",
          tags: ["Infra Projects", "Buildings"],
        },
        {
          icon: "map-pin",
          title: "Event Management",
          description: "Lighting for outdoor festivals, stalls, and parking areas.",
          tags: ["Concerts", "Festivals"],
        },
        {
          icon: "shield",
          title: "Emergency Response",
          description: "Rapid lighting for disaster relief and rescue operations.",
          tags: ["First Responders", "Relief"],
        },
        {
          icon: "building",
          title: "Public Works",
          description: "Temporary lighting for road repairs and maintenance.",
          tags: ["Municipalities", "Utilities"],
        },
      ],
    },
    testimonials: {
      title: "Field Reports",
      items: [
        {
          quote: "We saved thousands on diesel in just one month. The silence is a huge plus for night work.",
          role: "Site Foreman",
          organization: "City Construction Co.",
        },
        {
          quote: "The tower survived a massive storm and kept working. Very sturdy and reliable.",
          role: "Event Director",
          organization: "Open Air Music Fest",
        },
        {
          quote: "So much easier to move around than our old diesel units. Zero mess, zero smell.",
          role: "Project Lead",
          organization: "County Public Works",
        },
      ],
    },
    deploymentSupport: {
      title: "Operational Support",
      description: "Keeping your site bright 24/7.",
      features: [
        "Lease and purchase options",
        "User training and safety certs",
        "Periodic maintenance checkups",
        "Fast-response repair teams",
        "Fleet management software",
      ],
      formTitle: "Get a Rental Quote",
      formSubtitle: "Need a tower for your next project? Get in touch.",
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
    badge: "5G & IoT Nexus",
    category: "CITY INFRASTRUCTURE",
    href: "/products/smart-pole",
    name: "Smart Solar Pole",
    tagline: "The Backbone of Smart City Infra",
    description:
      "A multifunctional urban nexus that combines high-efficiency lighting with 5G connectivity, AI surveillance, environmental sensors, and EV charging.",
    features: [
      "5G Micro-Base Station",
      "AI CCTV Surveillance",
      "SOS Emergency Button",
      "EV / Device Charging",
      "Environmental Monitoring",
    ],
    image: "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart Solar Pole_M.jpg",
    images: [
      "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart Solar Pole_M.jpg",
      "/images/NOMO pictures/pictures/smart pole/智慧灯杆白底图/Smart Solar Pole_D01.jpg",
    ],
    stat: { value: "60%", label: "Energy Savings" },
    parametersTitle: "Integrated Capabilities",
    parametersSubtitle: "Multiple 5G/IoT solutions in one sleek pole.",
    parameters: [
      { icon: "zap", name: "Lighting", range: "Adaptive LED 250LM/W" },
      { icon: "monitor", name: "CCTV", range: "AI Face & Traffic Analysis" },
      { icon: "wifi", name: "Wireless", range: "5G + WiFi Hotspot" },
      { icon: "shield", name: "Emergency", range: "SOS Intercom / Speaker" },
      { icon: "droplets", name: "Sensors", range: "PM2.5 / Noise / Weather" },
      { icon: "battery", name: "Charging", range: "EV Charger / USB Ports" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "Urban Intelligence",
      subtitle: "Coordinating city-wide services effortlessly.",
      steps: [
        {
          icon: "sun",
          title: "Sustain",
          step: 1,
          description: "Wrap-around solar panels provide clean power for core functions.",
        },
        {
          icon: "activity",
          title: "Sense",
          step: 2,
          description: "Sensors continuously monitor air quality, traffic, and noise levels.",
        },
        {
          icon: "cloud",
          title: "Sync",
          step: 3,
          description: "AI platform processes camera feeds for real-time security and traffic management.",
        },
        {
          icon: "smartphone",
          title: "Serve",
          step: 4,
          description: "Citizens access WiFi, charging, and emergency services directly at the pole.",
        },
      ],
    },
    whysolar: {
      title: "Why Choose Our Smart Pole",
      description: "Optimizing city management and citizen experience.",
      features: [
        "Reduces urban clutter by consolidating tech",
        "Autonomous lighting saves 60% energy",
        "Real-time fault detection and alerts",
        "Heat map generation for traffic flow",
        "Future-proof 5G infrastructure ready",
        "Vandal-proof SOS emergency button",
        "Customizable touchscreen for public info",
        "Durable, aesthetic architectural design",
      ],
    },
    whoItsFor: {
      title: "Smart Urban Planning",
      subtitle: "The choice for forward-thinking cities.",
      sectors: [
        {
          icon: "building",
          title: "Smart Cities",
          description: "Unified infrastructure for connectivity and safety.",
          tags: ["Municipalities", "Planning"],
        },
        {
          icon: "map-pin",
          title: "High-Traffic Districts",
          description: "Shopping streets and tourist hubs with high WiFi demand.",
          tags: ["Retail", "Tourism"],
        },
        {
          icon: "shield",
          title: "Public Safety",
          description: "Enhanced surveillance and emergency response for plazas.",
          tags: ["Police", "Emergency"],
        },
        {
          icon: "factory",
          title: "Transportation Hubs",
          description: "Integrated charging and info for bus and rail stations.",
          tags: ["Transit", "Loigistics"],
        },
      ],
    },
    testimonials: {
      title: "Global Projects",
      items: [
        {
          quote: "The Smart Pole halved our deployment time for 5G and security cameras.",
          role: "Chief Technology Officer",
          organization: "Smart City London",
        },
        {
          quote: "Citizens love the free WiFi and charging. It has made the plaza a true community hub.",
          role: "Urban Designer",
          organization: "City of Barcelona",
        },
        {
          quote: "Environmental data from the poles allows us to take proactive measures against smog.",
          role: "Director of Health",
          organization: "Beijing Municipal Gov.",
        },
      ],
    },
    deploymentSupport: {
      title: "Project Delivery",
      description: "Partnering with you for a smarter tomorrow.",
      features: [
        "Network planning and site surveys",
        "Hardware and software integration",
        "AI cloud platform setup",
        "Ongoing security monitoring",
        "Remote maintenance and updates",
      ],
      formTitle: "Plan Your Smart City",
      formSubtitle: "Let's build a smarter, safer community together.",
    },
  },
};
