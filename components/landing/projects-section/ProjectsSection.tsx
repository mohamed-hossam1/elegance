import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
  TapScale,
} from "@/lib/animations/components";
import { Project } from "@/types/global";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  projects: Project[];
}

const ProjectsSection = ({ projects, className = "" }: Props) => {
  return (
    <section
      id="projects"
      className={cn(className, "max-w-412.5 mx-auto px-4 lg:px-34.5  lg:py-24")}
    >
      <StaggerContainer className="mb-12 lg:mb-16">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            Our <span className="text-primary">Exclusive</span> Projects
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            Discover premium properties and luxury vehicles curated for the most
            discerning clients
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 md:auto-rows-[253px]">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            className={idx === 0 ? "md:row-span-2" : ""}
            imageStyle={idx === 0 ? "object-fill" : ""}
            delay={idx * 0.1}
          />
        ))}
      </div>

      <AnimatedSection className="mt-12 lg:mt-16 text-center">
        <TapScale>
          <Button
            className="primary-gradient group px-8 py-6 text-base relative overflow-hidden"
            size="lg"
            asChild
          >
            <Link href={ROUTES.REAL_ESTATE} className="gap-3">
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </Button>
        </TapScale>
      </AnimatedSection>
    </section>
  );
};

export default ProjectsSection;
