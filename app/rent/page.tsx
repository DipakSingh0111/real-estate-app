interface PropertyListingProps {
  listingType?: "Rent" | "Sale" | string; // 👈 Yeh line add karein
}

export default function PropertyListing({ listingType }: PropertyListingProps) {
  return <div>{/* Component content */}</div>;
}
