type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
