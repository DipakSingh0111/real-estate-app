"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  getRealEstatePageData,
  type TeamPageData,
} from "@/lib/getRealEstateData";

export default function OurTeam() {
  const members =
    getRealEstatePageData<TeamPageData>("our-team").TeamGrid
      ?.resolvedData ?? [];

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8860B]">
            Meet the Team
          </span>
          <h2 className="font-heading mt-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            People who make it happen
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
            A close-knit team of real estate professionals who genuinely care
            about finding the right home for every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
            >
              <Link
                href={`/ourteam/${member.slug}`}
                className="group flex h-full gap-4 rounded-2xl border border-slate-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#B8860B]/30 hover:bg-white hover:shadow-md"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="80px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-[20px] font-bold text-slate-900 transition-colors group-hover:text-[#B8860B]">
                          {member.name}
                        </h3>
                        <p className="text-[15px] font-medium text-slate-500 sm:text-[16px]">
                          {member.role}
                        </p>
                      </div>
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-slate-400 opacity-0 shadow-sm transition group-hover:opacity-100 group-hover:text-[#B8860B]">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-semibold text-slate-600">
                      {member.experience}
                    </span>
                    <span className="text-[12px] font-semibold text-[#B8860B] opacity-0 transition group-hover:opacity-100">
                      View profile →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
