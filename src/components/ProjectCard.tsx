import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/Work";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ProjectCardProps = {
  project: Project;
  viewProjectLabel: string;
};

export function ProjectCard({ project, viewProjectLabel }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const isSocialMediaProject = project.slug === "social-media-management";

  return (
    <motion.a
      href={`/our-work/${project.slug}`}
      className="project-card"
      initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className={isSocialMediaProject ? "project-card__media project-card__media--social" : "project-card__media"}>
        {isSocialMediaProject && project.images ? (
          <div className="project-card__social-grid" aria-label="Managed social media accounts">
            {project.images.map((image, index) => (
              <img key={image} src={image} alt="" aria-hidden="true" style={{ objectPosition: `center ${index < 2 ? "18%" : "22%"}` }} />
            ))}
          </div>
        ) : project.thumbnail ? (
          <img src={project.thumbnail} alt={`${project.name} logo`} />
        ) : (
          <span className="project-card__initials" aria-hidden="true">TS</span>
        )}
      </div>
      <div className="project-card__body">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <span className="project-card__link">
          {viewProjectLabel}
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </motion.a>
  );
}
