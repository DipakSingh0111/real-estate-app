import type { ElementType, ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
  className?: string;
}

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  wide: "max-w-[1440px]",
};

export default function PageContainer({
  children,
  as: Container = "div",
  size = "default",
  className = "",
}: PageContainerProps) {
  return (
    <Container
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`.trim()}
    >
      {children}
    </Container>
  );
}
