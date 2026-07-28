"use client";

import React, { useState } from "react";
import {
  Search,
  FileCheck,
  Key,
  Wallet,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const stepsData: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Discover & Shortlist",
    description:
      "Browse verified listings, check expected ROI, tenure, and location details to pick your ideal asset.",
    icon: Search,
  },
  {
    id: 2,
    number: "02",
    title: "KYC & Documentation",
    description:
      "Complete digital KYC in 2 minutes with seamless online document verification.",
    icon: FileCheck,
  },
  {
    id: 3,
    number: "03",
    title: "Secure Investment",
    description:
      "Invest starting from minimal capital using secure digital payment gateways or bank transfer.",
    icon: Wallet,
  },
  {
    id: 4,
    number: "04",
    title: "Ownership & Payouts",
    description:
      "Receive legal ownership certificates and start earning automated monthly rental returns.",
    icon: Key,
  },
];

export default function PropertyProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Simple 4-Step Investment Journey
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
            Transparent, hassle-free fractional real estate ownership in just a
            few clicks.
          </p>
        </div>

        {/* Process Timeline / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`relative bg-white rounded-xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? "border-blue-600 shadow-md ring-1 ring-blue-600/20"
                    : "border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div>
                  {/* Top Row: Icon + Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 group-hover:bg-slate-200"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className={`text-xs font-black tracking-widest ${
                        isActive ? "text-blue-600" : "text-slate-300"
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Active Indicator / Step Status */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  {isActive ? (
                    <span className="text-blue-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 size={13} /> Active Step
                    </span>
                  ) : (
                    <span className="text-slate-400 font-medium group-hover:text-slate-600 flex items-center gap-1 transition-colors">
                      Step {step.id} <ArrowRight size={12} />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-8 bg-blue-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold">
              Ready to start building your real estate portfolio?
            </h4>
            <p className="text-blue-200 text-xs mt-0.5">
              Start investing with as low as ₹5,000 today.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shrink-0">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}
