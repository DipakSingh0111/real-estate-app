"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import type { Testimonials } from "@/types/property";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonial({
  testimonials,
}: {
  testimonials: Testimonials[];
}) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = card ? card.offsetWidth + 24 : 340;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-700/80">
              Reviews
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
              What Buyers &amp; Tenants Say
            </h2>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-amber-400 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              disabled={!canScrollRight}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-amber-400 hover:text-amber-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div
            ref={sliderRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                data-card
                className="group relative w-[88%] flex-shrink-0 snap-start rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-[48%] lg:w-[31%]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-amber-700">
                    Verified
                  </span>
                  <div className="flex items-center gap-1.5 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < t.rating
                            ? "fill-amber-500"
                            : "fill-slate-200 text-slate-200"
                        }
                      />
                    ))}
                  </div>
                </div>

                <Quote
                  size={28}
                  className="mt-6 text-amber-200"
                  fill="currentColor"
                />

                <p className="mt-4 text-sm leading-7 text-slate-700">
                  “{t.quote}”
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-slate-200/80 pt-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/10 text-xs font-semibold text-amber-700">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {t.name}
                    </p>
                    <p className="text-sm text-slate-500">{t.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-slate-50 to-transparent sm:block" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
