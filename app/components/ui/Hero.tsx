"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  getRealEstatePageData,
  type HomePageData,
} from "@/lib/getRealEstateData";
import type { HeroProps } from "@/types/property";

const homeData = getRealEstatePageData<HomePageData>("home");
const headers = homeData.Banner as {
  heading: string;
  title: string;
  title_one: string;
  title_two: string;
  description: string;
};

const heroImages = (homeData.Featured?.resolvedData ?? [])
  .filter((property) => property.images && property.images.length > 0)
  .slice(0, 5)
  .map((property) => property.images[0]);

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
    <div className="relative w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex min-h-[420px] items-center py-10 max-[359px]:min-h-[390px] max-[359px]:py-8 sm:min-h-[460px] sm:py-12 lg:min-h-[500px] lg:py-14">
        {/* Background Image Carousel with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[activeSlide]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 bg-cover bg-[position:62%_center] sm:bg-center"
              style={{ backgroundImage: `url(${heroImages[activeSlide]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/30 sm:bg-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/20 sm:from-slate-950/70 sm:via-slate-950/40 sm:to-slate-950/10" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/35 to-transparent sm:hidden" />
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-7xl px-4 font-hero-body sm:px-6 lg:px-5"
        >
          <div className="max-w-[36rem] space-y-4 text-left sm:max-w-2xl sm:space-y-5">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-[#B8863D]/40 bg-slate-950/25 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E6C687] backdrop-blur-md sm:gap-2 sm:text-xs sm:tracking-widest">
                <Sparkles
                  size={13}
                  className="shrink-0 animate-pulse text-[#E6C687] sm:h-3.5 sm:w-3.5"
                />
                <span className="truncate">#1 {headers.heading}</span>
              </span>
            </motion.div>

            {/* Main Heading with Premium Playfair Display font */}
            <motion.h1
              variants={itemVariants}
              className="max-w-[18ch] font-hero-heading text-[6rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-lg max-[359px]:text-[1.75rem] sm:max-w-none sm:text-5xl lg:text-6xl"
            >
              {headers.title}{" "}
              <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B8863D] bg-clip-text italic text-transparent">
                {headers.title_one}
              </span>{" "}
              {headers.title_two}
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={itemVariants}
              className="max-w-[34rem] text-[13px] font-normal leading-6 text-white/90 drop-shadow-md max-[359px]:leading-5 sm:text-base sm:leading-relaxed sm:text-white/95"
            >
              {headers.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid w-full max-w-sm grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:mt-7 sm:flex sm:max-w-none sm:flex-row sm:gap-3.5"
            >
              <Link
                href="/properties"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#a07433] hover:shadow-[#B8863D]/25 active:scale-95 sm:min-h-0 sm:w-auto sm:px-6 sm:py-3.5"
              >
                <span className="whitespace-nowrap">Explore Properties</span>
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/20 active:scale-95 sm:min-h-0 sm:w-auto sm:px-6 sm:py-3.5"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
