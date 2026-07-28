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

// Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data from "../../../data/properties.json";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const services = data.propertyServices as Service[];

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
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-amber-400 hover:shadow-2xl flex flex-col justify-between"
    >
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-white opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Icon */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Icon className="h-8 w-8" />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-2xl font-bold text-zinc-900">
            {service.title}
          </h3>

          {/* Description */}
          <p className="mb-8 leading-7 text-zinc-500">{service.description}</p>
        </div>

        {/* Button */}
        <div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
          >
            Learn More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative Circle */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-100 opacity-20 blur-3xl transition duration-500 group-hover:scale-150" />
    </motion.div>
  );
}

export default function PropertyServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-stone-50 to-white py-12">
      {/* Custom Styles for Swiper Pagination & Equal Card Heights */}
      <style jsx global>{`
        .services-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .services-swiper .swiper-slide {
          height: auto;
        }
        .services-swiper .swiper-pagination-bullet {
          background: #d97706;
          opacity: 0.3;
        }
        .services-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-amber-100/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Property Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-zinc-900 md:text-5xl">
            Everything You Need
            <span className="block text-amber-600">
              For Your Real Estate Journey
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            From buying your dream home to investment advisory and property
            management, we provide end-to-end real estate services tailored for
            homeowners, investors and businesses.
          </p>
        </motion.div>

        {/* Carousel Wrapper with Controls */}
        <div className="relative px-2 md:px-12">
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-600 shadow-md transition hover:bg-amber-600 hover:text-white disabled:opacity-40">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-amber-200 bg-white text-amber-600 shadow-md transition hover:bg-amber-600 hover:text-white disabled:opacity-40">
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="services-swiper !pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id} className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="h-full"
                >
                  <ServiceCard service={service} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Indicator */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-600"
          >
            Explore All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
