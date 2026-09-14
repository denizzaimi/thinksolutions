export type PricingPackageId = "starter" | "growth" | "premium";

export type PricingPackage = {
  id: PricingPackageId;
  highlighted?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  { id: "starter" },
  { id: "growth", highlighted: true },
  { id: "premium" },
];
