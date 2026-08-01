"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, PhoneCall, Phone } from "lucide-react";

const navGroups = [
  {
    title: "About",
    items: [
      { href: "/aboutus", label: "About Us" },
      { href: "/ourteam", label: "Our Team" },
      { href: "/whychooseus", label: "Why Choose Us" },
      { href: "/visionandmission", label: "Vision and Mission" },
    ],
  },
  {
    title: "Properties",
    items: [
      { href: "/properties?type=apartment", label: "Apartment" },
      { href: "/properties?type=villa", label: "Villa" },
      { href: "/properties?type=builder-floor", label: "Builder Floor" },
      { href: "/properties?type=commercial", label: "Commercial Office" },
      { href: "/properties?type=studio", label: "Studio" },
      { href: "/properties?type=plot", label: "Plot/Land" },
    ],
  },
  {
    title: "Location",
    items: [
      { href: "/properties?city=delhi", label: "Delhi" },
      { href: "/properties?city=noida", label: "Noida" },
      { href: "/properties?city=gurgaon", label: "Gurgaon" },
      { href: "/properties?city=greater-noida", label: "Greater Noida" },
      { href: "/properties?city=faridabad", label: "Faridabad" },
      { href: "/properties?city=ghaziabad", label: "Ghaziabad" },
    ],
  },
  {
    title: "Projects",
    items: [
      { href: "/newlaunch?status=new-launch", label: "New Launches" },
      { href: "/newlaunch?status=ready-to-move", label: "Ready to Move" },
      {
        href: "/newlaunch?status=under-construction",
        label: "Under Construction",
      },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const toggleMobileGroup = (title: string) => {
    setExpandedGroup(expandedGroup === title ? null : title);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        {/* PREMIUM PROMINENT LOGO WRAPPER */}
        <Link
          href="/"
          className="group relative flex items-center py-1 transition-all duration-300 focus:outline-none"
        >
          {/* Outer Ambient Glow */}
          <div className="absolute -inset-1.5 -z-10 rounded-2xl bg-gradient-to-r from-[#B8863D]/25 via-[#D4AF37]/15 to-transparent opacity-70 blur-md transition-all duration-300 group-hover:opacity-100 group-hover:blur-lg" />

          <div className="relative flex items-center gap-3">
            {/* Brand Title */}
            <div className="flex flex-col leading-none">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                Nest<span className="text-[#B8863D]">Vista</span>
              </span>
              <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                Real Estate
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {/* Home Link */}
          <Link
            href="/"
            className="group relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B8863D]"
          >
            Home
            <span className="absolute inset-x-0 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          {/* Dropdown Groups */}
          {navGroups.map((group) => (
            <div key={group.title} className="group relative">
              <button
                type="button"
                suppressHydrationWarning
                className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B8863D] cursor-pointer"
              >
                {group.title}
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:-rotate-180"
                />
              </button>

              {/* Desktop Dropdown Menu */}
              <div className="invisible absolute left-0 top-full z-30 min-w-[200px] translate-y-2 rounded-2xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid gap-0.5">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-600 transition-all duration-150 hover:bg-[#FAF7F2] hover:text-[#B8863D]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Careers Link */}
          <Link
            href="/careers"
            className="group relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B8863D]"
          >
            Careers
            <span className="absolute inset-x-0 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          {/* Blog Link */}
          <Link
            href="/blog"
            className="group relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B8863D]"
          >
            Blog
            <span className="absolute inset-x-0 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>

          {/* Contact Link */}
          <Link
            href="/contact"
            className="group relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#B8863D]"
          >
            Contact
            <span className="absolute inset-x-0 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </Link>
        </nav>

        {/* Right Side: Contact Call Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-[#FAF7F2] px-3.5 py-1.5 text-xs font-bold text-slate-800 transition-all duration-300 hover:border-[#B8863D] hover:bg-[#B8863D] hover:text-white group shadow-2xs"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B8863D] text-white transition-colors group-hover:bg-white group-hover:text-[#B8863D]">
              <Phone size={12} />
            </div>
            <span>+91 98765 43210</span>
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="tel:+919876543210"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF7F2] border border-slate-200 text-[#B8863D] active:scale-95 transition"
            aria-label="Call Us"
          >
            <Phone size={18} />
          </a>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100 border-t border-slate-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white">
          <nav className="flex flex-col gap-2 px-4 py-4 sm:px-6 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 hover:text-[#B8863D]"
            >
              Home
            </Link>

            {navGroups.map((group) => {
              const isExpanded = expandedGroup === group.title;
              return (
                <div
                  key={group.title}
                  className="rounded-xl border border-slate-100 bg-[#FAF7F2]/50 overflow-hidden"
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => toggleMobileGroup(group.title)}
                    className="flex w-full items-center justify-between px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-800"
                  >
                    <span>{group.title}</span>
                    <ChevronDown
                      size={16}
                      className={`text-[#B8863D] transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 pb-2"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-2">
                      <div className="grid gap-1 pt-1 border-t border-slate-200/60">
                        {group.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-white hover:text-[#B8863D]"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 hover:text-[#B8863D]"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50 hover:text-[#B8863D]"
            >
              Blog
            </Link>

            <div className="pt-2 mt-1 border-t border-slate-100">
              <a
                href="tel:+919876543210"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-4 py-3 text-xs font-semibold text-white shadow-xs transition hover:bg-[#a07433] active:scale-[0.98]"
              >
                <PhoneCall size={14} />
                Call +91 98765 43210
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
