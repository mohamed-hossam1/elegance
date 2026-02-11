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

const ProjectsSection = () => {
  const projects = [
    {
      href: ROUTES.CARS,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a6cd0fb96a7f17b3dab7d62d9b9298999486650d?width=445",
      title: "Luxury Vehicles Collection",
      activities: "250+ Premium Cars",
      className: "md:col-span-2",
    },
    {
      href: ROUTES.REAL_ESTATE,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/286851a30b70f308f785c88d9fcf47c2c8415f8c?width=636",
      title: "Elite Properties",
      activities: "180+ Exclusive Estates",
      className: "",
    },
    {
      href: ROUTES.REAL_ESTATE,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/de5ee789e574af49452eaed2707f48bcfaf47d2d?width=445",
      title: "Penthouse Suites",
      activities: "95+ Luxury Penthouses",
      className: "",
    },
    {
      href: ROUTES.REAL_ESTATE,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/665a45f089407c63902c17a17c78dc285f7e71f0?width=445",
      title: "Beachfront Villas",
      activities: "120+ Coastal Properties",
      className: "",
    },
    {
      href: ROUTES.REAL_ESTATE,
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b3660a04e8fd438e22b71718f1eeace74e7cad89?width=445",
      title: "Urban Residences",
      activities: "200+ City Apartments",
      className: "",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-[1650px] mx-auto px-4 lg:px-[138px]  lg:py-24"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} delay={idx * 0.1} />
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
