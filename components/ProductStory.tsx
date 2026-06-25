"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const products = [
  { name: "Soulmate Whisky", type: "Whisky", note: "A balanced premium blend with smooth oak warmth.", color: "#B89247" },
  { name: "Amazing Vodka", type: "Vodka", note: "Clean, crisp and confidently contemporary.", color: "#6888a7" },
  { name: "Beach House Rum", type: "Rum", note: "Golden character inspired by unhurried escapes.", color: "#b56d36" },
  { name: "Zumba Rum", type: "Spiced Rum", note: "A vibrant rhythm of spice and rich molasses.", color: "#9a4d2f" },
  { name: "Bunty Rum", type: "Dark Rum", note: "Distinctive character, crafted for familiar occasions.", color: "#c18a46" }
];

export default function ProductStory() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(false);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!section.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".product-scene", { scale: 1.08 }, { scale: 1, ease: "none", scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 1.2 } });
    }, section);
    return () => ctx.revert();
  }, []);
  const move = (dir: number) => setActive(v => (v + dir + products.length) % products.length);
  const item = products[active];
  return (
    <section ref={section} id="products" className="products-section" style={{ "--accent": item.color } as React.CSSProperties}>
      <div className="product-scene"><Image src="/images/product-lineup.png" alt="Premium spirits portfolio" fill sizes="100vw" className="object-cover" priority /></div>
      <div className="product-shade" />
      <div className="product-copy page-width">
        <p className="kicker">Our products</p>
        <h2>Crafted for<br />Every Occasion.</h2>
        <p>A diverse portfolio of premium spirits, meticulously crafted to deliver exceptional quality, taste and experience.</p>
        <button className="outline-button" onClick={() => setModal(true)}>Explore all products <ArrowRight size={14} /></button>
      </div>
      <div className="product-nav page-width" aria-label="Product carousel controls">
        <button onClick={() => move(-1)} aria-label="Previous product"><ArrowLeft /></button>
        <AnimatePresence mode="wait">
          <motion.div key={item.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            <span>{String(active + 1).padStart(2, "0")} / 05</span><strong>{item.name}</strong><small>{item.note}</small>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => move(1)} aria-label="Next product"><ArrowRight /></button>
      </div>
      <div className="spirit-categories page-width">
        {[['Whisky','Premium blends for true connoisseurs.'],['Vodka','Smooth, crisp and richly refined.'],['Rum','Distinctive character, crafted to perfection.'],['ENA','Extra Neutral Alcohol for diverse applications.']].map(([title,copy]) => <div key={title}><span className="spirit-icon" /><span><b>{title}</b><small>{copy}</small></span></div>)}
      </div>
      <AnimatePresence>
        {modal && <motion.div className="product-modal" role="dialog" aria-modal="true" aria-label={`${item.name} details`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="modal-close" onClick={() => setModal(false)} aria-label="Close product details"><X /></button>
          <motion.div className="modal-card" initial={{ scale: .95, y: 30 }} animate={{ scale: 1, y: 0 }}>
            <div className="modal-visual"><Image src="/images/product-lineup.png" alt="IGL spirits collection" fill sizes="50vw" className="object-cover" /></div>
            <div className="modal-copy"><p className="kicker">{item.type}</p><h3>{item.name}</h3><p>{item.note} Built on IGL&apos;s integrated manufacturing expertise and rigorous quality systems.</p><a href="#contact" onClick={() => setModal(false)}>Distribution enquiry <ArrowRight size={15} /></a></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
