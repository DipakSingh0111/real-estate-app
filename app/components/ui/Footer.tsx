import Link from "next/link";
import Image from "next/image";
import {
  getRealEstatePageData,
  type PropertiesPageData,
} from "@/lib/getRealEstateData";
import type { Property } from "@/types/property";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const properties =
  getRealEstatePageData<PropertiesPageData>("properties").PropertyCatalog
    ?.resolvedData ?? [];

export default function Footer() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper text-ink">
      <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-10">
        {/* Top */}
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Nest<span className="text-[#B8863D]">Vista</span>
                </span>
              </div>
            </Link>
            <p className="mt-4 leading-7 text-ink/60">
              Find your dream home with verified listings across India. Buy,
              Rent & Invest confidently with trusted agents and transparent
              pricing.
            </p>
            {/* Trust badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brass-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              RERA-verified listings
            </div>
            {/* Social */}
            <div className="mt-5 flex gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaXTwitter,
                FaLinkedinIn,
                FaWhatsapp,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/60 transition duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          {/* Cities */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Popular Cities
            </h3>
            <ul className="space-y-3">
              {cities.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link
                    href={`/properties?city=${encodeURIComponent(city)}`}
                    className="text-ink/60 transition hover:pl-2 hover:text-brass-dark"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Company
            </h3>
            <ul className="space-y-3 text-ink/60">
              {[
                { label: "About Us", href: "/about-us" },
                { label: "Properties", href: "/properties" },
                { label: "Our Team", href: "/ourteam" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacypolicy" },
                { label: "Terms & Conditions", href: "/termconditions" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:pl-2 hover:text-brass-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Tools */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Tools
            </h3>
            <ul className="space-y-3 text-ink/60">
              {[
                { label: "EMI Calculator", href: "/tools/emi-calculator" },
                { label: "Area Converter", href: "/tools/area-converter" },
                { label: "Investment Tips", href: "/tools/investment-tips" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:pl-2 hover:text-brass-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 font-display text-[14px] font-black uppercase tracking-[0.12em] text-slate-900">
              Contact Us
            </h3>

            <div className="space-y-4 text-ink/60">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-700">
                  <MapPin size={15} className="text-slate-700" />
                </span>
                <div className="pt-0.5">
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    Sector 62, Noida
                  </p>
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <a
                  href="tel:+919876543210"
                  className="flex w-full max-w-[260px] items-center gap-2.5 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-800 transition hover:text-[#B8863D] hover:underline underline-offset-4"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center">
                    <Phone size={15} className="text-slate-700" />
                  </span>
                  <span>+91 98765 43210</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-slate-700">
                  <Mail size={14} className="text-slate-700" />
                </span>
                <a
                  href="mailto:hello@elitestates.com"
                  className="text-sm font-medium text-slate-700 transition hover:text-[#B8863D] hover:underline underline-offset-4"
                >
                  hello@elitestates.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-[13px] font-medium leading-5 text-slate-600">
                Subscribe for latest property updates
              </p>
              <div className="flex w-full max-w-[340px] overflow-hidden rounded-xl border border-slate-300 bg-white transition focus-within:border-[#B8863D] focus-within:ring-2 focus-within:ring-[#B8863D]/20">
                <input
                  type="email"
                  placeholder="Enter your email"
                  suppressHydrationWarning
                  className="w-full bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-slate-400"
                />
                <button className="flex h-11 w-11 items-center justify-center bg-[#B8863D] text-white transition hover:bg-[#a07433] active:scale-95">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 h-px bg-ink/10" />
        <div className="flex flex-col items-center justify-center gap-3 text-sm text-ink/50 md:flex-row">
          <p>© {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
