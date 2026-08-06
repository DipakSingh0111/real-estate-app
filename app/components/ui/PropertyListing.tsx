"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, Suspense } from "react";
import Image from "next/image";
import propertiesData from "@/lib/data";
import type { PropertyListingItem } from "@/types/property";

function PropertyListContent() {
  const searchParams = useSearchParams();

  // Read URL params
  const selectedCity = searchParams.get("city");
  const selectedType = searchParams.get("type");

  // String Normalizer
  const cleanStr = (str: string | null | undefined) => {
    if (!str) return "";
    return str
      .toString()
      .toLowerCase()
      .replace(/[-_]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const filteredProperties = useMemo(() => {
    const rawData = propertiesData as any;
    let list: PropertyListingItem[] = Array.isArray(rawData)
      ? rawData
      : rawData.properties || rawData.Properties || [];

    return list.filter((item) => {
      // 1. CITY FILTER
      if (selectedCity) {
        const itemCity = cleanStr(item.city);
        const targetCity = cleanStr(selectedCity);

        const matchesExact = itemCity === targetCity;
        const matchesPartial =
          itemCity.includes(targetCity) || targetCity.includes(itemCity);

        if (!matchesExact && !matchesPartial) {
          return false;
        }
      }

      // 2. TYPE FILTER
      if (selectedType) {
        const itemType = cleanStr(item.type);
        const targetType = cleanStr(selectedType);

        const isTypeMatch =
          itemType === targetType ||
          itemType.includes(targetType) ||
          targetType.includes(itemType);

        if (!isTypeMatch) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCity, selectedType]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
      {/* Dynamic Header */}
      <div className="mb-8 border-b border-stone-200 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900 capitalize">
          {selectedType && selectedCity && `${selectedType} in ${selectedCity}`}
          {!selectedType && selectedCity && `Properties in ${selectedCity}`}
          {selectedType && !selectedCity && `${selectedType} Properties`}
          {!selectedType && !selectedCity && "All Properties"}
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-stone-500 font-medium">
          Showing {filteredProperties.length} properties
        </p>
      </div>

      {/* Property Cards Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property, idx) => {
            const displayImage =
              Array.isArray(property.images) && property.images.length > 0
                ? property.images[0]
                : property.image || "/placeholder.jpg";

            return (
              <div
                key={property.id || idx}
                className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-2xs transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={displayImage}
                    alt={property.title || "Property Image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-lg bg-[#B8863D]/90 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md uppercase tracking-wider">
                    {property.type}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B8863D]">
                      {property.city}
                    </span>
                    {(property.priceLabel || property.price !== undefined) && (
                      <span className="text-sm font-extrabold text-stone-900">
                        {property.priceLabel || String(property.price)}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-stone-900 line-clamp-1 group-hover:text-[#B8863D] transition-colors">
                    {property.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
          <h3 className="text-lg font-bold text-stone-900">
            No properties found
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-stone-500">
            {selectedType && `Type: "${selectedType}" `}
            {selectedCity && `City: "${selectedCity}" `}
            ke according koi property match nahi hui.
          </p>
        </div>
      )}
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="p-12 text-center text-xs font-semibold text-stone-500">
          Loading properties...
        </div>
      }
    >
      <PropertyListContent />
    </Suspense>
  );
}
