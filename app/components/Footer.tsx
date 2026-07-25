import Link from "next/link";
import propertiesData from "../data/properties.json";
import type { Property } from "@/types/property";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const properties = propertiesData.Properties as Property[];

export default function Footer() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-paper text-ink">
      {/* Soft warm accent glow, subtle */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brass/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-pine/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <h2 className="cursor-pointer font-display text-3xl font-semibold text-ink">
                Elite<span className="text-brass-dark">Estates</span>
              </h2>
            </Link>

            <p className="mt-5 leading-7 text-ink/60">
              Find your dream home with verified listings across India. Buy,
              Rent & Invest confidently with trusted agents and transparent
              pricing.
            </p>

            {/* Trust badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-brass/30 bg-brass/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brass-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              RERA-verified listings
            </div>

            {/* Social */}

            <div className="mt-8 flex gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink/60 transition duration-300 hover:-translate-y-1 hover:border-brass hover:bg-brass hover:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Cities */}

          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-ink">
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
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Company
            </h3>

            <ul className="space-y-3 text-ink/60">
              {[
                "About Us",
                "Properties",
                "Our Agents",
                "Blog",
                "Careers",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition hover:pl-2 hover:text-brass-dark"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider text-ink">
              Contact Us
            </h3>

            <div className="space-y-5 text-ink/60">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brass/10">
                  <MapPin size={16} className="text-brass-dark" />
                </span>

                <p className="pt-1.5">
                  Sector 62, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brass/10">
                  <Phone size={15} className="text-brass-dark" />
                </span>
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brass/10">
                  <Mail size={15} className="text-brass-dark" />
                </span>
                hello@elitestates.com
              </div>
            </div>

            {/* Newsletter */}

            <div className="mt-8">
              <p className="mb-3 text-sm text-ink/70">
                Subscribe for latest property updates
              </p>

              <div className="flex overflow-hidden rounded-xl border border-ink/10 bg-white transition focus-within:border-brass">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
                />

                <button className="bg-brass px-5 text-white transition hover:bg-brass-dark active:scale-95">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-ink/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-ink/50 md:flex-row">
          <p>© {new Date().getFullYear()} Real Estate. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="transition hover:text-brass-dark">
              Privacy
            </Link>

            <Link href="#" className="transition hover:text-brass-dark">
              Terms
            </Link>

            <Link href="#" className="transition hover:text-brass-dark">
              Sitemap
            </Link>

            <Link href="#" className="transition hover:text-brass-dark">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
