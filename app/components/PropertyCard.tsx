import Image from "next/image";
import Link from "next/link";
import { formatArea } from "@/app/lib/format";
import type { Property } from "@/types/property";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <>
      <Link
        href="#"
        className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brass/40 hover:shadow-xl hover:shadow-ink/10"
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-paper backdrop-blur">
            {property.listingType === "Rent" ? "For Rent" : "For Sale"}
          </span>
          <span className="stamp absolute bottom-3 right-3 bg-paper/95 px-3 py-1.5 font-mono text-sm font-semibold text-ink">
            {property.priceLabel}
          </span>
        </div>

        <div className="p-5">
          <p className="eyebrow text-brass">
            {property.type}
            {property.bhk ? ` · ${property.bhk} BHK` : ""}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">
            {property.title}
          </h3>
          <p className="mt-1 text-sm text-ink/60">
            {property.locality}, {property.city}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-sm text-ink/70">
            <span>{formatArea(property.areaSqft)}</span>
            <span className="flex items-center gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brass"
              >
                <path d="M12 2l2.9 6.26L21 9.27l-4.5 4.39L17.8 21 12 17.77 6.2 21l1.3-7.34L3 9.27l6.1-1.01L12 2z" />
              </svg>
              {property.rating}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
