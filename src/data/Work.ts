export type Project = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category?: string;
  tagline?: string;
  servicesProvided: string[];
  technologies?: string[];
  thumbnail?: string;
  heroImage?: string;
  images?: string[];
  year?: string;
  url?: string;
};

export const projects: Project[] = [
  {
    id: "drite-guide",
    slug: "drite-guide",
    name: "Dritë Guide",
    description: "A mobile travel guide designed to help people explore Albania with less effort and more confidence.",
    tagline: "A digital travel guide built to make discovering Albania easier.",
    servicesProvided: ["Product Design", "Mobile App Development", "Backend Development"],
    technologies: ["React Native", "Expo", "Python", "FastAPI", "PostgreSQL", "Supabase"],
    year: "2023",
    thumbnail: "/drite/image1.jpeg",
    heroImage: "/drite/drite0.jpeg",
    images: [
      "/drite/drite0.jpeg",
      "/drite/drite1.jpeg",
      "/drite/drite2.jpeg",
      "/drite/drite3.jpeg",
      "/drite/drite4.jpeg",
    ],
  },
  {
    id: "social-media-management",
    slug: "social-media-management",
    name: "Social Media Management",
    description: "Growing distinct audiences through focused content for automotive, travel, and football communities.",
    tagline: "Four niche pages. One thoughtful content strategy.",
    servicesProvided: ["Content Strategy", "Content Creation", "Community Management"],
    technologies: ["Instagram", "Content Planning", "Audience Insights"],
    thumbnail: "/social/petro.jpeg",
    heroImage: "/social/petro.jpeg",
    images: ["/social/petro.jpeg", "/social/moto.jpeg", "/social/drite.jpeg", "/social/pure.jpeg"],
  },
  {
    id: "superstore-sales-dashboard",
    slug: "superstore-sales-dashboard",
    name: "Superstore Sales Dashboard",
    category: "Data Solutions",
    description: "An interactive Power BI dashboard for exploring Superstore sales, profit, discounts, and customer records.",
    tagline: "Turning Superstore order data into an interactive view of sales and profitability.",
    servicesProvided: ["Data Analysis", "Power BI Dashboard", "Data Visualization"],
    technologies: ["Microsoft Excel", "Power BI"],
    thumbnail: "/data-solutions/superstore-cover.svg",
    heroImage: "/data-solutions/superstore-dashboard.png",
    images: [
      "/data-solutions/superstore-dashboard.png",
      "/data-solutions/superstore-state-filter.png",
      "/data-solutions/superstore-customer-filter.png",
      "/data-solutions/superstore-excel-data.png",
    ],
  },
];
