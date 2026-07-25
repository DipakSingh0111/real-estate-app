import type { Metadata } from "next";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import type { Property } from "@/types/property";

const properties = propertiesData.Properties as Property[];

export const metadata: Metadata = {
  title: "All Properties — Real Estate",
};

export default function PropertiesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <p className="eyebrow text-brass">Directory</p>

      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        All Properties
      </h1>

      <p className="mt-2 text-ink/60">
        {properties.length} propert
        {properties.length !== 1 ? "ies" : "y"} available.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
