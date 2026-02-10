import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

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
      className="max-w-[1650px] mx-auto px-4 lg:px-[138px] py-16 lg:py-24"
    >
      <motion.div
        className="mb-12 lg:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="relative inline-block">
          <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/20 blur-xl rounded-full" />
          <h2 className="text-3xl lg:text-5xl font-bold mb-3 relative">
            Our <span className="text-primary">Exclusive</span> Projects
          </h2>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-text-secondary text-lg max-w-2xl"
        >
          Discover premium properties and luxury vehicles curated for the most
          discerning clients
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-6 h-[1px] w-24 bg-gradient-to-r from-primary to-transparent"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} delay={idx * 0.1} />
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              duration: 0.6,
            },
          },
        }}
        className="mt-12 lg:mt-16 text-center"
      >
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
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
