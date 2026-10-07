import { ArrowLeft } from "lucide-react";
import type { Language } from "../data/translations";
import { translations } from "../data/translations";
import { projects, type Project } from "../data/Work";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const DRITE_GUIDE_IMAGES = {
  home: "/drite/drite0.jpeg",
  explore: "/drite/drite1.jpeg",
  saved: "/drite/drite2.jpeg",
  account: "/drite/drite3.jpeg",
  map: "/drite/drite4.jpeg",
};

const SOCIAL_MEDIA_ACCOUNTS = [
  {
    handle: "@petroliumz",
    focus: "Supercar culture",
    description: "A high-performance car page built around rare vehicles, design, and automotive culture.",
    image: "/social/petro.jpeg",
  },
  {
    handle: "@motoriunz",
    focus: "Motorcycle culture",
    description: "A motorcycle-focused page for riders and enthusiasts who follow machines, builds, and road culture.",
    image: "/social/moto.jpeg",
  },
  {
    handle: "@driteguide",
    focus: "Travel discovery",
    description: "The social presence for Dritë Guide, sharing Albania through practical travel ideas and local discoveries.",
    image: "/social/drite.jpeg",
  },
  {
    handle: "@pureballers23",
    focus: "Football community",
    description: "A football page built around current conversation, match culture, and the game people follow every day.",
    image: "/social/pure.jpeg",
  },
];

type CaseStudyPageProps = {
  projectSlug: string;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export function CaseStudyPage({ projectSlug, language, onLanguageChange }: CaseStudyPageProps) {
  const copy = translations[language];
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) return null;

  if (project.slug === "social-media-management") {
    return <SocialMediaCaseStudy project={project} language={language} onLanguageChange={onLanguageChange} />;
  }

  if (project.slug === "superstore-sales-dashboard") {
    return <SuperstoreCaseStudy project={project} language={language} onLanguageChange={onLanguageChange} />;
  }

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

      <main className="case-study-page">
        <header className="case-study-hero">
          <div className="case-study-hero__inner">
            <div className="case-study-hero__header-row">
              <a href="/our-work" className="case-study-back-link">
                <ArrowLeft size={18} aria-hidden="true" />
                Back to Our Work
              </a>
            </div>

            <div className="case-study-hero__content">
              <div className="case-study-hero__intro">
                <h1>{project.name}</h1>
                <p className="case-study-subtitle">{project.tagline}</p>
                <p className="case-study-description">
                  Dritë Guide is a modern travel app built to help people discover Albania beyond the obvious tourist spots.
                </p>
                <p className="case-study-description">
                  It brings beaches, restaurants, cafés, hotels, bars, cultural sites, hidden gems, and other local places
                  into one experience for discovery, trip planning, and recommendations.
                </p>
              </div>

              <div className="case-study-hero__visual">
                <img src={project.heroImage ?? DRITE_GUIDE_IMAGES.home} alt="Drite Guide home screen" />
              </div>
            </div>
          </div>
        </header>

        <section className="case-study-section case-study-section--intro">
          <div className="case-study-section__inner case-study-overview">
            <p>
              Planning a trip to Albania can mean bouncing between Google Maps, Instagram, TikTok, travel blogs, and messages
              from friends. The useful information is there, but it is scattered across too many places to become a simple
              plan.
            </p>
            <p>
              Dritë Guide gathers that discovery into one focused experience. Choose a city or category, find places that
              interest you, save them, and return to those choices when it is time to shape the trip.
            </p>
            <p>
              The product is not simply a directory of locations. It is a digital companion for experiencing Albania, built
              around local context, practical planning, and the small discoveries that make a journey personal.
            </p>
          </div>
        </section>

        <section className="case-study-story">
          <div className="case-study-story__row">
            <div className="case-study-story__copy">
              <p className="section-kicker">Discover</p>
              <h2>Start with the places that make a trip memorable.</h2>
              <p>
                The Explore view gives people a direct way into Albania's cities, coastal towns, cafés, hotels, beaches, and
                lesser-known stops. It replaces an open-ended search with a structured path through the places worth knowing.
              </p>
              <p>
                Familiar categories keep the interface quick to scan, while the destination cards make each choice feel visual
                and specific before users commit to a route. The goal is to surface the Albania visitors might otherwise miss.
              </p>
            </div>
            <div className="case-study-story__media">
              <img src={DRITE_GUIDE_IMAGES.explore} alt="Drite Guide explore screen" />
            </div>
          </div>

          <div className="case-study-story__row case-study-story__row--reverse">
            <div className="case-study-story__copy">
              <p className="section-kicker">Navigate</p>
              <h2>See the wider journey without losing the detail.</h2>
              <p>
                The map gives travellers a clearer sense of how places relate to one another across the country. Markers turn
                browsing into spatial planning, helping users notice nearby stops and build a more considered route.
              </p>
              <p>
                When a place feels right, it can be saved for later. That simple action turns inspiration into a personal
                shortlist instead of another screenshot or lost social post.
              </p>
            </div>
            <div className="case-study-story__media">
              <img src={DRITE_GUIDE_IMAGES.map} alt="Drite Guide interactive map" />
            </div>
          </div>

          <div className="case-study-story__collage">
            <div className="case-study-story__device-pair">
              <div className="case-study-story__media case-study-story__media--small">
                <img src={DRITE_GUIDE_IMAGES.saved} alt="Drite Guide saved places" />
              </div>
              <div className="case-study-story__media case-study-story__media--small">
                <img src={DRITE_GUIDE_IMAGES.account} alt="Drite Guide account screen" />
              </div>
            </div>
            <div className="case-study-story__copy case-study-story__copy--stacked">
              <p className="section-kicker">Return</p>
              <h2>Keep useful places close, even after the first search.</h2>
              <p>
                Saving places lets a casual browse become a shortlist. Account tools support people who want to carry that list
                across devices, follow other travellers, and discover recommendations through the community.
              </p>
              <p>
                The long-term rhythm is simple: discover, save, plan, explore, and share. That makes Dritë Guide more than a
                static catalogue; it becomes a growing travel discovery loop built specifically around Albania.
              </p>
            </div>
          </div>
        </section>

        <nav className="case-study-footer" aria-label="Case study navigation">
          <a href="/our-work" className="case-study-nav case-study-nav--back">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Our Work
          </a>
        </nav>
      </main>

      <Footer copy={copy} />
    </>
  );
}

const SUPERSTORE_GALLERY = [
  {
    image: "/data-solutions/superstore-dashboard.png",
    alt: "Power BI Superstore dashboard with summary metrics, state profit chart, customer table, and map",
    caption: "The overview combines headline KPIs, state-level profit, customer details, and geographic distribution.",
  },
  {
    image: "/data-solutions/superstore-state-filter.png",
    alt: "Power BI dashboard with the State filter expanded",
    caption: "The State slicer exposes sales by state and can be used alongside Region and Category filters.",
  },
  {
    image: "/data-solutions/superstore-customer-filter.png",
    alt: "Power BI dashboard filtered to customer John Murray",
    caption: "Filtering to John Murray updates the cards, profit chart, customer records, and map together.",
  },
];

type SuperstoreCaseStudyProps = {
  project: Project;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

function SuperstoreCaseStudy({ project, language, onLanguageChange }: SuperstoreCaseStudyProps) {
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

      <main className="case-study-page superstore-case-study">
        <header className="superstore-case-study__hero">
          <a href="/our-work" className="case-study-back-link">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Our Work
          </a>
          <p className="section-kicker">{project.category}</p>
          <h1>{project.name}</h1>
          <p className="superstore-case-study__tagline">{project.tagline}</p>
          <p className="superstore-case-study__intro">
            This Power BI report turns the Superstore order dataset into an interactive overview of sales and profitability.
            Region, state, and category slicers and a customer-name search make it possible to move from the full picture to
            individual customer records.
          </p>
        </header>

        <section className="superstore-case-study__overview">
          <div>
            <p className="section-kicker">Dashboard overview</p>
            <h2>See performance by state, then explore the records behind it.</h2>
          </div>
          <div className="superstore-case-study__metrics" aria-label="Dashboard summary metrics">
            <div><span>Total profit</span><strong>$286.40K</strong></div>
            <div><span>Total sales</span><strong>$2.30M</strong></div>
            <div><span>Discount</span><strong>1.6K</strong></div>
          </div>
          <p>
            In the unfiltered view, California and New York lead the profit chart at about $76.4K and $74.0K. The table
            lists customer IDs, names, and cities, while the map plots customer locations. Together, these views provide
            both a high-level comparison and a way to inspect individual entries.
          </p>
        </section>

        <section className="superstore-case-study__gallery" aria-label="Superstore dashboard screenshots">
          {SUPERSTORE_GALLERY.map((item) => (
            <figure key={item.image}>
              <img src={item.image} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </section>

        <section className="superstore-case-study__details">
          <article>
            <p className="section-kicker">Interactive filters</p>
            <h2>Compare regions, states, categories, and customers.</h2>
            <p>
              The report includes Region, State, and Category slicers, plus a Customer_Name search. The open state filter
              shows sales totals beside state names, making it easy to choose a location and see the rest of the report
              respond to that selection.
            </p>
          </article>
          <article>
            <p className="section-kicker">Customer-level view</p>
            <h2>Follow one customer through the report.</h2>
            <p>
              With John Murray selected, the dashboard shows $7.63K in sales, $1.57K in profit, and 2.4 in discounts. Its
              profit chart includes both positive and negative state results—for example, $1,228.18 in New York and losses
              in Texas and Ohio—alongside 13 matching records and their map locations.
            </p>
          </article>
        </section>

        <section className="superstore-case-study__source">
          <p className="section-kicker">Source data</p>
          <h2>Bring us the data you have. We’ll help make sense of it.</h2>
          <p>
            Even when data is messy or spread across different files, we can organize it and turn it into clear, useful
            insights. For this project, we shaped an existing Superstore dataset—with order, customer, location, and product
            details—into an interactive Power BI report.
          </p>
        </section>

        <nav className="case-study-footer" aria-label="Case study navigation">
          <a href="/our-work" className="case-study-nav case-study-nav--back">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Our Work
          </a>
        </nav>
      </main>

      <Footer copy={copy} />
    </>
  );
}

type SocialMediaCaseStudyProps = {
  project: Project;
  language: Language;
  onLanguageChange: (language: Language) => void;
};

function SocialMediaCaseStudy({ project, language, onLanguageChange }: SocialMediaCaseStudyProps) {
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

      <main className="social-case-study">
        <header className="social-case-study__hero">
          <div className="case-study-hero__header-row">
            <a href="/our-work" className="case-study-back-link">
              <ArrowLeft size={18} aria-hidden="true" />
              Back to Our Work
            </a>
          </div>

          <div className="social-case-study__hero-grid">
            <div>
              <h1>{project.name}</h1>
              <p className="social-case-study__tagline">{project.tagline}</p>
              <p className="social-case-study__description">
                We manage niche social communities with a tailored content direction for each audience, from performance cars
                and motorcycles to Albanian travel and football culture.
              </p>
              <p className="social-case-study__description">
                The work focuses on a consistent point of view, relevant publishing, and content that gives every page its own
                voice while keeping the audience engaged.
              </p>
            </div>

            <div className="social-case-study__gallery" aria-label="Managed social media accounts">
              {SOCIAL_MEDIA_ACCOUNTS.map((account) => (
                <figure key={account.handle}>
                  <img src={account.image} alt={`${account.handle} Instagram profile`} />
                </figure>
              ))}
            </div>
          </div>
        </header>

        <section className="social-case-study__section social-case-study__section--intro">
          <p>
            Good social management starts with knowing who a page is for. Each account has its own subject, visual language,
            and community, so the strategy is shaped around what that particular audience wants to follow and share.
          </p>
          <p>
            Across these pages, we balance recognisable content formats with enough variety to keep the feeds alive, useful,
            and true to their niche.
          </p>
        </section>

        <section className="social-case-study__section social-case-study__section--accounts">
          <div className="social-case-study__section-heading">
            <h2>Four communities, each with its own voice.</h2>
            <p>The accounts are managed as distinct editorial spaces, not as copies of the same content plan.</p>
          </div>

          <div className="social-case-study__account-list">
            {SOCIAL_MEDIA_ACCOUNTS.map((account) => (
              <article key={account.handle} className="social-case-study__account">
                <span>{account.focus}</span>
                <h3>{account.handle}</h3>
                <p>{account.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="social-case-study__section social-case-study__section--closing">
          <h2>Built for relevance, not just reach.</h2>
          <p>
            The strongest pages feel native to the communities they serve. That means understanding the subject, respecting the
            audience's taste, and publishing with a rhythm that gives people a reason to come back.
          </p>
        </section>

        <nav className="case-study-footer" aria-label="Case study navigation">
          <a href="/our-work" className="case-study-nav case-study-nav--back">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Our Work
          </a>
        </nav>
      </main>

      <Footer copy={copy} />
    </>
  );
}
