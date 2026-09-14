import { FormEvent, useState } from "react";
import type { translations } from "../data/translations";
import { SectionHeading } from "./SectionHeading";

type ContactProps = {
  copy: (typeof translations)["en"];
};

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

export function Contact({ copy }: ContactProps) {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    (Object.keys(form) as (keyof FormState)[]).forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = copy.contact.required;
      }
    });

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = copy.contact.invalidEmail;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");

    if (!validate()) return;

    setStatus(copy.contact.success);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  };

  return (
    <section className="section section--contact" id="contact">
      <div>
        <SectionHeading eyebrow={copy.contact.eyebrow} title={copy.contact.title} intro={copy.contact.intro} />
        <div className="contact-note">
          <span>THINK.</span>
          <span>DESIGN.</span>
          <span>ANALYSE.</span>
          <span>GROW.</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            <span>{copy.contact.fields.name}</span>
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder={copy.contact.placeholders.name}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <small>{errors.name}</small> : null}
          </label>

          <label>
            <span>{copy.contact.fields.email}</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder={copy.contact.placeholders.email}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <small>{errors.email}</small> : null}
          </label>

          <label>
            <span>{copy.contact.fields.company}</span>
            <input
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              placeholder={copy.contact.placeholders.company}
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company ? <small>{errors.company}</small> : null}
          </label>

          <label>
            <span>{copy.contact.fields.service}</span>
            <select value={form.service} onChange={(event) => updateField("service", event.target.value)} aria-invalid={Boolean(errors.service)}>
              <option value="" disabled>
                {copy.contact.fields.service}
              </option>
              {copy.contact.serviceOptions.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service ? <small>{errors.service}</small> : null}
          </label>
        </div>

        <label>
          <span>{copy.contact.fields.message}</span>
          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={copy.contact.placeholders.message}
            rows={5}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <small>{errors.message}</small> : null}
        </label>

        <button className="button button--primary" type="submit">
          {copy.contact.submit}
        </button>
        {status ? <p className="form-status" role="status">{status}</p> : null}
      </form>
    </section>
  );
}
