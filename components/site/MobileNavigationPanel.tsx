"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./Navigation.module.scss";

type NavigationLink = { label: string; href: string };

type MobileNavigationPanelProps = {
  links: NavigationLink[];
  open: boolean;
  onClose: () => void;
};

export function MobileNavigationPanel({ links, open, onClose }: MobileNavigationPanelProps) {
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          className={styles.menuPanel}
          id="portfolio-navigation"
          aria-hidden={!open}
          initial={reducedMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a href={link.href} key={link.href} onClick={onClose}>
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
            <a className={styles.mobileContact} href="#contact" onClick={onClose}>
              <span>05</span>
              Let’s talk
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
