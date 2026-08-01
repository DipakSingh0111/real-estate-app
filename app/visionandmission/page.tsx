import React from "react";
import Link from "next/link";
import {
  Eye,
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  Building2,
  FileCheck,
  Heart,
  Home,
  ChevronsRight,
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
      {/* Hero Section*/}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title (Centered & Uppercase) */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            VISION & MISSION
          </h1>

          {/* 📍 Breadcrumb (Below Title, Center Aligned) */}
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white flex-wrap"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#e53935]"
            >
              <Home size={15} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <ChevronsRight size={14} className="text-white/70" />
            <Link
              href="/aboutus"
              className="transition-colors hover:text-[#e53935]"
            >
              About Us
            </Link>
            <ChevronsRight size={14} className="text-white/70" />
            <span className="text-[#e53935]">Vision & Mission</span>
          </nav>
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
    </main>
  );
}
