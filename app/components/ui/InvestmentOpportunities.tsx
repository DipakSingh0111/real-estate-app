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
  type:
    | "Villa"
    | "Apartment"
    | "Builder Floor"
    | "Commercial Office"
    | "Studio"
    | "Plot"
    | "Land";
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
    title: "Surajkund Royal Villa",
    location: "Faridabad, Haryana",
    type: "Villa",
    minInvestment: "₹5,000",
    expectedROI: "16.2%",
    tenure: "5 Yrs",
    fundedPercentage: 68,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80",
    isHot: true,
  },
  {
    id: 2,
    title: "Golf Course Heights",
    location: "Gurugram, Haryana",
    type: "Apartment",
    minInvestment: "₹5,000",
    expectedROI: "13.8%",
    tenure: "3 Yrs",
    fundedPercentage: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    title: "Vasant Vihar Luxury Floor",
    location: "Delhi",
    type: "Builder Floor",
    minInvestment: "₹5,000",
    expectedROI: "15.0%",
    tenure: "4 Yrs",
    fundedPercentage: 82,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    title: "Cyber Hub Office Tower",
    location: "Noida Sector 62",
    type: "Commercial Office",
    minInvestment: "₹5,000",
    expectedROI: "14.5%",
    tenure: "3 Yrs",
    fundedPercentage: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
    isHot: true,
  },
  {
    id: 5,
    title: "Vasundhara Studio Suite",
    location: "Ghaziabad, UP",
    type: "Studio",
    minInvestment: "₹5,000",
    expectedROI: "11.5%",
    tenure: "2 Yrs",
    fundedPercentage: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    title: "Jaypee Greens Plot",
    location: "Noida Sector 128",
    type: "Plot",
    minInvestment: "₹5,000",
    expectedROI: "18.0%",
    tenure: "5 Yrs",
    fundedPercentage: 55,
    imageUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
    isHot: true,
  },
  {
    id: 7,
    title: "Aravalli Farmland Estate",
    location: "Sohna, Haryana",
    type: "Land",
    minInvestment: "₹5,000",
    expectedROI: "20.0%",
    tenure: "7 Yrs",
    fundedPercentage: 28,
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
  },
];

export default function CompactInvestmentOpportunities() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = [
    "All",
    "Villa",
    "Apartment",
    "Builder Floor",
    "Commercial Office",
    "Studio",
    "Plot",
    "Land",
  ];

  const filteredOpportunities =
    activeTab === "All"
      ? opportunitiesData
      : opportunitiesData.filter((item) => item.type === activeTab);

  return (
    <section className="w-full bg-[#FAF7F2]/50 py-5 lg:py-7">
      {/* Container Aligned Pixel-Perfect with Navbar (max-w-7xl px-4 sm:px-6) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Sleek Header & Filter Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-slate-200/80">
          <div>
            <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Properties
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Explore curated homes, plots & commercial spaces.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="w-full sm:w-auto overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-1 bg-slate-200/50 p-1 rounded-xl text-xs font-medium border border-slate-200/60 w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeTab === tab
                      ? "bg-white text-slate-900 shadow-2xs font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Cards Grid (Up to 4 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredOpportunities.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/50 hover:shadow-md overflow-hidden"
            >
              <div>
                {/* Compact Image Banner */}
                <div className="relative h-36 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded-md">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Compact Content Body */}
                <div className="p-4">
                  <h3 className="text-sm font-bold text-slate-900 truncate group-hover:text-[#B8863D] transition-colors">
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
              </div>

              {/* Micro Footer Action */}
              <div className="px-4 pb-4 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Tenure: <b className="text-slate-700">{item.tenure}</b>
                  </span>

                  <button className="bg-slate-900 hover:bg-[#B8863D] text-white text-[11px] font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all duration-300 shadow-2xs cursor-pointer active:scale-95">
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
