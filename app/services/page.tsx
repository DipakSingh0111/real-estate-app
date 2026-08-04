import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronsRight,
  ArrowRight,
  CheckCircle2,
  Landmark,
  Scale,
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Sofa,
} from "lucide-react";
import { services } from "@/lib/services";

const icons = {
  Landmark,
  Scale,
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Sofa,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-16 text-center sm:py-20 lg:px-8">
          <h1 className="font-heading mt-4 text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Our Services
          </h1>
          <nav
            aria-label="Breadcrumb"
            className="mt-5 flex flex-wrap items-center justify-center gap-1.5 text-sm text-white"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 hover:text-[#f0d9a8]"
            >
              <Home size={15} />
              Home
            </Link>
            <ChevronsRight size={14} className="text-white/50" />
            <span className="text-[#C89234]">Services</span>
          </nav>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Landmark;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C89234]/30 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div
                    className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
                    style={{ backgroundColor: service.accent }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                      {service.tagline}
                    </p>
                    <h3 className="font-heading mt-0.5 text-lg font-bold text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-relaxed text-stone-500 line-clamp-2">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-stone-600"
                      >
                        <CheckCircle2
                          size={13}
                          className="shrink-0 text-[#C89234]"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2 border-t border-stone-100 pt-4">
                    {service.stats.slice(0, 2).map((s) => (
                      <span
                        key={s.label}
                        className="rounded-lg px-2.5 py-1 text-[11px] font-bold"
                        style={{
                          backgroundColor: service.accentLight,
                          color: service.accent,
                        }}
                      >
                        {s.value} · {s.label}
                      </span>
                    ))}
                  </div>

                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-[#C89234] transition-all group-hover:gap-2.5">
                    View Details
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        {/* CTA */}
        <div className="mt-14 overflow-hidden rounded-2xl bg-gradient-to-br from-[#322f2a] via-[#4a4338] to-[#6b5c3e] px-8 py-12 text-center sm:px-12">
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Need help choosing the right service?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/75">
            Our advisors offer a free consultation to understand your needs and
            recommend the best solution.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#b07e28]"
            >
              Get Free Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
