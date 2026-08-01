"use client";

import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  Award,
  GraduationCap,
  MapPin,
  Briefcase,
  ArrowRight,
  Mail,
  Clock,
  Building2,
  HeartHandshake,
  ShieldCheck,
  Home,
  ChevronsRight,
} from "lucide-react";

const jobOpenings = [
  {
    id: 1,
    title: "Senior Real Estate Consultant",
    location: "Noida / Delhi NCR",
    type: "Full Time",
    experience: "3–6 Years",
    desc: "Handle premium residential and commercial property sales, build client relationships, and close high-value deals across Delhi NCR.",
  },
  {
    id: 2,
    title: "Property Sales Executive",
    location: "Gurugram",
    type: "Full Time",
    experience: "1–3 Years",
    desc: "Generate leads, conduct site visits, and assist clients in finding the right property. Freshers with strong communication skills are welcome.",
  },
  {
    id: 3,
    title: "Legal & Compliance Manager",
    location: "Head Office, Noida",
    type: "Full Time",
    experience: "4–8 Years",
    desc: "Oversee property documentation, RERA compliance, sale agreements, and registry processes for all listed properties.",
  },
  {
    id: 4,
    title: "Digital Marketing Executive",
    location: "Noida (Hybrid)",
    type: "Full Time",
    experience: "2–4 Years",
    desc: "Run performance campaigns, manage social media, and generate quality leads for our property listings across platforms.",
  },
];

const perks = [
  {
    icon: TrendingUp,
    title: "Uncapped Commission",
    desc: "Industry-best incentive structure — the more you close, the more you earn.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Award,
    title: "Fast-Track Growth",
    desc: "Clear promotion paths based on performance, not just tenure.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Continuous Training",
    desc: "Regular workshops on sales, legal compliance, and market trends.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Supportive Culture",
    desc: "A team that genuinely helps each other — no toxic competition.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: ShieldCheck,
    title: "Job Security",
    desc: "Stable company with 15+ years in the market and a growing client base.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Building2,
    title: "Premium Inventory",
    desc: "Work with top builders — DLF, Godrej, Lodha, Tata, Mahindra and more.",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function CareerPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/*  Hero Section */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            CAREERS
          </h1>
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
            <span className="text-[#e53935]">Careers</span>
          </nav>

          {/* Action CTA Buttons */}
          {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#openings"
              className="inline-flex items-center gap-2 rounded-xl bg-[#C89234] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition hover:bg-[#b07e28] active:scale-95"
            >
              View Openings <ArrowRight size={15} />
            </a>
            <a
              href="mailto:hr@realestatecompany.in"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition hover:bg-white/20"
            >
              <Mail size={14} /> hr@realestatecompany.in
            </a>
          </div> */}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            Why Work With Us
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
            More than just a job.
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500 leading-relaxed">
            We invest in our people the same way we invest in properties — for
            the long term.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:border-[#B8860B]/30 hover:shadow-md"
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${p.color}`}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Current Openings */}
      <section
        id="openings"
        className="border-t border-slate-200 bg-white py-10 lg:py-14"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
              We're Hiring
            </span>
            <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Current openings
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Don't see a role that fits? Email us at{" "}
              <a
                href="mailto:hr@realestatecompany.in"
                className="font-semibold text-[#B8860B] hover:underline"
              >
                hr@realestatecompany.in
              </a>{" "}
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="group rounded-2xl border border-slate-100 bg-[#FAFAFA] p-5 transition-all duration-300 hover:border-[#B8860B]/30 hover:bg-white hover:shadow-md"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#B8860B] transition-colors">
                        {job.title}
                      </h3>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={11} className="text-slate-400" />{" "}
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={11} className="text-slate-400" />{" "}
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} className="text-slate-400" />{" "}
                        {job.experience}
                      </span>
                    </div>

                    <p className="mt-2.5 text-xs leading-relaxed text-slate-500">
                      {job.desc}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                    <a
                      href="/"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#B8860B] active:scale-95"
                    >
                      Apply Now <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
