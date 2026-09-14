import { pricingPackages } from "../data/pricing";
import type { translations } from "../data/translations";
import { PricingCard } from "./PricingCard";
import { SectionHeading } from "./SectionHeading";

type PricingProps = {
  copy: (typeof translations)["en"];
};

export function Pricing({ copy }: PricingProps) {
  return (
    <section className="section" id="pricing">
      <SectionHeading eyebrow={copy.pricing.eyebrow} title={copy.pricing.title} intro={copy.pricing.intro} />
      <div className="pricing-grid">
        {pricingPackages.map((item) => (
          <PricingCard key={item.id} item={item} copy={copy} />
        ))}
      </div>
    </section>
  );
}
