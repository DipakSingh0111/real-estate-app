import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import Pagination from "../components/ui/Pagination";
import type { Property } from "@/types/property";
import { Home, Building2 } from "lucide-react";

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

// Helper to Capitalize strings
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

  const formattedCity = capitalize(cityQuery);
  const formattedType = capitalize(typeQuery);

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

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* HERO SECTION - Center Aligned + Screenshot Style */}
      <section className="relative h-48 sm:h-60 w-full text-white overflow-hidden flex items-center justify-center border-b border-stone-800">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Mask Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Centered Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 max-w-4xl mx-auto">
          {/* Main Dynamic Title */}
          <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wider text-white">
            {formattedType && formattedCity
              ? `${formattedType} in ${formattedCity}`
              : formattedCity
                ? `Properties in ${formattedCity}`
                : formattedType
                  ? `${formattedType} Properties`
                  : "All Properties"}
          </h1>

          {/* Breadcrumb Links Below Title */}
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-white"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
            >
              <Home size={14} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">»</span>
            <span className="text-[#DC2626] font-semibold">Properties</span>
          </nav>
        </div>
      </section>

      {/* CONTENT AREA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 py-6">
        {/* PROPERTIES COUNTER BAR (Cards ke bilkul upar premium design) */}
        <div className="mb-6 flex items-center justify-between rounded-xl bg-white p-4 border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-[#C89234]">
              <Building2 size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">
                Found Results
              </p>
              <p className="text-sm font-bold text-slate-900">
                <span className="text-[#C89234] font-extrabold text-base">
                  {filteredProperties.length}
                </span>{" "}
                propert{filteredProperties.length !== 1 ? "ies" : "y"} available
              </p>
            </div>
          </div>
        </div>

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
