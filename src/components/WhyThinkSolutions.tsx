import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import type { Language, translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type WhyThinkSolutionsProps = {
  copy: (typeof translations)[Language];
};

const BLOOM_COLORS = ["#d7e9e2", "#f0deaf", "#d9d0eb"];

export function WhyThinkSolutions({ copy }: WhyThinkSolutionsProps) {
  return (
    <section className="section">
      <SectionHeading eyebrow={copy.why.eyebrow} title={copy.why.title} />

      <div className="why-grid">
        {copy.why.points.map((point, index) => (
          <motion.article
            className="why-item"
            key={point.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
            style={{
              background: `linear-gradient(180deg, ${BLOOM_COLORS[index % BLOOM_COLORS.length]} 0%, rgba(255,255,255,0.7) 100%)`,
            }}
          >
            <div className="why-item__badge" aria-hidden="true">
              <CheckCircle2 size={18} />
            </div>

            <div className="why-item__content">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
