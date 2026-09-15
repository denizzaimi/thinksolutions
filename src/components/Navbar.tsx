import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { languageLabels, type Language } from "../data/translations";
import { Logo } from "./Logo";

type NavbarProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  copy: {
    nav: Record<"home" | "services" | "pricing" | "ourWork" | "about" | "contact", string>;
    common: {
      language: string;
      menu: string;
      closeMenu: string;
    };
  };
};

const navItems = [
  { id: "home", href: "/" },
  { id: "services", href: "/#services" },
  { id: "ourWork", href: "/our-work" },
  { id: "pricing", href: "/#pricing" },
  { id: "about", href: "/about" },
  { id: "contact", href: "/#contact" },
] as const;

export function Navbar({ language, onLanguageChange, copy }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  const languageSelect = (
    <label className="language-select">
      <span>{copy.common.language}</span>
      <select
        value={language}
        onChange={(event) => onLanguageChange(event.target.value as Language)}
        aria-label={copy.common.language}
      >
        {(Object.keys(languageLabels) as Language[]).map((key) => (
          <option key={key} value={key}>
            {languageLabels[key]}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <header className={isScrolled ? "navbar navbar--scrolled" : "navbar"}>
      <a className="navbar__brand" href="/" aria-label="Think Solutions home" onClick={() => setIsOpen(false)}>
        <Logo />
      </a>

      <nav className="navbar__links" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.id} href={item.href}>
            {copy.nav[item.id]}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">{languageSelect}</div>

      <button
        className="icon-button navbar__toggle"
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? copy.common.closeMenu : copy.common.menu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={isOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"} id="mobile-navigation">
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.id} href={item.href} onClick={() => setIsOpen(false)}>
              {copy.nav[item.id]}
            </a>
          ))}
        </nav>
        {languageSelect}
      </div>
    </header>
  );
}