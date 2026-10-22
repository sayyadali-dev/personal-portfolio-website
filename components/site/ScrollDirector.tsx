"use client";

import { useEffect } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type NetworkInformation = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

/**
 * Defer the optional motion stack until the browser is idle. The page remains
 * fully usable without these enhancements and on reduced-motion/data-saver devices.
 */
export function ScrollDirector() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const network = navigator as NetworkInformation;
    const constrainedDevice = network.connection?.saveData || (network.deviceMemory ?? 8) <= 2;

    if (reducedMotion || constrainedDevice) return;

    const idleWindow = window as IdleWindow;
    let cancelled = false;
    let idleHandle: number | undefined;
    let timeoutHandle: number | undefined;
    let teardown = () => {};

    const initializeMotion = async () => {
      try {
        const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

        if (cancelled) return;

        gsap.registerPlugin(ScrollTrigger);
        const finePointer = window.matchMedia("(pointer: fine)").matches;

        const context = gsap.context(() => {
          gsap.to(".readingProgress", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.documentElement,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });

          gsap.to("[data-hero-image]", {
            yPercent: 15,
            scale: 0.92,
            ease: "none",
            scrollTrigger: {
              trigger: "#top",
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });

          document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
            if (element.getBoundingClientRect().top < window.innerHeight * 0.88) return;

            gsap.fromTo(
              element,
              { autoAlpha: 0, y: 22 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.72,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  once: true,
                },
              },
            );
          });
        });

        let stopLenis: (() => void) | undefined;

        // Smooth wheel scrolling is useful with a mouse, but touch devices keep native scrolling.
        if (finePointer) {
          try {
            const { default: Lenis } = await import("lenis");
            if (cancelled) {
              context.revert();
              return;
            }

            const lenis = new Lenis({
              autoRaf: false,
              anchors: true,
              lerp: 0.09,
              smoothWheel: true,
              wheelMultiplier: 0.85,
              touchMultiplier: 1,
            });
            const syncScroll = () => ScrollTrigger.update();
            const tick = (time: number) => lenis.raf(time * 1000);

            lenis.on("scroll", syncScroll);
            gsap.ticker.add(tick);
            gsap.ticker.lagSmoothing(0);
            stopLenis = () => {
              gsap.ticker.remove(tick);
              lenis.off("scroll", syncScroll);
              lenis.destroy();
            };
          } catch {
            // If this optional chunk fails, native scrolling and page content still work.
          }
        }

        teardown = () => {
          stopLenis?.();
          context.revert();
        };
      } catch {
        // Enhancement chunks are optional; preserve the fast, static page on load failure.
      }
    };

    if (idleWindow.requestIdleCallback) {
      idleHandle = idleWindow.requestIdleCallback(() => void initializeMotion(), { timeout: 1600 });
    } else {
      timeoutHandle = window.setTimeout(() => void initializeMotion(), 350);
    }

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
      teardown();
    };
  }, []);

  return <div className="readingProgress" aria-hidden="true" />;
}
