"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  BadgeDollarSign,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  Sofa,
} from "lucide-react";
import {
  getRealEstatePageData,
  type HomePageData,
  type ServiceItem,
} from "@/lib/getRealEstateData";

const icons = {
  Building2,
  BadgeDollarSign,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
  Sofa,
};

function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Building2;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `linear-gradient(to top, ${service.accent}, transparent)`,
          }}
        />
        <div
          className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: service.accent }}
        >
          <Icon size={16} />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: service.accent }}
          >
            {service.tagline}
          </p>
          <h3 className="mt-1 text-base font-bold text-slate-900 transition-colors group-hover:underline">
            {service.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
        <span
          className="mt-4 inline-flex items-center gap-1 text-xs font-bold transition-all group-hover:gap-2"
          style={{ color: service.accent }}
        >
          Learn More
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}

export default function PropertyServices() {
  const services =
    getRealEstatePageData<HomePageData>("home").PropertyServices
      ?.items ?? [];

  return (
    <section className="overflow-hidden bg-[#FAF7F2] py-5 lg:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5"
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
            Property Services
          </span>
          <h2 className="mt-1 font-heading text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            End-to-End Real Estate Solutions
          </h2>
          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Tailored services for home buyers, property owners, and investors.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="h-full"
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

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
            Explore All Services
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
