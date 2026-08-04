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
      {/* Hero with background image */}
      <section className="relative overflow-hidden border-b border-stone-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero_1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-8">
          <h1 className="mx-auto max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Recognition earned across{" "}
            <span className="text-[#F9E3B5]">Delhi NCR</span>
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="mt-4 text-2xl inline-flex items-center justify-center gap-2 rounded-full  px-4 py-2"
          >
            <Link href="/" className=" text-white hover:text-black">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="font-medium text-white">Awards</span>
          </nav>
        </div>
      </section>

      <section className="mt-14 bg-transparent px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {awardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-slate-200/70 bg-white/90 px-6 py-8 text-center shadow-lg shadow-slate-900/5"
              >
                <p className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
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
