import { useEffect, useMemo, useState } from "react";
import { AboutPage } from "./components/AboutPage";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { OurWorkPage } from "./components/OurWorkPage";
import { Pricing } from "./components/Pricing";
import { ServicePage } from "./components/ServicePage";
import { Services } from "./components/Services";
import { WhyThinkSolutions } from "./components/WhyThinkSolutions";
import { services } from "./data/services";
import { translations, type Language } from "./data/translations";

const LANGUAGE_STORAGE_KEY = "think-solutions-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (stored && stored in translations) return stored as Language;
  return "en";
}

type Route =
  | { type: "home" }
  | { type: "about" }
  | { type: "our-work" }
  | { type: "service"; serviceId: (typeof services)[number]["id"] };

function resolveRoute(): Route {
  if (typeof window === "undefined") return { type: "home" };

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/about") return { type: "about" };
  if (path === "/our-work") return { type: "our-work" };

  const serviceMatch = path.match(/^\/services\/([a-z0-9-]+)$/);
  if (serviceMatch) {
    const service = services.find((item) => item.slug === serviceMatch[1]);
    if (service) return { type: "service", serviceId: service.id };
  }

  return { type: "home" };
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const copy = useMemo(() => translations[language], [language]);
  const route = useMemo(() => resolveRoute(), []);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  if (route.type === "about") {
    return <AboutPage language={language} onLanguageChange={setLanguage} />;
  }

  if (route.type === "our-work") {
    return <OurWorkPage language={language} onLanguageChange={setLanguage} />;
  }

  if (route.type === "service") {
    return <ServicePage serviceId={route.serviceId} language={language} onLanguageChange={setLanguage} />;
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
      <main className="home-page">
        <Hero copy={copy.hero} />
        <Services copy={copy} />
        <WhyThinkSolutions copy={copy} />
        <Pricing copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}

export default App;