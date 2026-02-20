import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Building,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import {
  AnimatedSection,
  HoverScale,
  ScaleIn,
  TapScale,
} from "@/lib/animations/components";

export default function CTA() {
  return (
    <AnimatedSection className="relative mt-20">
      <div className="relative rounded-2xl border border-primary/30 bg-linear-to-br from-card via-card/50 to-primary/5 p-8 lg:p-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 blur-2xl rounded-full" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <HoverScale className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-8 h-8 text-primary" />
          </HoverScale>

          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience <span className="text-primary">Luxury</span>?
          </h3>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don&apos;t wait. Your dream property or car is just a few clicks away.
            Browse our exclusive collection and start your journey to elegance
            today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <TapScale>
              <Button
                className="group primary-gradient px-8 py-6 text-base relative overflow-hidden shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href={ROUTES.REAL_ESTATE} className="gap-3">
                  <Building className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold">
                    Browse Properties
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </TapScale>
            <TapScale>
              <Button
                className="group bg-card hover:bg-card/80 border-2 border-primary/50 hover:border-primary px-8 py-6 text-base relative overflow-hidden transition-all duration-300"
                size="lg"
                asChild
              >
                <Link href={ROUTES.CARS} className="gap-3">
                  <Car className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative z-10 font-semibold text-primary">
                    Browse Vehicles
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-300" />

                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
              </Button>
            </TapScale>
          </div>

          <ScaleIn
            delay={0.4}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Expert Guidance</span>
            </div>
          </ScaleIn>
        </div>

        <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-2xl" />
      </div>
    </AnimatedSection>
  );
}
