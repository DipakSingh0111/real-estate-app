# RealEstate — Real Estate Website (Next.js + TypeScript)

A complete real-estate listing website built with Next.js 14 (App Router) and TypeScript. All property data comes from `data/properties.json` — no database or API required.

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

For a production build:

```bash
npm run build
npm start
```

## Structure

- `data/properties.json` — **the single source of truth.** Add a new property by adding an object to this array — the home page, listing page, filters, and detail page all update automatically. No code changes needed.
- `types/property.ts` — `Property`, `Agent`, and `PropertyFilters` TypeScript interfaces
- `app/page.tsx` — Home page (hero, featured properties, city breakdown, testimonials)
- `app/properties/page.tsx` — All properties, with city / type / BHK / rent-or-sale filters (driven by URL query params)
- `app/properties/[id]/page.tsx` — Property detail page (photo gallery, specs, amenities, agent contact)
- `app/components/` — Navbar, Footer, PropertyCard, Hero, FilterBar (all `.tsx`, with typed props)
- `app/lib/format.ts` — Price/area formatting helpers
- `app/globals.css` + `tailwind.config.ts` — Design tokens (colors: ink navy, brass gold, pine green, paper white)

## Adding a Property

Add an object like this to `data/properties.json` (keep the same fields):

```json
{
  "id": "gn-1013",
  "title": "New Property Name",
  "type": "Apartment",
  "listingType": "Sale",
  "bhk": 3,
  "city": "Mumbai",
  "locality": "Andheri West",
  "state": "Maharashtra",
  "price": 15000000,
  "priceLabel": "₹1.5 Cr",
  "areaSqft": 1200,
  "furnishing": "Semi-Furnished",
  "floor": "5th of 10",
  "facing": "West Facing",
  "possession": "Ready to Move",
  "reraId": "P51800099999",
  "rating": 4.5,
  "description": "Write the property description here.",
  "amenities": ["Gym", "Lift", "Security"],
  "images": ["https://images.unsplash.com/photo-....?q=80&w=1600"],
  "agent": {
    "name": "Agent Name",
    "phone": "+91 90000 00000",
    "agency": "Agency Name"
  },
  "featured": false
}
```

Set `"featured": true` to also show the property in the home page's "Featured Properties" section.

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next/font (Fraunces + Inter + IBM Plex Mono)
- Static JSON data (no backend needed), typed via `types/property.ts`

## Design Notes

- **Palette:** Ink navy (#12203A), brass gold (#B9893E), pine green (#1F4D3E), paper white (#F5F6F3) — built for a premium, "property registry" feel.
- **Signature element:** The price badge is styled like a registry stamp — inspired by India's stamp-paper and property registry documents.
- **Motion:** The hero content rises in with a short, staggered entrance animation on load; `prefers-reduced-motion` is respected throughout.
- Images currently come from Unsplash (placeholders). To use your own property photos, add your image domain to `next.config.js` and swap the URLs in the `images` array, or drop local images into `public/` and reference them by path.
