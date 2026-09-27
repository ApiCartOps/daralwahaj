import type { Service } from "@/types/service";

/**
 * Service photos are free-to-use stock photography from Unsplash
 * (https://unsplash.com/license — no attribution required), downloaded
 * into public/assets/photos/:
 *   dc    — unsplash.com/photos/photo-1584169417032-d34e8d805e8b
 *   cctv  — unsplash.com/photos/photo-1643123182527-3bd30840e7ed
 *   fiber — unsplash.com/photos/photo-1683322499436-f4383dd59f5a
 *   hvac  — unsplash.com/photos/photo-1630481721654-010b644f923d
 *   em    — unsplash.com/photos/photo-1615774925655-a0e97fc85c14
 *   clean — unsplash.com/photos/photo-1781637590564-01c65dbf2039
 */
export const SERVICES: Service[] = [
  {
    id: "dc",
    icon: "server",
    name: "Data Center Services",
    short: "Data Center",
    photo: "photos/dc.jpg",
    desc: "We provide technical support and infrastructure services for data center environments, with an emphasis on reliability, organization, safety, and operational continuity.",
    items: [
      "Data center infrastructure support",
      "Structured cabling",
      "Fibre optic infrastructure",
      "Rack and cabinet installation",
      "Cable management",
      "Equipment installation support",
      "Preventive maintenance",
      "Technical troubleshooting",
      "Infrastructure inspection and documentation",
    ],
  },
  {
    id: "cctv",
    icon: "cctv",
    name: "CCTV & Security Systems",
    short: "CCTV & Security",
    photo: "photos/cctv.jpg",
    desc: "DAW Tech Services provides CCTV and security infrastructure solutions designed to improve monitoring, security, and operational visibility.",
    items: [
      "CCTV installation",
      "IP camera systems",
      "Camera configuration",
      "NVR/DVR installation",
      "CCTV maintenance",
      "Troubleshooting and repairs",
      "System upgrades",
      "Cable installation and termination",
    ],
  },
  {
    id: "fiber",
    icon: "network",
    name: "Fibre Optic & Structured Cabling",
    short: "Fibre & Cabling",
    photo: "photos/fiber.jpg",
    desc: "We provide professional network infrastructure solutions for offices, commercial facilities, data centers, and other technical environments.",
    items: [
      "Fibre optic cable installation",
      "Fibre optic termination",
      "Fibre optic testing",
      "Fibre optic troubleshooting",
      "Cat6/Cat6A cabling",
      "Network point installation",
      "Patch panel installation",
      "Rack and cable management",
      "Cable labeling and documentation",
    ],
  },
  {
    id: "hvac",
    icon: "fan",
    name: "HVAC Services",
    short: "HVAC",
    photo: "photos/hvac.jpg",
    desc: "Our HVAC services support comfortable, efficient, and reliable building environments.",
    items: [
      "HVAC installation support",
      "Preventive maintenance",
      "Corrective maintenance",
      "AC servicing",
      "Troubleshooting",
      "Equipment inspection",
      "Ductwork-related services",
      "HVAC system support",
    ],
  },
  {
    id: "em",
    icon: "zap",
    name: "Electromechanical Services",
    short: "Electromechanical",
    photo: "photos/em.jpg",
    desc: "DAW Tech Services provides technical support for electrical and mechanical building systems.",
    items: [
      "Electrical maintenance",
      "Mechanical maintenance",
      "Equipment installation support",
      "Preventive maintenance",
      "Corrective maintenance",
      "Troubleshooting",
      "Building systems support",
      "Technical inspections",
    ],
  },
  {
    id: "clean",
    icon: "sparkles",
    name: "Cleaning Services",
    short: "Cleaning",
    photo: "photos/clean.jpg",
    desc: "We provide professional cleaning and facility-support services for commercial and other managed environments.",
    items: [
      "Office cleaning",
      "Commercial cleaning",
      "Building cleaning",
      "Common-area cleaning",
      "Deep cleaning",
      "Routine cleaning",
      "Facility supports services",
    ],
  },
];

export const N = SERVICES.length;

/** Zero-padded index label, e.g. pad(1) === "01". */
export const pad = (n: number) => String(n).padStart(2, "0");
