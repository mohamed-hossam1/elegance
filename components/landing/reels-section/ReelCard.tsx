import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { HoverScale, TapScale } from "@/lib/animations/components";
import { ReelItem } from "@/types/global";

// ─── URL detection ────────────────────────────────────────────────────────────

type EmbedType = "tiktok" | "instagram" | "facebook" | "youtube" | "image";

function detectType(src: string): EmbedType {
  if (/tiktok\.com/.test(src)) return "tiktok";
  if (/instagram\.com/.test(src)) return "instagram";
  if (/facebook\.com|fb\.watch/.test(src)) return "facebook";
  if (/youtube\.com|youtu\.be/.test(src)) return "youtube";
  return "image";
}

// TikTok:    https://www.tiktok.com/@user/video/123456789
// Instagram: https://www.instagram.com/reel/ABC123/
// Facebook:  https://www.facebook.com/reel/123456789
// YouTube:   https://www.youtube.com/shorts/ABC or /watch?v=ABC

function buildEmbedUrl(src: string, type: EmbedType): string {
  switch (type) {
    case "tiktok": {
      // Extract video ID from TikTok URL
      const match = src.match(/video\/(\d+)/);
      const id = match?.[1] ?? "";
      return `https://www.tiktok.com/embed/v2/${id}`;
    }
    case "instagram": {
      // Extract shortcode from /reel/CODE/ or /p/CODE/
      const match = src.match(/\/(reel|p)\/([^/?]+)/);
      const code = match?.[2] ?? "";
      return `https://www.instagram.com/p/${code}/embed/`;
    }
    case "facebook": {
      const encoded = encodeURIComponent(src);
      return `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&autoplay=false`;
    }
    case "youtube": {
      // Handles /watch?v=ID, /shorts/ID, youtu.be/ID
      const idMatch =
        src.match(/[?&]v=([^&]+)/) ||
        src.match(/shorts\/([^/?]+)/) ||
        src.match(/youtu\.be\/([^/?]+)/);
      const id = idMatch?.[1] ?? "";
      return `https://www.youtube.com/embed/${id}`;
    }
    default:
      return src;
  }
}

// ─── Embed wrapper ────────────────────────────────────────────────────────────

function EmbedFrame({ src, type }: { src: string; type: EmbedType }) {
  const embedUrl = buildEmbedUrl(src, type);

  return (
    <iframe
      src={embedUrl}
      className="absolute inset-0 w-full h-full border-0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      scrolling="no"
      title="Reel embed"
    />
  );
}

// ─── Image fallback ───────────────────────────────────────────────────────────

function ImageCard({ reel }: { reel: ReelItem }) {
  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={reel.src}
          alt={`Reel ${reel.id}`}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <HoverScale>
          <TapScale className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/50 border-2 border-white/20">
            <Play className="w-7 h-7 text-white ml-1 fill-white" />
          </TapScale>
        </HoverScale>
      </div>

      {/* Sparkle */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
        <Sparkles className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(209,159,31,0.6)]" />
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="h-1 bg-linear-to-r from-primary via-primary/60 to-transparent rounded-full" />
      </div>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ReelCard({
  reel,
  tall = true,
}: {
  reel: ReelItem;
  tall?: boolean;
}) {
  const type = detectType(reel.src);
  const isEmbed = type !== "image";

  return (
    <div
      className={`
        rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:-translate-y-2
        h-102 w-68
        lg:${tall ? "h-102 w-68" : "h-68 w-59.5"}
      `}
    >
      {/* Embed or image */}
      {isEmbed ? (
        <div className="relative w-full h-full">
          <EmbedFrame src={reel.src} type={type} />
        </div>
      ) : (
        <ImageCard reel={reel} />
      )}

      {/* Border glow — shown for both, hidden on embed hover since iframe captures events */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500 pointer-events-none" />

      {/* Duration badge — always visible */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 pointer-events-none z-10">
        {isEmbed ? (
          <span className="text-white text-xs font-bold tracking-wider uppercase">{type}</span>
        ) : (
          <>
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-white text-xs font-bold tracking-wider">HD</span>
            <div className="w-px h-3 bg-white/20" />
          </>
        )}
        <span className="text-white text-xs font-semibold">{reel.duration}</span>
      </div>
    </div>
  );
}