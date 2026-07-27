"use client";

import { useRef } from "react";
import Link from "next/link";
import propertiesData from "../data/properties.json";
import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";
import type { Property, Testimonials } from "@/types/property";
import WhoWeServe from "./components/about";
import {
  MapPin,
  Anchor,
  Castle,
  Coffee,
  Award,
  Building,
  Globe,
  Sun,
  Factory,
  ChevronLeft,
  LucideIcon,
  ChevronRight,
} from "lucide-react";
import Testimonial from "./components/Testimonial";
import LatestProjects from "./components/ui/latestProject";
import LogoSlider from "./components/ui/LogoSlider";

const properties = propertiesData.Properties as Property[];
const testimonials = propertiesData.testimonials as Testimonials[];

const cityIcons: Record<string, LucideIcon> = {
  Mumbai: Anchor,
  "New Delhi": Castle,
  Bengaluru: Coffee,
  Pune: Building,
  Gurugram: Building,
  Hyderabad: Globe,
  Kolkata: Award,
  Chennai: Sun,
  Ahmedabad: Factory,
};

export default function HomePage() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  const sliderRef = useRef<HTMLDivElement>(null);

  const cityStats = cities.map((city) => ({
    city,
    count: properties.filter((p) => p.city === city).length,
  }));

  const scrollCities = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const offset = sliderRef.current.clientWidth * 0.7;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero cities={cities} />
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-2">
        <div className="flex items-end justify-between">
          <div>
            <h2 className=" font-display text-3xl font-semibold text-ink">
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                Browse by City
              </h2>
              <p className="mt-2 text-sm text-ink/50">
                Select a city to explore its listings on the properties page.
              </p>
            </div>
          </div>
          <div className="relative mt-8 ">
            <button
              type="button"
              onClick={() => scrollCities("left")}
              aria-label="Scroll left"
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 text-ink shadow-sm transition hover:bg-slate-50 sm:p-3"
            >
              <ChevronLeft size={18} />
            </button>
            <div
              ref={sliderRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-10 py-2"
            >
              {cityStats.map(({ city, count }) => {
                const CityIcon = cityIcons[city] || MapPin;
                return (
                  <Link
                    key={city}
                    href={`/properties?city=${encodeURIComponent(city)}`}
                    className="snap-start min-w-[180px] max-w-[180px] flex-shrink-0 rounded-3xl border border-ink/10 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 text-brass">
                      <CityIcon size={22} />
                    </div>
                    <p className="mt-3 text-base font-semibold text-ink">
                      {city}
                    </p>
                    <p className="mt-1 text-xs text-ink/60">
                      {count} listing{count > 1 ? "s" : ""}
                    </p>
                  </Link>
                );
              })}
            </div>
            <button
              type="button"
              onClick={() => scrollCities("right")}
              aria-label="Scroll right"
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white p-2 text-ink shadow-sm transition hover:bg-slate-50 sm:p-3"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* Latest Project */}
      <LatestProjects />
      {/* Testimonial */}
      <Testimonial testimonials={testimonials} />
      {/* Logo section */}
      <LogoSlider />
    </>
  );
}
