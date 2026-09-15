import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { ServiceId } from "../data/services";
import { serviceDetails } from "../data/Servicedetails";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";

type ServicePageProps = {
  serviceId: ServiceId;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function ServicePage({ serviceId, language, onLanguageChange }: ServicePageProps) {
  const copy = translations[language];
  const detail = serviceDetails[serviceId];
  const serviceCopy = copy.services.items[serviceId];
  const reducedMotion = useReducedMotion();

  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={onLanguageChange}
        copy={{
          nav: copy.nav,
          common: {
            language: copy.common.language,
            menu: copy.common.menu,
            closeMenu: copy.common.closeMenu,
          },
        }}
      />
      <main className="service-page">
        <PageHeader
          eyebrow={copy.services.eyebrow}
          title={serviceCopy.title}
          intro={detail.tagline}
          className="page-header--centered"
        />

        <section className="section service-page__section">
          <p className="service-page__lead">{detail.intro}</p>
        </section>

        <section className="section service-page__section">
          <h2 className="service-page__heading">What Think Solutions provides</h2>
          <div className="provides-grid">
            {detail.provides.map((item) => (
              <motion.div
                className="provides-grid__item"
                key={item}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
              >
                <Check size={18} aria-hidden="true" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section section--tinted service-page__section">
          <h2 className="service-page__heading">Main capabilities</h2>
          <div className="capability-grid">
            {detail.capabilities.map((capability, index) => (
              <motion.article
                className="capability-card"
                key={capability.title}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: reducedMotion ? 0 : index * 0.05 }}
              >
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section service-page__section">
          <h2 className="service-page__heading">Technologies &amp; tools</h2>
          <div className="tool-badges">
            {detail.tools.map((tool) => (
              <span className="tool-badge" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="section section--dark service-page__section">
          <h2 className="service-page__heading service-page__heading--light">Why it matters for your business</h2>
          <div className="benefit-grid">
            {detail.benefits.map((benefit) => (
              <div className="benefit-grid__item" key={benefit}>
                <span className="benefit-grid__marker" aria-hidden="true" />
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section service-page__cta">
          <h2>{detail.ctaTitle}</h2>
          <p>{detail.ctaBody}</p>
          <div className="service-page__cta-actions">
            <a className="button button--primary" href="/#contact">
              {copy.nav.contact}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="/#services">
              {copy.nav.services}
            </a>
          </div>
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}
