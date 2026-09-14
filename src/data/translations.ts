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

type PricingCopy = {
  title: string;
  description: string;
  features: string[];
};

export const translations: Record<
  Language,
  {
    nav: Record<"home" | "services" | "pricing" | "about" | "contact", string>;
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
    search: {
      title: string;
      placeholder: string;
      clear: string;
      noResults: string;
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
    contact: {
      eyebrow: string;
      title: string;
      intro: string;
      fields: Record<"name" | "email" | "company" | "service" | "message", string>;
      placeholders: Record<"name" | "email" | "company" | "message", string>;
      serviceOptions: string[];
      submit: string;
      success: string;
      required: string;
      invalidEmail: string;
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
      title: "Think smarter. Build better. Grow further.",
      subtitle: "Digital, design and data solutions built around your business.",
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
    search: {
      title: "What are you looking for?",
      placeholder: "Search our services...",
      clear: "Clear",
      noResults: "No services found. Try another search.",
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
      eyebrow: "Process",
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
    contact: {
      eyebrow: "Contact",
      title: "Start a focused conversation.",
      intro: "Tell us what you need and the form can be connected to an API or email service when your backend is ready.",
      fields: {
        name: "Name",
        email: "Email",
        company: "Company",
        service: "Service",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@example.com",
        company: "Company name",
        message: "Tell us about your project or business need",
      },
      serviceOptions: [
        "Web Design",
        "Social Media Management",
        "Data Solutions",
        "UI/UX & Graphic Design",
        "Business Support",
        "Other",
      ],
      submit: "Start a Project",
      success: "Form validated. Connect your preferred API or email service to submit this request.",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
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
      title: "Klüger denken. Besser bauen. Weiter wachsen.",
      subtitle: "Digitale, Design- und Datenlösungen, die auf Ihr Unternehmen abgestimmt sind.",
      servicesCta: "Leistungen ansehen",
      contactCta: "Zusammenarbeiten",
      brandLine: "DENKEN. DESIGNEN. ANALYSIEREN. WACHSEN.",
    },
    services: {
      eyebrow: "Leistungen",
      title: "Gezielte digitale Fähigkeiten für wachsende Unternehmen.",
      intro: "Think Solutions verbindet Web, Design, Daten und praktische Unternehmensunterstützung.",
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
          title: "Business Support",
          description: "Praktische digitale Unterstützung zur Verbesserung von Prozessen und konkreten Anforderungen.",
        },
      },
    },
    search: {
      title: "Wonach suchen Sie?",
      placeholder: "Leistungen suchen...",
      clear: "Zurücksetzen",
      noResults: "Keine Leistungen gefunden. Versuchen Sie eine andere Suche.",
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
      eyebrow: "Prozess",
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
      pillars: ["Technologie", "Design", "Daten", "Digitale Strategie", "Business Support"],
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Starten Sie ein klares Gespräch.",
      intro: "Beschreiben Sie Ihren Bedarf. Das Formular kann später mit einer API oder einem E-Mail-Service verbunden werden.",
      fields: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        service: "Leistung",
        message: "Nachricht",
      },
      placeholders: {
        name: "Ihr Name",
        email: "sie@beispiel.com",
        company: "Unternehmensname",
        message: "Beschreiben Sie Ihr Projekt oder Ihren Bedarf",
      },
      serviceOptions: ["Webdesign", "Social Media Management", "Datenlösungen", "UI/UX & Grafikdesign", "Business Support", "Sonstiges"],
      submit: "Projekt starten",
      success: "Formular geprüft. Verbinden Sie Ihren API- oder E-Mail-Service, um die Anfrage zu senden.",
      required: "Dieses Feld ist erforderlich.",
      invalidEmail: "Geben Sie eine gültige E-Mail-Adresse ein.",
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
      title: "Mendo më zgjuar. Ndërto më mirë. Rritu më tej.",
      subtitle: "Zgjidhje digjitale, dizajni dhe të dhënash të ndërtuara rreth biznesit tuaj.",
      servicesCta: "Shiko Shërbimet",
      contactCta: "Të Punojmë Bashkë",
      brandLine: "MENDO. DIZAJNO. ANALIZO. RRITU.",
    },
    services: {
      eyebrow: "Shërbimet",
      title: "Aftësi digjitale të fokusuara për biznese në rritje.",
      intro: "Think Solutions bashkon web, dizajn, të dhëna dhe mbështetje praktike biznesi.",
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
    search: {
      title: "Çfarë po kërkoni?",
      placeholder: "Kërko shërbimet...",
      clear: "Pastro",
      noResults: "Nuk u gjet asnjë shërbim. Provoni një kërkim tjetër.",
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
      eyebrow: "Procesi",
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
    contact: {
      eyebrow: "Kontakt",
      title: "Filloni një bisedë të qartë.",
      intro: "Na tregoni çfarë ju duhet. Formulari mund të lidhet më vonë me API ose shërbim emaili.",
      fields: {
        name: "Emri",
        email: "Email",
        company: "Kompania",
        service: "Shërbimi",
        message: "Mesazhi",
      },
      placeholders: {
        name: "Emri juaj",
        email: "ju@example.com",
        company: "Emri i kompanisë",
        message: "Na tregoni për projektin ose nevojën e biznesit",
      },
      serviceOptions: ["Web Design", "Menaxhim i Rrjeteve Sociale", "Zgjidhje për të Dhëna", "UI/UX & Dizajn Grafik", "Mbështetje Biznesi", "Tjetër"],
      submit: "Fillo Projektin",
      success: "Formulari u validua. Lidheni API-në ose emailin tuaj për ta dërguar kërkesën.",
      required: "Kjo fushë është e detyrueshme.",
      invalidEmail: "Shkruani një email të vlefshëm.",
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
      title: "Размислувај попаметно. Гради подобро. Расти понатаму.",
      subtitle: "Дигитални, дизајн и дата решенија создадени околу вашиот бизнис.",
      servicesCta: "Истражи услуги",
      contactCta: "Да соработуваме",
      brandLine: "МИСЛИ. ДИЗАЈНИРАЈ. АНАЛИЗИРАЈ. РАСТИ.",
    },
    services: {
      eyebrow: "Услуги",
      title: "Фокусирани дигитални способности за бизниси во раст.",
      intro: "Think Solutions комбинира веб, дизајн, податоци и практична бизнис поддршка.",
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
    search: {
      title: "Што барате?",
      placeholder: "Пребарај услуги...",
      clear: "Исчисти",
      noResults: "Не се пронајдени услуги. Обидете се со друго пребарување.",
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
      eyebrow: "Процес",
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
    contact: {
      eyebrow: "Контакт",
      title: "Започнете јасен разговор.",
      intro: "Кажете ни што ви треба. Формата подоцна може да се поврзе со API или email сервис.",
      fields: {
        name: "Име",
        email: "Е-пошта",
        company: "Компанија",
        service: "Услуга",
        message: "Порака",
      },
      placeholders: {
        name: "Вашето име",
        email: "vie@example.com",
        company: "Име на компанија",
        message: "Опишете го проектот или бизнис потребата",
      },
      serviceOptions: ["Веб дизајн", "Менаџирање на социјални медиуми", "Дата решенија", "UI/UX & графички дизајн", "Бизнис поддршка", "Друго"],
      submit: "Започни проект",
      success: "Формата е валидирана. Поврзете API или email сервис за испраќање на барањето.",
      required: "Ова поле е задолжително.",
      invalidEmail: "Внесете валидна е-пошта.",
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
