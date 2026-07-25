import type { Metadata } from "next";
import PropertyListing from "../components/PropertyListing";

export const metadata: Metadata = {
  title: "Properties for Sale — Real Estate",
};

export default function SalePage() {
  return <PropertyListing listingType="Sale" />;
}
