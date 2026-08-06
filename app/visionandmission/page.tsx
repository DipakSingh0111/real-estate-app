import React from "react";
import {
  Eye,
  Target,
  ShieldCheck,
  TrendingUp,
  Users,
  Building2,
  FileCheck,
  Heart,
} from "lucide-react";
import PageBanner from "@/app/components/ui/PageBanner";
import data from "@/lib/data";

const iconMap = {
  ShieldCheck,
  Heart,
  TrendingUp,
  FileCheck,
  Users,
  Building2,
};

const coreValues = (
  data.visionCoreValues as Array<{
    icon: string;
    title: string;
    desc: string;
    color: string;
  }>
).map((item) => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap] || ShieldCheck,
}));

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
      <PageBanner
        preTitle="Our Purpose"
        title="Vision & Mission"
        description="Our purpose is to make every property decision transparent, informed, and focused on long-term value."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Vision & Mission" },
        ]}
      />

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
