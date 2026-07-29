import Image from "next/image";
import data from "../../data/properties.json";
import Link from "next/link";
import {
  Award,
  Building2,
  Home,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = data.aboutValues;

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-slate-950/95">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="About"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                About Our Company
              </span>

              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Real estate,
                <span className="block text-amber-300">
                  handled with distinction.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
                We specialize in luxury homes, premium investments, and
                personalized property solutions designed for modern lifestyles.
                Our service combines market expertise with discretion and a
                premium client experience.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/properties"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Explore Properties
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Talk to an advisor
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "15+ Years", value: "Market excellence" },
                { label: "1,200+ Homes", value: "Premium portfolio" },
                { label: "850+ Families", value: "Satisfied clients" },
                { label: "20+ Cities", value: "National coverage" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-2xl backdrop-blur"
                >
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
                    {item.label}
                  </p>
                  <p className="mt-4 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
              Our Story
            </span>

            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Building trust through premium real estate.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our mission is to connect people with extraordinary homes and
              investment opportunities. Every project is selected for its
              quality, location, and long-term value.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              From luxury villas to premium apartments and commercial spaces,
              our experienced team guides every client with transparency,
              professionalism, and unmatched market knowledge.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Verified premium listings",
                "Experienced property consultants",
                "End-to-end buying support",
                "Investment advisory",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 text-amber-500" size={20} />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
              <Image
                src="/images/aboutCompany.jpg"
                alt="Company"
                fill
                className="object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" /> */}
            </div>

            <div className="pointer-events-none absolute left-0 top-0 hidden h-24 w-24 rounded-full bg-amber-300/20 blur-2xl lg:block" />
            <div className="absolute -bottom-6 right-0 hidden rounded-3xl border border-white/20 bg-white p-6 shadow-2xl lg:block lg:max-w-xs">
              <p className="text-xs uppercase tracking-[0.33em] text-amber-600">
                Signature service
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-950">
                Dedicated advisors for every property search.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200/60 bg-white p-10 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
                Start your search
              </p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                Find your dream property today.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
                Explore our exclusive collection of luxury homes, apartments,
                and commercial spaces across the country's most desirable
                locations.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Contact Our Team
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                href="/properties"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:border-amber-400 hover:text-amber-600"
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
