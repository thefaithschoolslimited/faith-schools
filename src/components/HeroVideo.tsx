import { useEffect, useRef, useState } from "react";

type HeroVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

/**
 * Background video that only starts downloading once the hero is actually on
 * screen and the browser is idle — visitors first see the lightweight poster.
 */
export function HeroVideo({ src, poster, className }: HeroVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Respect data-saver and reduced-motion preferences.
    const conn = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let idleId: number | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = () => setShouldLoad(true);
        const w = window as unknown as {
          requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
          setTimeout: (cb: () => void, ms: number) => number;
        };
        idleId = w.requestIdleCallback
          ? w.requestIdleCallback(start, { timeout: 2500 })
          : w.setTimeout(start, 600);
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (idleId !== undefined) window.clearTimeout(idleId);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const v = videoRef.current;
    if (!v) return;
    v.load();
    const onPlayable = () => {
      setReady(true);
      void v.play().catch(() => undefined);
    };
    v.addEventListener("canplay", onPlayable, { once: true });
    return () => v.removeEventListener("canplay", onPlayable);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
        decoding="async"
      />
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
