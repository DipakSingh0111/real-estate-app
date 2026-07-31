import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Eye,
  Target,
  HandshakeIcon,
  ShieldCheck,
  TrendingUp,
  Users,
  Building2,
  MapPin,
  FileCheck,
  Heart,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    desc: "We never hide costs, commissions, or legal issues. Every client deserves the full picture before signing anything.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Heart,
    title: "Client First, Always",
    desc: "We measure success by how well our clients sleep after closing a deal — not by how many deals we close.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Value",
    desc: "We guide clients toward properties that appreciate over time — not just what looks good on paper today.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FileCheck,
    title: "Legal Integrity",
    desc: "Every property we list is RERA verified. We handle documentation with zero shortcuts.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Users,
    title: "Inclusive Access",
    desc: "Whether you're a first-time buyer or a seasoned investor — we give everyone the same quality of service.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Building2,
    title: "Market Expertise",
    desc: "15+ years on the ground means we know which localities are growing, which builders deliver, and what's overpriced.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

const commitments = [
  {
    number: "01",
    title: "Only verified listings",
    desc: "We don't list a property until it passes our legal and physical inspection checklist.",
  },
  {
    number: "02",
    title: "No pressure selling",
    desc: "Our advisors are trained to guide, not push. We'd rather lose a deal than give bad advice.",
  },
  {
    number: "03",
    title: "Post-sale accountability",
    desc: "We follow up on possession timelines, builder delays, and help you escalate if needed.",
  },
  {
    number: "04",
    title: "Honest market insights",
    desc: "We tell you when a property is overpriced — even if it means you don't buy through us.",
  },
];

export default function VisionMissionPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero with Breadcrumb */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/62" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex items-center gap-2 text-xs text-slate-400"
          >
            <Link href="/" className="transition-colors hover:text-[#C89234]">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">Vision & Mission</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              What we stand for &{" "}
              <span className="text-[#C89234]">where we're headed.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
              Real estate is one of the most important decisions in a person's
              life. Our vision and mission are built around making that decision
              easier, safer, and more rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Vision */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-xs">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-amber-50/60" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Eye size={20} />
              </div>
              <h2 className="font-heading mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                Our Vision
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To become India's most trusted real estate platform — where
                every buyer, seller, and investor can make confident property
                decisions backed by verified data, honest advice, and end-to-end
                support.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We envision a future where finding the right home is not
                stressful or confusing — where transparency is the norm, not the
                exception.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-7 shadow-xs">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-50/60" />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Target size={20} />
              </div>
              <h2 className="font-heading mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                Our Mission
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To simplify property buying, selling, and renting for every
                Indian — by combining deep market knowledge, legal expertise,
                and genuine human support at every step of the journey.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                We don't just close deals. We build long-term relationships by
                putting our clients' interests above everything else — including
                our own commission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-slate-200 bg-white py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              What Drives Us
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Our core values
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-500 leading-relaxed">
              These aren't just words on a wall. They're the principles our team
              follows on every call, every site visit, and every deal.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group flex gap-4 rounded-2xl border border-slate-100 bg-[#FAFAFA] p-5 transition-all duration-300 hover:border-[#B8860B]/30 hover:bg-white hover:shadow-md"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${v.color}`}
                  >
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitments */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            Our Promise
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            Commitments we don't compromise on
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c) => (
            <div
              key={c.number}
              className="rounded-2xl border border-slate-100 bg-white p-5 transition hover:border-[#B8860B]/30 hover:shadow-md"
            >
              <span className="font-mono text-3xl font-extrabold text-black">
                {c.number}
              </span>
              <h3 className="mt-2 text-sm font-bold text-slate-900">
                {c.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
