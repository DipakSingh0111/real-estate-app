import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export interface ProjectCardData {
  id: string | number;
  slug: string;
  title: string;
  image?: string;
  location?: string;
  city?: string;
  builder?: string;
  status?: string;
  price?: string;
  description?: string;
  possessionDate?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
  compact?: boolean;
  priority?: boolean;
}

const statusClasses: Record<string, string> = {
  "New Launch": "border-amber-200 bg-amber-50 text-amber-700",
  "Ready to Move": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "Under Construction": "border-blue-200 bg-blue-50 text-blue-700",
  "Sold Out": "border-slate-200 bg-slate-800 text-white",
};

export default function ProjectCard({
  project,
  compact = false,
  priority = false,
}: ProjectCardProps) {
  const place = [project.location, project.city].filter(Boolean).join(", ");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/40 hover:shadow-lg"
    >
      <div
        className={`relative w-full overflow-hidden bg-slate-100 ${
          compact ? "aspect-[16/10]" : "h-56"
        }`}
      >
        <Image
          src={project.image || "/placeholder.jpg"}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
        {project.status && (
          <span
            className={`absolute left-3 top-3 rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${
              statusClasses[project.status] ??
              "border-white/20 bg-slate-900/80 text-white"
            }`}
          >
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {(place || project.builder) && (
          <p className="flex items-center gap-1 text-xs font-medium text-stone-500">
            <MapPin size={13} className="shrink-0 text-[#B8863D]" />
            <span className="truncate">
              {[place, project.builder].filter(Boolean).join(" • ")}
            </span>
          </p>
        )}
        <h3 className="mt-1.5 line-clamp-1 font-heading text-lg font-bold text-stone-900 transition-colors group-hover:text-[#B8863D]">
          {project.title}
        </h3>
        {project.description && (
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-stone-500">
            {project.description}
          </p>
        )}
        {project.possessionDate && (
          <p className="mt-2 text-xs font-medium text-stone-400">
            Possession: {project.possessionDate}
          </p>
        )}
        {project.price && (
          <p className="mt-4 border-t border-stone-100 pt-3 text-sm font-bold text-stone-900">
            {project.price}
          </p>
        )}
      </div>
    </Link>
  );
}
