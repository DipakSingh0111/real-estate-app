import OurTeam from "@/app/components/OurTeam";
import Link from "next/link";
import { Home, ChevronsRight } from "lucide-react";

export default function OurTeamPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero Section*/}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 flex flex-col items-center justify-center text-center">
          {/* Main Title (Centered & Uppercase) */}
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
            OUR TEAM
          </h1>

          {/* 📍 Breadcrumb (Below Title, Center Aligned) */}
          <nav
            aria-label="Breadcrumb"
            className="mt-3 flex items-center justify-center gap-1.5 text-sm font-medium text-white flex-wrap"
          >
            <Link
              href="/"
              className="flex items-center gap-1.5 transition-colors hover:text-[#e53935]"
            >
              <Home size={15} className="mb-0.5" />
              <span>Home</span>
            </Link>
            <ChevronsRight size={14} className="text-white/70" />
            <Link
              href="/aboutus"
              className="transition-colors hover:text-[#e53935]"
            >
              About Us
            </Link>
            <ChevronsRight size={14} className="text-white/70" />
            <span className="text-[#e53935]">Our Team</span>
          </nav>
        </div>
      </section>

      {/* Team Component */}
      <OurTeam />
    </main>
  );
}
