import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

type HeroProps = {
  copy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    servicesCta: string;
    contactCta: string;
    brandLine: string;
  };
};

export function Hero({ copy }: HeroProps) {
  const reducedMotion = useReducedMotion();
  const fadeUp = {
    hidden: { opacity: 1, y: reducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero" id="home">
      <motion.div
        className="hero__content"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reducedMotion ? 0 : 0.1 }}
      >
        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="hero__eyebrow">
          {copy.eyebrow}
        </motion.p>
        <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }}>
          {copy.title}
        </motion.h1>
        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="hero__subtitle">
          {copy.subtitle}
        </motion.p>
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="hero__actions">
          <a className="button button--primary" href="#services">
            {copy.servicesCta}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#contact">
            {copy.contactCta}
          </a>
        </motion.div>
        <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="hero__brand-line">
          {copy.brandLine}
        </motion.p>
      </motion.div>
    </section>
  );
}