import Image from "next/image";
import Link from "next/link";
import data from "../../data/properties.json";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const values = data.aboutValues;

const features = [
  "Verified premium listings",
  "Experienced property consultants",
  "End-to-end buying support",
  "Investment advisory",
];

const stats = [
  { label: "15+", sub: "Years of Excellence" },
  { label: "1,200+", sub: "Premium Homes" },
  { label: "850+", sub: "Happy Families" },
  { label: "20+", sub: "Cities Covered" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="About Elite Estates"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C89234]/40 bg-[#C89234]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C89234]" />
              About Our Company
            </span>

            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Real estate,{" "}
              <span className="text-[#C89234]">handled with distinction.</span>
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              We specialize in luxury homes, premium investments, and
              personalized property solutions designed for modern lifestyles —
              combining market expertise with discretion and a premium client
              experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b07e28] active:scale-95"
              >
                Explore Properties <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                Talk to an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-stone-100 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-6 py-5 text-center">
                <p className="font-heading text-3xl font-bold text-slate-900 sm:text-4xl">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-slate-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="mx-auto max-w-7xl px-6 py-3 lg:px-8 lg:py-12">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 lg:items-center">

          {/* Left: Text */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              Our Story
            </span>
            <h2 className="font-heading mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              Building trust through <br /> premium real estate.
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Our mission is to connect people with extraordinary homes and
              investment opportunities. Every project is selected for its
              quality, location, and long-term value.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              From luxury villas to premium apartments and commercial spaces,
              our experienced team guides every client with transparency,
              professionalism, and unmatched market knowledge.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#C89234]" />
                  <p className="text-sm font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <div className="relative aspect-[16/9] w-full lg:aspect-[16/10]">
              <Image
                src="/images/aboutCompany.jpg"
                alt="Our Company"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-stone-200 bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              What We Stand For
            </span>
            <h2 className="font-heading mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our core values
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-stone-200 bg-[#FAF7F2] p-6 transition hover:border-[#C89234]/40 hover:shadow-md"
              >
                <span className="font-mono text-xs font-bold text-[#C89234]">
                  0{i + 1}
                </span>
                <p className="mt-3 font-heading text-xl font-bold text-slate-900">
                  {v.title}
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#B8860B]">
                  {v.label}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <div className="overflow-hidden rounded-2xl bg-slate-900 px-8 py-12 shadow-xl sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C89234]/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
                Start Your Search
              </span>
              <h2 className="font-heading mt-3 text-2xl font-bold text-white sm:text-3xl">
                Find your dream property today.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Explore our exclusive collection of luxury homes, apartments,
                and commercial spaces across the country's most desirable
                locations.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b07e28] active:scale-95"
              >
                Contact Our Team <ArrowRight size={16} />
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
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
