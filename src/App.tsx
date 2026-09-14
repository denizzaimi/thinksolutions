import { useEffect, useMemo, useState } from "react";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { WhyThinkSolutions } from "./components/WhyThinkSolutions";
import { translations, type Language } from "./data/translations";

const LANGUAGE_STORAGE_KEY = "think-solutions-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && stored in translations) return stored as Language;
  return "en";
}

function isAboutRoute(): boolean {
  if (typeof window === "undefined") return false;
  return window.location.pathname.replace(/\/+$/, "") === "/about";
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = useMemo(() => translations[language], [language]);
  const onAbout = useMemo(() => isAboutRoute(), []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  if (onAbout) {
    return <AboutPage language={language} onLanguageChange={setLanguage} />;
  }

  return (
    <>
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        copy={{
          nav: copy.nav,
          common: {
            language: copy.common.language,
            menu: copy.common.menu,
            closeMenu: copy.common.closeMenu,
          },
        }}
      />
      <main>
        <Hero copy={copy.hero} />
        <Services copy={copy} />
        <WhyThinkSolutions copy={copy} />
        <Process copy={copy} />
        <Pricing copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}

export default App;