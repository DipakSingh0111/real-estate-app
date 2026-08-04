"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { PropertyListingFiltersProps } from "@/types/property";

export default function PropertyListingFilters({
  resultCount,
  activeListing,
}: PropertyListingFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, val]) => {
      if (val) params.set(key, val);
      else params.delete(key);
    });
    params.delete("page");
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const listingTabs = [
    { label: "All properties", value: "" },
    { label: "For Sale", value: "Sale" },
    { label: "For Rent", value: "Rent" },
  ];

  return (
    <div className="flex flex-col gap-4 border-y border-stone-200 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        {listingTabs.map((tab) => {
          const isActive = activeListing === tab.value;
          return (
            <button
              key={tab.label}
              type="button"
              onClick={() => updateParams({ listingType: tab.value || null })}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isActive
                  ? "bg-stone-900 text-white shadow-sm"
                  : "border border-stone-200 bg-white text-stone-700 hover:border-stone-300 hover:bg-stone-50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}

      </div>

      <p className="text-sm text-stone-400">
        <span className="font-semibold text-stone-600">{resultCount}</span>{" "}
        result{resultCount !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
