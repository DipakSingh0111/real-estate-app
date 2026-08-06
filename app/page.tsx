"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

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
const properties = propertiesData.properties as Property[];
const testimonials = propertiesData.testimonials as Testimonials[];

function RevealSection({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  const featured = properties
    .filter((property) => property.featured)
    .slice(0, 4);

  const cardGridVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: reduceMotion ? {} : { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <>
      {/* Hero */}
      <Hero cities={cities} />
      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 pt-2 pb-6 mt-4">
        {/* Section Header */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
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
        </motion.div>

        {/* Property Grid */}
        <motion.div
          variants={cardGridVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((property) => (
            <motion.div key={property.id} variants={cardVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </motion.div>

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
      <RevealSection>
        <WhoWeServe />
      </RevealSection>
      {/* Browse by City */}
      <RevealSection>
        <BrowseByCity />
      </RevealSection>
      {/* Latest Projects */}
      <RevealSection>
        <LatestProjects />
      </RevealSection>

      {/* Property Services */}
      <RevealSection>
        <PropertyServices />
      </RevealSection>
      {/* InvestmentOpportunities */}
      <RevealSection>
        <Properties />
      </RevealSection>
      {/* Testimonials */}
      {/* `PropertyProcess */}
      <RevealSection>
        <PropertyProcess />
      </RevealSection>
      {/* Blogs */}
      <RevealSection>
        <BlogInsights />
      </RevealSection>

      {/* FAQ */}
      <RevealSection>
        <FaqSection />
      </RevealSection>
      {/* Book Site Visit */}
      <RevealSection>
        <BookSiteVisit />
      </RevealSection>
      {/* Testimonials */}
      <RevealSection>
        <Testimonial testimonials={testimonials} />
      </RevealSection>
      {/* Clients */}
      <RevealSection>
        <LogoSlider />
      </RevealSection>
    </>
  );
}
