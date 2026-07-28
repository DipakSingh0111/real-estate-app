import type { Metadata } from "next";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import type { Property } from "@/types/property";

const properties = propertiesData.Properties as Property[];

export const metadata: Metadata = {
  title: "All Properties — Real Estate",
};

interface PropertiesPageProps {
  searchParams: {
    city?: string;
  };
}

const normalizeCity = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ");

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const cityQuery = searchParams.city?.trim() || "";
  const normalizedCityQuery = normalizeCity(cityQuery);

  const filteredProperties = normalizedCityQuery
    ? properties.filter(
        (property) => normalizeCity(property.city) === normalizedCityQuery,
      )
    : properties;

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <p className="eyebrow text-brass">Directory</p>

      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        {cityQuery ? `${cityQuery} Properties` : "All Properties"}
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
          No properties found for {cityQuery || "this city"}.
        </p>
      )}
    </section>
  );
}
