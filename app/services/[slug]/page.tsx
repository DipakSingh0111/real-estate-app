import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronsRight,
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
import { services, getServiceBySlug } from "@/lib/services";

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

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-800 text-white">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
          
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-16 sm:py-20 lg:px-8 lg:py-14">
          <div className="max-w-2xl">
            <span
              className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm"
              style={{ backgroundColor: `${service.accent}cc` }}
            >
              {service.tagline}
            </span>
            <div className="mt-4 flex items-center gap-3">
              
              <h1 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
            </div>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
              {service.shortDescription}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold transition hover:bg-white/90"
              style={{ color: service.accent }}
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex flex-wrap items-center gap-1.5 text-sm text-white/70"
          >
            <Link href="/" className="inline-flex items-center gap-1 hover:text-white">
              <Home size={14} />
              Home
            </Link>
            <ChevronsRight size={14} />
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <ChevronsRight size={14} />
            <span className="text-white">{service.title}</span>
          </nav>
        </div>
      </section>

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
              <div className="space-y-3 p-6">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                  style={{ backgroundColor: service.accent }}
                >
                  Request Consultation
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="flex w-full items-center justify-center rounded-xl border border-stone-200 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-stone-300"
                >
                  Call +91 98765 43210
                </a>
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
