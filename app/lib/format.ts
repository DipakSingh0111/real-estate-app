import type { Property } from "@/types/property";

export function shortPrice(property: Property): string {
  return property.priceLabel;
}

export function formatArea(sqft: number): string {
  return `${sqft.toLocaleString("en-IN")} sqft`;
}
