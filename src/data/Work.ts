export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  servicesProvided: string[];
  technologies?: string[];
  thumbnail?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "harbor-table",
    name: "Harbor Table Restaurant",
    category: "Website Template",
    description: "A warm restaurant website concept with menu discovery, reservations and a strong local brand presence.",
    servicesProvided: ["Web Design", "UI/UX & Graphic Design"],
    technologies: ["React", "TypeScript"],
    thumbnail:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "northline-builders",
    name: "Northline Builders",
    category: "Website Template",
    description: "A confident construction website concept built to showcase completed work, services and quote requests.",
    servicesProvided: ["Web Design", "Business Support"],
    technologies: ["React", "Responsive Design"],
    thumbnail:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "form-and-found",
    name: "Form & Found Store",
    category: "Website Template",
    description: "A clean online store concept for a design-led product brand, with focused product browsing and conversion paths.",
    servicesProvided: ["Web Design", "UI/UX & Graphic Design"],
    technologies: ["React", "E-commerce UX"],
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "pulse-power-bi",
    name: "Pulse Power BI Dashboard",
    category: "Data Solutions",
    description: "A Power BI reporting concept that turns sales, customer and performance data into a clear decision-making view.",
    servicesProvided: ["Data Solutions", "Business Support"],
    technologies: ["Power BI", "Excel", "Data Analysis"],
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "luma-social-launch",
    name: "Luma Social Launch",
    category: "Social Media Marketing",
    description: "A social media marketing concept with a visual content direction, campaign planning and consistent brand storytelling.",
    servicesProvided: ["Social Media Management", "UI/UX & Graphic Design"],
    technologies: ["Canva", "Content Strategy", "Instagram"],
    thumbnail:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
  },
];