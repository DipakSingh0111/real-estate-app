"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  getRealEstatePageData,
  type HomePageData,
} from "@/lib/getRealEstateData";
import { templateImage } from "@/lib/templateImages";

const stats = (getRealEstatePageData<HomePageData>("home").About
  ?.resolvedStats ?? []) as {
  value: string;
  label: string;
  subLabel: string;
}[];

export default function AboutUs() {
  return (
    <section className="bg-white py-3 lg:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Column: Image with reduced height */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-md"
          >
            {/* Height reduced using 16/9 aspect ratio */}
            <div className="relative aspect-[16/9] w-full lg:aspect-[16/10]">
              <Image
                src={templateImage(8)}
                alt="Luxury Villa with Pool"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4"
          >
            {/* Small Top Tagline */}
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8860B]">
              ABOUT US
            </span>

            {/* Main Headline in Volkhov Font */}
            <h2 className="font-heading text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
              <span className="italic">Real estate,</span> <br />
              <span className="italic">handled with distinction.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm text-justify">
              We are a real estate company committed to helping you find the
              perfect property. Whether it’s your dream home, a strategic
              investment, or a commercial space, we ensure a smooth and
              transparent experience. Our team of experts is dedicated to
              providing personalized service, market insights, and professional
              guidance every step of the way.
            </p>

            {/* Stats Cards Row */}
            <div className="pt-1">
              <div className="grid grid-cols-3 gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-2.5 sm:gap-4 sm:p-3">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-0.5 text-left">
                    <p className="text-lg font-bold text-slate-900 sm:text-xl">
                      {stat.value}
                    </p>
                    <p className="text-[11px] leading-tight text-slate-500">
                      {stat.label} <br />
                      <span className="text-slate-500">{stat.subLabel}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-1">
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-lg bg-[#C89234] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#b07e28] active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
