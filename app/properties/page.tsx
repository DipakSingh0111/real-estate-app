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

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const cityQuery = searchParams.city?.trim() || "";
  const filteredProperties = cityQuery
    ? properties.filter((property) => property.city === cityQuery)
    : properties;

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <p className="eyebrow text-brass">Directory</p>

      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        {cityQuery ? `${cityQuery} Properties` : "All Properties"}
      </h1>

      <p className="mt-2 text-ink/60">
        {filteredProperties.length} propert
        {filteredProperties.length !== 1 ? "ies" : "y"} available.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
