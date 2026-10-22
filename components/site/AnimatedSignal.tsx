"use client";

import { useEffect, useRef } from "react";
import type { AnimeInstance } from "animejs";
import styles from "./Hero.module.scss";

export function AnimatedSignal({ text }: { text: string }) {
  const letters = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animation: AnimeInstance | undefined;
    let cancelled = false;

    import("animejs").then(({ default: anime }) => {
      if (cancelled) return;
      const targets = letters.current.filter((letter): letter is HTMLSpanElement => Boolean(letter));
      animation = anime({
        targets,
        opacity: [0.2, 1],
        translateY: [7, 0],
        delay: anime.stagger(22),
        duration: 460,
        easing: "easeOutQuad",
      });
    });

    return () => {
      cancelled = true;
      animation?.pause();
    };
  }, []);

  return (
    <span className={styles.signal} aria-label={text}>
      <span className={styles.visuallyHidden}>{text}</span>
      <span aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <span
            className={styles.signalLetter}
            key={`${character}-${index}`}
            ref={(node) => {
              letters.current[index] = node;
            }}
          >
            {character === " " ? "\u00a0" : character}
          </span>
        ))}
      </span>
    </span>
  );
}
