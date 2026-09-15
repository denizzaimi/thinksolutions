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

// No projects yet. Add real, completed Think Solutions projects here as
// they become available — nothing fake or placeholder should go in this
// array. Example shape once you have real project details:
//
// {
//   id: "example-client",
//   name: "Example Client Website",
//   category: "Web Design",
//   description: "A short, honest description of what was built and why.",
//   servicesProvided: ["Web Design", "UI/UX & Graphic Design"],
//   technologies: ["React", "TypeScript"],
//   thumbnail: "/work/example-client.png",
//   url: "https://example-client.com",
// }
export const projects: Project[] = [];