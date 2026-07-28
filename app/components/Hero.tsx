"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, MapPin, Building2, ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import data from "../../data/properties.json";
const headers = data.header;

const heroImages = data.Properties.filter(
  (property) => property.images && property.images.length > 0,
)
  .slice(0, 5)
  .map((property) => property.images[0]);

interface HeroProps {
  cities: string[];
}

export default function Hero({ cities }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
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
      <section className="relative pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10 min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[activeSlide]}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[activeSlide]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent sm:from-slate-950/80 sm:via-slate-950/35 sm:to-transparent" />
        </div>
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
          <div className="max-w-2xl space-y-4 sm:space-y-5">
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
              max-w-xl
              text-sm
              leading-7
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
              gap-3
              mt-4
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
                px-5
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
                px-5
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
          </div>
        </motion.div>

        {/* SEARCH BAR — sits half inside hero, half outside with a slightly higher position */}
        <div className="absolute left-0 right-0 bottom-4 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8">
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
            <div className="mb-6 flex justify-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    index === activeSlide
                      ? "bg-cyan-400 w-8"
                      : "bg-white/50 hover:bg-white"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <div
              className="
              rounded-[28px]
              border
              border-slate-200/70
              bg-white/90
              p-4
              shadow-[0_30px_90px_rgba(15,23,42,0.12)]
              backdrop-blur-xl
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
      <div className="h-16 sm:h-20 lg:h-24" />
    </div>
  );
}
