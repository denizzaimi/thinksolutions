import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/Work";
import { useReducedMotion } from "../hooks/useReducedMotion";

type ProjectCardProps = {
  project: Project;
  viewProjectLabel: string;
  onOpen: () => void;
};

export function ProjectCard({ project, viewProjectLabel, onOpen }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const initials = project.name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <motion.article
      className="project-card"
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <div className="project-card__media">
        {project.thumbnail ? (
          <img src={project.thumbnail} alt="" />
        ) : (
          <span className="project-card__initials" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        {project.servicesProvided.length > 0 ? (
          <div className="tool-badges tool-badges--compact">
            {project.servicesProvided.map((service) => (
              <span className="tool-badge" key={service}>
                {service}
              </span>
            ))}
          </div>
        ) : null}

        <span className="project-card__link">
          {viewProjectLabel}
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </motion.article>
  );
}
