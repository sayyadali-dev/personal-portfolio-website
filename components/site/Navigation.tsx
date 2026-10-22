"use client";

import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import styles from "./Navigation.module.scss";

const MobileNavigationPanel = lazy(() =>
  import("./MobileNavigationPanel").then((module) => ({ default: module.MobileNavigationPanel })),
);

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLoaded, setMenuLoaded] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <a className={styles.identity} href="#top" aria-label="Sayyad Ali home">
        Sayyad Ali
      </a>

      <nav className={styles.desktopNav} aria-label="Main navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
        <a className={styles.contactLink} href="#contact">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls={menuOpen ? "portfolio-navigation" : undefined}
        onClick={() => {
          setMenuLoaded(true);
          setMenuOpen((open) => !open);
        }}
      >
        <span>{menuOpen ? "Close" : "Menu"}</span>
        {menuOpen ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
      </button>

      {menuLoaded && (
        <Suspense fallback={null}>
          <MobileNavigationPanel links={links} open={menuOpen} onClose={closeMenu} />
        </Suspense>
      )}
    </header>
  );
}
