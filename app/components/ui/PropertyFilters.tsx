"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

export default function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      value ? params.set("search", value) : params.delete("search");
      params.delete("page"); // reset to page 1 on new search
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timer);
  }, [value, searchParams, router, pathname]);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-widest text-[#B8860B]">
        Search
      </label>
      <div className="relative group">
        <Search
          size={14}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#C89234] transition-colors"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search by title or area…"
          className="w-full sm:w-72 rounded-xl border border-stone-200 bg-stone-50 py-3 pl-9 pr-9 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:border-[#C89234] focus:shadow-[0_0_0_3px_rgba(200,146,52,0.12)]"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-slate-500 hover:bg-[#C89234] hover:text-white transition-colors"
          >
            <X size={10} />
          </button>
        )}
      </div>
    </div>
  );
}
