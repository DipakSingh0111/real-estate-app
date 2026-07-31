import OurTeam from "@/app/components/OurTeam";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function OurTeamPage() {
  return (
    <main className="bg-[#FAF7F2] text-slate-900">
      {/* Hero with Breadcrumb */}
      <section className="relative text-white border-b border-stone-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#C89234]">
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="font-medium text-[#C89234]">Our Team</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Meet the people{" "}
              <span className="text-[#C89234]">behind every deal.</span>
            </h1>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
              A dedicated team of real estate professionals committed to finding
              the right property for every client — with honesty, expertise, and care.
            </p>
          </div>
        </div>
      </section>

      <OurTeam />
    </main>
  );
}
