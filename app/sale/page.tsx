import type { Metadata } from "next";
import PropertyListing from "../components/ui/PropertyListing";

export const metadata: Metadata = {
  title: "Properties for Sale — Real Estate",
};

export default function SalePage() {
  const Component = PropertyListing as any;
  return <Component listingType="Sale" />;
}
