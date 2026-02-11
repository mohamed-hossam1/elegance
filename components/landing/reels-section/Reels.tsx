"use client";

import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import ReelCard from "./ReelCard";

export default function Reels() {
  const reels = [
    {
      id: 1,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/f4fefc7ce8b05834947204ef5a3b9c85674c169f?width=355",
      duration: "1:20",
      size: "tall",
    },
    {
      id: 2,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/113da702de984fea41142e1eac10ae8ab5d5c067?width=356",
      duration: "0:58",
      size: "small",
    },
    {
      id: 3,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/9d94abaddb05d482a14423e86adac4e20254dcf9?width=355",
      duration: "1:45",
      size: "small",
    },
    {
      id: 4,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/db7bda0375b2640886db2a6e37d3e6749d01568d?width=357",
      duration: "2:10",
      size: "tall",
    },
    {
      id: 5,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/176469e329ab9426c5527b67b0cb3b0239fd5e51?width=355",
      duration: "1:30",
      size: "small",
    },
    {
      id: 6,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ce3ed4b9a5405599d8093b4ff1d2ce1c77483ebd?width=356",
      duration: "0:45",
      size: "small",
    },
    {
      id: 7,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d8cbd2d3c3b31cd159576f851cd545587284df1b?width=357",
      duration: "1:55",
      size: "tall",
    },
  ];

  return (
    <section className="relative max-w-[1650px] mx-auto px-4 lg:px-[138px] py-20 lg:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-primary/3 blur-3xl rounded-full -z-10" />
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
