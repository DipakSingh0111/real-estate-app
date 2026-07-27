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

const badgeColor = (status: string) => {
  switch (status) {
    case "Ready to Move":
      return "bg-slate-950 text-white";

    default:
      return "bg-slate-950 text-white";
  }
};

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
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[5px] text-[#b58b46]">
              LATEST PROJECTS
            </p>

            <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Homes and spaces we recently delivered.
            </h2>

            <p className="mt-5 max-w-2xl text-slate-500">
              A look at recent handovers — interiors, layouts, and finishes
              families move into.
            </p>
          </div>
        </div>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/95 p-2 text-slate-900 shadow-lg transition hover:bg-white sm:p-3"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-white/95 p-2 text-slate-900 shadow-lg transition hover:bg-white sm:p-3"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={sliderRef}
              className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 pr-3"
            >
              {projects.slice(0, 8).map((project) => (
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  key={project.id}
                  className="min-w-[280px] max-w-[280px] snap-start flex-shrink-0"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm transition duration-300 hover:shadow-2xl">
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />

                        <span
                          className={`absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-950 shadow-sm`}
                        >
                          {badgeText(project.status)}
                        </span>
                      </div>

                      <div className="p-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                          {project.city} · {project.builder}
                        </p>

                        <h3 className="mt-3 text-xl font-semibold text-slate-950 line-clamp-2">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/viewsproject"
              className="group inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-white transition hover:bg-slate-700"
            >
              View Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
