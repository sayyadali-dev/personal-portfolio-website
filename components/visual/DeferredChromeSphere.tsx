"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChromeSphere = dynamic(() => import("./ChromeSphere"), { ssr: false });

export function DeferredChromeSphere() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || connection?.saveData || (deviceMemory && deviceMemory <= 2)) return;

    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    let fallbackTimer: number | undefined;
    let idleId: number | undefined;

    if (idleWindow.requestIdleCallback) {
      idleId = idleWindow.requestIdleCallback(() => setReady(true), { timeout: 1600 });
    } else {
      fallbackTimer = window.setTimeout(() => setReady(true), 900);
    }

    return () => {
      if (idleId !== undefined) idleWindow.cancelIdleCallback?.(idleId);
      if (fallbackTimer !== undefined) window.clearTimeout(fallbackTimer);
    };
  }, []);

  return ready ? <ChromeSphere /> : null;
}
