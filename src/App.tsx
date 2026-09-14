import { useMemo, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Process } from "./components/Process";
import { ServiceSearch } from "./components/ServiceSearch";
import { Services } from "./components/Services";
import { WhyThinkSolutions } from "./components/WhyThinkSolutions";
import { translations, type Language } from "./data/translations";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = useMemo(() => translations[language], [language]);

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
        <ServiceSearch copy={copy} />
        <WhyThinkSolutions copy={copy} />
        <Process copy={copy} />
        <Pricing copy={copy} />
        <About copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </>
  );
}

export default App;
