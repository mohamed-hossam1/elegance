import * as motion from "motion/react-client";
import { ArrowRight, Building, Car, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
  ScaleIn,
  TapScale,
} from "@/lib/animations/components";
import GridCircle from "@/components/GridCircle";

const HeroSection = () => {
  const images = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/de5ee789e574af49452eaed2707f48bcfaf47d2d?width=445",
      alt: "Luxury Property 1",
      className: "w-full h-[150px] object-cover rounded-xl",
      translateY: "-translate-y-2",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/665a45f089407c63902c17a17c78dc285f7e71f0?width=445",
      alt: "Luxury Property 2",
      className: "w-full h-[202px] object-cover rounded-xl",
      translateY: "translate-y-5",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b3660a04e8fd438e22b71718f1eeace74e7cad89?width=445",
      alt: "Premium Car 1",
      className: "w-full h-[202px] object-cover rounded-xl",
      translateY: "-translate-y-8",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a6cd0fb96a7f17b3dab7d62d9b9298999486650d?width=445",
      alt: "Premium Car 2",
      className: "w-full h-[147px] object-cover rounded-xl",
      translateY: "translate-y-8",
    },
  ];

  return (
    <section className="relative max-w-[1650px] min-h-[750px] flex justify-center items-center mx-auto px-4 lg:px-[138px] mt-20 py-12 lg:py-[120px] overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <StaggerContainer className="relative z-10">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />

            <AnimatedSection className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="font-semibold uppercase tracking-[0.2em] text-primary text-[9px] md:text-xs">
                Premium Real Estate & Luxury Cars
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-[34px] font-bold leading-[1.15] text-foreground md:text-5xl lg:text-6xl mb-6">
                WHERE
                <span className="text-primary md:ml-3 relative inline-block">
                  {" "}
                  ELEGANCE
                  <AnimatedUnderline />
                </span>
                <br />
                MEETS EXCELLENCE
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="max-w-lg text-text-secondary leading-relaxed text-muted-foreground text-[14px] md:text-lg">
                We don't just sell properties and cars — we deliver
                life-changing decisions with one move. Expert guidance,
                transparent deals, and the luxury you actually deserve.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="mt-8 flex flex-wrap gap-4">
              <TapScale>
                <Button
                  className="group bg-card hover:bg-card/80 border border-primary/50 hover:border-primary transition-all duration-300 relative overflow-hidden"
                  size="lg"
                  asChild
                >
                  <Link
                    href={ROUTES.REAL_ESTATE}
                    className="text-primary py-6 px-6"
                  >
                    <div className="flex gap-2 items-center relative z-10 text-primary">
                      <Building className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Browse Real Estate</span>
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 text-primary transition-transform duration-300" />

                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Link>
                </Button>
              </TapScale>
              <TapScale>
                <Button
                  className="group primary-gradient py-6 px-6 relative overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                  size="lg"
                  asChild
                >
                  <Link href={ROUTES.CARS} className="gap-2">
                    <div className="flex gap-2 items-center relative z-10">
                      <Car className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="font-semibold">Browse Cars</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>

                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                </Button>
              </TapScale>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="mt-10  relative">
              <div className="h-[1px] w-full bg-gradient-to-r from-primary via-primary/50 to-transparent" />
              <motion.div
                className="absolute top-0 left-0 h-[3px] w-20 bg-primary blur-sm"
                animate={{
                  x: [0, 100, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </AnimatedSection>
          </StaggerContainer>

          <StaggerContainer className="relative">
            <div className="grid grid-cols-2 gap-4  hidden md:grid relative">
              {images.map((image, idx) => (
                <ScaleIn
                  key={idx}
                  delay={idx * 0.15}
                  className={`relative group ${image.translateY}`}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={500}
                      className={`${image.className} transition-all duration-700 group-hover:scale-110 group-hover:rotate-1`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-500" />

                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                      <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
              <GridCircle className="-top-30 -left-20"></GridCircle>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full -z-10" />
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
