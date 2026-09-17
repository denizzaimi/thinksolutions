import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
};

export function PageHeader({ eyebrow, title, intro, backHref, backLabel, className }: PageHeaderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className={`page-header${className ? ` ${className}` : ""}`}
      initial={{ opacity: 1, y: reducedMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header__inner">
        {backHref ? (
          <a className="page-header__back" href={backHref}>
            <ArrowLeft size={16} aria-hidden="true" />
            {backLabel}
          </a>
        ) : null}
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </div>
    </motion.section>
  );
}
