"use client";

import Link from "next/link";
import { Search, MapPin, Building2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  cities: string[];
}

export default function Hero({ cities }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
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
        pb-24

        sm:pt-8
        sm:pb-28

        lg:pt-10
        lg:pb-32
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.88), rgba(15,23,42,0.88)), url('/images/hero.jpg')",
        }}
      >
        {/* Overlay */}
        <div
          className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/90
          via-slate-900/60
          to-slate-900/40
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

            <motion.div>
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
                #1 Real Estate Platform
              </span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              className="
              text-3xl
              font-black
              leading-tight
              text-white

              sm:text-4xl

              lg:text-5xl
              "
            >
              Find Your{" "}
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
                Dream Home
              </span>{" "}
              Today
            </motion.h1>

            {/* Description */}

            <motion.p
              className="
              max-w-2xl
              text-sm
              leading-6
              text-slate-300

              sm:text-base
              "
            >
              Discover verified apartments, villas, plots, and commercial
              properties with trusted agents. Buy, Rent or Invest with complete
              confidence across India's fastest growing cities.
            </motion.p>

            {/* Buttons */}

            <motion.div
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
                border-white/20
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
                Contact Agent
              </Link>
            </motion.div>

            {/* Stats */}

            <motion.div
              className="
              grid
              grid-cols-3
              gap-3
              border-t
              border-slate-800
              pt-3

              sm:gap-5
              "
            >
              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  12K+
                </h3>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Verified Listings
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  50+
                </h3>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Cities Covered
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  4.9★
                </h3>
                <p className="text-xs text-slate-400 sm:text-sm">
                  Customer Rating
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SEARCH BAR */}

      <div
        className="
        absolute
        left-0
        right-0
        z-20
        translate-y-[30%]
        sm:translate-y-[40%]
        px-4
        sm:px-6
        lg:px-8
        
        "
        style={{ marginBottom: "25px" }}
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

                  <option>Plot</option>

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

      {/* Bottom Space */}

      <div className="h-16 sm:h-20 lg:h-24" />
    </div>
  );
}
