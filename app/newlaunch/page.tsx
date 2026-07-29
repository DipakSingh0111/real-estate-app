"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { MapPin, Bed, Bath } from "lucide-react";

import propertiesData from "@/data/properties.json";

type ProjectStatus = "New Launch" | "Ready to Move" | "Under Construction";
type CategoryFilter = "All" | "For Sale" | "For Rent";

const normalize = (str: any): string => {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ""); // keeps letters and numbers
};

function NewLaunchContent() {
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const [selectedStatus, setSelectedStatus] =
    useState<ProjectStatus>("New Launch");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  // Sync state with URL search param
  useEffect(() => {
    if (!statusParam) return;

    const cleanParam = normalize(statusParam);

    if (cleanParam.includes("ready")) {
      setSelectedStatus("Ready to Move");
    } else if (
      cleanParam.includes("under") ||
      cleanParam.includes("construction")
    ) {
      setSelectedStatus("Under Construction");
    } else if (cleanParam.includes("launch") || cleanParam.includes("new")) {
      setSelectedStatus("New Launch");
    }
  }, [statusParam]);

  const rawData: any[] = Array.isArray(propertiesData)
    ? propertiesData
    : (propertiesData as any)?.projectSection ||
      (propertiesData as any)?.Properties ||
      (propertiesData as any)?.properties ||
      [];

  // Filter properties
  const filteredData = rawData.filter((item) => {
    // 1. Status Filter
    const itemStatus = normalize(item.status || item.projectStatus);
    const targetStatus = normalize(selectedStatus);

    // Fuzzy match in case JSON says "UnderConstruction", "Under Construction", or "under-construction"
    const statusMatch =
      itemStatus === targetStatus ||
      itemStatus.includes(targetStatus) ||
      targetStatus.includes(itemStatus);

    // 2. Category Filter ("All", "For Sale", "For Rent")
    let categoryMatch = true;
    if (selectedCategory !== "All") {
      const itemCat = normalize(item.category || item.type);
      const targetCat = normalize(selectedCategory);

      // Handles "Sale", "For Sale", "Rent", "For Rent"
      categoryMatch =
        itemCat === targetCat ||
        itemCat.includes(targetCat.replace("for", "")) ||
        targetCat.includes(itemCat);
    }

    return statusMatch && categoryMatch;
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Status Tabs */}
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 mb-6 gap-1 flex-wrap justify-center">
          {(["New Launch", "Ready to Move", "Under Construction"] as const).map(
            (status) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                  selectedStatus === status
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {status}
              </button>
            ),
          )}
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
          {selectedStatus} Projects
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex justify-center items-center gap-2 mb-10 flex-wrap">
          {(["All", "For Sale", "For Rent"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-[#E53935] text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {filteredData.map((item: any, idx: number) => (
              <div
                key={item.id || idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={
                        item.image ||
                        item.img ||
                        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                      }
                      alt={item.title || "Property Image"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full">
                      {item.status || selectedStatus}
                    </span>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-[#E53935] uppercase tracking-wider mb-1">
                      {item.category || "Property"}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 mb-2">
                      {item.title || item.name}
                    </h3>
                    <div className="flex items-center text-slate-500 text-xs mb-4">
                      <MapPin
                        size={14}
                        className="mr-1 text-red-500 shrink-0"
                      />
                      <span className="truncate">{item.location || "N/A"}</span>
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-base font-extrabold text-slate-900">
                    {item.price || "Contact for Price"}
                  </p>
                  <div className="flex gap-3 text-xs text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Bed size={14} className="text-slate-400" />{" "}
                      {item.beds ?? item.bedrooms ?? 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} className="text-slate-400" />{" "}
                      {item.baths ?? item.bathrooms ?? 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-500 shadow-sm border border-slate-200">
            No properties found for{" "}
            <span className="font-semibold text-slate-800">
              "{selectedStatus}"
            </span>
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="font-semibold text-slate-800">
                  "{selectedCategory}"
                </span>
              </span>
            )}
            .
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
