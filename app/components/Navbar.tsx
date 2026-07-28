"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import BookingModal from "./BookingModal";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const navGroups = [
  {
    title: "About",
    items: [
      { href: "/aboutus", label: "AboutUs" },
      { href: "/ourteam", label: "Our Team" },
      { href: "/properties?feature=new-launch", label: "Why Choose Us" },
      { href: "/properties?feature=luxury", label: "Careers" },
      { href: "/blog", label: "Blog" },
      { href: "/properties?feature=luxury", label: "Emi Calculator" },
      { href: "/properties?feature=luxury", label: "Area Converter" },
      { href: "/properties?feature=luxury", label: "Investment Tips" },
    ],
  },
  {
    title: "Property Type",
    items: [
      { href: "/properties?type=apartment", label: "Apartment" },
      { href: "/properties?type=villa", label: "Villa" },
      {
        href: "/properties?type=independent-house",
        label: "Independent House",
      },
      {
        href: "/properties?type=commercial-office",
        label: "Commercial Office",
      },
      { href: "/properties?type=retail-shop", label: "Retail Shop" },
      { href: "/properties?type=warehouse", label: "Warehouse" },
      { href: "/properties?type=plot-land", label: "Plot/Land" },
    ],
  },
  {
    title: "Location",
    items: [
      { href: "/properties?city=Delhi", label: "Delhi" },
      { href: "/properties?city=Noida", label: "Noida" },
      { href: "/properties?city=Gurgaon", label: "Gurgaon" },
      { href: "/properties?city=Mumbai", label: "Greater Noida" },
      { href: "/properties?city=Bangalore", label: "Yamuna Expressway" },
      { href: "/properties?city=Pune", label: "Faridabad" },
      { href: "/properties?city=Pune", label: "Ghaziabad" },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        href: "/projects?",
        label: "New Launches",
      },
      { href: "/projects?status=ready-to-move", label: "Ready to Move" },
      { href: "/projects?status=pre-launch", label: "Under Construction" },
      { href: "/projects?status=pre-launch", label: "Affordable Housing" },
      { href: "/projects?status=pre-launch", label: "Luxury Projects" },
      { href: "/projects?status=pre-launch", label: "Commercial Projects" },
    ],
  },
  {
    title: "Luxury",
    items: [
      { href: "/properties?collection=penthouse", label: "Penthouse" },
      { href: "/properties?collection=luxury-villa", label: "Luxury Villa" },
      { href: "/properties?collection=beach-house", label: "Beach House" },
      { href: "/properties?collection=farm-house", label: "Farm House" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-start gap-2 px-6 py-4 md:flex-nowrap">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Elite<span className="text-brass">Estates</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-0 md:flex md:ml-[161px]">
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-brass/10 hover:text-brass-dark active:bg-brass/20"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-[2px] scale-x-0 bg-brass transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          {navGroups.map((group) => (
            <div key={group.title} className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white/10 hover:text-ink active:bg-white/5"
              >
                {group.title}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:-rotate-180"
                />
              </button>

              <div className="absolute left-0 top-full z-30 hidden min-w-[220px] rounded-3xl border border-ink/10 bg-paper p-4 shadow-2xl opacity-0 transition duration-200 group-hover:block group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:block md:group-hover:translate-y-0">
                <div className="grid gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-3xl px-4 py-3 text-sm font-medium text-ink/80 transition hover:bg-brass/10 hover:text-brass-dark"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="hidden rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_12px_30px_rgba(184,132,11,0.18)] transition duration-300 hover:bg-brass-dark hover:text-paper md:block"
          >
            Schedule Visit
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-ink transition-transform duration-300 md:hidden"
          >
            <span
              className={`inline-block transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-ink/10 bg-paper transition-all duration-300 md:hidden ${open ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {topLinks.map((link, i) => (
            <Link
              key={link.href}
              onClick={() => setOpen(false)}
              href={link.href}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`group relative w-fit text-sm font-medium text-ink/70 transition duration-300 hover:text-ink ${
                open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {navGroups.map((group) => (
            <div
              key={group.title}
              className="space-y-3 rounded-3xl border border-ink/10 bg-white/5 p-3"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/50">
                {group.title}
              </p>
              <div className="grid gap-2">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-2 text-sm font-medium text-ink/70 transition hover:bg-brass/10 hover:text-brass-dark"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={() => {
              setShowModal(true);
              setOpen(false);
            }}
            className="rounded-full bg-brass px-5 py-3 text-sm font-semibold text-ink transition duration-300 hover:bg-brass-dark active:scale-95"
          >
            Schedule Visit
          </button>
        </nav>
      </div>

      <BookingModal open={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
