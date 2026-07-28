"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

import propertiesData from "../../../data/properties.json";
import type { Property } from "@/types/property";

const properties = propertiesData.Properties as Property[];

const cityIcons: Record<string, string> = {
  Mumbai: "/icons/Mumbai.png",
  "New Delhi": "/icons/NewDelhi.png",
  Bengaluru: "/icons/banglore.png",
  Chennai: "/icons/Chennai.png",
  Hyderabad: "/icons/hyderabad.jpg",
  Kolkata: "/icons/Kolkata.jpg",
  Ahmedabad: "/icons/Ahmedabad.webp",
  Pune: "/icons/Pune.webp",
  Gurugram: "/icons/gurgaon.webp",
  Noida: "/icons/Noida.png",
};

export default function BrowseByCity() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cities = [...new Set(properties.map((p) => p.city))].sort();

  const cityStats = cities
    .map((city) => ({
      city,
      count: properties.filter((p) => p.city === city).length,
    }))
    .sort((a, b) => b.count - a.count);

  const maxCount = Math.max(...cityStats.map((c) => c.count), 1);

  const updateScrollState = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollCities = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left:
        direction === "left"
          ? -sliderRef.current.clientWidth * 0.8
          : sliderRef.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#FAF7F1] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading Section */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8863D]">
              Pan-India Inventory
            </span>
            <h2 className="font-display mt-1.5 text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
              Explore by Location
            </h2>
            <p className="mt-1 max-w-md text-xs sm:text-sm text-stone-500">
              Explore premium properties across India&apos;s top cities.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scrollCities("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="rounded-full border border-stone-200 bg-white p-2 text-stone-700 shadow-xs transition hover:border-[#B8863D] hover:text-[#B8863D] active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollCities("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="rounded-full border border-stone-200 bg-white p-2 text-stone-700 shadow-xs transition hover:border-[#B8863D] hover:text-[#B8863D] active:scale-95 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          {/* Edge Blur / Fades */}
          <div
            className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-[#FAF7F1] to-transparent transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-[#FAF7F1] to-transparent transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={sliderRef}
            className="scrollbar-hide flex items-stretch gap-4 overflow-x-auto scroll-smooth py-3 px-1"
          >
            {cityStats.map(({ city, count }, i) => {
              const fill = Math.max((count / maxCount) * 100, 10);
              return (
                <Link
                  key={city}
                  href={`/properties?city=${encodeURIComponent(city)}`}
                  className="group relative min-w-[210px] max-w-[210px] flex-shrink-0 rounded-2xl border border-stone-200/90 bg-white p-3.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/60 hover:shadow-lg hover:shadow-[#B8863D]/10"
                >
                  {/* Top Badge */}
                  {i === 0 && (
                    <span className="absolute -top-2.5 left-4 rounded-full bg-[#B8863D] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-xs">
                      Most Listed
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    {/* Fixed Image Container */}
                    <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-xl border border-stone-100 bg-stone-100 shadow-xs group-hover:scale-105 transition-transform duration-300">
                      {cityIcons[city] ? (
                        <Image
                          src={cityIcons[city]}
                          alt={city}
                          fill
                          sizes="48px"
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-[#FAF3E7] text-[#B8863D]">
                          <MapPin size={20} />
                        </div>
                      )}
                    </div>

                    {/* City Info */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display truncate text-sm font-bold text-stone-900 transition group-hover:text-[#B8863D]">
                        {city}
                      </h3>
                      <p className="text-[11px] font-medium text-stone-500 mt-0.5">
                        {count} Listing{count !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  {/* Progress / Inventory Bar */}
                  <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-stone-100">
                    <div
                      className="h-full rounded-full bg-[#B8863D] transition-all duration-500 group-hover:bg-[#9C6F2E]"
                      style={{ width: `${fill}%` }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
