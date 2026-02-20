"use client";

import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import ReelCard from "./ReelCard";
import { ReelItem } from "@/types/global";

interface Props {
  reels: ReelItem[];
  className?: string;
}

export default function Reels({ reels }: Props) {
  return (
    <section className="relative max-w-412.5 mx-auto px-4 lg:px-34.5 py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-125 h-125 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-150 h-150 bg-primary/3 blur-3xl rounded-full -z-10" />
      <StaggerContainer className="mb-12 lg:mb-16">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            Featured <span className="text-primary">Reels</span>
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            Experience luxury through our lens.
            <span className="text-primary font-semibold">
              {" "}
              Premium properties and vehicles
            </span>{" "}
            showcased in stunning detail.
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <div className="flex justify-center gap-6 items-center flex-wrap lg:flex-nowrap">
        <AnimatedSection delay={0.1}>
          <ReelCard reel={reels[0]} tall />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          <AnimatedSection delay={0.2}>
            <ReelCard reel={reels[1]} />
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <ReelCard reel={reels[2]} />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <ReelCard reel={reels[3]} tall />
        </AnimatedSection>

        <div className="flex flex-col gap-6">
          <AnimatedSection delay={0.35}>
            <ReelCard reel={reels[4]} />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <ReelCard reel={reels[5]} />
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.45}>
          <ReelCard reel={reels[6]} tall />
        </AnimatedSection>
      </div>
    </section>
  );
}
