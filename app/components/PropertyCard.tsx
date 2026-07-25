import Image from "next/image";
import Link from "next/link";
import { formatArea } from "@/app/lib/format";
import type { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href="#"
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-xl hover:shadow-ink/10"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Bottom gradient for badge legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-ink/0" />

        {/* Listing type badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink shadow-sm backdrop-blur">
          {property.listingType === "Rent" ? "For Rent" : "For Sale"}
        </span>

        {/* Rating badge */}
        <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-ink/80 px-2.5 py-1 text-xs font-semibold text-paper backdrop-blur">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-brass-light"
          >
            <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z" />
          </svg>
          {property.rating}
        </span>

        {/* Price */}
        <span className="absolute bottom-3 left-3 rounded-lg bg-white px-3 py-1.5 font-mono text-sm font-bold text-ink shadow-md">
          {property.priceLabel}
        </span>

        {/* Hover "view" overlay hint */}
        <div className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-end gap-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="rounded-full bg-brass px-3 py-1.5 shadow-md">
            View Details →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brass">
          {property.type}
          {property.bhk ? ` · ${property.bhk} BHK` : ""}
        </p>

        <h3 className="mt-1.5 line-clamp-1 font-display text-lg font-semibold text-ink transition group-hover:text-brass-dark">
          {property.title}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-ink/60">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="flex-shrink-0 text-ink/40"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="line-clamp-1">
            {property.locality}, {property.city}
          </span>
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3.5 text-sm text-ink/70">
          <span className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-ink/40"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            {formatArea(property.areaSqft)}
          </span>

          <span className="font-semibold text-ink">{property.priceLabel}</span>
        </div>
      </div>
    </Link>
  );
}
