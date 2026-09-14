import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { About } from "./About";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type AboutPageProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function AboutPage({ language, onLanguageChange }: AboutPageProps) {
  const copy = translations[language];

  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={onLanguageChange}
        copy={{
          nav: copy.nav,
          common: {
            language: copy.common.language,
            menu: copy.common.menu,
            closeMenu: copy.common.closeMenu,
          },
        }}
      />
      <main className="about-page">
        <About copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}
