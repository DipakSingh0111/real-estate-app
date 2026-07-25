import type { Metadata } from "next";
import PropertyListing from "../components/PropertyListing";

export const metadata: Metadata = {
  title: "Properties for Rent — Real Estate",
};

export default function RentPage() {
  return <PropertyListing listingType="Rent" />;
}
