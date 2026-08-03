"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, PhoneCall, Phone } from "lucide-react";

const navGroups = [
  {
    title: "About",
    items: [
      { href: "/aboutus", label: "About Us" },
      { href: "/ourteam", label: "Our Team" },
      { href: "/awards", label: "Awards" },
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

const topLinks = [
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setExpandedGroup(null);
  }, []);

  useEffect(() => {
    closeMenu();
    setActiveDropdown(null);
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeMenu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [closeMenu]);

  const toggleMobileGroup = (title: string) => {
    setExpandedGroup((prev) => (prev === title ? null : title));
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[60px] max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:min-h-[64px] sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="group relative flex shrink-0 items-center py-1 focus:outline-none"
        >
          <div className="absolute -inset-1.5 -z-10 rounded-2xl bg-gradient-to-r from-[#B8863D]/25 via-[#D4AF37]/15 to-transparent opacity-70 blur-md transition-all duration-300 group-hover:opacity-100" />
          <span className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">
            Nest<span className="text-[#B8863D]">Vista</span>
          </span>
        </Link>

        {/* Desktop nav — lg+ only (tablets use mobile menu) */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
          <Link
            href="/"
            className="group relative rounded-full px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-[#B8863D]"
          >
            Home
            <span className="absolute inset-x-2 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          {navGroups.map((group) => (
            <div
              key={group.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(group.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={() => toggleDropdown(group.title)}
                className="flex items-center gap-1 rounded-full px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-[#B8863D]"
                aria-expanded={activeDropdown === group.title}
              >
                {group.title}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    activeDropdown === group.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full z-30 min-w-[220px] pt-2 transition-all duration-200 ${
                  activeDropdown === group.title
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-1 opacity-0"
                }`}
              >
                <div className="rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-[#FAF7F2] hover:text-[#B8863D]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative rounded-full px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-[#B8863D]"
            >
              {link.label}
              <span className="absolute inset-x-2 bottom-0.5 h-[2px] scale-x-0 bg-[#B8863D] transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop call button */}
        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-[#FAF7F2] px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-[#B8863D] hover:bg-[#B8863D] hover:text-white"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B8863D] text-white transition group-hover:bg-white group-hover:text-[#B8863D]">
              <Phone size={14} />
            </div>
            <span className="hidden xl:inline">+91 98765 43210</span>
            <span className="xl:hidden">Call Us</span>
          </a>
        </div>

        {/* Mobile / tablet actions */}
        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href="tel:+919876543210"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-[#FAF7F2] text-[#B8863D] transition active:scale-95"
            aria-label="Call us"
          >
            <Phone size={20} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 active:scale-95"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 top-[60px] z-40 bg-black/40 transition-opacity duration-300 sm:top-[64px] lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`relative z-50 overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-60px)] opacity-100 sm:max-h-[calc(100dvh-64px)]" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex max-h-[calc(100dvh-60px)] flex-col gap-2 overflow-y-auto px-4 py-4 sm:max-h-[calc(100dvh-64px)] sm:gap-2.5 sm:px-6 sm:py-5"
          data-lenis-prevent
        >
          <Link
            href="/"
            onClick={closeMenu}
            className="rounded-xl px-4 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-50 hover:text-[#B8863D]"
          >
            Home
          </Link>

          {navGroups.map((group) => {
            const isExpanded = expandedGroup === group.title;
            return (
              <div
                key={group.title}
                className="overflow-hidden rounded-xl border border-slate-100 bg-[#FAF7F2]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileGroup(group.title)}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-800"
                  aria-expanded={isExpanded}
                >
                  <span>{group.title}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#B8863D] transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-200 ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-1 border-t border-slate-200/60 px-2 pb-2.5 pt-1.5">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="rounded-lg px-4 py-3 text-base font-medium text-slate-600 transition hover:bg-white hover:text-[#B8863D]"
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

          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-xl px-4 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-50 hover:text-[#B8863D]"
            >
              {link.label}
            </Link>
          ))}

          <div className="sticky bottom-0 mt-2 border-t border-slate-100 bg-white pt-4 pb-2">
            <a
              href="tel:+919876543210"
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-4 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#a07433] active:scale-[0.98]"
            >
              <PhoneCall size={18} />
              Call +91 98765 43210
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
