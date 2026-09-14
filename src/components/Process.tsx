import { motion } from "framer-motion";
import type { translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type ProcessProps = {
  copy: (typeof translations)["en"];
};

export function Process({ copy }: ProcessProps) {
  return (
    <section className="section section--dark">
      <SectionHeading eyebrow={copy.process.eyebrow} title={copy.process.title} align="center" />
      <div className="process">
        {copy.process.steps.map((step, index) => (
          <motion.article
            className="process__step"
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
