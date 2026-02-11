import { HoverScale, SlideFromLeft } from "@/lib/animations/components";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface StepCardProps {
  icon: React.ComponentType<{ className?: string }>;
  number: number;
  title: string;
  description: string;
  delay: number;
}

export default function StepCard({
  icon: Icon,
  number,
  title,
  description,
  delay,
}: StepCardProps) {
  return (
    <SlideFromLeft delay={delay} className="group relative">
      <div className="flex items-start gap-6 p-7 rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

        <div className="absolute top-4 right-6 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
          {number}
        </div>

        <HoverScale className="relative flex-shrink-0 w-16 h-16 rounded-xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
          <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />

          <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        </HoverScale>

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <CheckCircle2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" />
          </div>
          <p className="text-[14px] md:text-[15px] leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {description}
          </p>

          <div className="mt-4 h-[2px] bg-gradient-to-r from-primary/50 via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </div>

        <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>
      </div>

      {number < 4 && (
        <div className="hidden lg:block absolute left-8 top-full w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      )}
    </SlideFromLeft>
  );
}
