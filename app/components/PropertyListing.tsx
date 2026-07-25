import PropertyCard from "./PropertyCard";
import propertiesData from "../data/properties.json";
import type { Property } from "@/types/property";

type ListingType = "Rent" | "Sale";

interface PropertyListingProps {
  listingType: ListingType;
}

const properties = propertiesData.Properties as Property[];

const listingCopy: Record<
  ListingType,
  { eyebrow: string; title: string; empty: string }
> = {
  Rent: {
    eyebrow: "Rental listings",
    title: "Properties for Rent",
    empty: "No rental properties are available right now.",
  },
  Sale: {
    eyebrow: "Properties for sale",
    title: "Properties for Sale",
    empty: "No properties for sale are available right now.",
  },
};

export default function PropertyListing({ listingType }: PropertyListingProps) {
  const filteredProperties = properties.filter(
    (property) => property.listingType === listingType,
  );
  const copy = listingCopy[listingType];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <p className="eyebrow text-brass">{copy.eyebrow}</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink">
        {copy.title}
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
        <p className="mt-8 text-ink/60">{copy.empty}</p>
      )}
    </section>
  );
}
