import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  MapPin,
  Scale,
  Eye,
  Headphones,
  TrendingUp,
} from "lucide-react";
import PageBanner from "@/app/components/ui/PageBanner";
import data from "@/lib/data";

const iconMap = {
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  MapPin,
  Scale,
  Eye,
  Headphones,
  TrendingUp,
};

const features = (
  data.whyFeatures as Array<{
    icon: string;
    title: string;
    desc: string;
    color: string;
  }>
).map((item) => ({
  ...item,
  icon: iconMap[item.icon as keyof typeof iconMap] || CheckCircle2,
}));

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
      <PageBanner
        preTitle="The NestVista Difference"
        title="Why Choose Us"
        description="Verified listings, transparent advice, and end-to-end support designed around your property goals."
        breadcrumbs={[
          { label: "About Us", href: "/about-us" },
          { label: "Why Choose Us" },
        ]}
      />

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="mb-8">
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
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
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
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="relative rounded-2xl border border-slate-100 bg-[#FAF7F2] p-5"
              >
                <span className="font-mono text-3xl font-extrabold text-black">
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
