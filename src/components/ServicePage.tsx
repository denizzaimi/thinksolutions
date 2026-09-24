import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ServiceId } from "../data/services";
import { serviceDetails } from "../data/Servicedetails";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";

type ServicePageProps = {
  serviceId: ServiceId;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function ServicePage({ serviceId, language, onLanguageChange }: ServicePageProps) {
  const copy = translations[language];
  const detail = serviceDetails[language][serviceId];
  const serviceCopy = copy.services.items[serviceId];
  const reducedMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState(0);

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
        <section className="section service-page__benefits">
          <div className="service-page__benefits-inner">
            <div className="service-page__benefits-intro">
              <h2>{serviceCopy.title}: {copy.servicePage.benefits}</h2>
              <p>{copy.servicePage.benefitsIntro}</p>
            </div>
            <div className="service-page__benefits-grid">
              {detail.benefits.map((benefit, index) => (
                <motion.article
                  className={`benefit-card benefit-card--${index % 2 === 0 ? "top" : "bottom"}`}
                  key={benefit}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={reducedMotion ? undefined : { y: -10, scale: 1.02 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: reducedMotion ? 0 : index * 0.06, ease: "easeOut" }}
                >
                  <h3>{copy.servicePage.benefitTitles[index]}</h3>
                  <p>{benefit}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section service-page__faq">
          <h2 className="service-page__heading">{copy.servicePage.faqTitle}</h2>
          <div className="faq-list">
            {detail.capabilities.map((capability, index) => {
              const isOpen = openFaq === index;

              return (
                <div className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={capability.title}>
                  <button
                    className="faq-item__question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{index + 1}. {capability.title}</span>
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <motion.p
                      className="faq-item__answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: reducedMotion ? 0 : 0.2 }}
                    >
                        {capability.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="section service-page__section">
          <h2 className="service-page__heading">{copy.servicePage.tools}</h2>
          <div className="tool-badges">
            {detail.tools.map((tool) => (
              <span className="tool-badge" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="section service-page__cta">
          <h2>{detail.ctaTitle}</h2>
          <p>{detail.ctaBody}</p>
          <div className="service-page__cta-actions">
            <a className="button button--primary" href="#contact">
              {copy.nav.contact}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="/#services">
              {copy.nav.services}
            </a>
          </div>
        </section>

        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
