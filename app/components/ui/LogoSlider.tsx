import { useRef } from "react";
import Image from "next/image";

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
    const offset = container.clientWidth * 0.85;
    container.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
              Partner brands
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#111827]">
              Trusted by top developers
            </h2>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => scrollLogos("left")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] shadow-sm transition hover:border-[#B8874A] hover:bg-[#F8F2D4]"
            aria-label="Scroll left"
          >
            ‹
          </button>
          <div
            ref={sliderRef}
            className="no-scrollbar flex flex-1 gap-4 overflow-x-auto pb-2"
          >
            {logos.map((logo) => (
              <div
                key={logo.name + logo.src}
                className="min-w-[160px] flex-shrink-0 rounded-3xl border border-[#E5E7EB] bg-[#F8FAFC] p-4 shadow-sm"
              >
                <div className="relative h-20 w-full overflow-hidden rounded-2xl bg-white p-3">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 120px, 180px"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollLogos("right")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#111827] shadow-sm transition hover:border-[#B8874A] hover:bg-[#F8F2D4]"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
