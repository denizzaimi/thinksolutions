export type ServiceId =
  | "webDesign"
  | "socialMedia"
  | "dataSolutions"
  | "uiUxGraphic"
  | "businessSupport";

export type Service = {
  id: ServiceId;
  slug: string;
  icon: "monitor" | "megaphone" | "barChart" | "palette" | "briefcase";
  keywords: string[];
};

export const services: Service[] = [
  {
    id: "webDesign",
    slug: "web-design",
    icon: "monitor",
    keywords: ["website", "web design", "responsive", "interfaces", "landing page", "modern websites"],
  },
  {
    id: "socialMedia",
    slug: "social-media",
    icon: "megaphone",
    keywords: ["instagram", "facebook", "social media", "content strategy", "growth", "business presence"],
  },
  {
    id: "dataSolutions",
    slug: "data-solutions",
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
    slug: "ui-ux-design",
    icon: "palette",
    keywords: ["figma", "canva", "ui", "ux", "ui/ux", "graphic design", "social media graphics", "business visuals"],
  },
  {
    id: "businessSupport",
    slug: "business-support",
    icon: "briefcase",
    keywords: ["digital business support", "processes", "practical digital solutions", "tailored solutions"],
  },
];