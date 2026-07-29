"use client";

import React from "react";
import {
  MessageSquare,
  Search,
  MapPin,
  FileText,
  Key,
  ArrowRight,
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
    title: "Consultation",
    description: "Understand your needs",
    icon: MessageSquare,
  },
  {
    id: 2,
    number: "02",
    title: "Property Search",
    description: "We find the best options for you",
    icon: Search,
  },
  {
    id: 3,
    number: "03",
    title: "Site Visit",
    description: "Visit properties of your choice",
    icon: MapPin,
  },
  {
    id: 4,
    number: "04",
    title: "Deal & Paperwork",
    description: "We handle all legal formalities",
    icon: FileText,
  },
  {
    id: 5,
    number: "05",
    title: "Possession",
    description: "Move into your dream property",
    icon: Key,
  },
];

export default function PropertyProcess() {
  return (
    <section className="w-full bg-[#FAF7F2]/50 py-10 lg:py-12">
      {/* Container Aligned Pixel-Perfect with Navbar (max-w-7xl px-4 sm:px-6) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Horizontal Process Steps Flow */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-2">
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === stepsData.length - 1;

            return (
              <React.Fragment key={step.id}>
                {/* Single Step Item */}
                <div className="flex items-center gap-3.5 flex-1 min-w-0 group">
                  {/* Circular Gold Icon Badge */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FAF2E3] border border-[#F2E3C6] text-[#B8863D] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={22} className="text-[#B8863D]" />
                  </div>

                  {/* Step Info */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-black tracking-wider text-slate-900">
                      {step.number}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 truncate leading-tight group-hover:text-[#B8863D] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[11px] leading-snug text-slate-500 line-clamp-2 mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Separator between steps */}
                {!isLast && (
                  <div className="hidden lg:flex items-center justify-center shrink-0 px-1 text-slate-300">
                    <ArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
