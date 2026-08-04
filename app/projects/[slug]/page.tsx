import Image from "next/image";
import Link from "next/link";
import data from "../../../data/properties.json";
import { notFound } from "next/navigation";
import { ProjectDetailProps } from "@/types/property";

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const projects = data?.projects || [];
  const project = projects.find((p: any) => p.slug === params.slug);
  if (!project) return notFound();

  const related = projects
    .filter((p: any) => p.city === project.city && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full h-64 bg-slate-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <p className="text-1xl font-semibold text-white/90">
              {project.location} — {project.city}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-3 text-sm text-stone-700 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-md border p-3">
                <div className="text-xs text-stone-500">Price</div>
                <div className="font-bold">{project.price}</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="text-xs text-stone-500">Area</div>
                <div className="font-bold">{project.area}</div>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="text-xs text-stone-500">Builder</div>
              <div className="font-bold">{project.builder}</div>
            </div>

            <div className="rounded-md border p-4">
              <div className="text-xs text-stone-500">Status</div>
              <div className="font-bold">{project.status}</div>
            </div>

            <Link
              href="/contact"
              className="block text-center rounded-md bg-[#B8863D] px-4 py-2 text-white font-semibold"
            >
              Enquire Now
            </Link>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="mt-10">
            <h3 className="text-lg font-semibold">
              Related Projects in {project.city}
            </h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((r: any) => (
                <Link
                  key={r.id}
                  href={`/projects/${r.slug}`}
                  className="block overflow-hidden rounded-lg border bg-white"
                >
                  <div className="relative h-40 w-full bg-slate-100">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">{r.title}</div>
                    <div className="text-sm text-stone-500">{r.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
