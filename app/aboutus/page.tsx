import Link from "next/link";
import data from "../../data/properties.json";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const values = data.aboutValues;

const features = [
  "Verified premium listings",
  "Experienced property consultants",
  "End-to-end buying support",
  "Investment advisory",
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* ── Compact Hero Section ── */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          {/* 📍 Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs text-slate-400"
          >
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-[#C89234]"
            >
              <span>Home</span>
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">About Us</span>
          </nav>

          {/* Compact Hero Content */}
          <div className="max-w-3xl">
            <h1 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Redefining luxury living &{" "}
              <span className="text-[#C89234]">trusted real estate.</span>
            </h1>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-2xl">
              We specialize in luxury homes, premium investments, and
              personalized property solutions tailored for modern lifestyles —
              combining market expertise with discretion and a high-touch client
              experience.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-[#b07e28] active:scale-95"
              >
                Explore Properties <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story (Without Image) ── */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            Our Story
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
            Building trust through premium real estate.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-sm">
            Our mission is to connect people with extraordinary homes and
            investment opportunities. Every project is selected for its quality,
            prime location, and long-term value.
          </p>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-sm">
            From luxury villas to premium apartments and commercial spaces, our
            experienced team guides every client with transparency,
            professionalism, and unmatched market knowledge.
          </p>

          {/* Features Grid */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 rounded-xl border border-stone-200 bg-white p-3 shadow-sm"
              >
                <CheckCircle2 size={16} className="shrink-0 text-[#C89234]" />
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="border-t border-stone-200 bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              What We Stand For
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our core values
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-xl border border-stone-200 bg-[#FAF7F2] p-5 transition hover:border-[#C89234]/40 hover:shadow-md"
              >
                <span className="font-mono text-xs font-bold text-[#C89234]">
                  0{i + 1}
                </span>
                <p className="mt-2 font-heading text-lg font-bold text-slate-900">
                  {v.title}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold uppercase tracking-wider text-[#B8860B]">
                  {v.label}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
        <div className="relative overflow-hidden rounded-2xl bg-gray-500 px-6 py-8 shadow-lg sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#C89234]/15 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
                Start Your Search
              </span>
              <h2 className="font-heading mt-1 text-xl font-bold text-white sm:text-2xl">
                Find your dream property today.
              </h2>
              <p className="mt-2 leading-relaxed text-black text-1xl">
                Explore our exclusive collection of luxury homes, apartments,
                and commercial spaces.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#b07e28] active:scale-95"
              >
                Contact Our Team <ArrowRight size={15} />
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-white/20"
              >
                View Properties
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
