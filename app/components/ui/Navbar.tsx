"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, PhoneCall, Phone, Mail } from "lucide-react";
import { FaAmazon } from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { getRealEstateSharedData } from "@/lib/getRealEstateData";

type NavItem = { label: string; href: string };
type NavGroup = { title: string; items: NavItem[] };

type HeaderData = {
  logo?: string;
  home?: NavItem;
  groups?: NavGroup[];
  links?: NavItem[];
  buttons?: NavItem[];
};

type TopbarData = {
  phones?: string[];
  email?: string;
  socialLinks?: Array<{ label?: string; href?: string }>;
};

const shared = getRealEstateSharedData<{
  Header?: HeaderData;
  Topbar?: TopbarData;
}>();

const header = shared.Header ?? {};
const topbar = shared.Topbar ?? {};

const logoText = header.logo ?? "NestVista";
const homeLink = header.home ?? { label: "Home", href: "/" };
const navGroups = header.groups ?? [];
const topLinks = header.links ?? [];

function toTelHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

const contactPhones = (topbar.phones ?? []).map((phone) => ({
  label: phone,
  href: toTelHref(phone),
}));

const primaryPhone = contactPhones[0];
const email = topbar.email ?? "";

const socialIconMap = {
  facebook: FaFacebookF,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
  amazon: FaAmazon,
} as const;

const socialLinks = (topbar.socialLinks ?? [])
  .map((link) => {
    const key = (link.label ?? "").toLowerCase() as keyof typeof socialIconMap;
    const Icon = socialIconMap[key];
    if (!Icon || !link.href) return null;
    return {
      href: link.href,
      label: link.label ?? key,
      Icon,
    };
  })
  .filter(Boolean) as Array<{
  href: string;
  label: string;
  Icon: (typeof socialIconMap)[keyof typeof socialIconMap];
}>;

function BrandMark({ text }: { text: string }) {
  if (text.endsWith("Vista")) {
    return (
      <>
        {text.slice(0, -5)}
        <span className="text-[#B8863D]">Vista</span>
      </>
    );
  }
  return text;
}

export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(96);

  const closeMenu = useCallback(() => {
    setOpen(false);
    setExpandedGroup(null);
  }, []);

  const measureHeader = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    closeMenu();
    setActiveDropdown(null);
  }, [pathname, closeMenu]);

  useEffect(() => {
    measureHeader();
    window.addEventListener("resize", measureHeader);
    return () => window.removeEventListener("resize", measureHeader);
  }, [measureHeader]);

  useEffect(() => {
    measureHeader();
  }, [open, measureHeader]);

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
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl"
    >
      {/* Top utility bar */}
      <div className="border-b border-white/5 bg-slate-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-1.5 sm:gap-4 sm:px-6 sm:py-2 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center gap-2 text-[10px] sm:gap-5 sm:text-xs">
            {contactPhones.length > 0 && (
              <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <Phone
                  size={12}
                  className="shrink-0 text-[#C9A227] sm:h-[13px] sm:w-[13px]"
                  strokeWidth={2.25}
                />
                <div className="flex min-w-0 items-center gap-x-1">
                  {contactPhones.map((phone, index) => (
                    <span key={phone.href} className="inline-flex items-center">
                      {index > 0 && (
                        <span className="mr-1 hidden text-white/35 sm:inline">
                          ,
                        </span>
                      )}
                      <a
                        href={phone.href}
                        className={`truncate font-medium tracking-wide text-white/85 transition-colors hover:text-[#E6C687] ${
                          index > 0 ? "hidden sm:inline" : ""
                        }`}
                      >
                        {phone.label}
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {email && (
              <>
                <span
                  className="hidden h-3 w-px bg-white/15 md:block"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${email}`}
                  className="hidden min-w-0 items-center gap-2 font-medium tracking-wide text-white/85 transition-colors hover:text-[#E6C687] md:inline-flex"
                >
                  <Mail
                    size={13}
                    className="shrink-0 text-[#C9A227]"
                    strokeWidth={2.25}
                  />
                  <span className="truncate">{email}</span>
                </a>
              </>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-1.5">
            {socialLinks.map(({ href, label, Icon }, index) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-[#E6C687] sm:h-7 sm:w-7 ${
                  index >= 4 ? "hidden min-[400px]:flex" : ""
                }`}
              >
                <Icon className="h-3 w-3 sm:h-[13px] sm:w-[13px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex min-h-[56px] max-w-7xl items-center justify-between gap-3 px-3 py-2.5 sm:min-h-[64px] sm:gap-4 sm:px-6 sm:py-3 lg:px-8">
        {/* Logo */}
        <Link
          href={homeLink.href}
          onClick={closeMenu}
          className="group relative flex shrink-0 items-center py-1 focus:outline-none"
        >
          <div className="absolute -inset-1.5 -z-10 rounded-2xl bg-gradient-to-r from-[#B8863D]/25 via-[#D4AF37]/15 to-transparent opacity-70 blur-md transition-all duration-300 group-hover:opacity-100" />
          <span className="text-lg font-black tracking-tight text-slate-900 sm:text-2xl">
            <BrandMark text={logoText} />
          </span>
        </Link>

        {/* Desktop nav  */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
          <Link
            href={homeLink.href}
            className="group relative rounded-full px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:text-[#B8863D]"
          >
            {homeLink.label}
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
        {primaryPhone && (
          <div className="hidden shrink-0 items-center lg:flex">
            <a
              href={primaryPhone.href}
              className="group flex items-center gap-2.5 rounded-full border border-slate-200/80 bg-[#FAF7F2] px-4 py-2 text-sm font-bold text-slate-800 transition hover:border-[#B8863D] hover:bg-[#B8863D] hover:text-white"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B8863D] text-white transition group-hover:bg-white group-hover:text-[#B8863D]">
                <Phone size={14} />
              </div>
              <span className="hidden xl:inline">{primaryPhone.label}</span>
              <span className="xl:hidden">Call Us</span>
            </a>
          </div>
        )}

        {/* Mobile / tablet actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
          {primaryPhone && (
            <a
              href={primaryPhone.href}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-[#FAF7F2] text-[#B8863D] transition active:scale-95 sm:h-11 sm:w-11"
              aria-label="Call us"
            >
              <Phone size={18} className="sm:h-5 sm:w-5" />
            </a>
          )}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-50 active:scale-95 sm:h-11 sm:w-11"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
          >
            {open ? <X size={35} /> : <Menu size={35} />}
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: headerHeight }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile navigation drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-x-0 z-50 flex flex-col border-t border-slate-100 bg-white shadow-xl transition-all duration-300 ease-out lg:hidden ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{
          top: headerHeight,
          maxHeight: `calc(100dvh - ${headerHeight}px)`,
        }}
        aria-hidden={!open}
      >
        <nav
          className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain px-3 py-3 sm:gap-2 sm:px-6 sm:py-4"
          data-lenis-prevent
        >
          <Link
            href={homeLink.href}
            onClick={closeMenu}
            className="rounded-xl px-3 py-2.5 text-[15px] font-bold text-slate-900 transition hover:bg-slate-50 hover:text-[#B8863D] sm:px-4 sm:py-3 sm:text-base"
          >
            {homeLink.label}
          </Link>

          {navGroups.map((group) => {
            const isExpanded = expandedGroup === group.title;
            return (
              <div
                key={group.title}
                className="rounded-xl border border-slate-100 bg-[#FAF7F2]/50"
              >
                <button
                  type="button"
                  onClick={() => toggleMobileGroup(group.title)}
                  className="flex w-full items-center justify-between gap-2 px-3 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-800 sm:px-4 sm:py-3.5 sm:text-sm"
                  aria-expanded={isExpanded}
                >
                  <span>{group.title}</span>
                  <ChevronDown
                    size={35}
                    className={`shrink-0 text-[#B8863D] transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid gap-0.5 border-t border-slate-200/60 px-1.5 pb-2 pt-1 sm:px-2 sm:pb-2.5 sm:pt-1.5">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={closeMenu}
                          className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#B8863D] active:bg-white sm:px-4 sm:py-3 sm:text-base"
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
              className="rounded-xl px-3 py-2.5 text-[15px] font-bold text-slate-900 transition hover:bg-slate-50 hover:text-[#B8863D] sm:px-4 sm:py-3 sm:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {primaryPhone && (
          <div className="shrink-0 border-t border-slate-100 bg-white px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-4">
            <a
              href={primaryPhone.href}
              onClick={closeMenu}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#B8863D] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a07433] active:scale-[0.98] sm:py-3.5 sm:text-base"
            >
              <PhoneCall size={18} />
              Call {primaryPhone.label}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
