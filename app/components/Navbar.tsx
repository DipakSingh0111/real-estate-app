"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingModal from "./BookingModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "All Properties" },
  { href: "/rent", label: "For Rent" },
  { href: "/sale", label: "For Sale" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur animate-[fadeDown_0.5s_ease-out]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Elite<span className="text-brass">Estates</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-ink/70 transition hover:text-ink"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          onClick={() => setShowModal(true)}
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition duration-300 hover:bg-ink-light hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5 md:block"
        >
          Book Property
        </button>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden border-t border-ink/10 bg-paper transition-all duration-300 md:hidden
          ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link, i) => (
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
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-brass transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}

          <button
            onClick={() => {
              setShowModal(true);
              setOpen(false);
            }}
            className="rounded-full bg-ink px-5 py-3 text-white transition duration-300 hover:bg-ink-light active:scale-95"
          >
            Book Property
          </button>
        </nav>
      </div>
      <BookingModal open={showModal} onClose={() => setShowModal(false)} />
    </header>
  );
}
