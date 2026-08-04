"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import data from "../../data/properties.json";
import type { HeroProps } from "@/types/property";

const headers = data.header;

const heroImages = data.Properties.filter(
  (property) => property.images && property.images.length > 0,
)
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
      <section className="relative flex min-h-[440px] items-center justify-center pt-14 pb-14 sm:min-h-[500px] lg:min-h-[500px]">
        {/* Background Image Carousel with Overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImages[activeSlide]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImages[activeSlide]})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-slate-950/10" />
        </div>

        {/* Content Box */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-5 font-hero-body"
        >
          <div className="max-w-2xl space-y-5 text-left">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B8863D]/40 bg-[#B8863D]/15 px-2 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#E6C687] backdrop-blur-md">
                <Sparkles size={14} className="animate-pulse text-[#E6C687]" />
                #1 {headers.heading}
              </span>
            </motion.div>

            {/* Main Heading with Premium Playfair Display font */}
            <motion.h1
              variants={itemVariants}
              className="font-hero-heading text-3xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
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
              className="max-w-xl text-sm font-normal leading-relaxed text-white/95 drop-shadow-md sm:text-base"
            >
              {headers.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col gap-3.5 sm:flex-row"
            >
              <Link
                href="/properties"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[#a07433] hover:shadow-[#B8863D]/25 active:scale-95"
              >
                Explore Properties
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:scale-[1.02] active:scale-95"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Slide Pagination Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveSlide(index)}
              suppressHydrationWarning
              className={`h-2 rounded-full transition-all duration-500 ease-out cursor-pointer ${
                index === activeSlide
                  ? "w-8 bg-[#D4AF37]"
                  : "w-2 bg-white/40 hover:bg-white/80"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
