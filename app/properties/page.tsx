import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/ui/Pagination";
import type { Property } from "@/types/property";
import { ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

const properties = (propertiesData?.Properties || []) as Property[];
const PER_PAGE = 8;

export const metadata: Metadata = {
  title: "All Properties — Real Estate",
};

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    type?: string;
    listingType?: string;
    bhk?: string;
    page?: string;
  }>;
}

const normalize = (value: string = "") =>
  decodeURIComponent(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const cities = [...new Set(properties.map((p) => p.city))].sort();
const types = [...new Set(properties.map((p) => p.type))].sort();

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  const cityQuery = params.city?.trim() || "";
  const typeQuery = params.type?.trim() || "";
  const listingQuery = params.listingType?.trim() || "";
  const bhkQuery = params.bhk?.trim() || "";
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  const filteredProperties = properties.filter((p) => {
    if (cityQuery && normalize(p.city) !== normalize(cityQuery)) return false;
    if (typeQuery && normalize(p.type) !== normalize(typeQuery)) return false;
    if (listingQuery && normalize(p.listingType) !== normalize(listingQuery))
      return false;
    if (bhkQuery && String(p.bhk) !== bhkQuery) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredProperties.length / PER_PAGE);
  const paginated = filteredProperties.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const buildFilterUrl = (key: string, value: string) => {
    const p = new URLSearchParams();
    if (cityQuery) p.set("city", cityQuery);
    if (typeQuery) p.set("type", typeQuery);
    if (listingQuery) p.set("listingType", listingQuery);
    if (bhkQuery) p.set("bhk", bhkQuery);
    if (value) p.set(key, value);
    else p.delete(key);
    p.delete("page");
    return `/properties?${p.toString()}`;
  };

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-28 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-3 flex items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-[#C89234]">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">Properties</span>
          </nav>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {typeQuery && cityQuery
              ? `${typeQuery} in ${cityQuery}`
              : cityQuery
                ? `Properties in ${cityQuery}`
                : typeQuery
                  ? `${typeQuery} Properties`
                  : "All Properties"}
          </h1>
          <p className="mt-1 text-xs text-slate-300">
            <span className="font-semibold text-white">
              {filteredProperties.length} -
            </span>{" "}
            propert{filteredProperties.length !== 1 ? "ies" : "y"} available
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 py-6">
        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {paginated.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                priority={i < 4}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="text-sm font-semibold text-slate-700">
              No properties found
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Try changing or clearing your filters.
            </p>
            <Link
              href="/properties"
              className="mt-4 inline-block text-xs font-semibold text-[#C89234] hover:underline"
            >
              Clear filters
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-2">
            <Suspense fallback={null}>
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            </Suspense>
            <p className="text-xs text-slate-400">
              Page {currentPage} of {totalPages} · {filteredProperties.length}{" "}
              properties
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
