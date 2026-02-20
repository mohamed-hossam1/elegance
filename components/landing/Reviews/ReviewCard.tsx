import Image from "next/image";
import { Quote, Star, Sparkles, ArrowRight } from "lucide-react";
import {
  AnimatedSection,
  HoverScale,
  ScaleIn,
} from "@/lib/animations/components";

interface ReviewCardProps {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
  delay: number;
  category: "property" | "car";
}

export default function ReviewCard({
  name,
  role,
  avatar,
  rating,
  review,
  delay,
  category,
}: ReviewCardProps) {
  return (
    <>
      <AnimatedSection
        delay={delay}
        className="group relative h-full"
      >
        <div className="relative h-full p-8 rounded-2xl border border-primary/30 bg-linear-to-br from-card to-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <Quote className="w-16 h-16 text-primary" />
          </div>

          <div className="absolute top-6 left-6">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                category === "property"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "bg-blue-500/10 text-blue-500 border border-blue-500/20"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              {category === "property" ? "Property" : "Vehicle"}
            </span>
          </div>

          <div className="relative mt-12 mb-6 flex items-center gap-4">
            <HoverScale className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300">
              <Image
                src={avatar}
                alt={name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </HoverScale>

            <div className="flex-1">
              <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                {name}
              </h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>

          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, index) => (
              <ScaleIn delay={delay + index * 0.1} key={index}>
                <Star
                  className={`w-5 h-5 ${
                    index < rating
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted"
                  } transition-all duration-300 group-hover:scale-110`}
                />
              </ScaleIn>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground transition-colors duration-300">
            &quot;{review}&quot;
          </p>

          <div className="mt-6 h-0.5 bg-linear-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

          <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
