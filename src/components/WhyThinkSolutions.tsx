import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type WhyThinkSolutionsProps = {
  copy: (typeof translations)["en"];
};

export function WhyThinkSolutions({ copy }: WhyThinkSolutionsProps) {
  return (
    <section className="section">
      <SectionHeading eyebrow={copy.why.eyebrow} title={copy.why.title} />
      <div className="why-grid">
        {copy.why.points.map((point) => (
          <motion.article
            className="why-item"
            key={point.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <CheckCircle2 size={20} aria-hidden="true" />
            <div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
