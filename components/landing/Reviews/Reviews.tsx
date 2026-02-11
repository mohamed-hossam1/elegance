"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import ReviewCard from "./ReviewCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  SlideFromRight,
  StaggerContainer,
  TapScale,
} from "@/lib/animations/components";

export default function Reviews() {
  const reviews = useMemo(
    () => [
      {
        name: "Sarah Thompson",
        role: "Property Owner",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        review:
          "Absolutely phenomenal experience! The team made buying my dream penthouse effortless. From the first consultation to getting the keys, everything was handled with professionalism and care.",
        category: "property" as const,
      },
      {
        name: "Michael Chen",
        role: "Luxury Car Enthusiast",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
        review:
          "I've purchased three luxury vehicles through Elegance, and each time has been flawless. Their expertise in the high-end car market is unmatched. Highly recommended!",
        category: "car" as const,
      },
      {
        name: "Jennifer Martinez",
        role: "Real Estate Investor",
        avatar: "https://i.pravatar.cc/150?img=45",
        rating: 5,
        review:
          "As an investor, I need transparency and efficiency. Elegance delivered both. They handled all the legal work and financing, allowing me to focus on what matters most.",
        category: "property" as const,
      },
      {
        name: "David Williams",
        role: "CEO & Entrepreneur",
        avatar: "https://i.pravatar.cc/150?img=56",
        rating: 5,
        review:
          "The level of service is exceptional. They understood exactly what I was looking for and found me the perfect estate. The entire process was seamless from start to finish.",
        category: "property" as const,
      },
      {
        name: "Emily Rodriguez",
        role: "Sports Car Collector",
        avatar: "https://i.pravatar.cc/150?img=64",
        rating: 5,
        review:
          "Finding rare luxury vehicles can be challenging, but Elegance made it look easy. Their network and expertise are truly world-class. Couldn't be happier with my purchase!",
        category: "car" as const,
      },
      {
        name: "Robert Anderson",
        role: "Beachfront Villa Owner",
        avatar: "https://i.pravatar.cc/150?img=68",
        rating: 5,
        review:
          "I was skeptical at first, but they exceeded every expectation. The consultation was thorough, the options were perfect, and the closing process was incredibly smooth. Five stars!",
        category: "property" as const,
      },
    ],
    [],
  );

  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 768)
        setItemsPerView(1); // mobile
      else if (window.innerWidth < 1024)
        setItemsPerView(2); // tablet
      else setItemsPerView(3); // desktop
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const totalPages = Math.max(1, reviews.length - itemsPerView + 1);

  const [currentIndex, setCurrentIndex] = useState(0);

  const safeIndex = Math.min(currentIndex, totalPages - 1);

  const visibleReviews = reviews.slice(safeIndex, safeIndex + itemsPerView);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="relative max-w-[1650px] mx-auto px-4 lg:px-[138px] py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/3 blur-3xl rounded-full -z-10" />
      <StaggerContainer className="mb-12 lg:mb-16">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            Don't just take our word for it. Hear from clients who've
            experienced
            <span className="text-primary font-semibold">
              {" "}
              the Elegance difference
            </span>
            —transforming dreams into reality, one key at a time.
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <div className="relative">
        <div
          className={`grid gap-6 mb-16 ${
            itemsPerView === 1
              ? "grid-cols-1"
              : itemsPerView === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {visibleReviews.map((review, index) => (
            <SlideFromRight key={`${review.name}-${safeIndex}-${index}`}>
              <ReviewCard {...review} delay={index * 0.1} />
            </SlideFromRight>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12">
          <TapScale>
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 hover:bg-primary hover:text-text transition-colors cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </TapScale>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  safeIndex === index
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50 w-2"
                }`}
                aria-label={`Go to reviews group ${index + 1}`}
              />
            ))}
          </div>

          <TapScale>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 hover:bg-primary hover:text-text transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </TapScale>
        </div>
      </div>
    </section>
  );
}
