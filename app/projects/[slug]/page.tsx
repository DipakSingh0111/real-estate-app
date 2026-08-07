import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Bath,
  BedDouble,
  Calendar,
  CheckCircle2,
  MapPin,
  Maximize2,
  Tag,
} from "lucide-react";
import PageBreadcrumb from "@/app/components/ui/PageBreadcrumb";
import {
  allUnifiedProjects,
  getRelatedUnifiedProjects,
  getStatusListingHref,
  getUnifiedProjectBySlug,
} from "@/lib/getRealEstateData";

export async function generateStaticParams() {
  return allUnifiedProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getUnifiedProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | NestVista`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getUnifiedProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedUnifiedProjects(slug, 3);
  const statusHref = getStatusListingHref(project.status);
  const backHref =
    project.source === "launchProjects" ? statusHref : "/projects";
  const backLabel =
    project.source === "launchProjects" ? project.status : "Projects";

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900">
      <section className="relative overflow-hidden border-b border-stone-800 text-white">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.55)_100%)]" />
        </div>

        <div className="relative mx-auto flex h-[250px] max-w-5xl flex-col items-center justify-center px-4 text-center sm:h-[280px] sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
              {project.status}
            </span>
            {project.category && (
              <span className="rounded-full bg-[#B8863D] px-3 py-1 text-[11px] font-semibold text-white">
                {project.category}
              </span>
            )}
          </div>

          <h1 className="mt-2 line-clamp-2 max-w-4xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
            {project.title}
          </h1>

          <p className="mt-2 line-clamp-1 flex items-center justify-center gap-2 text-sm text-white/75 sm:text-base">
            <MapPin size={16} className="shrink-0 text-[#E6C687]" />
            {project.location}
            {project.city ? `, ${project.city}` : ""}
          </p>

          <p className="mt-1 font-heading text-xl font-bold text-[#E6C687] sm:text-2xl">
            {project.price}
          </p>

          <PageBreadcrumb
            variant="pill"
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.status, href: statusHref },
              { label: project.title },
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <Link
          href={backHref}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#B8863D] transition hover:text-[#A37430]"
        >
          <ArrowLeft size={16} />
          Back to {backLabel}
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="relative h-[260px] w-full sm:h-[360px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-4 sm:divide-y-0">
                <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                  <BedDouble size={18} className="text-[#B8863D]" />
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Bedrooms
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {project.beds != null ? `${project.beds} BHK` : "—"}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                  <Bath size={18} className="text-[#B8863D]" />
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Bathrooms
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {project.baths ?? "—"}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                  {project.area ? (
                    <Maximize2 size={18} className="text-[#B8863D]" />
                  ) : (
                    <Tag size={18} className="text-[#B8863D]" />
                  )}
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    {project.area ? "Area" : "Category"}
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {project.area || project.category || "—"}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5 px-3 py-4 text-center">
                  <Calendar size={18} className="text-[#B8863D]" />
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Possession
                  </p>
                  <p className="text-sm font-bold text-slate-900">
                    {project.possessionDate || project.status || "On request"}
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                  Overview
                </p>
                <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                  About this project
                </h2>
              </div>
              <div className="px-6 py-6 sm:px-8">
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {project.description}
                </p>
              </div>
            </div>

            {project.amenities.length > 0 && (
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                    Amenities
                  </p>
                  <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                    What you get
                  </h2>
                </div>
                <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                  {project.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#FAF7F2] px-4 py-3.5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#B8863D] shadow-sm">
                        <CheckCircle2 size={16} />
                      </span>
                      <p className="text-sm font-medium text-slate-800">
                        {amenity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                Pricing
              </p>
              <p className="font-heading mt-2 text-3xl font-bold text-slate-900">
                {project.price}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {project.possessionDate || project.status}
              </p>

              <dl className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Builder</dt>
                  <dd className="font-semibold text-slate-900">
                    {project.builder || "—"}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Location</dt>
                  <dd className="text-right font-semibold text-slate-900">
                    {project.location}
                  </dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-slate-500">Status</dt>
                  <dd className="font-semibold text-slate-900">
                    {project.status}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 grid gap-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#B8863D] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#A37430]"
                >
                  Enquire now
                  <ArrowUpRight size={15} />
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {project.highlights.length > 0 && (
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle2
                        size={15}
                        className="mt-0.5 shrink-0 text-[#B8863D]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-12">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
              More projects
            </p>
            <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
              You might also like
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/projects/${item.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition hover:border-[#B8863D]/30 hover:shadow-md"
                >
                  <div className="relative h-40 w-full bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-[#B8863D] px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.status}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="truncate font-bold text-slate-900 transition group-hover:text-[#B8863D]">
                      {item.title}
                    </h3>
                    <p className="mt-1 truncate text-xs text-slate-500">
                      {item.location}
                    </p>
                    <p className="mt-2 text-sm font-extrabold text-slate-900">
                      {item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
