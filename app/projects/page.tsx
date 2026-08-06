import Link from "next/link";
import Image from "next/image";
import data from "../../data/properties.json";
import PageBreadcrumb from "@/app/components/ui/PageBreadcrumb";

export const metadata = {
  title: "Projects — Real Estate",
};

export default function ProjectsPage() {
  const projects = data?.projects || [];
  const pageTitle = "All Projects";

  return (
    <main className="min-h-screen bg-white">
      <div
        className="relative bg-cover bg-center bg-no-repeat w-full h-64"
        style={{ backgroundImage: "url('/images/land_01.avif')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-inner text-center relative z-10 ">
          <h1 className="mt-10 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {pageTitle}
          </h1>
          <PageBreadcrumb items={[{ label: "Projects" }]} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p: any) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group block overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition hover:border-[#B8863D]/40 hover:shadow-lg"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-stone-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-stone-500">
                  {p.location} — {p.city}
                </p>
                <p className="mt-4 text-sm font-bold text-stone-900">
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
