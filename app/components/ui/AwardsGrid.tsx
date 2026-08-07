"use client";

import { useMemo, useState } from "react";
import type { Award, AwardsGridProps } from "@/types/award";

function AwardCard({ award }: { award: Award }) {
  const isGhost = award.iconVariant === "ghost";

  return (
    <article className="group relative flex min-h-[190px] flex-col rounded-3xl border border-[#E8E4DC] bg-[#F5F2ED] p-8 transition-colors duration-300 hover:border-[#D6D0C4] sm:min-h-[190px] sm:p-9">
      <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-[11px] font-medium tracking-wide text-stone-400">
        {award.year}
      </span>
      <div className="flex flex-1 items-center justify-center py-6">
        <div
          className={`flex h-[76px] w-[76px] items-center justify-center rounded-2xl text-[17px] font-semibold tracking-tight ${
            isGhost
              ? "border border-[#E8E4DC] bg-white/80 text-stone-400"
              : "text-white"
          }`}
          style={isGhost ? undefined : { backgroundColor: award.iconColor }}
        >
          {award.initials}
        </div>
      </div>
      <div className="mt-auto pt-2">
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-stone-400">
          {award.category}
        </p>
        <h3 className="mt-2 font-heading text-[1.15rem] font-semibold leading-snug text-stone-900 sm:text-[1.2rem]">
          {award.title}
        </h3>
      </div>
    </article>
  );
}

export default function AwardsGrid({ awards, years }: AwardsGridProps) {
  const [activeYear, setActiveYear] = useState<number | "all">("all");

  const filtered = useMemo(
    () =>
      activeYear === "all"
        ? awards
        : awards.filter((a) => a.year === activeYear),
    [activeYear, awards],
  );

  const tabs: { label: string; value: number | "all" }[] = [
    { label: "All", value: "all" },
    ...years.map((y) => ({ label: String(y), value: y })),
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-10">
      <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-md font-semibold sm:text-[1.55rem] font-body text-[#808a4c">
          Awards that mark how we work.
        </h2>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = activeYear === tab.value;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveYear(tab.value)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "bg-stone-900 text-white"
                    : "border border-stone-200/90 bg-white text-stone-600 hover:border-stone-300"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
        {filtered.map((award) => (
          <AwardCard key={award.id} award={award} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-8 text-center text-sm text-stone-500">
          No awards found for this year.
        </p>
      )}
    </section>
  );
}
