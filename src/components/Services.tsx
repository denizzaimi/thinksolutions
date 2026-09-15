import { motion } from "framer-motion";
import { services } from "../data/services";
import type { translations } from "../data/translations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

type ServicesProps = {
  copy: (typeof translations)["en"];
};

export function Services({ copy }: ServicesProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section" id="services">
      <SectionHeading
        eyebrow={copy.services.eyebrow}
        title={copy.services.title}
        intro={copy.services.intro}
        align="center"
      />
      <motion.div
        className="service-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.08 } },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.45 }}
          >
            <ServiceCard
              service={service}
              title={copy.services.items[service.id].title}
              description={copy.services.items[service.id].description}
              cta={copy.common.learnMore}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}