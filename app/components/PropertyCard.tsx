"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BedDouble, Maximize2 } from "lucide-react";
import { formatArea } from "@/lib/format";
import type { Property } from "@/types/property";

function getAvailabilityLabel(possession: string) {
  const p = possession.toLowerCase();
  if (p.includes("ready") || p.includes("immediate")) return "Move-in ready";
  if (p.includes("under")) return "Under construction";
  return "Available now";
}

export default function PropertyCard({
  property,
  priority = false,
  variant = "default",
}: {
  property: Property;
  priority?: boolean;
  variant?: "default" | "listing";
}) {
  const bedrooms = property.bhk;
  const agency = property.agent?.agency?.split(" ")[0]?.toUpperCase() ?? "NESTVISTA";

  if (variant === "listing") {
    const priceSuffix =
      property.listingType === "Rent" ? " / mo" : "";

    return (
      <Link
        href={`/properties/${property.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 hover:border-stone-300 hover:shadow-md"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
          <Image
            src={property.images?.[0] || "/placeholder.jpg"}
            alt={property.title || "Property"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <span className="absolute right-3 top-3 rounded-md bg-stone-900/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            {property.type}
          </span>

          <span className="absolute bottom-3 left-3 rounded-md bg-stone-900/85 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            {getAvailabilityLabel(property.possession)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] font-bold uppercase tracking-wide text-[#e07a5f]">
            {bedrooms ? `${bedrooms} BHK` : property.type}
            {" • "}
            {agency}
          </p>

          <h3 className="mt-1.5 line-clamp-1 text-base font-bold text-stone-900 transition-colors group-hover:text-[#C89234]">
            {property.title.trim()}
          </h3>

          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-stone-500">
            {property.description}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
            <span className="text-sm font-bold text-stone-900">
              {property.priceLabel}
              {priceSuffix}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-stone-700 transition-colors group-hover:text-[#C89234]">
              View details
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/properties/${property.id}`}
      className="group block overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C89234]/30 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <Image
          src={property.images?.[0] || "/placeholder.jpg"}
          alt={property.title || "Property"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm ${
            property.listingType === "Sale"
              ? "bg-emerald-600/90"
              : "bg-blue-600/90"
          }`}
        >
          For {property.listingType}
        </span>

        <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-stone-800 backdrop-blur-sm">
          {property.type}
        </span>

        <div className="absolute bottom-3 left-3 right-3">
          <span className="font-heading text-xl font-bold text-white drop-shadow-sm sm:text-2xl">
            {property.priceLabel}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-1 font-heading text-base font-bold text-stone-900 transition-colors group-hover:text-[#C89234] sm:text-lg">
          {property.title}
        </h3>

        <p className="mt-1.5 flex items-center gap-1 line-clamp-1 text-xs text-stone-500">
          <MapPin size={12} className="shrink-0 text-[#C89234]" />
          {property.locality}, {property.city}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-stone-100 pt-3 text-xs text-stone-600">
          {bedrooms && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-stone-50 px-2 py-1">
              <BedDouble size={13} className="text-[#C89234]" />
              {bedrooms} BHK
            </span>
          )}
          {property.areaSqft && (
            <span className="inline-flex items-center gap-1.5 rounded-md bg-stone-50 px-2 py-1">
              <Maximize2 size={13} className="text-[#C89234]" />
              {formatArea(property.areaSqft)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
