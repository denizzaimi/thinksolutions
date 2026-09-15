import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  backHref?: string;
  backLabel?: string;
};

export function PageHeader({ eyebrow, title, intro, backHref, backLabel }: PageHeaderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className="page-header"
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
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </div>
    </motion.section>
  );
}
