"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import data from "../../../data/properties.json";

type Project = {
  id: number;
  title: string;
  slug: string;
  builder: string;
  location: string;
  city: string;
  status: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  description: string;
};

const projects = data.projects as Project[];

const badgeText = (status: string) => {
  switch (status) {
    case "Ready to Move":
      return "COMPLETED";
    case "New Launch":
      return "NEW LAUNCH";
    case "Under Construction":
      return "UNDER CONSTRUCTION";
    case "Sold Out":
      return "SOLD OUT";
    default:
      return status.toUpperCase();
  }
};

export default function LatestProjects() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const offset = sliderRef.current.clientWidth * 0.8;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#faf8f4] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[5px] text-[#b58b46]">
              LATEST PROJECTS
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
              Homes and spaces we recently delivered.
            </h2>

            <p className="mt-2 text-sm max-w-2xl text-slate-500">
              A look at recent handovers — interiors, layouts, and finishes
              families move into.
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group px-2 sm:px-6">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-2 sm:left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 sm:p-3 text-slate-800 shadow-md transition-all duration-200 hover:bg-slate-950 hover:text-white hover:border-slate-950 active:scale-95"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-2 sm:right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-slate-200 bg-white/95 p-2.5 sm:p-3 text-slate-800 shadow-md transition-all duration-200 hover:bg-slate-950 hover:text-white hover:border-slate-950 active:scale-95"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Slider Wrapper */}
          <div className="overflow-hidden px-4 py-4">
            <div
              ref={sliderRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth"
            >
              {projects.slice(0, 8).map((project) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                  key={project.id}
                  className="min-w-[280px] max-w-[280px] sm:min-w-[300px] sm:max-w-[300px] snap-start flex-shrink-0"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/card block h-full"
                  >
                    <div className="h-full overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group-hover/card:shadow-xl flex flex-col justify-between">
                      <div>
                        {/* Image Banner */}
                        <div className="relative h-48 sm:h-52 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition duration-700 group-hover/card:scale-105"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                          <span className="absolute left-3.5 top-3.5 rounded-full bg-white/95 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-950 shadow-xs">
                            {badgeText(project.status)}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                          <p className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                            {project.city} · {project.builder}
                          </p>

                          <h3 className="mt-2 text-base font-bold text-slate-950 line-clamp-1 group-hover/card:text-[#b58b46] transition-colors">
                            {project.title}
                          </h3>

                          <p className="mt-1.5 text-xs leading-relaxed text-slate-500 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/viewsproject"
            className="group inline-flex items-center gap-2.5 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
