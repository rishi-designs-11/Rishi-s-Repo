"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, WheelEvent } from "react";

type JourneyItem = {
  year: string;
  fact: string;
};

export function JourneyTimeline({ items }: { items: JourneyItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>(".journey-card");
    const amount = firstCard ? firstCard.offsetWidth + 18 : Math.round(el.clientWidth * 0.72);
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const el = event.currentTarget;
    const delta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const atStart = el.scrollLeft <= 1;
    const atEnd = el.scrollLeft >= maxScroll - 1;

    if ((delta < 0 && atStart) || (delta > 0 && atEnd)) {
      return;
    }

    event.preventDefault();
    el.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <div className="journey-scroller">
      <button className="journey-arrow is-left" type="button" onClick={() => scrollByCard(-1)} aria-label="Scroll journey left">
        <ChevronLeft size={20} />
      </button>
      <div ref={trackRef} className="journey-track" onWheel={handleWheel} aria-label="IGL spirits journey timeline">
        {items.map((item) => (
          <article className="journey-card" key={item.year}>
            <strong>{item.year}</strong>
            <p>{item.fact}</p>
          </article>
        ))}
      </div>
      <button className="journey-arrow is-right" type="button" onClick={() => scrollByCard(1)} aria-label="Scroll journey right">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
