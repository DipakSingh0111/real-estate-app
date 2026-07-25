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
    <section className="relative left-1/2 right-1/2 mt-[3px] w-screen -translate-x-1/2 overflow-hidden bg-[#F3EEE4]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-20">
        {/* LEFT — SINGLE FRAMED IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative mx-auto w-full max-w-md"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
              alt="Luxury modern house exterior"
              fill
              sizes="(max-width: 1024px) 90vw, 450px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          {/* gold corner brackets — animate in as if being drawn */}
          <motion.div
            initial={{ opacity: 0, x: -8, y: -8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -left-3 -top-3 h-10 w-10 border-l-[1.5px] border-t-[1.5px] border-[#B08D2E]"
          />
          <motion.div
            initial={{ opacity: 0, x: 8, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 border-b-[1.5px] border-r-[1.5px] border-[#B08D2E]"
          />

          {/* caption plate */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-white/25 pt-2.5">
            <span className="text-[10px] uppercase tracking-[3px] text-white/85">
              Since 2011
            </span>
            <span className="text-[10px] uppercase tracking-[3px] text-[#E8C766]">
              EliteEstates
            </span>
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-3"
          >
            <span className=" bg-[#B08D2E]" />
            <p className="text-xs font-semibold uppercase tracking-[4px] text-[#B08D2E]">
              About the Firm
            </p>
          </motion.div>

          <h2 className="font-serif text-3xl font-medium leading-[1.15] text-[#211D18] sm:text-4xl">
            Real estate,
            <br />
            <span className="text-[#B08D2E]">handled with distinction.</span>
          </h2>

          <p className="mt-5 text-[15px] leading-7 text-[#7A6F5D]">
            EliteEstates has spent over a decade helping families, investors,
            and businesses find the right property. From private residences to
            large commercial portfolios, we combine deep market expertise with a
            discreet, personal approach.
          </p>

          <p className="mt-3 text-[15px] leading-7 text-[#7A6F5D]">
            Our licensed agents and advisors are committed to one thing: helping
            you make confident decisions, backed by data, experience, and honest
            guidance — never sales pressure.
          </p>

          {/* Stat row — staggered reveal */}
          <div className="mt-8 grid grid-cols-3 border-t border-[#211D18]/10 pt-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                viewport={{ once: true }}
                className={
                  i !== stats.length - 1
                    ? "border-r border-[#211D18]/10 pr-4"
                    : "pl-4"
                }
              >
                <p className="font-serif text-2xl font-semibold text-[#211D18] sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-4 text-[#7A6F5D]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="
                mt-8
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                border
                border-[#B08D2E]
                bg-[#B08D2E]
                px-7
                py-3.5
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-[#F3EEE4]
                transition
                duration-300
                hover:bg-transparent
                hover:text-[#B08D2E]
                hover:gap-3
                sm:w-auto
              "
            >
              Get in Touch
              <span aria-hidden className="transition-transform">
                →
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
