import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { projects } from "../data/Work";
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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProjectId(null);
    };

    document.body.classList.add("dialog-open");
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
                <ProjectCard
                  key={project.id}
                  project={project}
                  viewProjectLabel={copy.ourWork.viewProject}
                  onOpen={() => setSelectedProjectId(project.id)}
                />
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
      {selectedProject ? (
        <div className="project-dialog" role="presentation" onMouseDown={() => setSelectedProjectId(null)}>
          <section
            className="project-dialog__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="project-dialog__close"
              type="button"
              aria-label={copy.ourWork.close}
              onClick={() => setSelectedProjectId(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="project-dialog__images">
              {(selectedProject.images ?? [selectedProject.thumbnail]).filter(Boolean).map((image, index) => (
                <img key={`${selectedProject.id}-${image}`} src={image} alt={`${selectedProject.name} view ${index + 1}`} />
              ))}
            </div>
            <div className="project-dialog__body">
              <span className="project-card__category">{selectedProject.category}</span>
              <h2 id="project-dialog-title">{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <dl className="project-dialog__facts">
                {selectedProject.year ? (
                  <div>
                    <dt>{copy.ourWork.year}</dt>
                    <dd>{selectedProject.year}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>{copy.ourWork.services}</dt>
                  <dd>{selectedProject.servicesProvided.join(" · ")}</dd>
                </div>
                {selectedProject.technologies?.length ? (
                  <div>
                    <dt>{copy.ourWork.tools}</dt>
                    <dd>{selectedProject.technologies.join(" · ")}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </section>
        </div>
      ) : null}
      <Footer copy={copy} />
    </>
  );
}
