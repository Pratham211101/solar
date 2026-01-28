import { Droplets, Thermometer, FlaskConical, Zap, Waves, Activity, Wind, Beaker, TestTube, Leaf, Circle, Snowflake } from "lucide-react";

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
