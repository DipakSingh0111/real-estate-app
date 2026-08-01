"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Home, ChevronsRight } from "lucide-react";
import propertiesData from "@/data/properties.json";

type ProjectStatus = "New Launch" | "Ready to Move" | "Under Construction";
type CategoryFilter = "All" | "For Sale" | "For Rent";

const normalize = (str: any): string => {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

const statusConfig = {
  "New Launch": {
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  "Ready to Move": {
    dot: "bg-emerald-400",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "Under Construction": {
    dot: "bg-blue-400",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
};

function NewLaunchContent() {
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const [selectedStatus, setSelectedStatus] =
    useState<ProjectStatus>("New Launch");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  useEffect(() => {
    if (!statusParam) return;
    const p = normalize(statusParam);
    if (p.includes("ready")) setSelectedStatus("Ready to Move");
    else if (p.includes("under") || p.includes("construction"))
      setSelectedStatus("Under Construction");
    else setSelectedStatus("New Launch");
  }, [statusParam]);

  const rawData: any[] = (propertiesData as any)?.projectSection || [];

  const filteredData = rawData.filter((item) => {
    const statusMatch = (() => {
      const s = normalize(item.status);
      const t = normalize(selectedStatus);
      return s === t || s.includes(t) || t.includes(s);
    })();

    const categoryMatch =
      selectedCategory === "All" ||
      (() => {
        const c = normalize(item.category);
        const t = normalize(selectedCategory);
        return c === t || c.includes(t.replace("for", "")) || t.includes(c);
      })();

    return statusMatch && categoryMatch;
  });

  const config = statusConfig[selectedStatus];

  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero Section */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            NEW LAUNCH PROJECTS
          </h1>

          {/* 📍 Breadcrumb (Below Title, Center Aligned) */}
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white flex-wrap"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#e53935]"
            >
              <Home size={15} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <ChevronsRight size={14} className="text-white/70" />
            <span className="text-[#e53935]">New Launch Projects</span>
          </nav>

          {/* Subtitle / Description */}
          <p className="mt-4 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-200">
            Explore new launches, ready-to-move, and under construction
            properties across Delhi, Gurugram, Noida & Faridabad.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Status Tabs */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1 overflow-x-auto">
              {(
                ["New Launch", "Ready to Move", "Under Construction"] as const
              ).map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  suppressHydrationWarning
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    selectedStatus === status
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-1.5">
              {(["All", "For Sale", "For Rent"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  suppressHydrationWarning
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        {/* Section Label */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-heading text-lg font-bold text-slate-900 sm:text-xl">
              {selectedStatus} Projects
            </h2>
            <span className="rounded-full bg-gradient-to-r from-amber-50 to-amber-100/80 px-3 py-1 text-xs font-bold text-amber-800 shadow-sm border border-amber-200/60 ring-1 ring-amber-400/20">
              {filteredData.length}
            </span>
          </div>
        </div>

        {/* Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredData.map((item: any, idx: number) => (
              <div
                key={item.id || idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-[#B8860B]/30 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item.image ||
                      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                    }
                    alt={item.title || "Property"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status Badge */}
                  <span
                    className={`absolute left-3 top-3 rounded-md border px-2 py-0.5 text-[10px] font-semibold backdrop-blur-md ${config.badge}`}
                  >
                    {item.status}
                  </span>
                  {/* Category */}
                  <span className="absolute right-3 top-3 rounded-md bg-slate-900/75 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h3 className="line-clamp-1 text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                      <MapPin size={11} className="shrink-0 text-slate-400" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    {item.possessionDate && (
                      <p className="mt-1.5 text-[11px] font-medium text-slate-400">
                        🗓 {item.possessionDate}
                      </p>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                    <p className="text-sm font-extrabold text-slate-900">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-2.5 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Bed size={12} className="text-slate-400" />
                        {item.beds ?? item.bedrooms ?? 0}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath size={12} className="text-slate-400" />
                        {item.baths ?? item.bathrooms ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="text-sm text-slate-500">
              No properties found for{" "}
              <span className="font-semibold text-slate-800">
                "{selectedStatus}"
              </span>
              {selectedCategory !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="font-semibold text-slate-800">
                    "{selectedCategory}"
                  </span>
                </>
              )}
              .
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default function NewLaunchPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-slate-500">Loading...</div>
      }
    >
      <NewLaunchContent />
    </Suspense>
  );
}
