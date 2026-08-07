import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Landmark,
  Scale,
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Sofa,
} from "lucide-react";
import { services, getPageBanner, getServiceBySlug } from "@/lib/getRealEstateData";
import PageBanner from "@/app/components/ui/PageBanner";

const icons = {
  Landmark,
  Scale,
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Sofa,
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = icons[service.icon as keyof typeof icons] ?? Landmark;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);
  const banner = getPageBanner("service-detail");

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900">
      <PageBanner
        preTitle={banner.preTitle}
        title={service.title}
        description={service.shortDescription}
        breadcrumbs={[...banner.breadcrumbs, { label: service.title }]}
      />

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <Link
          href="/services"
          className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#C89234] transition hover:text-[#b07e28]"
        >
          <ArrowLeft size={16} />
          All Services
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-xl font-bold text-stone-900 sm:text-2xl">
                About This Service
              </h2>
              <p className="mt-4 text-sm leading-[1.85] text-stone-600 sm:text-base">
                {service.description}
              </p>

              <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-[#C89234]">
                What&apos;s Included
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 rounded-xl border border-stone-100 bg-[#FAF7F2] px-4 py-3 text-sm text-stone-700"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-[#C89234]"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-stone-900 sm:text-2xl">
                How It Works
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.steps.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm"
                  >
                    <span
                      className="font-heading text-2xl font-extrabold opacity-20"
                      style={{ color: service.accent }}
                    >
                      {step.step}
                    </span>
                    <h4 className="mt-1 text-sm font-bold text-stone-900">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-stone-500">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {service.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-sm"
                >
                  <h4 className="font-heading text-base font-bold text-stone-900">
                    {h.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-stone-500">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm">
              <div
                className="px-6 py-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${service.accent}, #322f2a)`,
                }}
              >
                <h3 className="font-heading text-lg font-bold">
                  Get Started Today
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  Free consultation with our experts — no obligation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-stone-200 bg-white py-12 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading mb-6 text-xl font-bold text-stone-900 sm:text-2xl">
            Explore Other Services
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {others.map((s) => {
              const OtherIcon = icons[s.icon as keyof typeof icons] ?? Landmark;
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition hover:shadow-lg"
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={s.heroImage}
                      alt={s.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `linear-gradient(to top, ${s.accent}, transparent)`,
                      }}
                    />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                        style={{ backgroundColor: s.accent }}
                      >
                        <OtherIcon size={16} />
                      </div>
                      <p className="text-sm font-bold text-white">{s.title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
