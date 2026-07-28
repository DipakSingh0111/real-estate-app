"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "2,400+", label: "Properties Closed" },
  { value: "20+", label: "Cities Served" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-[#F3EEE4] py-16">
      <div className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-44 w-44 -translate-y-1/2 rounded-full bg-slate-950/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:-ml-8 xl:-ml-12"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 transition-transform duration-700 hover:-translate-y-1">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
                alt="Luxury modern house exterior"
                fill
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-white/85 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-950">
                <span>Since 2011</span>
                <span className="text-slate-600">EliteEstates</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -left-4 -top-4 h-12 w-12 rounded-tr-full border-l-[1.5px] border-t-[1.5px] border-[#B08D2E]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -bottom-4 -right-4 h-12 w-12 rounded-bl-full border-b-[1.5px] border-r-[1.5px] border-[#B08D2E]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl lg:pl-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-amber-700"
          >
            A premium presence
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl"
          >
            Real estate,
            <span className="block text-amber-600">
              handled with distinction.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 text-base leading-8 text-slate-600"
          >
            EliteEstates has spent over a decade helping families, investors,
            and businesses find the right property. From private residences to
            large commercial portfolios, we combine market expertise with a
            discreet, personal approach.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-4 text-base leading-8 text-slate-600"
          >
            Our licensed agents and advisors make every client feel confident
            with data, experience, and careful guidance — never with pressure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-6 grid gap-3 rounded-[1.5rem] border border-slate-200/80 bg-white/95 p-4 shadow-lg sm:grid-cols-3"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1.5 text-center">
                <p className="text-2xl font-semibold text-slate-950 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-amber-400"
            >
              Talk to an advisor
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:border-amber-400 hover:text-amber-600"
            >
              Discover properties
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
