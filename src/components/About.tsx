import type { Language, translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type AboutProps = {
  copy: (typeof translations)[Language];
};

export function About({ copy }: AboutProps) {
  return (
    <section className="section section--split" id="about">
      <div>
        <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
        <p className="about-copy">{copy.about.body}</p>
      </div>
      <div className="pillar-list" aria-label="Think Solutions capabilities">
        {copy.about.pillars.map((pillar) => (
          <span key={pillar}>{pillar}</span>
        ))}
      </div>
    </section>
  );
}