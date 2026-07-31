import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  MapPin,
  Scale,
  Eye,
  LayoutGrid,
  Headphones,
  ArrowRight,
  PhoneCall,
  TrendingUp,
  FileCheck,
  Building2,
  Star,
} from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Verified Properties",
    desc: "Every listing goes through a thorough legal check and physical site inspection before it reaches you.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "Best Price Guarantee",
    desc: "We work directly with builders — no middlemen, no hidden markup. What you see is what you pay.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: UserCheck,
    title: "Dedicated Advisor",
    desc: "You get one point of contact from search to possession. Someone who actually knows your requirements.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "We only list properties in areas with strong connectivity, infrastructure growth, and rental demand.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Scale,
    title: "Legal Assistance",
    desc: "From sale agreement to registry — our legal team handles all paperwork so you don't have to worry.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "No surprise charges. Every cost is explained upfront — builder price, stamp duty, registration fees.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Our advisors help you pick properties with the best appreciation potential and rental yield.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Headphones,
    title: "Post-Sale Support",
    desc: "We stay with you even after the deal closes — possession follow-up, interiors, tenant management.",
    color: "bg-orange-50 text-orange-600",
  },
];

const stats = [
  { value: "850+", label: "Happy Clients" },
  { value: "20+", label: "Cities Covered" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "RERA Verified" },
];

const process = [
  {
    step: "01",
    title: "Share Your Requirement",
    desc: "Tell us what you're looking for — budget, location, type of property.",
  },
  {
    step: "02",
    title: "We Shortlist Options",
    desc: "Our team curates verified properties that match your exact needs.",
  },
  {
    step: "03",
    title: "Site Visit & Evaluation",
    desc: "We arrange visits and help you evaluate each option honestly.",
  },
  {
    step: "04",
    title: "Close with Confidence",
    desc: "Legal checks, paperwork, and registration — all handled by us.",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero with Breadcrumb */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-[#C89234]">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">Why Choose Us</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Why thousands trust us{" "}
              <span className="text-[#C89234]">
                with their biggest decision.
              </span>
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
              Buying a home is not just a financial decision — it's a life
              decision. We take that seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            What Sets Us Apart
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Built around your needs, not ours.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500 leading-relaxed">
            We've been on the ground long enough to know what actually matters
            when buying or renting a property.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#B8860B]/30 hover:shadow-md"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-slate-200 bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              Our Process
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              How we work with you
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-slate-100 bg-[#FAF7F2] p-5"
              >
                <span className="font-mono text-3xl font-extrabold text-slate-100">
                  {p.step}
                </span>
                <h3 className="mt-2 text-sm font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
