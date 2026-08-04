import Link from "next/link";
import Image from "next/image";
import data from "../../data/properties.json";

export const metadata = {
  title: "Projects — Real Estate",
};

export default function ProjectsPage() {
  const projects = data?.projects || [];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-heading text-3xl font-bold text-stone-900">
          All Projects
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Browse our curated list of projects.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-lg"
            >
              <div className="relative h-48 w-full bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-stone-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-stone-500">
                  {p.location} — {p.city}
                </p>
                <p className="mt-3 text-sm font-bold text-stone-900">
                  {p.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
