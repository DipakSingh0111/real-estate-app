import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import PropertyListingFilters from "../components/PropertyListingFilters";
import Pagination from "../components/ui/Pagination";
import type { Property, PropertiesPageProps } from "@/types/property";

export const dynamic = "force-dynamic";

const properties = (propertiesData?.Properties || []) as Property[];
const PER_PAGE = 8;

export const metadata: Metadata = {
  title: "Featured Properties — Real Estate",
};

const normalize = (value: string = "") =>
  decodeURIComponent(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const capitalize = (str: string) =>
  str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  const cityQuery = params.city?.trim() || "";
  const typeQuery = params.type?.trim() || "";
  const listingQuery = params.listingType?.trim() || "";
  const bhkQuery = params.bhk?.trim() || "";
  const currentPage = Math.max(1, parseInt(params.page || "1", 10));

  const cities = [...new Set(properties.map((p) => p.city))].sort();

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

  const pageTitle =
    listingQuery === "Rent"
      ? "Properties for Rent"
      : listingQuery === "Sale"
        ? "Properties for Sale"
        : cityQuery
          ? `Properties in ${capitalize(cityQuery)}`
          : "Featured Properties";

  const pageSubtitle =
    listingQuery === "Rent"
      ? "Browse verified rental homes across Delhi NCR."
      : listingQuery === "Sale"
        ? "Explore premium homes and investments for sale."
        : "Browse verified homes for sale and rent across Delhi NCR.";

  const breadcrumbFilters = [
    listingQuery ? capitalize(listingQuery) : null,
    cityQuery ? capitalize(cityQuery) : null,
    typeQuery ? capitalize(typeQuery) : null,
    bhkQuery ? `${bhkQuery} BHK` : null,
  ].filter(Boolean) as string[];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero — full-bleed */}
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url('/images/land_01.avif')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {pageTitle}
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80"
          >
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="font-medium text-white">
              Properties
            </Link>
            {breadcrumbFilters.length > 0 &&
              breadcrumbFilters.map((filter, index) => (
                <span
                  key={`${filter}-${index}`}
                  className="flex items-center gap-2"
                >
                  <span>/</span>
                  <span className="font-medium text-white">{filter}</span>
                </span>
              ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <Suspense fallback={<div className="h-16 border-y border-stone-200" />}>
          <PropertyListingFilters
            cities={cities}
            resultCount={filteredProperties.length}
            activeListing={listingQuery}
            activeCity={cityQuery}
          />
        </Suspense>

        {/* Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:py-10">
            {paginated.map((property, i) => (
              <PropertyCard
                key={property.id}
                property={property}
                priority={i < 4}
                variant="listing"
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-base font-semibold text-stone-800">
              No properties found
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Try changing your filters or browse all listings.
            </p>
            <Link
              href="/properties"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-stone-900 bg-stone-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              View all properties
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center gap-3 border-t border-stone-100 py-10">
            <Suspense fallback={null}>
              <Pagination currentPage={currentPage} totalPages={totalPages} />
            </Suspense>
            <p className="text-xs text-stone-400">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
