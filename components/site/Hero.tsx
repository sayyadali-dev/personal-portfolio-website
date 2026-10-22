import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatedSignal } from "./AnimatedSignal";
import { DeferredChromeSphere } from "../visual/DeferredChromeSphere";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.ambient} aria-hidden="true" />
      <div className={styles.shader} aria-hidden="true">
        <DeferredChromeSphere />
      </div>

      <figure className={styles.visual} data-hero-image>
        <Image
          className={styles.portrait}
          src="/images/sayyad-portrait.jpg"
          alt="Portrait of Sayyad Ali in a suit"
          fill
          preload
          sizes="(max-width: 700px) 63vw, (max-width: 1422px) 36vw, 32rem"
          quality={75}
        />
        <div className={styles.imageShade} aria-hidden="true" />
        <figcaption className={styles.caption}>
          <span className={styles.captionDot} aria-hidden="true" />
          <span>Pakistan · Frontend development</span>
        </figcaption>
      </figure>

      <div className={styles.container}>
        <div className={styles.copy}>
          <p className="eyebrow">Frontend developer <span className={styles.eyebrowDivider}>/</span> React <span className={styles.eyebrowDivider}>/</span> WordPress</p>
          <AnimatedSignal text="Curiosity · learning · making" />
          <h1 id="hero-title">
            <span>Sayyad</span>
            <span>Ali</span>
          </h1>
          <p className={styles.intro}>
            I build responsive digital experiences with React, JavaScript, and WordPress, and I
            keep learning with every project.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#projects">
              Explore selected work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className={styles.secondaryAction} href="#about">
              The person behind the work <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footnote}>
        <span>PAKISTAN</span>
        <span>DEVELOPMENT · PRACTICE · PROGRESS</span>
      </div>
      <a className={styles.scrollCue} href="#about" aria-label="Scroll to the next section">
        <span>Scroll to discover</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
