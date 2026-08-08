"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import {
  getRealEstatePageData,
  type HomePageData,
} from "@/lib/getRealEstateData";
import { templateImage } from "@/lib/templateImages";

const properties =
  getRealEstatePageData<HomePageData>("home").CitiesWeServe?.resolvedData ?? [];

const cityNames = [
  "Delhi",
  "New Delhi",
  "Gurgaon",
  "Gurugram",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Hyderabad",
  "Kolkata",
  "Pune",
] as const;

const cityImages: Record<string, string> = Object.fromEntries(
  cityNames.map((name, index) => [name, templateImage(index)]),
);

const defaultCityImage = templateImage(0);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function BrowseByCity() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cities = [
    ...new Set(properties.map((p) => p.city).filter(Boolean)),
  ].sort();

  // Top 8 Cities
  const cityStats = cities
    .map((city) => ({
      city,
      count: properties.filter((p) => p.city === city).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

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
    const scrollAmount = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F8F9FA] py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-between gap-4"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-stone-500">
              EXPLORE BY LOCATION
            </span>
            <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Find Properties in Top Cities
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollCities("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              suppressHydrationWarning
              className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-900 shadow-lg transition hover:border-slate-400 hover:bg-[#F7F2E6] active:scale-95 disabled:opacity-30 cursor-pointer ring-1 ring-slate-200"
            >
              <span className="text-1xl font-black leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={() => scrollCities("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              suppressHydrationWarning
              className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg transition hover:border-slate-400 hover:bg-[#F7F2E6] active:scale-95 disabled:opacity-30 cursor-pointer ring-1 ring-slate-200"
            >
              <span className="text-1xl font-black leading-none">→</span>
            </button>
          </div>
        </motion.div>

        {/* Carousel Slider Container */}
        <div className="overflow-hidden">
          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex items-center gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {cityStats.map(({ city, count }) => (
              <motion.div
                key={city}
                variants={cardVariants}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] xl:w-[calc(20%-0.8rem)] flex-shrink-0"
              >
                <Link
                  href={`/properties?city=${encodeURIComponent(city)}`}
                  className="group block overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-md cursor-pointer"
                >
                  {/* Square Image Box */}
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <Image
                      src={cityImages[city] || defaultCityImage}
                      alt={city}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Text Container */}
                  <div className="p-3.5 text-left">
                    <h3 className="truncate text-sm font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {city}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 font-medium">
                      {count} Properties
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
