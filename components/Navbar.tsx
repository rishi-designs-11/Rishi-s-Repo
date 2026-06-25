"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["Overview", "#overview"],
  ["Partners", "#partners"],
  ["Recognitions", "#recognitions"],
  ["Portfolio", "#portfolio"],
  ["Manufacturing", "#manufacturing"],
  ["Investors", "#investors"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <a href="#top" aria-label="India Glycols Limited home" className="logo-wrap">
        <Image src="/images/brand-mark-white.png" alt="IGL Potable Spirits" width={54} height={54} priority />
      </a>
      <nav aria-label="Primary navigation" className={open ? "open" : ""}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="mobile-contact" href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </nav>
      <a className="nav-contact" href="#contact">Contact</a>
      <button className="menu-button" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label="Toggle menu">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
