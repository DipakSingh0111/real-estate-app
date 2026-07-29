import type { Metadata } from "next";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import type { Property } from "@/types/property";

// Dynamic rendering enforce karein taaki searchParams fast & fresh update ho
export const dynamic = "force-dynamic";

const properties = (propertiesData?.Properties || []) as Property[];

export const metadata: Metadata = {
  title: "All Properties — Real Estate",
};

interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    type?: string; // 1. Type query parameter add kiya
  }>;
}

// Special characters (jaise '/') aur URL encoded values ke liye helper function
const normalizeString = (value: string = "") =>
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

  const normalizedCityQuery = normalizeString(cityQuery);
  const normalizedTypeQuery = normalizeString(typeQuery);

  // 2. City aur Type dono ke base par filtering
  const filteredProperties = properties.filter((property) => {
    // City Filter
    const matchesCity = normalizedCityQuery
      ? normalizeString(property.city) === normalizedCityQuery
      : true;

    // Type Filter ( JSON mein field key `type` hai )
    const matchesType = normalizedTypeQuery
      ? normalizeString(property.type) === normalizedTypeQuery
      : true;

    return matchesCity && matchesType;
  });

  // Dynamic Title generate karne ke liye
  const pageTitle = [typeQuery, cityQuery, "Properties"]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <p className="eyebrow text-brass">Directory</p>

      <h1 className="mt-2 font-display text-4xl font-semibold text-ink capitalize">
        {pageTitle || "All Properties"}
      </h1>

      <p className="mt-2 text-ink/60">
        {filteredProperties.length} propert
        {filteredProperties.length !== 1 ? "ies" : "y"} available.
      </p>

      {filteredProperties.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-ink/60">
          No properties found
          {typeQuery && ` for "${typeQuery}"`}
          {cityQuery && ` in "${cityQuery}"`}.
        </p>
      )}
    </section>
  );
}
