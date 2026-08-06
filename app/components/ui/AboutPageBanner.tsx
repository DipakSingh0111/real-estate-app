import PageBreadcrumb, { type BreadcrumbItem } from "./PageBreadcrumb";

interface AboutPageBannerProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function AboutPageBanner({
  title,
  description,
  breadcrumbs,
}: AboutPageBannerProps) {
  return (
    <section className="relative isolate min-h-[190px] overflow-hidden border-b border-slate-800 text-white sm:min-h-[220px]">
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/about_0.avif')" }}
      />
      <div className="absolute inset-0 -z-20 bg-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(184,134,61,0.12),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-slate-950/45 to-transparent" />

      <div className="mx-auto flex min-h-[190px] max-w-5xl flex-col items-center justify-center px-4 py-6 text-center sm:min-h-[220px] sm:px-6 sm:py-8 lg:px-8">
        
        <h1 className="max-w-4xl font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <PageBreadcrumb
          variant="pill"
          items={breadcrumbs}
          className="mt-4 sm:mt-5"
        />
      </div>
    </section>
  );
}
