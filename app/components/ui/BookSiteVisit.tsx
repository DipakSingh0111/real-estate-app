"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface BookSiteVisitProps {
  propertyName?: string;
  propertyLocation?: string;
}

export default function BookSiteVisit({
  propertyName = "Luxury Vista Apartments",
  propertyLocation = "Sector 62, Noida",
}: BookSiteVisitProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "11:00 AM",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) return;

    // API
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#FAF7F1] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-7 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 sm:p-8 lg:p-10 text-white shadow-xl">
          {/* Subtle Glows */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#B8863D]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B8863D]/40 bg-[#B8863D]/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#B8863D]">
                <Calendar size={13} />
                Free On-Site Tour
              </span>

              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Schedule Your Personal Site Visit
              </h2>

              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Experience the location, amenities, and architecture in person
                with our dedicated real estate expert. Free pick & drop service
                available on request.
              </p>

              {/* Property Details Pill */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-800/60 px-3.5 py-2 text-xs text-slate-300 backdrop-blur-md">
                <MapPin size={15} className="text-[#B8863D] flex-shrink-0" />
                <span className="truncate font-medium">
                  {propertyName} &bull;{" "}
                  <span className="text-slate-400">{propertyLocation}</span>
                </span>
              </div>
            </div>

            {/* Right Form Container */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-6 backdrop-blur-xl">
                {isSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      Visit Scheduled!
                    </h3>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto">
                      Thank you,{" "}
                      <span className="text-white font-semibold">
                        {formData.name}
                      </span>
                      . Our team will contact you shortly to confirm your visit
                      on{" "}
                      <span className="text-[#B8863D] font-semibold">
                        {formData.date}
                      </span>{" "}
                      at{" "}
                      <span className="text-[#B8863D] font-semibold">
                        {formData.time}
                      </span>
                      .
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-2 text-xs font-semibold text-[#B8863D] underline underline-offset-4 hover:text-[#9A6E2E]"
                    >
                      Book Another Visit
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition focus:border-[#B8863D] focus:ring-1 focus:ring-[#B8863D]"
                        />
                      </div>
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone
                          size={15}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                        />
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2.5 pl-9 pr-3 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition focus:border-[#B8863D] focus:ring-1 focus:ring-[#B8863D]"
                        />
                      </div>
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                          Select Date
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 px-3 text-xs text-white outline-none transition focus:border-[#B8863D] focus:ring-1 focus:ring-[#B8863D]"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                          Preferred Slot
                        </label>
                        <div className="relative">
                          <select
                            value={formData.time}
                            onChange={(e) =>
                              setFormData({ ...formData, time: e.target.value })
                            }
                            className="w-full appearance-none rounded-xl border border-slate-800 bg-slate-900/90 py-2 pl-3 pr-7 text-xs text-white outline-none transition focus:border-[#B8863D] focus:ring-1 focus:ring-[#B8863D]"
                          >
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="04:30 PM">04:30 PM</option>
                          </select>
                          <Clock
                            size={13}
                            className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      className="mt-2 group flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-[#A37430] active:scale-[0.98]"
                    >
                      Confirm Site Visit
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
