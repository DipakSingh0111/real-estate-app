import Link from "next/link";
import { Home } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
  variant?: "plain" | "pill";
  className?: string;
};

export default function PageBreadcrumb({
  items,
  variant = "plain",
  className = "",
}: PageBreadcrumbProps) {
  const base =
    variant === "pill"
      ? "mt-7 flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-slate-950/30 px-4 py-2 text-[11px] text-white/65 backdrop-blur-md sm:mt-8 sm:gap-2 sm:text-xs"
      : "mt-3 flex max-w-full flex-wrap items-center justify-center gap-1.5 text-sm font-medium text-white/75";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`${base} ${className}`.trim()}
    >
      <Link
        href="/"
        className="inline-flex shrink-0 items-center gap-1.5 transition hover:text-[#E6C687]"
      >
        <Home size={variant === "pill" ? 13 : 15} />
        Home
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
            <span className="text-white/35" aria-hidden="true">
              /
            </span>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="max-w-[140px] truncate transition hover:text-[#E6C687] sm:max-w-xs"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`max-w-[160px] truncate sm:max-w-xs ${
                  isLast ? "font-medium text-white" : "text-white/75"
                }`}
              >
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
