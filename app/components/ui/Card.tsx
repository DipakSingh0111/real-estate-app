import type { ElementType, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  interactive?: boolean;
  className?: string;
}

export default function Card({
  children,
  as: Component = "div",
  interactive = false,
  className = "",
}: CardProps) {
  return (
    <Component
      className={`overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/30 hover:shadow-lg"
          : ""
      } ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
