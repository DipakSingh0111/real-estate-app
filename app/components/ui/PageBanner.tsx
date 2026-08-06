import PageBreadcrumb, { type BreadcrumbItem } from "./PageBreadcrumb";

interface PageBannerProps {
  preTitle: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageBanner({
  preTitle,
  title,
  description,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-800 text-white ">
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about_0.avif')" }}
      />
      <div className="absolute inset-0 -z-20 bg-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(184,134,61,0.16),transparent_52%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-20 bg-gradient-to-t from-slate-950/50 to-transparent" />

      <div className="mx-auto flex h-[250px] max-w-5xl flex-col items-center justify-center px-4 text-center sm:h-[280px] sm:px-6 lg:px-8">
        <p className="line-clamp-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#E6C687] sm:text-xs">
          {preTitle}
        </p>
        <h1 className="mt-2 line-clamp-2 max-w-4xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        {/* <p className="mt-2 line-clamp-2 max-w-2xl text-xs leading-relaxed text-white/70 sm:text-sm">
          {description}
        </p> */}
        <PageBreadcrumb variant="pill" items={breadcrumbs} />
      </div>
    </section>
  );
}
