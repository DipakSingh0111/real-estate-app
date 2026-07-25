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
    <section className="border-t border-ink/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brass-dark">
              Reviews
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              What Buyers &amp; Tenants Say
            </h2>
          </div>

          <div className="hidden flex-shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard("left")}
              disabled={!canScrollLeft}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition hover:border-brass hover:text-brass-dark disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/10 disabled:hover:text-ink/50"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("right")}
              disabled={!canScrollRight}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition hover:border-brass hover:text-brass-dark disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-ink/10 disabled:hover:text-ink/50"
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
              <figure
                key={t.id}
                data-card
                className="group relative flex w-[85%] flex-shrink-0 snap-start flex-col justify-between rounded-2xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brass/40 hover:shadow-xl hover:shadow-ink/10 sm:w-[46%] lg:w-[31%]"
              >
                <Quote
                  size={32}
                  className="text-brass/20 transition group-hover:text-brass/30"
                  fill="currentColor"
                />

                <blockquote className="mt-3 flex-1 font-display text-[15px] italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={
                        i < t.rating
                          ? "fill-brass text-brass"
                          : "fill-ink/10 text-ink/10"
                      }
                    />
                  ))}
                </div>

                <figcaption className="mt-4 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-pine text-xs font-semibold text-brass-light">
                    {initials(t.name)}
                  </span>
                  <span>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="mt-0.5 text-xs text-ink/50">{t.detail}</p>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent sm:hidden" />
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/50 disabled:opacity-30"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
            aria-label="Next"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink/50 disabled:opacity-30"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
