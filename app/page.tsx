"use client";

import Link from "next/link";

import propertiesData from "../data/properties.json";
import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";
import WhoWeServe from "./components/about";
import Testimonial from "./components/Testimonial";
import LatestProjects from "./components/ui/latestProject";
import LogoSlider from "./components/ui/LogoSlider";

import type { Property, Testimonials } from "@/types/property";
import BrowseByCity from "./components/ui/BrowseByCity";
import PropertyServices from "./components/ui/PropertyServices";
import Properties from "./components/ui/Properties";
import BlogInsights from "./components/BlogInsights";
import PropertyProcess from "./components/ui/PropertyProcess";
import FaqSection from "./components/ui/FaqSection";
import BookSiteVisit from "./components/ui/BookSiteVisit";
const properties = propertiesData.Properties as Property[];
const testimonials = propertiesData.testimonials as Testimonials[];

export default function HomePage() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  const featured = properties
    .filter((property) => property.featured)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <Hero cities={cities} />
      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 pt-2 pb-6 mt-4">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            {/* Main Title with Volkhov Font */}
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              High<span className="text-[#B8863D]">Lights</span>
            </h2>

            {/* Subtitle */}
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore a curated selection of our finest properties, each
              offering a unique blend of luxury, comfort, and architectural
              elegance.
            </p>
          </div>

          {/* Desktop Action Link */}
          <Link
            href="/properties"
            className="group hidden items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-cyan-600 sm:inline-flex"
          ></Link>
        </div>

        {/* Property Grid (4 Cards per row) */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Mobile Action Link */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            View all properties →
          </Link>
        </div>
      </section>
      {/* About */}
      <WhoWeServe />
      {/* Browse by City */}
      <BrowseByCity />
      {/* Latest Projects */}
      <LatestProjects />

      {/* Property Services */}
      <PropertyServices />
      {/* InvestmentOpportunities */}
      <Properties />
      {/* Testimonials */}
      {/* `PropertyProcess */}
      <PropertyProcess />
      {/* Blogs */}
      <BlogInsights />

      {/* FAQ */}
      <FaqSection />
      {/* Book Site Visit */}
      <BookSiteVisit />
      {/* Testimonials */}
      <Testimonial testimonials={testimonials} />
      {/* Clients */}
      <LogoSlider />
    </>
  );
}
