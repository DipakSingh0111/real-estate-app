import type { Metadata } from "next";
import Link from "next/link";
import AwardsGrid from "../components/AwardsGrid";
import { awardStats, awards, awardYears } from "@/lib/awards";

export const metadata: Metadata = {
  title: "Awards & Recognition — NestVista",
  description:
    "Honors earned across Delhi NCR for excellence in real estate advisory, customer service, and premium listings.",
};

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      {/* Hero — screenshot style: centered, light, minimal */}
      <section className="px-4 pb-4 pt-10 text-center sm:px-6 sm:pt-12 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-3xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex items-center justify-center gap-2 text-sm text-stone-400"
          >
            <Link href="/" className="transition hover:text-stone-700">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-stone-700">Awards</span>
          </nav>

          <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem]">
            Recognition earned across{" "}
            <span className="text-[#B8863D]">Delhi NCR.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-500 sm:text-base">
            Industry honors that reflect our commitment to verified listings,
            transparent advisory, and long-term client relationships across the
            capital region.
          </p>

          <div className="mx-auto mt-10 grid max-w-1xl grid-cols-1 gap-4 sm:grid-cols-3">
            {awardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#E8E4DC] bg-white px-6 py-5"
              >
                <p className="font-heading text-2xl font-bold text-stone-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards grid */}
      <AwardsGrid awards={awards} years={awardYears} />
    </main>
  );
}
