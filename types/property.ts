export interface Agent {
  name: string;
  phone: string;
  agency: string;
}

export interface Property {
  id: string;
  title: string;
  type: "Apartment" | "Villa" | "Plot" | string;
  listingType: "Sale" | "Rent";
  bhk: number | null;
  city: string;
  locality: string;
  state: string;
  price: number;
  priceLabel: string;
  areaSqft: number;
  furnishing: string | null;
  floor: string | null;
  facing: string;
  possession: string;
  reraId: string;
  rating: number;
  description: string;
  amenities: string[];
  images: string[];
  agent: Agent;
  featured: boolean;
}

export interface PropertyFilters {
  city?: string;
  type?: string;
  listingType?: string;
  bhk?: string;
}

export interface Testimonials {
  id: number;
  quote: string;
  name: string;
  detail: string;
  rating: number;
}

export interface latestProjects {
  id: number;
  title: string;
  slug: string;
  builder: string;
  location: string;
  city: string;
  status: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  description: string;
}

export interface newLunchingProject {
  id: number;
  name: string;
  image: string;
  builder: string;
  city: string;
  location: string;
  status: null;
  price: string;
  priceUnit: string;
  config: string;
  area: string;
  possession: string;
  rera: string;
  tags: string[];
  height: number;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: "For Sale" | "For Rent";
  status: "New Launch" | "Ready to Move" | "Under Construction";
  possessionDate?: string; // e.g. "Immediate" or "Dec 2026"
  price: string;
  beds: number;
  baths: number;
  location: string;
  image: string;
}
//
export type ProjectStatus = "new" | "progress" | "ready";

export type FilterKey = "all" | ProjectStatus;

export interface Project {
  id: number;
  name: string;
  image: string;
  builder: string;
  city: string;
  location: string;
  status: ProjectStatus;
  price: string;
  priceUnit: string;
  config: string;
  area: string;
  possession: string;
  rera: string;
  tags: string[];
  height: number;
}

export interface StatusMetaEntry {
  label: string;
  cls: string;
}

export type StatusMeta = Record<ProjectStatus, StatusMetaEntry>;
