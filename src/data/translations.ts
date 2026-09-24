import type { PricingPackageId } from "./pricing";
import type { ServiceId } from "./services";

export type Language = "en" | "de" | "sq" | "mk";

export const languageLabels: Record<Language, string> = {
  en: "English",
  de: "Deutsch",
  sq: "Shqip",
  mk: "Macedonian",
};

type ServiceCopy = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type PricingCopy = {
  title: string;
  description: string;
  features: string[];
};

export const translations: Record<
  Language,
  {
    nav: Record<"home" | "services" | "pricing" | "ourWork" | "about" | "contact", string>;
    common: {
      learnMore: string;
      language: string;
      menu: string;
      closeMenu: string;
      requestQuote: string;
    };
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      servicesCta: string;
      contactCta: string;
      brandLine: string;
    };
    services: {
      eyebrow: string;
      title: string;
      intro: string;
      items: Record<ServiceId, ServiceCopy>;
    };
    servicePage: {
      provides: string;
      capabilities: string;
      tools: string;
      benefits: string;
      benefitsIntro: string;
      benefitTitles: string[];
      faqTitle: string;
      faq: FaqItem[];
    };
    why: {
      eyebrow: string;
      title: string;
      points: { title: string; description: string }[];
    };
    process: {
      eyebrow: string;
      title: string;
      steps: { title: string; description: string }[];
    };
    pricing: {
      eyebrow: string;
      title: string;
      intro: string;
      cta: string;
      packages: Record<PricingPackageId, PricingCopy>;
    };
    about: {
      eyebrow: string;
      title: string;
      body: string;
      pillars: string[];
    };
    ourWork: {
      eyebrow: string;
      title: string;
      intro: string;
      comingSoon: string;
      viewProject: string;
      details: string;
      close: string;
      year: string;
      services: string;
      tools: string;
    };
    contact: {
      eyebrow: string;
      title: string;
    };
    footer: {
      description: string;
      navigation: string;
      services: string;
      contact: string;
      socials: string;
      copyright: string;
    };
  }
> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      ourWork: "Our Work",
      about: "About",
      contact: "Contact",
    },
    common: {
      learnMore: "Learn More",
      language: "Language",
      menu: "Open menu",
      closeMenu: "Close menu",
      requestQuote: "Request a quote",
    },
    hero: {
      eyebrow: "Digital business solutions",
      title: "Think smarter.\nGrow further.",
      subtitle: "",
      servicesCta: "Explore Services",
      contactCta: "Let's Work Together",
      brandLine: "THINK. DESIGN. ANALYSE. GROW.",
    },
    services: {
      eyebrow: "Services",
      title: "A focused set of digital capabilities for growing businesses.",
      intro: "Think Solutions combines web, design, data and practical business support in one clear partner.",
      items: {
        webDesign: {
          title: "Web Design",
          description: "Modern, responsive websites with clean interfaces and a user-friendly structure.",
        },
        socialMedia: {
          title: "Social Media Management",
          description: "Content strategy, channel management and growth-focused presence on social platforms.",
        },
        dataSolutions: {
          title: "Data Solutions",
          description: "Excel, Power BI, SQL, Looker Studio, dashboards, data analysis and business reporting.",
        },
        uiUxGraphic: {
          title: "UI/UX & Graphic Design",
          description: "Figma, Canva, user experience design, social graphics and polished business visuals.",
        },
        businessSupport: {
          title: "Business Support",
          description: "Practical digital support tailored to improve processes and solve real business needs.",
        },
      },
    },
    servicePage: {
      provides: "What Think Solutions provides",
      capabilities: "Main Capabilities",
      tools: "Technologies & Tools",
      benefits: "Benefits for Your Business",
      benefitsIntro: "The right digital solution should do more than look polished. It should make your work clearer, more effective and easier to grow.",
      benefitTitles: [
        "A clearer presence",
        "Easier access",
        "More trust",
        "Room to grow",
      ],
      faqTitle: "How can this service help your business?",
      faq: [
        { question: "Why should I maintain my website regularly?", answer: "It keeps the site secure, current and working properly." },
        { question: "How often should maintenance be done?", answer: "A quick monthly check is a good starting point." },
        { question: "What does website maintenance include?", answer: "Updates, backups, security checks, fixes and small content changes." },
        { question: "What happens if I leave my website unattended?", answer: "It can become slower, outdated or vulnerable to security problems." },
        { question: "How quickly can you make a change?", answer: "Small updates are usually handled within a few business days." },
        { question: "Is maintenance paid monthly or yearly?", answer: "Either option can work. We agree on the format that fits your needs." },
        { question: "How much does website maintenance cost?", answer: "It depends on the size of the site and the level of support required." },
      ],
    },
    why: {
      eyebrow: "Why Think Solutions",
      title: "Built for clarity, momentum and measurable business value.",
      points: [
        { title: "Tailored Solutions", description: "Every business has different needs." },
        { title: "Modern Design", description: "Clean and professional digital experiences." },
        { title: "Data-Driven", description: "Turn business data into useful insights." },
        { title: "Business-Focused", description: "Solutions are created with business goals in mind." },
        { title: "Clear Communication", description: "Simple and direct communication throughout the project." },
        { title: "Multiple Solutions", description: "Design, data, web and social media support in one place." },
      ],
    },
    process: {
      eyebrow: "",
      title: "A simple path from business need to better execution.",
      steps: [
        { title: "Understand", description: "We understand your business, goals and challenges." },
        { title: "Plan", description: "We create the right strategy and solution." },
        { title: "Build", description: "We design, develop and implement." },
        { title: "Improve", description: "We analyse, optimise and continue improving." },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Flexible packages shaped around your needs.",
      intro: "No fixed public prices. Each project is scoped around the work, priorities and level of support required.",
      cta: "Discuss Your Needs",
      packages: {
        starter: {
          title: "STARTER",
          description: "For businesses that need essential digital support.",
          features: ["Essential guidance", "Focused deliverables", "Clear next steps"],
        },
        growth: {
          title: "GROWTH",
          description: "For businesses looking to improve their online presence and operations.",
          features: ["Design and digital support", "Operational improvements", "Data-informed planning"],
        },
        premium: {
          title: "PREMIUM",
          description: "For businesses looking for a complete digital solution.",
          features: ["Complete digital package", "Design, web and data support", "Ongoing improvement focus"],
        },
      },
    },
    about: {
      eyebrow: "About",
      title: "Digital thinking with a practical business lens.",
      body:
        "Think Solutions combines technology, design, data, digital strategy and business support to help companies improve the way they present, operate and grow. The work stays focused on clear outcomes and practical solutions.",
      pillars: ["Technology", "Design", "Data", "Digital strategy", "Business support"],
    },
    ourWork: {
      eyebrow: "Our Work",
      title: "A look at what we've built.",
      intro: "A selection of projects Think Solutions has delivered for real clients.",
      comingSoon: "Project case studies are being prepared and will be added here soon.",
      viewProject: "View details",
      details: "Project details",
      close: "Close",
      year: "Year",
      services: "Services",
      tools: "What was used",
    },
    contact: {
      eyebrow: "Contact",
      title: "Start a focused conversation.",
    },
    footer: {
      description: "Digital, design and data solutions built around your business.",
      navigation: "Navigation",
      services: "Services",
      contact: "Contact",
      socials: "Social",
      copyright: "All rights reserved.",
    },
  },
  de: {
    nav: {
      home: "Start",
      services: "Leistungen",
      pricing: "Pakete",
      ourWork: "Unsere Arbeit",
      about: "Über uns",
      contact: "Kontakt",
    },
    common: {
      learnMore: "Mehr erfahren",
      language: "Sprache",
      menu: "Menü öffnen",
      closeMenu: "Menü schließen",
      requestQuote: "Angebot anfragen",
    },
    hero: {
      eyebrow: "Digitale Geschäftslösungen",
      title: "Klüger denken.\nWeiter wachsen.",
      subtitle: "",
      servicesCta: "Leistungen ansehen",
      contactCta: "Zusammenarbeiten",
      brandLine: "DENKEN. DESIGNEN. ANALYSIEREN. WACHSEN.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Gezielte digitale Fähigkeiten für wachsende Unternehmen.",
      intro: "Think Solutions verbindet Web, Design, Daten und praktische Unterstützung in einem klaren Partner.",
      items: {
        webDesign: {
          title: "Webdesign",
          description: "Moderne, responsive Websites mit klaren Oberflächen und nutzerfreundlicher Struktur.",
        },
        socialMedia: {
          title: "Social Media Management",
          description: "Content-Strategie, Kanalmanagement und wachstumsorientierte Präsenz auf sozialen Plattformen.",
        },
        dataSolutions: {
          title: "Datenlösungen",
          description: "Excel, Power BI, SQL, Looker Studio, Dashboards, Datenanalyse und Business Reporting.",
        },
        uiUxGraphic: {
          title: "UI/UX & Grafikdesign",
          description: "Figma, Canva, UX-Design, Social-Media-Grafiken und professionelle Unternehmensvisuals.",
        },
        businessSupport: {
          title: "Geschäftsunterstützung",
          description: "Praktische digitale Unterstützung zur Verbesserung von Prozessen und konkreten Anforderungen.",
        },
      },
    },
    servicePage: {
      provides: "Was Think Solutions bietet",
      capabilities: "Hauptfähigkeiten",
      tools: "Technologien & Tools",
      benefits: "Vorteile für Ihr Unternehmen",
      benefitsIntro: "Die richtige digitale Lösung sollte mehr leisten, als nur professionell auszusehen. Sie soll Ihre Arbeit klarer, wirksamer und leichter erweiterbar machen.",
      benefitTitles: ["Mehr Klarheit", "Einfacherer Zugang", "Mehr Vertrauen", "Platz zum Wachsen"],
      faqTitle: "Wie kann diese Leistung Ihr Unternehmen unterstützen?",
      faq: [
        { question: "Warum sollte ich meine Website regelmäßig pflegen?", answer: "Damit sie sicher, aktuell und zuverlässig bleibt." },
        { question: "Wie oft sollte eine Website gewartet werden?", answer: "Eine kurze monatliche Prüfung ist ein guter Anfang." },
        { question: "Was gehört zur Website-Pflege?", answer: "Updates, Backups, Sicherheitschecks, Fehlerbehebungen und kleine Inhaltsänderungen." },
        { question: "Was passiert ohne regelmäßige Pflege?", answer: "Die Website kann langsamer, veraltet oder unsicher werden." },
        { question: "Wie schnell werden Änderungen umgesetzt?", answer: "Kleine Änderungen erledigen wir meist innerhalb weniger Werktage." },
        { question: "Wird monatlich oder jährlich bezahlt?", answer: "Beides ist möglich, je nach gewünschter Betreuung." },
        { question: "Was kostet die Website-Pflege?", answer: "Das hängt vom Umfang der Website und dem Supportbedarf ab." },
      ],
    },
    why: {
      eyebrow: "Warum Think Solutions",
      title: "Entwickelt für Klarheit, Tempo und echten Geschäftswert.",
      points: [
        { title: "Individuelle Lösungen", description: "Jedes Unternehmen hat andere Anforderungen." },
        { title: "Modernes Design", description: "Klare und professionelle digitale Erlebnisse." },
        { title: "Datenorientiert", description: "Geschäftsdaten werden zu nützlichen Erkenntnissen." },
        { title: "Business-Fokus", description: "Lösungen entstehen mit Geschäftszielen im Blick." },
        { title: "Klare Kommunikation", description: "Einfache und direkte Kommunikation während des Projekts." },
        { title: "Mehrere Lösungen", description: "Design, Daten, Web und Social Media an einem Ort." },
      ],
    },
    process: {
      eyebrow: "",
      title: "Ein klarer Weg vom Bedarf zur besseren Umsetzung.",
      steps: [
        { title: "Verstehen", description: "Wir verstehen Ihr Unternehmen, Ihre Ziele und Herausforderungen." },
        { title: "Planen", description: "Wir entwickeln die passende Strategie und Lösung." },
        { title: "Umsetzen", description: "Wir gestalten, entwickeln und implementieren." },
        { title: "Verbessern", description: "Wir analysieren, optimieren und entwickeln weiter." },
      ],
    },
    pricing: {
      eyebrow: "Pakete",
      title: "Flexible Pakete passend zu Ihren Anforderungen.",
      intro: "Keine festen öffentlichen Preise. Jedes Projekt wird nach Umfang, Prioritäten und Supportbedarf geplant.",
      cta: "Bedarf besprechen",
      packages: {
        starter: {
          title: "STARTER",
          description: "Für Unternehmen, die grundlegende digitale Unterstützung benötigen.",
          features: ["Wesentliche Beratung", "Fokussierte Ergebnisse", "Klare nächste Schritte"],
        },
        growth: {
          title: "GROWTH",
          description: "Für Unternehmen, die Online-Präsenz und Abläufe verbessern möchten.",
          features: ["Design und digitaler Support", "Operative Verbesserungen", "Datenbasierte Planung"],
        },
        premium: {
          title: "PREMIUM",
          description: "Für Unternehmen, die eine komplette digitale Lösung suchen.",
          features: ["Komplettes digitales Paket", "Design-, Web- und Datensupport", "Kontinuierliche Verbesserung"],
        },
      },
    },
    about: {
      eyebrow: "Über uns",
      title: "Digitales Denken mit praktischem Geschäftsbezug.",
      body:
        "Think Solutions verbindet Technologie, Design, Daten, digitale Strategie und Business Support, damit Unternehmen Auftreten, Prozesse und Wachstum verbessern können.",
      pillars: ["Technologie", "Design", "Daten", "Digitale Strategie", "Geschäftsunterstützung"],
    },
    ourWork: {
      eyebrow: "Unsere Arbeit",
      title: "Ein Einblick in unsere Projekte.",
      intro: "Eine Auswahl an Projekten, die Think Solutions für echte Kunden umgesetzt hat.",
      comingSoon: "Projektbeispiele werden vorbereitet und in Kürze hier ergänzt.",
      viewProject: "Details ansehen",
      details: "Projektdetails",
      close: "Schließen",
      year: "Jahr",
      services: "Leistungen",
      tools: "Verwendet",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Starten Sie ein klares Gespräch.",
    },
    footer: {
      description: "Digitale, Design- und Datenlösungen, die auf Ihr Unternehmen abgestimmt sind.",
      navigation: "Navigation",
      services: "Leistungen",
      contact: "Kontakt",
      socials: "Social",
      copyright: "Alle Rechte vorbehalten.",
    },
  },
  sq: {
    nav: {
      home: "Ballina",
      services: "Shërbimet",
      pricing: "Paketat",
      ourWork: "Punët Tona",
      about: "Rreth nesh",
      contact: "Kontakt",
    },
    common: {
      learnMore: "Më shumë",
      language: "Gjuha",
      menu: "Hap menunë",
      closeMenu: "Mbyll menunë",
      requestQuote: "Kërko ofertë",
    },
    hero: {
      eyebrow: "Zgjidhje digjitale për biznes",
      title: "Mendo më zgjuar.\nRritu më tej.",
      subtitle: "",
      servicesCta: "Shiko Shërbimet",
      contactCta: "Të Punojmë Bashkë",
      brandLine: "MENDO. DIZAJNO. ANALIZO. RRITU.",
    },
    services: {
      eyebrow: "Shërbimet",
      title: "Aftësi digjitale të fokusuara për biznese në rritje.",
      intro: "Think Solutions bashkon web, dizajn, të dhëna dhe mbështetje praktike në një partner të qartë.",
      items: {
        webDesign: {
          title: "Web Design",
          description: "Webfaqe moderne dhe responsive me ndërfaqe të pastra dhe strukturë të lehtë për përdorim.",
        },
        socialMedia: {
          title: "Menaxhim i Rrjeteve Sociale",
          description: "Strategji për përmbajtje, menaxhim kanalesh dhe rritje në platformat sociale.",
        },
        dataSolutions: {
          title: "Zgjidhje për të Dhëna",
          description: "Excel, Power BI, SQL, Looker Studio, dashboards, analizë të dhënash dhe raporte biznesi.",
        },
        uiUxGraphic: {
          title: "UI/UX & Dizajn Grafik",
          description: "Figma, Canva, dizajn i përvojës së përdoruesit, grafika sociale dhe vizuale biznesi.",
        },
        businessSupport: {
          title: "Mbështetje Biznesi",
          description: "Mbështetje praktike digjitale për procese më të mira dhe zgjidhje sipas nevojave reale.",
        },
      },
    },
    servicePage: {
      provides: "Çfarë ofron Think Solutions",
      capabilities: "Kapacitetet kryesore",
      tools: "Teknologjitë & Mjetet",
      benefits: "Përfitime për biznesin tuaj",
      benefitsIntro: "Zgjidhja e duhur digjitale duhet të bëjë më shumë se të duket profesionale. Ajo duhet ta bëjë punën tuaj më të qartë, më efektive dhe më të lehtë për t'u zhvilluar.",
      benefitTitles: ["Më shumë qartësi", "Qasje më e lehtë", "Më shumë besim", "Hapësirë për rritje"],
      faqTitle: "Si mund ta ndihmojë biznesin tuaj kjo shërbim?",
      faq: [
        { question: "Pse duhet ta mirëmbaj rregullisht faqen time?", answer: "Që të mbetet e sigurt, e përditësuar dhe funksionale." },
        { question: "Sa shpesh duhet të bëhet mirëmbajtja?", answer: "Një kontroll i shkurtër çdo muaj është një fillim i mirë." },
        { question: "Çfarë përfshin mirëmbajtja?", answer: "Përditësime, kopje rezervë, kontrolle sigurie, rregullime dhe ndryshime të vogla." },
        { question: "Çfarë ndodh nëse faqja lihet pa mirëmbajtje?", answer: "Mund të ngadalësohet, të vjetrohet ose të ketë probleme sigurie." },
        { question: "Sa shpejt mund të bëhen ndryshimet?", answer: "Ndryshimet e vogla zakonisht bëhen brenda disa ditëve pune." },
        { question: "Pagesa bëhet mujore apo vjetore?", answer: "Të dyja mundësitë janë të disponueshme." },
        { question: "Sa kushton mirëmbajtja e faqes?", answer: "Varet nga madhësia e faqes dhe niveli i mbështetjes." },
      ],
    },
    why: {
      eyebrow: "Pse Think Solutions",
      title: "Ndërtuar për qartësi, lëvizje dhe vlerë biznesi.",
      points: [
        { title: "Zgjidhje të Përshtatura", description: "Çdo biznes ka nevoja të ndryshme." },
        { title: "Dizajn Modern", description: "Përvoja digjitale të pastra dhe profesionale." },
        { title: "Bazuar në të Dhëna", description: "Ktheni të dhënat në njohuri të dobishme." },
        { title: "Fokus në Biznes", description: "Zgjidhjet krijohen me qëllimet e biznesit në mendje." },
        { title: "Komunikim i Qartë", description: "Komunikim i thjeshtë dhe direkt gjatë projektit." },
        { title: "Shumë Zgjidhje", description: "Dizajn, të dhëna, web dhe rrjete sociale në një vend." },
      ],
    },
    process: {
      eyebrow: "",
      title: "Një rrugë e thjeshtë nga nevoja në zbatim më të mirë.",
      steps: [
        { title: "Kuptojmë", description: "Kuptojmë biznesin, qëllimet dhe sfidat tuaja." },
        { title: "Planifikojmë", description: "Krijojmë strategjinë dhe zgjidhjen e duhur." },
        { title: "Ndërtojmë", description: "Dizajnojmë, zhvillojmë dhe implementojmë." },
        { title: "Përmirësojmë", description: "Analizojmë, optimizojmë dhe vazhdojmë përmirësimin." },
      ],
    },
    pricing: {
      eyebrow: "Paketat",
      title: "Paketa fleksibile sipas nevojave tuaja.",
      intro: "Nuk shfaqen çmime fikse. Çdo projekt përcaktohet sipas punës, prioriteteve dhe mbështetjes së nevojshme.",
      cta: "Diskuto Nevojat",
      packages: {
        starter: {
          title: "STARTER",
          description: "Për biznese që kanë nevojë për mbështetje bazike digjitale.",
          features: ["Udhëzim bazik", "Rezultate të fokusuara", "Hapa të qartë"],
        },
        growth: {
          title: "GROWTH",
          description: "Për biznese që duan të përmirësojnë prezencën online dhe operacionet.",
          features: ["Dizajn dhe mbështetje digjitale", "Përmirësime operative", "Planifikim me të dhëna"],
        },
        premium: {
          title: "PREMIUM",
          description: "Për biznese që kërkojnë zgjidhje të plotë digjitale.",
          features: ["Paketë e plotë digjitale", "Mbështetje dizajni, web dhe të dhënash", "Fokus në përmirësim"],
        },
      },
    },
    about: {
      eyebrow: "Rreth nesh",
      title: "Mendim digjital me këndvështrim praktik biznesi.",
      body:
        "Think Solutions kombinon teknologjinë, dizajnin, të dhënat, strategjinë digjitale dhe mbështetjen e biznesit për t'i ndihmuar kompanitë të përmirësojnë prezantimin, proceset dhe rritjen.",
      pillars: ["Teknologji", "Dizajn", "Të dhëna", "Strategji digjitale", "Mbështetje biznesi"],
    },
    ourWork: {
      eyebrow: "Punët Tona",
      title: "Një vështrim mbi atë që kemi ndërtuar.",
      intro: "Një përzgjedhje projektesh që Think Solutions ka realizuar për klientë realë.",
      comingSoon: "Studimet e rasteve të projekteve po përgatiten dhe do të shtohen së shpejti këtu.",
      viewProject: "Shiko detajet",
      details: "Detajet e projektit",
      close: "Mbyll",
      year: "Viti",
      services: "Shërbimet",
      tools: "Çfarë u përdor",
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Filloni një bisedë të qartë.",
    },
    footer: {
      description: "Zgjidhje digjitale, dizajni dhe të dhënash të ndërtuara rreth biznesit tuaj.",
      navigation: "Navigimi",
      services: "Shërbimet",
      contact: "Kontakt",
      socials: "Sociale",
      copyright: "Të gjitha të drejtat e rezervuara.",
    },
  },
  mk: {
    nav: {
      home: "Почетна",
      services: "Услуги",
      pricing: "Пакети",
      ourWork: "Нашата работа",
      about: "За нас",
      contact: "Контакт",
    },
    common: {
      learnMore: "Дознај повеќе",
      language: "Јазик",
      menu: "Отвори мени",
      closeMenu: "Затвори мени",
      requestQuote: "Побарај понуда",
    },
    hero: {
      eyebrow: "Дигитални бизнис решенија",
      title: "Размислувај попаметно.\nРасти понатаму.",
      subtitle: "",
      servicesCta: "Истражи услуги",
      contactCta: "Да соработуваме",
      brandLine: "МИСЛИ. ДИЗАЈНИРАЈ. АНАЛИЗИРАЈ. РАСТИ.",
    },
    services: {
      eyebrow: "Услуги",
      title: "Фокусирани дигитални способности за бизниси во раст.",
      intro: "Think Solutions комбинира веб, дизајн, податоци и практична поддршка во еден јасен партнер.",
      items: {
        webDesign: {
          title: "Веб дизајн",
          description: "Модерни responsive веб-страници со чисти интерфејси и корисничка структура.",
        },
        socialMedia: {
          title: "Менаџирање на социјални медиуми",
          description: "Стратегија за содржина, менаџирање канали и раст на социјални платформи.",
        },
        dataSolutions: {
          title: "Дата решенија",
          description: "Excel, Power BI, SQL, Looker Studio, dashboards, анализа на податоци и бизнис извештаи.",
        },
        uiUxGraphic: {
          title: "UI/UX & графички дизајн",
          description: "Figma, Canva, UX дизајн, графики за социјални медиуми и професионални визуели.",
        },
        businessSupport: {
          title: "Бизнис поддршка",
          description: "Практична дигитална поддршка за подобри процеси и решенија според реални потреби.",
        },
      },
    },
    servicePage: {
      provides: "Што Think Solutions нуди",
      capabilities: "Главни капацитети",
      tools: "Технологии & алати",
      benefits: "Придобивки за вашиот бизнис",
      benefitsIntro: "Правилното дигитално решение треба да прави повеќе од тоа само да изгледа професионално. Тоа треба да ја направи вашата работа појасна, поефикасна и полесна за развој.",
      benefitTitles: ["Повеќе јасност", "Полесен пристап", "Повеќе доверба", "Простор за раст"],
      faqTitle: "Како оваа услуга може да му помогне на вашиот бизнис?",
      faq: [
        { question: "Зошто треба редовно да ја одржувам веб-страницата?", answer: "За да остане безбедна, ажурна и функционална." },
        { question: "Колку често треба да се одржува?", answer: "Кратка месечна проверка е добар почеток." },
        { question: "Што опфаќа одржувањето?", answer: "Ажурирања, резервни копии, безбедносни проверки, поправки и мали промени." },
        { question: "Што се случува без редовно одржување?", answer: "Страницата може да стане побавна, застарена или небезбедна." },
        { question: "Колку брзо се прават промените?", answer: "Малите промени обично се завршуваат за неколку работни дена." },
        { question: "Плаќањето е месечно или годишно?", answer: "Можно е и едното и другото, според потребната поддршка." },
        { question: "Колку чини одржувањето на веб-страницата?", answer: "Цената зависи од големината на страницата и потребната поддршка." },
      ],
    },
    why: {
      eyebrow: "Зошто Think Solutions",
      title: "Создадено за јасност, напредок и бизнис вредност.",
      points: [
        { title: "Прилагодени решенија", description: "Секој бизнис има различни потреби." },
        { title: "Модерен дизајн", description: "Чисти и професионални дигитални искуства." },
        { title: "Водено од податоци", description: "Претворете ги податоците во корисни увиди." },
        { title: "Бизнис фокус", description: "Решенијата се создаваат со бизнис целите во фокус." },
        { title: "Јасна комуникација", description: "Едноставна и директна комуникација низ проектот." },
        { title: "Повеќе решенија", description: "Дизајн, податоци, веб и социјални медиуми на едно место." },
      ],
    },
    process: {
      eyebrow: "",
      title: "Едноставен пат од потреба до подобра реализација.",
      steps: [
        { title: "Разбираме", description: "Го разбираме вашиот бизнис, цели и предизвици." },
        { title: "Планираме", description: "Создаваме правилна стратегија и решение." },
        { title: "Градиме", description: "Дизајнираме, развиваме и имплементираме." },
        { title: "Подобруваме", description: "Анализираме, оптимизираме и продолжуваме со подобрување." },
      ],
    },
    pricing: {
      eyebrow: "Пакети",
      title: "Флексибилни пакети според вашите потреби.",
      intro: "Не се прикажуваат фиксни цени. Секој проект се дефинира според работата, приоритетите и потребната поддршка.",
      cta: "Дискутирај потреби",
      packages: {
        starter: {
          title: "STARTER",
          description: "За бизниси на кои им е потребна основна дигитална поддршка.",
          features: ["Основно насочување", "Фокусирани резултати", "Јасни следни чекори"],
        },
        growth: {
          title: "GROWTH",
          description: "За бизниси кои сакаат да ја подобрат онлајн присутноста и процесите.",
          features: ["Дизајн и дигитална поддршка", "Оперативни подобрувања", "Планирање со податоци"],
        },
        premium: {
          title: "PREMIUM",
          description: "За бизниси кои бараат целосно дигитално решение.",
          features: ["Целосен дигитален пакет", "Дизајн, веб и дата поддршка", "Фокус на континуирано подобрување"],
        },
      },
    },
    about: {
      eyebrow: "За нас",
      title: "Дигитално размислување со практичен бизнис пристап.",
      body:
        "Think Solutions комбинира технологија, дизајн, податоци, дигитална стратегија и бизнис поддршка за да им помогне на компаниите да го подобрат претставувањето, работењето и растот.",
      pillars: ["Технологија", "Дизајн", "Податоци", "Дигитална стратегија", "Бизнис поддршка"],
    },
    ourWork: {
      eyebrow: "Нашата работа",
      title: "Поглед кон она што го изградивме.",
      intro: "Избор на проекти што Think Solutions ги реализираше за реални клиенти.",
      comingSoon: "Студии на случаи од проекти се подготвуваат и наскоро ќе бидат додадени овде.",
      viewProject: "Види детали",
      details: "Детали за проектот",
      close: "Затвори",
      year: "Година",
      services: "Услуги",
      tools: "Што е користено",
    },
    contact: {
      eyebrow: "Контакт",
      title: "Започнете јасен разговор.",
    },
    footer: {
      description: "Дигитални, дизајн и дата решенија создадени околу вашиот бизнис.",
      navigation: "Навигација",
      services: "Услуги",
      contact: "Контакт",
      socials: "Социјални",
      copyright: "Сите права се задржани.",
    },
  },
};