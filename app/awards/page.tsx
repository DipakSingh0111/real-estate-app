import type { Metadata } from "next";
import AwardsGrid from "../components/ui/AwardsGrid";
import PageBanner from "@/app/components/ui/PageBanner";
import {
  getPageBanner,
  getRealEstatePageData,
  type AwardsPageData,
} from "@/lib/getRealEstateData";
import type { Award } from "@/types/award";

export const metadata: Metadata = {
  title: "Awards & Recognition — NestVista",
  description:
    "Honors earned across Delhi NCR for excellence in real estate advisory, customer service, and premium listings.",
};

export default function AwardsPage() {
  const banner = getPageBanner("awards");
  const data = getRealEstatePageData<AwardsPageData>("awards");
  const awards = (data.AwardsListing?.items ?? []) as Award[];
  const awardStats = data.AwardsListing?.stats ?? [];
  const awardYears = [...new Set(awards.map((award) => award.year))].sort(
    (a, b) => b - a,
  );

  return (
    <main className=" bg-[#FAF9F6]">
      <PageBanner {...banner} />

      <section className="bg-transparent px-2 pb-1 sm:px-4 -mt-10 sm:-mt-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {awardStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border bg-[#9fbda7] px-5 py-4 text-center shadow-sm shadow-slate-900/10 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <p className="font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[15px] font-semibold uppercase tracking-[0.25em] text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AwardsGrid awards={awards} years={awardYears} />
    </main>
  );
}
