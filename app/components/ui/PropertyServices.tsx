"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  BadgeDollarSign,
  KeyRound,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  Sofa,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import data from "../../../data/properties.json";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const services = (data?.propertyServices || []) as Service[];

const icons = {
  Building2,
  BadgeDollarSign,
  KeyRound,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  Sofa,
};

type CardProps = {
  service: Service;
};

function ServiceCard({ service }: CardProps) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Building2;

  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:border-[#B8863D]/60 hover:shadow-lg">
      <div>
        {/* Top Header Row: Icon + Indicator */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAF7F2] text-[#B8863D] transition duration-300 group-hover:bg-[#B8863D] group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-slate-300 group-hover:text-[#B8863D]/60">
            0{service.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-[#B8863D]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Action Link */}
      <div className="mt-5 border-t border-slate-100 pt-3">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8863D] transition-all group-hover:gap-2.5"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function PropertyServices() {
  return (
    <section className="bg-[#FAF7F2] py-8 lg:py-10 overflow-hidden">
      <style jsx global>{`
        .services-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .services-swiper .swiper-slide {
          height: auto;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex flex-wrap items-end justify-between gap-3"
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
              PROPERTY SERVICES
            </span>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              End-to-End Real Estate Solutions
            </h2>
            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
              Tailored services for home buyers, property owners, and investors.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              className="svc-prev-btn flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:border-[#B8863D] hover:text-[#B8863D] disabled:opacity-30 cursor-pointer"
              aria-label="Previous service"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="svc-next-btn flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-xs transition hover:border-[#B8863D] hover:text-[#B8863D] disabled:opacity-30 cursor-pointer"
              aria-label="Next service"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".svc-prev-btn",
              nextEl: ".svc-next-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 20 },
            }}
            className="services-swiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="h-full"
                >
                  <ServiceCard service={service} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex justify-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#B8863D] active:scale-95"
          >
            <span>Explore All Services</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
