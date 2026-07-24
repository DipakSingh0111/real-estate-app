import Link from "next/link";
import propertiesData from "../data/properties.json";
import Hero from "./components/Hero";
import PropertyCard from "./components/PropertyCard";
import type { Property } from "@/types/property";
import WhoWeServe from "./components/WhoWeServe";
const properties = propertiesData as Property[];

const testimonials = [
  {
    quote:
      "We viewed six flats over two weekends and closed on the seventh — no back-and-forth over broker fees, just a straight number.",
    name: "Aditi Sharma",
    detail: "Bought a 3BHK in Bandra West",
  },
  {
    quote:
      "The RERA ID was right there on the listing before I even asked. That single detail is why I trusted the site.",
    name: "Rahul Verma",
    detail: "Rented a 2BHK in Koramangala",
  },
  {
    quote:
      "Our agent in Gurugram answered on the first ring, every time. That kind of responsiveness is rare in this market.",
    name: "Sneha Iyer",
    detail: "Bought an apartment on Sohna Road",
  },
];

export default function HomePage() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();
  const featured = properties.filter((p) => p.featured);

  const cityStats = cities.map((city) => ({
    city,
    count: properties.filter((p) => p.city === city).length,
  }));

  return (
    <>
      <Hero cities={cities} />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
              Featured Properties
            </h2>
          </div>
          <Link
            href="/properties"
            className="hidden text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4 sm:block"
          >
            View all properties →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <WhoWeServe />

        <Link
          href="/properties"
          className="mt-8 block text-center text-sm font-semibold text-ink underline decoration-brass decoration-2 underline-offset-4 sm:hidden"
        >
          View all properties →
        </Link>
      </section>

      <section className="border-t border-ink/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            Browse by City
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {cityStats.map(({ city, count }) => (
              <Link
                key={city}
                href="#"
                className="group rounded-2xl border border-ink/10 p-6 transition hover:border-brass hover:bg-paper"
              >
                <p className="font-display text-xl font-semibold text-ink group-hover:text-brass-dark">
                  {city}
                </p>
                <p className="mt-1 font-mono text-sm text-ink/50">
                  {count} listing{count > 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 rounded-3xl bg-pine px-8 py-14 text-paper sm:grid-cols-3 sm:px-14">
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              100%
            </p>
            <p className="mt-2 text-sm text-paper/70">
              RERA-verified on every listing
            </p>
          </div>
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              12
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Cities with active agents
            </p>
          </div>
          <div>
            <p className="font-mono text-4xl font-semibold text-brass-light">
              ₹0
            </p>
            <p className="mt-2 text-sm text-paper/70">
              Buyer-side brokerage — deal direct with the builder
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
            What Buyers &amp; Tenants Say
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col justify-between rounded-2xl border border-ink/10 p-6"
              >
                <blockquote className="font-display text-lg italic leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-4">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs text-ink/50">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
