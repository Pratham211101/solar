import { HowItWorksStep } from "@/components/product/ProductHowItWorks";
import { WhoItsForSector } from "@/components/product/ProductWhoItsFor";
import { TestimonialItem } from "@/components/product/ProductTestimonials";

export interface ProductParameter {
  icon: string;
  name: string;
  range: string;
}

export interface ProductData {
  id: string;
  badge: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  stat: { value: string; label: string };
  parametersTitle?: string;
  parametersSubtitle?: string;
  parameters?: ProductParameter[];
  brochureLink?: string;
  howItWorks?: {
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
  };
  whoItsFor?: {
    title: string;
    subtitle: string;
    sectors: WhoItsForSector[];
  };
  testimonials?: {
    title: string;
    items: TestimonialItem[];
  };
  deploymentSupport?: {
    title: string;
    description: string;
    features: string[];
    formTitle: string;
    formSubtitle: string;
  };
}

export const productsData: Record<string, ProductData> = {
  "cluix-c012": {
    id: "cluix-c012",
    badge: "Trusted by Government & Enterprise",
    name: "C012 Handheld Water Quality Analyzer",
    tagline: "Lab-grade testing in your pocket",
    description: "Lab-grade accuracy meets field-ready ruggedness. Test 12+ water quality parameters in under 2 minutes, anywhere.",
    features: ["12+ Parameters", "< 2 min testing", "IP65 rated", "Cloud sync", "GPS tagging"],
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    stat: { value: "15+", label: "States" },
    parametersTitle: "12+ parameters, one device",
    parametersSubtitle: "Comprehensive water quality profiling with the C012 handheld analyzer.",
    parameters: [
      { icon: "droplets", name: "pH", range: "0–14" },
      { icon: "thermometer", name: "Temperature", range: "0–100°C" },
      { icon: "flask", name: "TDS", range: "0–50,000 ppm" },
      { icon: "zap", name: "Conductivity", range: "0–200 mS/cm" },
      { icon: "waves", name: "Turbidity", range: "0–4000 NTU" },
      { icon: "activity", name: "ORP", range: "±2000 mV" },
      { icon: "wind", name: "DO", range: "0–20 mg/L" },
      { icon: "beaker", name: "Chlorine", range: "0–10 mg/L" },
      { icon: "test-tube", name: "Hardness", range: "0–750 mg/L" },
      { icon: "leaf", name: "Nitrate", range: "0–100 mg/L" },
      { icon: "circle", name: "Iron", range: "0–10 mg/L" },
      { icon: "snowflake", name: "Fluoride", range: "0–10 mg/L" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "How it works",
      subtitle: "From sample to decision in four simple steps.",
      steps: [
        {
          icon: "flask",
          step: 1,
          title: "Sample",
          description: "Collect water sample at source point—tap, borewell, treatment plant, or discharge.",
        },
        {
          icon: "zap",
          step: 2,
          title: "Test",
          description: "Insert C012 probes. Get lab-grade readings for 12+ parameters in under 2 minutes.",
        },
        {
          icon: "cloud",
          step: 3,
          title: "Sync",
          description: "Data auto-syncs to cloud dashboard. GPS-tagged, timestamped, traceable.",
        },
        {
          icon: "file-check",
          step: 4,
          title: "Decide",
          description: "View trends, get alerts, generate compliance reports. Take action with confidence.",
        },
      ],
    },
    whoItsFor: {
      title: "Who it's for",
      subtitle: "Trusted across sectors where water quality decisions matter.",
      sectors: [
        {
          icon: "building",
          title: "Government Utilities",
          description: "PHED, ULBs, Jal Nigam—ensuring drinking water quality compliance at scale.",
          tags: ["Jal Jeevan Mission", "State Water Boards"],
        },
        {
          icon: "factory",
          title: "Industries",
          description: "ETP/STP monitoring, discharge compliance, and environmental reporting.",
          tags: ["Manufacturing", "Pharmaceuticals", "Textiles"],
        },
        {
          icon: "flask",
          title: "Labs & Institutions",
          description: "Field testing capability for research, quality control, and training.",
          tags: ["Universities", "NABL Labs", "R&D Centers"],
        },
        {
          icon: "heart",
          title: "NGOs & CSR",
          description: "Community water quality programs with data-backed impact measurement.",
          tags: ["WASH Programs", "CSR Initiatives"],
        },
      ],
    },
    testimonials: {
      title: "What our users say",
      items: [
        {
          quote: "Cluix has transformed how we monitor water quality across 200+ villages. The data is reliable and the dashboard makes reporting effortless.",
          role: "District Project Manager",
          organization: "Jal Jeevan Mission, Rajasthan",
        },
        {
          quote: "The accuracy matches our lab instruments, but we can now test at source. It's a game-changer for our compliance monitoring.",
          role: "Environmental Officer",
          organization: "Pharmaceutical Company, Gujarat",
        },
        {
          quote: "Finally, a device that works in Indian field conditions. Rugged, fast, and the support team is excellent.",
          role: "Program Lead",
          organization: "WASH NGO, Bihar",
        },
      ],
    },
    deploymentSupport: {
      title: "Deployment & Support",
      description: "We provide end-to-end deployment support including device setup, calibration, user training, and ongoing technical assistance. Our team ensures you get maximum value from your C012 investment.",
      features: [
        "On-site or remote training (2-4 hours)",
        "Initial calibration and validation",
        "Dashboard setup and user provisioning",
        "Annual maintenance contracts (AMC) available",
        "Priority support via phone and email",
      ],
      formTitle: "Get a Quote",
      formSubtitle: "Interested in C012 Handheld Analyzer? Fill out the form and our team will get back to you.",
    },
  },
  "ocems": {
    id: "ocems",
    badge: "CPCB Compliant",
    name: "Online Monitoring System (OCEMS)",
    tagline: "24/7 compliance monitoring",
    description: "Continuous effluent monitoring system for STP/ETP compliance with real-time alerts and automated reporting.",
    features: ["CPCB Compliant", "Real-time alerts", "Remote access", "Auto-reporting", "24/7 monitoring"],
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    stat: { value: "100+", label: "Installations" },
    parametersTitle: "Complete compliance monitoring",
    parametersSubtitle: "All parameters required for regulatory compliance in one integrated system.",
    parameters: [
      { icon: "droplets", name: "pH", range: "0–14" },
      { icon: "thermometer", name: "Temperature", range: "0–100°C" },
      { icon: "flask", name: "TSS", range: "0–1000 mg/L" },
      { icon: "zap", name: "COD", range: "0–500 mg/L" },
      { icon: "waves", name: "BOD", range: "0–100 mg/L" },
      { icon: "activity", name: "Flow", range: "Variable" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "How it works",
      subtitle: "Continuous monitoring with automated compliance reporting.",
      steps: [
        {
          icon: "flask",
          step: 1,
          title: "Install",
          description: "Sensors installed at discharge point with automated sampling system.",
        },
        {
          icon: "zap",
          step: 2,
          title: "Monitor",
          description: "Continuous 24/7 monitoring of all CPCB-mandated parameters.",
        },
        {
          icon: "cloud",
          step: 3,
          title: "Transmit",
          description: "Real-time data transmission to CPCB/SPCB servers and your dashboard.",
        },
        {
          icon: "file-check",
          step: 4,
          title: "Report",
          description: "Automated compliance reports, alerts, and trend analysis.",
        },
      ],
    },
    whoItsFor: {
      title: "Who it's for",
      subtitle: "For industries requiring continuous effluent monitoring.",
      sectors: [
        {
          icon: "factory",
          title: "Manufacturing",
          description: "Steel, cement, paper mills requiring CPCB compliance.",
          tags: ["Heavy Industry", "Process Plants"],
        },
        {
          icon: "building",
          title: "Pharmaceuticals",
          description: "API manufacturers with strict discharge norms.",
          tags: ["API Plants", "Formulation Units"],
        },
        {
          icon: "flask",
          title: "Textiles",
          description: "Dyeing and processing units with effluent treatment.",
          tags: ["Dyeing Units", "Processing Mills"],
        },
        {
          icon: "heart",
          title: "Food & Beverage",
          description: "Dairy, breweries, and food processing facilities.",
          tags: ["Dairy", "Beverages", "Food Processing"],
        },
      ],
    },
    testimonials: {
      title: "What our users say",
      items: [
        {
          quote: "OCEMS installation was seamless. We're now fully compliant and the automated reporting saves us hours every month.",
          role: "Plant Manager",
          organization: "Textile Mill, Tamil Nadu",
        },
        {
          quote: "Real-time alerts help us catch issues before they become violations. Excellent support from the Cluix team.",
          role: "Environment Head",
          organization: "Steel Plant, Odisha",
        },
        {
          quote: "The dashboard is intuitive and SPCB integration works flawlessly. Highly recommend for any industry.",
          role: "Compliance Manager",
          organization: "Pharma Company, Maharashtra",
        },
      ],
    },
    deploymentSupport: {
      title: "Deployment & Support",
      description: "Complete turnkey installation including sensors, analyzers, data logger, and CPCB/SPCB integration. Our team handles everything from site survey to commissioning.",
      features: [
        "Site survey and system design",
        "Complete hardware installation",
        "CPCB/SPCB server integration",
        "Operator training and certification",
        "Annual maintenance contracts (AMC)",
      ],
      formTitle: "Get a Quote",
      formSubtitle: "Need OCEMS for your facility? Fill out the form and our team will get back to you.",
    },
  },
  "varunaa": {
    id: "varunaa",
    badge: "IoT Enabled",
    name: "Varunaa Water Level Monitor",
    tagline: "Smart groundwater management",
    description: "IoT-enabled water level monitoring for borewells and tanks with predictive analytics and trend analysis.",
    features: ["Solar powered", "LoRa enabled", "Trend analysis", "Low maintenance", "Remote alerts"],
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    stat: { value: "500+", label: "Deployments" },
    parametersTitle: "Smart monitoring capabilities",
    parametersSubtitle: "Advanced sensors and analytics for comprehensive water level management.",
    parameters: [
      { icon: "waves", name: "Water Level", range: "0–50m" },
      { icon: "thermometer", name: "Temperature", range: "-10–60°C" },
      { icon: "activity", name: "Flow Rate", range: "Variable" },
      { icon: "zap", name: "Battery", range: "Solar + Backup" },
    ],
    brochureLink: "#",
    howItWorks: {
      title: "How it works",
      subtitle: "Automated groundwater monitoring with zero manual intervention.",
      steps: [
        {
          icon: "flask",
          step: 1,
          title: "Install",
          description: "Mount sensor unit on borewell or tank. Solar-powered, no wiring needed.",
        },
        {
          icon: "zap",
          step: 2,
          title: "Measure",
          description: "Continuous water level measurement with configurable intervals.",
        },
        {
          icon: "cloud",
          step: 3,
          title: "Transmit",
          description: "LoRa/GSM transmission to cloud. Works even in remote areas.",
        },
        {
          icon: "file-check",
          step: 4,
          title: "Analyze",
          description: "View trends, set alerts, predict shortages before they happen.",
        },
      ],
    },
    whoItsFor: {
      title: "Who it's for",
      subtitle: "For anyone managing groundwater resources.",
      sectors: [
        {
          icon: "building",
          title: "Government",
          description: "CGWB, State groundwater departments for aquifer monitoring.",
          tags: ["CGWB", "State Departments"],
        },
        {
          icon: "factory",
          title: "Agriculture",
          description: "Farmers and agri-businesses tracking irrigation sources.",
          tags: ["Farms", "Irrigation Projects"],
        },
        {
          icon: "flask",
          title: "Industries",
          description: "Factories monitoring groundwater usage and compliance.",
          tags: ["Manufacturing", "Process Industries"],
        },
        {
          icon: "heart",
          title: "Housing Societies",
          description: "Residential complexes managing tank and borewell levels.",
          tags: ["Apartments", "Townships"],
        },
      ],
    },
    testimonials: {
      title: "What our users say",
      items: [
        {
          quote: "We monitor 50+ borewells across the district. Varunaa has made groundwater management truly data-driven.",
          role: "District Geologist",
          organization: "CGWB, Karnataka",
        },
        {
          quote: "The solar power and LoRa connectivity work perfectly in our remote farm. No maintenance for 2 years now.",
          role: "Farm Owner",
          organization: "Agriculture Estate, Punjab",
        },
        {
          quote: "Predictive alerts saved us from a water crisis. We now plan our water usage based on actual data.",
          role: "Facility Manager",
          organization: "IT Park, Hyderabad",
        },
      ],
    },
    deploymentSupport: {
      title: "Deployment & Support",
      description: "Quick installation with minimal site preparation. Solar-powered units require no external power. Our network covers most of India for LoRa/GSM connectivity.",
      features: [
        "Quick installation (under 2 hours)",
        "Solar powered, no external power needed",
        "LoRa/GSM connectivity options",
        "Dashboard setup and training",
        "Remote monitoring and diagnostics",
      ],
      formTitle: "Get a Quote",
      formSubtitle: "Interested in Varunaa for groundwater monitoring? Fill out the form and our team will get back to you.",
    },
  },
  "reagent-kit": {
    id: "reagent-kit",
    badge: "High Quality",
    name: "Reagent Kits",
    tagline: "Consumables for C012",
    description: "High-quality reagents for accurate colorimetric testing. Available for all parameters with long shelf life.",
    features: ["Long shelf life", "Field-ready", "Bulk available", "Quality assured", "Easy storage"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stat: { value: "50+", label: "Parameters" },
    brochureLink: "#",
  },
};
