"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.25,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        anchors: true,
        autoRaf: true,
      }}
    >
      <ScrollToTopOnNavigate />
      <AnchorOffsetHandler />
      {children}
    </ReactLenis>
  );
}

// Enhance anchor behavior to account for the sticky navbar height
export function AnchorOffsetHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href") || "";
      if (!hash || hash === "#") return;

      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      // Measure sticky header height (assumes header is sticky top-0)
      const header = document.querySelector("header.sticky");
      const offset = header ? (header as HTMLElement).offsetHeight : 0;

      // Use lenis to scroll to element top minus header height
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 8; // small gap
      lenis.scrollTo(top, { immediate: false });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}
