import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import propertiesData from "@/data/properties.json";
import type { Property } from "@/types/property";
import PropertyCard from "@/app/components/PropertyCard";
import PropertyGallery from "@/app/components/PropertyGallery";
import ContactForm from "@/app/components/ContactForm";
import {
  ChevronRight,
  Home,
  MapPin,
  BedDouble,
  Maximize2,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Building2,
  Compass,
  Layers,
  Tag,
} from "lucide-react";

const properties = propertiesData.Properties as Property[];

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const related = properties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.city === property.city || p.type === property.type),
    )
    .slice(0, 4);

  const quickFacts = [
    { icon: Building2, label: "Property Type", value: property.type },
    { icon: Tag, label: "Listing", value: `For ${property.listingType}` },
    { icon: Calendar, label: "Possession", value: property.possession },
    {
      icon: ShieldCheck,
      label: "Furnishing",
      value: property.furnishing || "N/A",
    },
    { icon: Compass, label: "Facing", value: property.facing || "N/A" },
    { icon: Layers, label: "Floor", value: property.floor || "N/A" },
  ];

  const locationDetails = [
    { label: "Locality", value: property.locality },
    { label: "City", value: property.city },
    { label: "State", value: property.state },
  ];

  const specDetails = [
    {
      label: "Built-Up Area",
      value: property.areaSqft
        ? `${property.areaSqft.toLocaleString("en-IN")} sq.ft`
        : "N/A",
    },
    {
      label: "Configuration",
      value: property.bhk ? `${property.bhk} BHK` : "N/A",
    },
    { label: "RERA ID", value: property.reraId || "N/A" },
    { label: "Possession", value: property.possession },
  ];

  const stats = [
    property.bhk
      ? { icon: BedDouble, label: "Bedrooms", value: `${property.bhk} BHK` }
      : null,
    property.areaSqft
      ? {
          icon: Maximize2,
          label: "Area",
          value: `${property.areaSqft.toLocaleString("en-IN")} sqft`,
        }
      : null,
  ].filter(Boolean) as {
    icon: React.ElementType;
    label: string;
    value: string;
  }[];

  return (
    <main className=" bg-[#F8F5F0]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={property.images?.[0] || "/images/hero.jpg"}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-3 py-24 text-center">
          <h1 className="mt-6 text-3xl font-extrabold uppercase tracking-[0.08em] text-white sm:text-5xl lg:text-4xl">
            {property.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white transition hover:bg-white/15"
            >
              <Home size={16} />
              Home
            </Link>
            <span className="inline-flex items-center gap-2">
              <ChevronRight size={12} />
              <span>{property.title}</span>
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT: Image + Description + Amenities */}
          <div className="space-y-5">
            <PropertyGallery
              images={property.images || []}
              title={property.title}
              type={property.type}
              listingType={property.listingType}
            />
            {/* Title*/}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="relative bg-gradient-to-br from-[#322f2a] via-[#4a4338] to-[#d9b778] px-6 py-6 text-white sm:px-8 sm:py-7">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                      {property.type}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        property.listingType === "Sale"
                          ? "bg-emerald-500/80"
                          : "bg-blue-500/80"
                      }`}
                    >
                      For {property.listingType}
                    </span>
                    {property.rating > 0 && (
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                        ★ {property.rating}
                      </span>
                    )}
                  </div>

                  <h2 className="font-heading text-xl font-bold leading-snug sm:text-2xl">
                    {property.title}
                  </h2>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-white/80">
                    <MapPin size={14} className="shrink-0" />
                    {property.locality}, {property.city}
                  </div>

                  <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-white/20 pt-5">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                        Asking Price
                      </p>
                      <p className="font-heading mt-1 text-3xl font-extrabold sm:text-4xl">
                        {property.priceLabel}
                      </p>
                      {property.areaSqft && (
                        <p className="mt-1 text-sm text-white/70">
                          ₹
                          {Math.round(
                            property.price / property.areaSqft,
                          ).toLocaleString("en-IN")}{" "}
                          per sq.ft
                        </p>
                      )}
                    </div>

                    {stats.length > 0 && (
                      <div className="flex gap-3">
                        {stats.map((stat) => {
                          const Icon = stat.icon;
                          return (
                            <div
                              key={stat.label}
                              className="flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm"
                            >
                              <Icon size={16} className="text-[#f0d9a8]" />
                              <div>
                                <p className="text-[10px] text-white/60">
                                  {stat.label}
                                </p>
                                <p className="text-sm font-bold">
                                  {stat.value}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick facts strip */}
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 border-t border-slate-100 sm:grid-cols-3 lg:grid-cols-6">
                {quickFacts.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex flex-col items-center gap-2 px-3 py-4 text-center sm:px-4"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-[#C89234]">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-xs font-semibold text-slate-800">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                  About This Property
                </h2>
              </div>
              <div className="px-6 py-6 sm:px-8">
                <p className="text-[15px] leading-[1.8] text-slate-600">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Property specifications */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                  Property Specifications
                </h2>
              </div>

              <div className="grid gap-0 lg:grid-cols-2">
                {/* Location */}
                <div className="border-b border-slate-100 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#C89234]">
                      <MapPin size={18} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      Location
                    </h3>
                  </div>
                  <dl className="space-y-0 divide-y divide-slate-100">
                    {locationDetails.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 py-3.5"
                      >
                        <dt className="text-sm text-slate-500">{item.label}</dt>
                        <dd className="text-right text-sm font-semibold text-slate-900">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Specifications */}
                <div className="p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#C89234]">
                      <Maximize2 size={18} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900">
                      Specifications
                    </h3>
                  </div>
                  <dl className="space-y-0 divide-y divide-slate-100">
                    {specDetails.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 py-3.5"
                      >
                        <dt className="text-sm text-slate-500">{item.label}</dt>
                        <dd className="text-right text-sm font-semibold text-slate-900">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
              <div className="border-b border-slate-100 bg-gradient-to-r from-[#FAF7F2] to-white px-6 py-5 sm:px-8">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
                  Features
                </span>
                <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                  Amenities & Facilities
                </h2>
              </div>
              <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="group flex items-center gap-3 rounded-xl border border-slate-100 bg-[#FAF7F2] px-4 py-3.5 transition-all duration-200 hover:border-[#C89234]/30 hover:bg-amber-50/50 hover:shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#C89234] shadow-sm transition-colors group-hover:bg-[#C89234] group-hover:text-white">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-sm font-medium text-slate-800">
                      {amenity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT: Sticky Sidebar — Contact Form */}
          <div>
            <div className="sticky top-6">
              <ContactForm />
            </div>
          </div>
        </div>
        {/* Related Properties */}
        {related.length > 0 && (
          <div className="mt-12">
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#C89234]">
                Related Properties
              </span>
              <h2 className="font-heading mt-1 text-2xl font-bold text-slate-900">
                You might also like
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
