import type { Metadata } from "next";
import AwardsGrid from "../components/ui/AwardsGrid";
import { awardStats, awards, awardYears } from "@/lib/awards";
import PageBanner from "@/app/components/ui/PageBanner";

export const metadata: Metadata = {
  title: "Awards & Recognition — NestVista",
  description:
    "Honors earned across Delhi NCR for excellence in real estate advisory, customer service, and premium listings.",
};

export default function AwardsPage() {
  return (
    <main className=" bg-[#FAF9F6]">
      <PageBanner
        preTitle="Our Achievements"
        title="Awards & Recognition"
        description="Honors earned for trusted advisory, outstanding client service, and excellence across premium real estate."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Awards & Recognition" },
        ]}
      />

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
