export type ServiceId =
  | "webDesign"
  | "socialMedia"
  | "dataSolutions"
  | "uiUxGraphic"
  | "businessSupport";

export type Service = {
  id: ServiceId;
  icon: "monitor" | "megaphone" | "barChart" | "palette" | "briefcase";
  keywords: string[];
};

export const services: Service[] = [
  {
    id: "webDesign",
    icon: "monitor",
    keywords: ["website", "web design", "responsive", "interfaces", "landing page", "modern websites"],
  },
  {
    id: "socialMedia",
    icon: "megaphone",
    keywords: ["instagram", "facebook", "social media", "content strategy", "growth", "business presence"],
  },
  {
    id: "dataSolutions",
    icon: "barChart",
    keywords: [
      "power bi",
      "excel",
      "sql",
      "mysql",
      "looker studio",
      "dashboard",
      "data analysis",
      "business reporting",
    ],
  },
  {
    id: "uiUxGraphic",
    icon: "palette",
    keywords: ["figma", "canva", "ui", "ux", "ui/ux", "graphic design", "social media graphics", "business visuals"],
  },
  {
    id: "businessSupport",
    icon: "briefcase",
    keywords: ["digital business support", "processes", "practical digital solutions", "tailored solutions"],
  },
];
