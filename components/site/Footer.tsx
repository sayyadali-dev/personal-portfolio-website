import { ArrowUpRight } from "lucide-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <p>Curiosity in practice.<br /><span>Progress in motion.</span></p>
        <a href="#top" className={styles.backToTop}>
          Back to top <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <div className={styles.footerMeta}>
        <span>© 2026 Sayyad Ali</span>
        <span>Frontend · React · WordPress</span>
        <a href="mailto:sayyadali.dev@gmail.com">Say hello <ArrowUpRight size={13} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
