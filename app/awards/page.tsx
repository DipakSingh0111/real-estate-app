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
    <main className=" bg-[#FAF9F6]">
      {/* Hero with background image */}
      <section className="relative overflow-hidden border-b border-stone-800">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero_1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="hero-inner text-center">
          <h1 className="mx-auto max-w-3xl font-heading text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
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

      <section className="bg-transparent px-2 pb-1 sm:px-4 -mt-10 sm:-mt-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {awardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200/70 bg-white px-5 py-4 text-center shadow-sm shadow-slate-900/10 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500">
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
