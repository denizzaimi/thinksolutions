import { ArrowRight, Check } from "lucide-react";
import type { PricingPackage } from "../data/pricing";
import type { translations } from "../data/translations";

type PricingCardProps = {
  item: PricingPackage;
  copy: (typeof translations)["en"];
};

export function PricingCard({ item, copy }: PricingCardProps) {
  const packageCopy = copy.pricing.packages[item.id];

  return (
    <article className={item.highlighted ? "pricing-card pricing-card--highlighted" : "pricing-card"}>
      <div>
        <h3>{packageCopy.title}</h3>
        <p>{packageCopy.description}</p>
      </div>
      <strong>{copy.common.requestQuote}</strong>
      <ul>
        {packageCopy.features.map((feature) => (
          <li key={feature}>
            <Check size={17} aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <a className="button button--primary" href="#contact">
        {copy.pricing.cta}
        <ArrowRight size={17} aria-hidden="true" />
      </a>
    </article>
  );
}
