"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import propertiesData from "./data/properties.json";
import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";
import type { Property, Testimonials } from "@/types/property";
import WhoWeServe from "./components/WhoWeServe";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "./components/Testimonial";
import type {} from "@/types/property";

const properties = propertiesData.Properties as Property[];
const testimonials = propertiesData.testimonials as Testimonials[];

export default function HomePage() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  const cityStats = cities.map((city) => ({
    city,
    count: properties.filter((p) => p.city === city).length,
  }));

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cityProperties = selectedCity
    ? properties.filter((p) => p.city === selectedCity)
    : [];

  const handleCityClick = (city: string) => {
    setSelectedCity((prev) => (prev === city ? null : city));
  };

  const scrollSlider = (direction: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero cities={cities} />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Featured Properties
            </h2>
          </div>
          <Link
            href="/properties"
            className="hidden text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4 sm:block"
          >
            View all properties →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <Link
          href="/properties"
          className="mt-8 block text-center text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4 sm:hidden"
        >
          View all properties →
        </Link>
      </section>

      <WhoWeServe />

      <section className="border-t border-ink/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                Browse by City
              </h2>
              <p className="mt-2 text-sm text-ink/50">
                Tap a city to see its listings right here.
              </p>
            </div>

            {/* Slider nav arrows */}
            <div className="hidden flex-shrink-0 gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scrollSlider("left")}
                aria-label="Scroll left"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition hover:border-brass hover:text-brass-dark"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("right")}
                aria-label="Scroll right"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/50 transition hover:border-brass hover:text-brass-dark"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Horizontal city slider */}
          <div
            ref={sliderRef}
            className="scrollbar-hide mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cityStats.map(({ city, count }) => {
              const isActive = selectedCity === city;
              return (
                <button
                  key={city}
                  type="button"
                  onClick={() => handleCityClick(city)}
                  className={`group w-28 flex-shrink-0 snap-start rounded-xl border p-3 text-left transition sm:w-32 ${
                    isActive
                      ? "border-brass bg-paper shadow-sm"
                      : "border-ink/10 hover:border-brass hover:bg-paper"
                  }`}
                >
                  <p
                    className={`font-display text-sm font-semibold transition ${
                      isActive
                        ? "text-brass-dark"
                        : "text-ink group-hover:text-brass-dark"
                    }`}
                  >
                    {city}
                  </p>
                  <p className="mt-0.5 font-mono text-[11px] text-ink/50">
                    {count} listing{count > 1 ? "s" : ""}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Inline city detail panel */}
          <AnimatePresence mode="wait">
            {selectedCity && (
              <motion.div
                key={selectedCity}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-8 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brass-dark">
                        Showing listings in
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
                        {selectedCity}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedCity(null)}
                      aria-label="Close"
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/50 transition hover:border-brass hover:text-brass-dark"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {cityProperties.length > 0 ? (
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {cityProperties.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                      ))}
                    </div>
                  ) : (
                    <p className="mt-8 text-sm text-ink/50">
                      No listings found in {selectedCity} right now.
                    </p>
                  )}

                  <Link
                    href={`/properties?city=${encodeURIComponent(selectedCity)}`}
                    className="mt-8 inline-flex text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4"
                  >
                    View all {selectedCity} properties →
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 rounded-3xl bg-pine px-8 py-14 text-paper sm:grid-cols-3 sm:px-14">
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              100%
            </p>
            <p className="mt-2 text-sm text-paper/70">
              RERA-verified on every listing
            </p>
          </div>
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              12
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Cities with active agents
            </p>
          </div>
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              ₹0
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Buyer-side brokerage — deal direct with the builder
            </p>
          </div>
        </div>
      </section>
      <Testimonial testimonials={testimonials} />
    </>
  );
}
