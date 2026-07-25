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

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  detail: string;
  rating: number;
}
