import { BarChart3, BriefcaseBusiness, Megaphone, MonitorSmartphone, Palette } from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "../data/services";

type ServiceCardProps = {
  service: Service;
  title: string;
  description: string;
  cta: string;
};

const iconMap = {
  monitor: MonitorSmartphone,
  megaphone: Megaphone,
  barChart: BarChart3,
  palette: Palette,
  briefcase: BriefcaseBusiness,
};

export function ServiceCard({ service, title, description, cta }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.article className="service-card" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 260, damping: 22 }}>
      <div className="service-card__icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#contact" className="service-card__cta">
        {cta}
      </a>
    </motion.article>
  );
}
