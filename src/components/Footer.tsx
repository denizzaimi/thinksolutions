import type { translations } from "../data/translations";
import { services } from "../data/services";
import { Logo } from "./Logo";

type FooterProps = {
  copy: (typeof translations)["en"];
};

const CONTACT_EMAIL = "info@thinkofsolutions.com";
const CONTACT_PHONE = "+398 71 628 405";
const CONTACT_PHONE_HREF = "+39871628405";

export function Footer({ copy }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Logo />
        <p>{copy.footer.description}</p>
      </div>

      <div className="footer__columns">
        <div>
          <h2>{copy.footer.navigation}</h2>
          <a href="/">{copy.nav.home}</a>
          <a href="/#services">{copy.nav.services}</a>
          <a href="/our-work">{copy.nav.ourWork}</a>
          <a href="/#pricing">{copy.nav.pricing}</a>
          <a href="/about">{copy.nav.about}</a>
          <a href="/#contact">{copy.nav.contact}</a>
        </div>
        <div>
          <h2>{copy.footer.services}</h2>
          {services.map((service) => (
            <a href="/#services" key={service.id}>
              {copy.services.items[service.id].title}
            </a>
          ))}
        </div>
        <div>
          <h2>{copy.footer.contact}</h2>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <a href={`tel:${CONTACT_PHONE_HREF}`}>{CONTACT_PHONE}</a>
          <h2>{copy.footer.socials}</h2>
          <span className="social-placeholders">LinkedIn / Instagram / Facebook</span>
        </div>
      </div>

      <p className="footer__bottom">© {year} Think Solutions. {copy.footer.copyright}</p>
    </footer>
  );
}