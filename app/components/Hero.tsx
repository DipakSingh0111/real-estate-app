"use client";

import Link from "next/link";
import { Search, MapPin, Building2, ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import data from "../data/properties.json";
const headers = data.header;

interface HeroProps {
  cities: string[];
}

export default function Hero({ cities }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative w-full">
      {/* HERO */}
      <section
        className="
        relative
        bg-cover
        bg-center
        pt-6
        pb-16
        sm:pt-8
        sm:pb-20
        lg:pt-10
        lg:pb-24
        "
        style={{
          backgroundImage: "url(/images/hero_1.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/35" />
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/85
          via-slate-950/50
          to-transparent
          sm:from-slate-950/80
          sm:via-slate-950/35
          sm:to-transparent
          "
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          "
        >
          <div className="max-w-3xl space-y-5">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-500/30
                bg-cyan-500/10
                px-4
                py-1
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-cyan-400
                backdrop-blur-md
                "
              >
                <Sparkles size={14} className="animate-pulse" />
                #1 {headers.heading}
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              variants={itemVariants}
              className="
              text-3xl
              font-black
              leading-tight
              text-white
              [text-shadow:0_2px_12px_rgba(0,0,0,0.65)]

              sm:text-4xl

              lg:text-5xl
              "
            >
              {headers.title}
              <span
                className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent
                "
              >
                {headers.title_one}
              </span>{" "}
              {headers.title_two}
            </motion.h1>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="
              max-w-2xl
              text-sm
              leading-6
              text-slate-200
              [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]

              sm:text-base
              "
            >
              {headers.description}
            </motion.p>
            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="
              flex
              flex-col
              gap-2

              sm:flex-row
              "
            >
              <Link
                href="/properties"
                className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-cyan-500
                px-6
                py-3
                font-semibold
                text-slate-950
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:shadow-xl
                hover:shadow-cyan-500/20
                "
              >
                Explore Properties
                <ArrowRight
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                border
                border-white/30
                bg-white/10
                px-6
                py-3
                font-semibold
                text-white
                backdrop-blur-md
                transition
                hover:bg-white/20
                "
              >
                Contact US
              </Link>
            </motion.div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-8">
              {headers.stats.map((item) => (
                <div key={item.id}>
                  <h3 className="text-4xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-white/80">{item.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </motion.div>

        {/* SEARCH BAR — sits exactly half inside hero, half outside (bottom: 0 + translateY(-50%)) */}
        <div
          className="
          absolute
          left-0
          right-0
          bottom-0
          z-20
          translate-y-1/2
          px-4

          sm:px-6

          lg:px-8
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
              delay: 0.15,
            }}
            className="mx-auto max-w-7xl"
          >
            <div
              className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-2xl
              "
            >
              <form
                action="/properties"
                className="
                grid
                grid-cols-1
                gap-3

                md:grid-cols-2

                lg:grid-cols-4
                "
              >
                {/* Location */}

                <div className="rounded-xl border border-slate-200 p-3">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <MapPin size={15} className="text-cyan-500" />
                    Location
                  </label>

                  <select
                    name="city"
                    className="
                    mt-2
                    w-full
                    bg-transparent
                    text-sm
                    outline-none
                    "
                  >
                    <option>Select City</option>

                    {cities.map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Property Type */}

                <div className="rounded-xl border border-slate-200 p-3">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Building2 size={15} className="text-cyan-500" />
                    Property Type
                  </label>

                  <select
                    name="type"
                    className="
                    mt-2
                    w-full
                    bg-transparent
                    text-sm
                    outline-none
                    "
                  >
                    <option>Any Property</option>

                    <option>Apartment</option>

                    <option>Villa</option>

                    <option>Commercial</option>
                  </select>
                </div>

                {/* Purpose */}

                <div className="rounded-xl border border-slate-200 p-3">
                  <label className="text-xs font-semibold text-slate-500">
                    Purpose
                  </label>

                  <select
                    name="listingType"
                    className="
                    mt-2
                    w-full
                    bg-transparent
                    text-sm
                    outline-none
                    "
                  >
                    <option>Buy</option>
                    <option>Sell</option>
                    <option>Rent</option>
                  </select>
                </div>

                {/* Button */}

                <button
                  type="submit"
                  className="
                  flex
                  min-h-[58px]
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-500
                  font-semibold
                  text-slate-900
                  transition
                  hover:bg-cyan-400
                  active:scale-95
                  "
                >
                  <Search size={18} />
                  Search Properties
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Space - gives room for the half of search bar sitting outside hero */}
      <div className="h-24 sm:h-28 lg:h-32" />
    </div>
  );
}
