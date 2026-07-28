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
import InvestmentOpportunities from "./components/ui/InvestmentOpportunities";
import BlogInsights from "./blog/page";
import PropertyProcess from "./components/ui/PropertyProcess";
import FaqSection from "./components/ui/FaqSection";
import BookSiteVisit from "./components/ui/BookSiteVisit";
import ContactInformation from "./components/ui/ContactInformation";

const properties = propertiesData.Properties as Property[];
const testimonials = propertiesData.testimonials as Testimonials[];

export default function HomePage() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  const featured = properties
    .filter((property) => property.featured)
    .slice(0, 6);

  return (
    <>
      {/* Hero */}
      <Hero cities={cities} />
      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-6 pt-2 pb-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink">
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
      {/* About */}
      <WhoWeServe />
      {/* Browse by City */}
      <BrowseByCity />
      {/* Latest Projects */}
      <LatestProjects />

      {/* Property Services */}
      <PropertyServices />
      {/* InvestmentOpportunities */}
      <InvestmentOpportunities />
      {/* Testimonials */}
      {/* `PropertyProcess */}
      <PropertyProcess />
      {/* Blogs */}
      <BlogInsights />
      {/* FAQ */}
      <FaqSection />
      {/* Book Site Visit */}
      <BookSiteVisit />
      {/* Contact Information */}
      <ContactInformation />
      {/* Testimonials */}
      <Testimonial testimonials={testimonials} />
      {/* Clients */}
      <LogoSlider />
    </>
  );
}
