"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import type { Testimonials } from "@/types/property";

function initials(name: string) {
  if (!name) return "U";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonial({
  testimonials = [],
}: {
  testimonials: Testimonials[];
}) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="w-full bg-[#FAF7F2]/50 py-8 lg:py-10">
      <style jsx global>{`
        .testimonials-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .testimonials-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

      {/* Container Aligned Pixel-Perfect with Navbar (max-w-7xl px-4 sm:px-6) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-end justify-between gap-3"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
              <Star size={12} className="fill-[#B8863D] text-[#B8863D]" />
              Client Reviews
            </span>
            <h2 className="mt-1 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
              What Our Clients Say
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Real stories from happy home buyers and verified tenants.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              className="testi-prev-btn flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-300 hover:border-[#B8863D] hover:bg-[#FAF7F2] hover:text-[#B8863D] active:scale-95 disabled:opacity-30 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="testi-next-btn flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-300 hover:border-[#B8863D] hover:bg-[#FAF7F2] hover:text-[#B8863D] active:scale-95 disabled:opacity-30 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel Slider (Without Dots Pagination) */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testi-prev-btn",
              nextEl: ".testi-next-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={t.id || index} className="h-full">
                <motion.article
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="group relative flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-[#B8863D]/50 hover:shadow-md"
                >
                  <div>
                    {/* Quote Text */}
                    <div className="relative">
                      <Quote className="absolute -top-1 -left-1 h-6 w-6 text-slate-100 -z-0 opacity-60" />
                      <p className="relative z-10 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-4">
                        "{t.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Profile Section */}
                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white font-bold text-xs shadow-2xs">
                      {initials(t.name)}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="truncate text-xs font-bold text-slate-900">
                        {t.name}
                      </h4>
                      <p className="truncate text-[11px] font-medium text-slate-500">
                        {t.detail}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
