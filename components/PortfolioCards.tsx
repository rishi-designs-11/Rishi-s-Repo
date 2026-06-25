"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type PortfolioItem = {
  eyebrow: string;
  title: string;
  body: string;
  brands: string;
};

export function PortfolioCards({ items }: { items: PortfolioItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      className="page-width portfolio-card-row"
      data-active={activeIndex === null ? undefined : activeIndex + 1}
      onMouseLeave={() => setActiveIndex(null)}
    >
      {items.map((item, index) => (
        <Reveal delay={index * 0.05} className="portfolio-card" key={item.title}>
          <article
            className="portfolio-card-inner"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <span className="portfolio-card-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="portfolio-card-content">
              <p>{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <span>{item.brands}</span>
              <small>{item.body}</small>
            </div>
            <div className="portfolio-card-collapsed" aria-hidden="true">
              <h3>{item.title}</h3>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <a className="portfolio-card-cta" href="#contact" aria-label={`Know more about ${item.title}`}>
              Know More <ArrowRight size={15} />
            </a>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
