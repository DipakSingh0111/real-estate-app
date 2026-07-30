"use client";

import Image from "next/image";
import Link from "next/link";
import { formatArea } from "@/lib/format";
import type { Property } from "@/types/property";

export default function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  // Safe extraction for TypeScript
  const prop = property as any;
  const bedrooms = prop.bedrooms || prop.bhk || prop.beds;
  const bathrooms = prop.bathrooms || prop.baths;

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <Image
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.title || "Property"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Listing Type Badge (FOR SALE / FOR RENT) */}
        <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm">
          {property.listingType === "Rent" ? "FOR RENT" : "FOR SALE"}
        </span>
        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3">
          <span className="font-sans text-lg font-bold text-white drop-shadow-md">
            {property.priceLabel}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="line-clamp-1 font-semibold text-slate-900 text-base group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <p className="mt-1 line-clamp-1 text-xs text-slate-500">
          {property.locality}, {property.city}
        </p>

        {/* Details Row: Bedrooms, Bathrooms, Area */}
        <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-3 text-xs text-slate-600">
          {bedrooms && (
            <span className="flex items-center gap-1.5">
              {/* Bed Icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 4v16M2 8h20M2 17h20M22 8v9M6 8v3M10 8v3" />
              </svg>
              {bedrooms} BHK
            </span>
          )}

          {bathrooms && (
            <span className="flex items-center gap-1.5">
              {/* Bath Icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 6 6.5 3.5M12 6V3M15 6l2.5-2.5M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z" />
              </svg>
              {bathrooms}
            </span>
          )}

          {property.areaSqft && (
            <span className="flex items-center gap-1.5">
              {/* Square Feet Icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
              {formatArea(property.areaSqft)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
