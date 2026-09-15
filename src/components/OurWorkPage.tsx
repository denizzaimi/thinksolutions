import { ArrowRight } from "lucide-react";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { projects } from "../data/work";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PageHeader } from "./PageHeader";
import { ProjectCard } from "./ProjectCard";

type OurWorkPageProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function OurWorkPage({ language, onLanguageChange }: OurWorkPageProps) {
  const copy = translations[language];

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
      <main className="our-work-page">
        <PageHeader
          eyebrow={copy.ourWork.eyebrow}
          title={copy.ourWork.title}
          intro={copy.ourWork.intro}
        />

        <section className="section">
          {projects.length > 0 ? (
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} viewProjectLabel={copy.ourWork.viewProject} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>{copy.ourWork.comingSoon}</p>
              <a className="button button--primary" href="/#contact">
                {copy.nav.contact}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          )}
        </section>
      </main>
      <Footer copy={copy} />
    </>
  );
}
