"use client";

import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  onContact: () => void;
}

export default function Navbar({ onContact }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleContactClick(e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(false);
    onContact();
  }

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="ANU-Q Technologies home">
          <Image src="/logo-icon.webp" alt="" width={52} height={52} priority />
          <span className="brand-copy">
            <strong>ANU-Q</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#what-we-do">What We Do</a>
          <a href="#work">Our Work</a>
          <a href="#about">About</a>
        </nav>

        <a className="btn btn-primary nav-cta" href="#contact" onClick={handleContactClick}>
          Tell us what&#39;s not working <span aria-hidden="true">→</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav className={`mobile-nav${menuOpen ? " open" : ""}`} id="mobile-menu" aria-label="Mobile navigation">
        <a href="#what-we-do" onClick={() => setMenuOpen(false)}>What We Do</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a className="btn btn-primary" href="#contact" onClick={handleContactClick}>
          Tell us what&#39;s not working →
        </a>
      </nav>
    </header>
  );
}
