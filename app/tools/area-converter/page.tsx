"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import PageBreadcrumb from "@/app/components/ui/PageBreadcrumb";

const units = [
  { label: "Square Feet (sq ft)", key: "sqft", toSqft: 1 },
  { label: "Square Meter (sq m)", key: "sqm", toSqft: 10.7639 },
  { label: "Square Yard (sq yd)", key: "sqyd", toSqft: 9 },
  { label: "Acre", key: "acre", toSqft: 43560 },
  { label: "Bigha (UP/Delhi)", key: "bigha", toSqft: 27000 },
  { label: "Marla", key: "marla", toSqft: 272.25 },
  { label: "Gaj", key: "gaj", toSqft: 9 },
];

export default function AreaConverterPage() {
  const [value, setValue] = useState<string>("1000");
  const [fromUnit, setFromUnit] = useState("sqft");
  const [toUnit, setToUnit] = useState("sqm");

  const fromFactor = units.find((u) => u.key === fromUnit)?.toSqft || 1;
  const toFactor = units.find((u) => u.key === toUnit)?.toSqft || 1;
  const inputVal = parseFloat(value) || 0;
  const result = (inputVal * fromFactor) / toFactor;

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 4 }).format(n);

  const swap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  // Convert to all units
  const sqftValue = inputVal * fromFactor;
  const allConversions = units.map((u) => ({
    ...u,
    result: sqftValue / u.toSqft,
  }));

  return (
    <main className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
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
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title (Centered & Uppercase) */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            Area - Converter
          </h1>

          <PageBreadcrumb
            items={[{ label: "Tools" }, { label: "Area Converter" }]}
          />
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Converter */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="mb-5 text-base font-bold text-slate-900">
              Convert Area
            </h2>

            {/* Input */}
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                Enter Value
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                suppressHydrationWarning
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 outline-none transition focus:border-[#C89234] focus:bg-white focus:ring-1 focus:ring-[#C89234]/20"
                placeholder="Enter area value"
              />
            </div>

            {/* From / To */}
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  From
                </label>
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 outline-none transition focus:border-[#C89234]"
                >
                  {units.map((u) => (
                    <option key={u.key} value={u.key}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={swap}
                suppressHydrationWarning
                className="mt-5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-500 transition hover:border-[#C89234] hover:text-[#C89234]"
              >
                <ArrowLeftRight size={15} />
              </button>

              <div className="flex-1">
                <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                  To
                </label>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  suppressHydrationWarning
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 outline-none transition focus:border-[#C89234]"
                >
                  {units.map((u) => (
                    <option key={u.key} value={u.key}>
                      {u.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result */}
            <div className="mt-5 rounded-xl border border-[#C89234]/30 bg-amber-50/60 p-4 text-center">
              <p className="text-xs text-slate-500">
                {value || 0} {units.find((u) => u.key === fromUnit)?.label} =
              </p>
              <p className="mt-1 font-heading text-3xl font-extrabold text-slate-900">
                {fmt(result)}
              </p>
              <p className="text-xs font-semibold text-[#C89234]">
                {units.find((u) => u.key === toUnit)?.label}
              </p>
            </div>
          </div>

          {/* All conversions */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
            <h2 className="mb-4 text-base font-bold text-slate-900">
              All Conversions
            </h2>
            <p className="mb-4 text-[11px] text-slate-400">
              {value || 0} {units.find((u) => u.key === fromUnit)?.label}{" "}
              equals:
            </p>
            <div className="space-y-2">
              {allConversions
                .filter((u) => u.key !== fromUnit)
                .map((u) => (
                  <div
                    key={u.key}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-2.5"
                  >
                    <span className="text-xs text-slate-500">{u.label}</span>
                    <span className="text-xs font-bold text-slate-900">
                      {fmt(u.result)}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
