"use client";
import { useState, useCallback, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
  Calendar,
  Gauge,
  Fuel,
  Cog,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarInfo {
  title: string;
  price: number;
  year: number;
  mileage: number;
  fuelType: string;
  transmission: string;
}

interface ImageGalleryProps {
  images: string[];
  alt: string;
  carInfo?: CarInfo;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(price);

const ImageGallery = ({ images, alt, carInfo }: ImageGalleryProps) => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const prev = useCallback(
    () => setActive((p) => (p === 0 ? images.length - 1 : p - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setActive((p) => (p === images.length - 1 ? 0 : p + 1)),
    [images.length],
  );

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, prev, next]);

  return (
    <>
      {/* Inline gallery */}
      <div className="space-y-3">
        <div
          className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-lg"
          onClick={() => setLightbox(true)}
        >
          <img
            src={images[active]}
            alt={`${alt} - Image ${active + 1}`}
            className="h-full w-full object-cover"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 backdrop-blur transition hover:bg-background"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-1.5 backdrop-blur transition hover:bg-background"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded border-2 transition ${
                  i === active
                    ? "border-primary"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox overlay */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95">
          {/* Top bar: car info + CTA */}
          {carInfo && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black px-4 py-3 md:px-6">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
                <h2 className="font-display text-base font-bold text-white md:text-lg">
                  {carInfo.title}
                </h2>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white/80">
                    <Calendar className="h-3 w-3" /> {carInfo.year}
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white/80">
                    <Gauge className="h-3 w-3" />{" "}
                    {carInfo.mileage.toLocaleString()} km
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white/80 capitalize">
                    <Cog className="h-3 w-3" /> {carInfo.transmission}
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-white/20 px-2.5 py-0.5 text-xs text-white/80 capitalize">
                    <Fuel className="h-3 w-3" /> {carInfo.fuelType}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-lg font-bold text-primary md:text-xl">
                  {formatPrice(carInfo.price)}
                </span>

                <Button  size="sm" className="gap-1.5 bg-primary">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </Button>
              </div>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => setLightbox(false)}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-white/20"
            style={carInfo ? { top: 60, right: 12 } : {}}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Main image */}
          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
            <img
              src={images[active]}
              alt={`${alt} - Image ${active + 1}`}
              className="max-h-full max-w-full object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-white/20 md:left-6"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white backdrop-blur transition hover:bg-white/20 md:right-6"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 border-t border-white/10 bg-black px-4 py-3">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded border-2 transition ${
                    i === active
                      ? "border-primary"
                      : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
