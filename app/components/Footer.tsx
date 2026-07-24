import Link from "next/link";
import propertiesData from "../../data/properties.json";
import type { Property } from "@/types/property";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const properties = propertiesData as Property[];

export default function Footer() {
  const cities = [...new Set(properties.map((p) => p.city))].sort();

  return (
    <footer className="relative mt-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <Link href="/">
              <h2 className="cursor-pointer text-3xl font-bold">
                Elite<span className="text-cyan-400">Estates</span>
              </h2>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              Find your dream home with verified listings across India. Buy,
              Rent & Invest confidently with trusted agents and transparent
              pricing.
            </p>

            {/* Social */}

            <div className="mt-8 flex gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:bg-cyan-500"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Cities */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">Popular Cities</h3>

            <ul className="space-y-3">
              {cities.slice(0, 8).map((city) => (
                <li key={city}>
                  <Link
                    href={`/properties?city=${encodeURIComponent(city)}`}
                    className="text-gray-400 transition hover:pl-2 hover:text-cyan-400"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">Company</h3>

            <ul className="space-y-3 text-gray-400">
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
                    className="transition hover:pl-2 hover:text-cyan-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>

            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 text-cyan-400" />

                <p>
                  Sector 62, Noida
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-400" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-cyan-400" />
                hello@elitestates.com
              </div>
            </div>

            {/* Newsletter */}

            <div className="mt-8">
              <p className="mb-3 text-sm text-gray-300">
                Subscribe for latest property updates
              </p>

              <div className="flex overflow-hidden rounded-xl border border-white/10">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 px-4 py-3 text-sm outline-none placeholder:text-gray-500"
                />

                <button className="bg-cyan-500 px-5 transition hover:bg-cyan-600">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} GharNivas. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="transition hover:text-cyan-400">
              Privacy
            </Link>

            <Link href="#" className="transition hover:text-cyan-400">
              Terms
            </Link>

            <Link href="#" className="transition hover:text-cyan-400">
              Sitemap
            </Link>

            <Link href="#" className="transition hover:text-cyan-400">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
