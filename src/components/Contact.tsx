import { Mail, Phone } from "lucide-react";
import type { translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  copy: (typeof translations)["en"];
};

const CONTACT_EMAIL = "info@thinkofsolutions.com";
const CONTACT_PHONE = "+389 71 628 405";
const CONTACT_PHONE_HREF = "+38971628405";

export function Contact({ copy }: ContactProps) {
  return (
    <section className="section section--contact" id="contact">
      <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} align="center" />

      <form className="contact-form" action={`mailto:${CONTACT_EMAIL}`} method="post" encType="text/plain">
        <label>
          Name
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" autoComplete="email" required />
        </label>
        <label className="contact-form__message">
          Message
          <textarea name="message" rows={5} required />
        </label>
        <button className="button button--primary" type="submit">
          Send message
        </button>
      </form>

      <div className="contact-details">
        <a className="contact-details__item" href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={20} aria-hidden="true" />
          <span>{CONTACT_EMAIL}</span>
        </a>
        <a className="contact-details__item" href={`tel:${CONTACT_PHONE_HREF}`}>
          <Phone size={20} aria-hidden="true" />
          <span>{CONTACT_PHONE}</span>
        </a>
      </div>
    </section>
  );
}