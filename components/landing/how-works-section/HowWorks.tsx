import {
  Calendar,
  FileCheck,
  Key,
  Search,
} from "lucide-react";
import StepCard from "./StepCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import CTA from "./CTA";


export default function HowWorks() {
  const steps = [
    {
      icon: Search,
      number: 1,
      title: "Browse & Select",
      description:
        "Explore our curated collection of properties and cars. Filter by budget, location, or features to find your perfect match.",
    },
    {
      icon: Calendar,
      number: 2,
      title: "Book Consultation",
      description:
        "Schedule a free call with your dedicated advisor. Get personalized recommendations tailored to your needs and preferences.",
    },
    {
      icon: FileCheck,
      number: 3,
      title: "We Handle Everything",
      description:
        "From paperwork to financing to legal review—sit back while we do the heavy lifting. Your peace of mind is our priority.",
    },
    {
      icon: Key,
      number: 4,
      title: "Get Your Keys",
      description:
        "Move into your new home or drive away in your new car. Simple as that. Welcome to the Elegance family.",
    },
  ];

  return (
    <section
      id="how"
      className="relative max-w-412.5 mx-auto px-4 lg:px-34.5 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/3 blur-3xl rounded-full -z-10" />
      <StaggerContainer className="mb-12 lg:mb-16">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            How It <span className="text-primary">Works</span>
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            Most people think buying property or a car is complicated.
            <span className="text-primary font-semibold">
              {" "}
              We made it stupid simple
            </span>
            —just 4 easy steps to your dream purchase.
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <div className="flex flex-col gap-6 mb-16">
        {steps.map((step, index) => (
          <StepCard key={step.number} {...step} delay={index * 0.15} />
        ))}
      </div>
      <CTA />
    </section>
  );
}
