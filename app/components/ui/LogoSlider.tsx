"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const logos = [
  { name: "DLF", src: "/images/dlf.jpg" },
  { name: "Godrej", src: "/images/godrej.jpg" },
  { name: "Lodha", src: "/images/lodha.jpg" },
  { name: "Prestige", src: "/images/pres.jpg" },
  { name: "Mahindra", src: "/images/mahindra.svg" },
  { name: "Brigade", src: "/images/brigade.svg" },
  { name: "Sobha", src: "/images/sobha.svg" },
  { name: "Tata", src: "/images/tata.svg" },
  { name: "Adani", src: "/images/adani.svg" },
];

const LogoSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollLogos = (direction: "left" | "right") => {
    const container = sliderRef.current;
    if (!container) return;
    const offset = container.clientWidth;
    container.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-6">
      {/* Container aligned exact with Navbar (px-4 sm:px-6) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs sm:p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#B8863D]">
                Partner Brands
              </p>
              <h2 className="mt-0.5 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Trusted by Top Developers
              </h2>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            {/* Left Carousel Button */}
            <button
              type="button"
              onClick={() => scrollLogos("left")}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-300 hover:border-[#B8863D] hover:bg-[#FAF7F2] hover:text-[#B8863D] active:scale-95 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Logos Carousel - Exact 6 Items Visible on Desktop */}
            <div
              ref={sliderRef}
              className="flex flex-1 gap-3 overflow-x-auto scroll-smooth py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {logos.map((logo) => (
                <div
                  key={logo.name + logo.src}
                  /* 
                    Mobile: 2 items, Tablet: 4 items, Desktop (lg): Exact 6 items visible
                  */
                  className="w-[calc((100%-1*0.75rem)/2)] sm:w-[calc((100%-3*0.75rem)/4)] lg:w-[calc((100%-5*0.75rem)/6)] flex-shrink-0 rounded-2xl border border-slate-100 bg-[#FAF7F2]/60 p-2.5 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B8863D]/40"
                >
                  <div className="relative h-12 w-full overflow-hidden rounded-xl bg-white p-2">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 640px) 100px, 150px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Carousel Button */}
            <button
              type="button"
              onClick={() => scrollLogos("right")}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition-all duration-300 hover:border-[#B8863D] hover:bg-[#FAF7F2] hover:text-[#B8863D] active:scale-95 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
