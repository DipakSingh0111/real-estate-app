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
    const baseImages = images?.filter(Boolean) ?? [];
    const result = baseImages.slice(0, 4);
    // ensure we always render 4 thumbnail slots (use placeholder for missing)
    while (result.length < 4) result.push("/placeholder.jpg");
    return result;
  }, [images]);

  const [selectedImage, setSelectedImage] = useState<string>(
    () => galleryImages[0] || "/placeholder.jpg",
  );

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm sm:p-4">
      {/* Main image — made slightly taller for emphasis */}
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-100 h-[420px] sm:h-[369px]">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover"
        />

        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded-full bg-slate-900/75 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
            {type}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-md ${
              listingType === "Sale" ? "bg-emerald-600/85" : "bg-blue-600/85"
            }`}
          >
            For {listingType}
          </span>
        </div>
      </div>

      {/* Thumbnails  */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {galleryImages.map((image, index) => {
          const isActive = image === selectedImage;
          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`relative h-20 overflow-hidden rounded-lg border transition-all ${
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
    </div>
  );
}
