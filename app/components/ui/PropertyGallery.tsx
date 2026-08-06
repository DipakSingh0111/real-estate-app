"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { PropertyGalleryProps } from "@/types/property";

export default function PropertyGallery({
  images,
  title,
  type,
  listingType,
}: PropertyGalleryProps) {
  const galleryImages = useMemo(() => {
    return images?.filter(Boolean) ?? [];
  }, [images]);

  const [selectedImage, setSelectedImage] = useState<string>(
    () => galleryImages[0] || "/images/hero.jpg",
  );
  const activeIndex = Math.max(galleryImages.indexOf(selectedImage), 0);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-sm sm:p-4">
      <div className="relative h-[280px] w-full overflow-hidden rounded-xl bg-slate-100 sm:h-[390px] lg:h-[430px]">
        <Image
          src={selectedImage}
          alt={`${title} — view ${activeIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover transition-transform duration-500"
        />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
          <span className="rounded-full bg-slate-950/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md">
            {type}
          </span>
          <span
            className="rounded-full bg-[#B8863D]/90 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md"
          >
            For {listingType}
          </span>
        </div>

        {galleryImages.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/70 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md sm:bottom-4 sm:right-4">
            {activeIndex + 1} / {galleryImages.length}
          </span>
        )}
      </div>

      {/* Horizontally scrollable */}
      {galleryImages.length > 1 && (
      <div className="mt-2.5 flex gap-2 overflow-x-auto pb-0.5 sm:mt-3">
        {galleryImages.map((image, index) => {
          const isActive = image === selectedImage;
          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              aria-label={`Show ${title} image ${index + 1}`}
              aria-pressed={isActive}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition-all sm:h-20 sm:w-28 ${
                isActive
                  ? "border-[#C89234] ring-2 ring-[#C89234]/20"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <Image
                src={image}
                alt={`${title} view ${index + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
      )}
    </div>
  );
}
