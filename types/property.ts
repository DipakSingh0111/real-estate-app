import type { Award } from "./award";
import type { BlogPost } from "./blog";

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

export type NewLaunchProjectStatus =
  | "New Launch"
  | "Ready to Move"
  | "Under Construction";
export type NewLaunchCategoryFilter = "All" | "For Sale" | "For Rent";

export interface ProjectDetailProps {
  params: { slug: string };
}

export interface PropertiesPageProps {
  searchParams: Promise<{
    city?: string;
    type?: string;
    listingType?: string;
    bhk?: string;
    page?: string;
  }>;
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

export interface AwardsGridProps {
  awards: Award[];
  years: number[];
}

export interface BlogCardProps {
  post: BlogPost;
  index?: number;
  variant?: "default" | "featured";
}

export interface HeroProps {
  cities: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  tag: string;
  image: string;
  experience: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface PropertyListingItem {
  id: string | number;
  title: string;
  city: string;
  type: string;
  price?: number | string;
  priceLabel?: string;
  image?: string;
  images?: string[];
}

export interface PropertyGalleryProps {
  images: string[];
  title: string;
  type: string;
  listingType: string;
}

export interface PropertyListingFiltersProps {
  cities: string[];
  resultCount: number;
  activeListing: string;
  activeCity: string;
}

export interface FAQItem {
  id: string;
  category: "Buying" | "Selling" | "Renting" | "Legal";
  question: string;
  answer: string;
}

export interface Opportunity {
  id: number;
  title: string;
  location: string;
  type:
    | "Villa"
    | "Apartment"
    | "Builder Floor"
    | "Commercial Office"
    | "Studio"
    | "Plot"
    | "Land";
  minInvestment: string;
  expectedROI: string;
  tenure: string;
  fundedPercentage: number;
  imageUrl: string;
  isHot?: boolean;
}

export interface BookSiteVisitProps {
  propertyName?: string;
  propertyLocation?: string;
}

export interface LatestProject {
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

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}
