import { Play, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  HoverScale,
  TapScale,
} from "@/lib/animations/components";


export default function ReelCard({
  reel,
  tall = true,
}: {
  reel: { id: number; src: string; duration: string };
  tall?: boolean;
}) {
  return (
    <div
      className={`
        rounded-2xl overflow-hidden relative group cursor-pointer transition-all duration-500 hover:-translate-y-2
        h-[408px] w-[272px]
        lg:${tall ? "h-[408px] w-[272px]" : "h-[272px] w-[238px]"}
      `}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={reel.src}
          alt={`Reel ${reel.id}`}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-all duration-500" />

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <HoverScale>
          <TapScale className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-primary/50 border-2 border-white/20">
            <Play className="w-7 h-7 text-white ml-1 fill-white" />
          </TapScale>
        </HoverScale>
      </div>

      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-white text-xs font-bold tracking-wider">HD</span>
        <div className="w-[1px] h-3 bg-white/20" />
        <span className="text-white text-xs font-semibold">
          {reel.duration}
        </span>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
        <Sparkles className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(209,159,31,0.6)]" />
      </div>

      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent rounded-full" />
      </div>
    </div>
  );
}
