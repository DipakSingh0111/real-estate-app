import type { Metadata } from "next";
import { Suspense } from "react";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/ui/PropertyFilters";
import Pagination from "../components/ui/Pagination";
import type { Property } from "@/types/property";

export const dynamic = "force-dynamic";

const properties = (propertiesData?.Properties || []) as Property[];
const PER_PAGE = 6;

export const metadata: Metadata = {
  title: "All Properties — Real Estate",
};

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    type?: string;
    listingType?: string;
    bhk?: string;
    search?: string;
    page?: string;
  }>;
}

const normalize = (value: string = "") =>
  decodeURIComponent(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ");

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  const cityQuery = params.city?.trim() || "";
  const typeQuery = params.type?.trim() || "";
  const listingQuery = params.listingType?.trim() || "";
  const bhkQuery = params.bhk?.trim() || "";
  const searchQuery = normalize(params.search || "");
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  const filteredProperties = properties.filter((p) => {
    if (cityQuery && normalize(p.city) !== normalize(cityQuery)) return false;
    if (typeQuery && normalize(p.type) !== normalize(typeQuery)) return false;
    if (listingQuery && normalize(p.listingType) !== normalize(listingQuery))
      return false;
    if (bhkQuery && String(p.bhk) !== bhkQuery) return false;
    if (
      searchQuery &&
      !normalize(p.title).includes(searchQuery) &&
      !normalize(p.locality).includes(searchQuery)
    )
      return false;
    return true;
  });

  const totalPages = Math.ceil(filteredProperties.length / PER_PAGE);
  const paginated = filteredProperties.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );
  const pageTitle = [typeQuery, cityQuery, "Properties"]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {/* Page Header */}
      <div className="rounded-2xl border border-stone-200 bg-white px-5 py-5 shadow-sm flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C89234]" />
            Directory
          </span>
          <h1 className="mt-1.5 font-heading text-2xl sm:text-3xl font-bold text-slate-900 capitalize">
            {pageTitle || "All Properties"}
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            <span className="font-semibold text-slate-700">
              {filteredProperties.length}
            </span>{" "}
            propert{filteredProperties.length !== 1 ? "ies" : "y"} available
          </p>
        </div>
        <div className="w-full sm:w-auto sm:shrink-0">
          <Suspense fallback={null}>
            <PropertyFilters />
          </Suspense>
        </div>
      </div>

      {/* Property Cards */}
      {paginated.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((property, i) => (
            <PropertyCard
              key={property.id}
              property={property}
              priority={i < 3}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-2xl">🏠</p>
          <p className="mt-3 font-semibold text-slate-700">
            No properties found
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Try a different search term.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10">
          <Suspense fallback={null}>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </Suspense>
        </div>
      )}
    </section>
  );
}
