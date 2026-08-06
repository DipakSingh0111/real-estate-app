import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
}

export default function EmptyState({
  title,
  description,
  icon: Icon,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-10 text-center ${className}`.trim()}
    >
      {Icon && (
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#B8863D]/10 text-[#B8863D]">
          <Icon size={20} />
        </span>
      )}
      <h3 className="font-heading text-lg font-bold text-stone-900">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-stone-500">
          {description}
        </p>
      )}
    </div>
  );
}
