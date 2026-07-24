"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-ink">
            Elite<span className="text-brass">Estates</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Home
          </Link>

          <Link
            href="/properties"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            All Properties
          </Link>

          <Link
            href="/properties?listingType=Rent"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            For Rent
          </Link>

          <Link
            href="/properties?listingType=Sale"
            className="text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            For Sale
          </Link>
        </nav>

        {/* Desktop Button */}
        <Link
          href="/properties"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-ink-light md:block"
        >
          Browse Listings
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-ink md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
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
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="text-sm font-medium text-ink/70 hover:text-ink"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/properties"
            className="text-sm font-medium text-ink/70 hover:text-ink"
          >
            All Properties
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/properties?listingType=Rent"
            className="text-sm font-medium text-ink/70 hover:text-ink"
          >
            For Rent
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/properties?listingType=Sale"
            className="text-sm font-medium text-ink/70 hover:text-ink"
          >
            For Sale
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/properties"
            className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-paper"
          >
            Browse Listings
          </Link>
        </nav>
      </div>
    </header>
  );
}
