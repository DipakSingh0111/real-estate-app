import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackLinkProps {
  href: string;
  label: string;
  className?: string;
}

export default function BackLink({
  href,
  label,
  className = "",
}: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-[#B8863D] ${className}`.trim()}
    >
      <ArrowLeft size={16} />
      {label}
    </Link>
  );
}
