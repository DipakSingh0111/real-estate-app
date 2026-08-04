"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, type Variants } from "framer-motion";

import data from "../../../data/properties.json";
import type { LatestProject } from "@/types/property";

const projects = (data?.projects || []) as LatestProject[];

const badgeStyle = (status: string) => {
  switch (status) {
    case "Ready to Move":
      return { label: "COMPLETED", bg: "bg-emerald-600 text-white" };
    case "New Launch":
      return { label: "NEW LAUNCH", bg: "bg-amber-600 text-white" };
    case "Under Construction":
      return { label: "IN PROGRESS", bg: "bg-blue-600 text-white" };
    case "Sold Out":
      return { label: "SOLD OUT", bg: "bg-slate-800 text-white" };
    default:
      return { label: status.toUpperCase(), bg: "bg-slate-900 text-white" };
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
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

export default function LatestProjects() {
  return (
    <section className="bg-[#FAF7F2] py-5 lg:py-7 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
            LATEST PROJECTS
          </span>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Homes & Spaces Recently Delivered
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Explore handovers, premium layouts, and world-class architecture.
          </p>
        </motion.div>

        {/* 4 Cards Static Grid */}
        <div className="w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-2"
          >
            {projects.slice(0, 4).map((project) => {
              const badge = badgeStyle(project.status);
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:border-[#B8863D]/50 hover:shadow-lg"
                  >
                    {/* Image Banner Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Status Badge */}
                      <span
                        className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-xs ${badge.bg}`}
                      >
                        {badge.label}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col justify-between p-3.5">
                      <div>
                        {/* City & Builder */}
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-[#B8863D]">
                          <MapPin size={12} className="shrink-0" />
                          <span className="truncate">{project.city}</span>
                          <span className="text-slate-300">•</span>
                          <span className="text-slate-500 truncate">
                            {project.builder}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-1 truncate text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#B8863D] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Price Row */}
                      {project.price && (
                        <div className="mt-3 border-t border-slate-100 pt-2 flex items-center justify-between">
                          <span className="text-[11px] text-slate-400 font-medium">
                            Starting from
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900">
                            {project.price}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#B8863D] active:scale-95"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
