import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { services } from "../data/services";
import type { translations } from "../data/translations";
import { ServiceCard } from "./ServiceCard";

type ServiceSearchProps = {
  copy: (typeof translations)["en"];
};

export function ServiceSearch({ copy }: ServiceSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const filteredServices = useMemo(() => {
    if (!normalizedQuery) return services;

    return services.filter((service) => {
      const serviceCopy = copy.services.items[service.id];
      const searchableText = [serviceCopy.title, serviceCopy.description, ...service.keywords].join(" ").toLowerCase();
      return searchableText.includes(normalizedQuery);
    });
  }, [copy.services.items, normalizedQuery]);

  return (
    <section className="section section--tinted" id="service-search">
      <div className="search-panel">
        <div className="search-panel__header">
          <h2>{copy.search.title}</h2>
          <div className="search-box">
            <Search size={18} aria-hidden="true" />
            <label className="sr-only" htmlFor="service-search-input">
              {copy.search.placeholder}
            </label>
            <input
              id="service-search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={copy.search.placeholder}
            />
            {query ? (
              <button className="search-box__clear" type="button" onClick={() => setQuery("")}>
                <X size={16} aria-hidden="true" />
                <span>{copy.search.clear}</span>
              </button>
            ) : null}
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="search-results">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                title={copy.services.items[service.id].title}
                description={copy.services.items[service.id].description}
                cta={copy.common.learnMore}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">{copy.search.noResults}</p>
        )}
      </div>
    </section>
  );
}
