import type { ElementType } from "react";

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: ElementType;
  className?: string;
}

export default function SectionHeader({
  preTitle,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignment} ${className}`.trim()}
    >
      {preTitle && (
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#B8863D]">
          {preTitle}
        </p>
      )}
      <Heading className="mt-2 font-heading text-2xl font-bold leading-tight text-stone-900 sm:text-3xl">
        {title}
      </Heading>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-stone-600 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
