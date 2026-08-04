"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationProps } from "@/types/property";

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const buildHref = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  };

  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  return (
    <div className="flex items-center justify-center gap-1.5">
      {/* Prev */}
      {currentPage === 1 ? (
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-slate-300 cursor-not-allowed">
          <ChevronLeft size={16} />
        </span>
      ) : (
        <Link
          href={buildHref(currentPage - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-slate-600 transition hover:border-[#C89234] hover:text-[#C89234]"
        >
          <ChevronLeft size={16} />
        </Link>
      )}

      {/* Page Numbers */}
      {pages.map((page, i) =>
        page === "..." ? (
          <span key={`e-${i}`} className="flex h-9 w-9 items-center justify-center text-sm text-slate-400">
            …
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-semibold transition ${
              currentPage === page
                ? "border-[#C89234] bg-[#C89234] text-white shadow-sm pointer-events-none"
                : "border-stone-200 bg-white text-slate-600 hover:border-[#C89234] hover:text-[#C89234]"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage === totalPages ? (
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-slate-300 cursor-not-allowed">
          <ChevronRight size={16} />
        </span>
      ) : (
        <Link
          href={buildHref(currentPage + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-slate-600 transition hover:border-[#C89234] hover:text-[#C89234]"
        >
          <ChevronRight size={16} />
        </Link>
      )}
    </div>
  );
}
