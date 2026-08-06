/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useMemo } from "react";
import {
  X,
  MapPin,
  Building,
  CheckCircle2,
  Phone,
  Calendar,
} from "lucide-react";

import propertiesData from "@/lib/data";

const FALLBACK_IMAGE = "/placeholder.jpg";

export default function PropertiesManager() {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const [activeCity, setActiveCity] = useState("All");
  const [activeType, setActiveType] = useState("All");

  // Safe Array Extraction for TypeScript (.tsx)
  const rawList = useMemo(() => {
    const data = propertiesData as any;
    if (Array.isArray(data)) return data;
    return data?.properties || data?.Properties || data?.data || [];
  }, []);

  // Dynamic Unique City List
  const cities = useMemo(() => {
    const rawCities = rawList
      .map((i: any) => i?.city || i?.location)
      .filter(Boolean);
    return ["All", ...Array.from(new Set(rawCities))] as string[];
  }, [rawList]);

  // Dynamic Unique Property Types
  const types = useMemo(() => {
    const rawTypes = rawList
      .map((i: any) => i?.type || i?.propertyType)
      .filter(Boolean);
    return ["All", ...Array.from(new Set(rawTypes))] as string[];
  }, [rawList]);

  // Filter Logic
  const filteredProperties = useMemo(() => {
    return rawList.filter((item: any) => {
      const itemCity = String(item?.city || item?.location || "").trim();
      const itemType = String(item?.type || item?.propertyType || "").trim();

      const matchesCity =
        activeCity === "All" ||
        itemCity.toLowerCase() === activeCity.toLowerCase();

      const matchesType =
        activeType === "All" ||
        itemType.toLowerCase() === activeType.toLowerCase();

      return matchesCity && matchesType;
    });
  }, [rawList, activeCity, activeType]);

  // Helper function to extract image
  const getPropertyImage = (item: any) => {
    if (Array.isArray(item?.images) && item.images.length > 0) {
      return item.images[0];
    }
    if (typeof item?.image === "string" && item.image.trim() !== "") {
      return item.image;
    }
    if (typeof item?.img === "string" && item.img.trim() !== "") {
      return item.img;
    }
    return FALLBACK_IMAGE;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Explore Premium Properties
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Click on any property card to view complete specifications and
            details.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-sm border border-slate-200 sm:flex-row sm:items-center sm:justify-between">
          {/* City Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase text-slate-400 mr-1">
              City:
            </span>
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCity === city
                    ? "bg-slate-900 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Type Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase text-slate-400 mr-1">
              Type:
            </span>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeType === type
                    ? "bg-amber-600 text-white shadow"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((item: any, idx: number) => (
              <div
                key={item?.id || idx}
                onClick={() => setSelectedProperty(item)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image Box */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={getPropertyImage(item)}
                    alt={item?.title || "Property"}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {item?.type || item?.propertyType || "Property"}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-amber-700">
                      <MapPin size={14} />{" "}
                      {item?.city || item?.location || "N/A"}
                    </span>
                    <span className="font-bold text-slate-900 text-sm">
                      {item?.priceLabel || item?.price || "Price on Request"}
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-amber-600">
                    {item?.title || item?.name || "Untitled Property"}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <span>Click for Details</span>
                    <span className="font-semibold text-amber-600 group-hover:translate-x-1 transition-transform">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
            <h3 className="text-lg font-semibold text-slate-800">
              No properties matched your selection
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing or resetting your active filters.
            </p>
          </div>
        )}
      </div>

      {/* PROPERTY DETAIL MODAL */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div className="h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={getPropertyImage(selectedProperty)}
                  alt={selectedProperty?.title || "Property"}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-md bg-amber-100 px-2.5 py-1 text-xs font-bold text-amber-800">
                    {selectedProperty?.type ||
                      selectedProperty?.propertyType ||
                      "Property"}
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                    {selectedProperty?.title || selectedProperty?.name}
                  </h2>
                  <p className="flex items-center gap-1 text-sm text-slate-500 mt-1">
                    <MapPin size={16} className="text-amber-600" />
                    {selectedProperty?.city || selectedProperty?.location}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-xs text-slate-400 block">
                    Listing Price
                  </span>
                  <span className="text-2xl font-extrabold text-slate-900">
                    {selectedProperty?.priceLabel ||
                      selectedProperty?.price ||
                      "Contact for Price"}
                  </span>
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Property Overview
                </h4>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {selectedProperty?.status && (
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-xs text-slate-400">
                        Status
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedProperty.status}
                      </span>
                    </div>
                  )}
                  {selectedProperty?.area && (
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-xs text-slate-400">Area</span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedProperty.area}
                      </span>
                    </div>
                  )}
                  {selectedProperty?.bedrooms && (
                    <div className="rounded-xl bg-slate-50 p-3">
                      <span className="block text-xs text-slate-400">
                        Bedrooms
                      </span>
                      <span className="text-sm font-semibold text-slate-800">
                        {selectedProperty.bedrooms} BHK
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {selectedProperty?.description && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Description
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {selectedProperty.description}
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => alert("Booking Inquiry Sent!")}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                >
                  <Calendar size={18} /> Schedule Visit
                </button>
                <button
                  onClick={() => alert("Contacting Agent...")}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-all hover:bg-slate-50"
                >
                  <Phone size={18} /> Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
