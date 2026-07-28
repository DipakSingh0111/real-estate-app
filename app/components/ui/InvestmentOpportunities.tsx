"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Bookmark,
} from "lucide-react";

interface Opportunity {
  id: number;
  title: string;
  location: string;
  type: "Commercial" | "Residential" | "Industrial";
  minInvestment: string;
  expectedROI: string;
  tenure: string;
  fundedPercentage: number;
  imageUrl: string;
  isHot?: boolean;
}

const opportunitiesData: Opportunity[] = [
  {
    id: 1,
    title: "Skyline Commercial Hub",
    location: "Noida Sector 62",
    type: "Commercial",
    minInvestment: "₹5,000",
    expectedROI: "14.5%",
    tenure: "3 Yrs",
    fundedPercentage: 78,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    isHot: true,
  },
  {
    id: 2,
    title: "Green Valley Villas",
    location: "Gurugram Golf Course Rd",
    type: "Residential",
    minInvestment: "₹10,000",
    expectedROI: "12.0%",
    tenure: "5 Yrs",
    fundedPercentage: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Apex Logistics Park",
    location: "Bhiwandi, Mumbai",
    type: "Industrial",
    minInvestment: "₹25,000",
    expectedROI: "16.2%",
    tenure: "4 Yrs",
    fundedPercentage: 92,
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "TechPark IT Tower",
    location: "Whitefield, Bengaluru",
    type: "Commercial",
    minInvestment: "₹15,000",
    expectedROI: "15.0%",
    tenure: "3 Yrs",
    fundedPercentage: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=400&q=80",
    isHot: true,
  },
];

export default function CompactInvestmentOpportunities() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredOpportunities =
    activeTab === "All"
      ? opportunitiesData
      : opportunitiesData.filter((item) => item.type === activeTab);

  return (
    <section className="w-full bg-slate-50 py-8 px-4 sm:px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Sleek Header & Filter Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Investment Opportunities
            </h2>
            <p className="text-slate-500 text-xs mt-0.5">
              Handpicked fractional real estate assets.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg text-xs font-medium self-start sm:self-auto">
            {["All", "Commercial", "Residential", "Industrial"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  activeTab === tab
                    ? "bg-white text-slate-900 shadow-sm font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Cards Grid (Up to 4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredOpportunities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* Compact Image Banner */}
              <div className="relative h-36 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-2 left-2 flex gap-1">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  {item.isHot && (
                    <span className="bg-amber-500 text-white text-[10px] font-medium px-2 py-0.5 rounded">
                      🔥 Fast Filling
                    </span>
                  )}
                </div>

                <button
                  aria-label="Bookmark property"
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-slate-700 transition-colors"
                >
                  <Bookmark size={13} />
                </button>
              </div>

              {/* Compact Content Body */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center text-slate-500 text-[11px] mt-1">
                    <MapPin
                      size={12}
                      className="mr-1 shrink-0 text-slate-400"
                    />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                {/* Micro Footer Action */}
                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Tenure: <b className="text-slate-700">{item.tenure}</b>
                  </span>

                  <button className="bg-slate-900 hover:bg-blue-600 text-white text-[11px] font-semibold px-3 py-1.5 rounded-md flex items-center gap-1 transition-colors">
                    Invest
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
