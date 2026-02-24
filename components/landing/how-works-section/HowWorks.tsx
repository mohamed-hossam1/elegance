import { Calendar, FileCheck, Key, Search } from "lucide-react";
import StepCard from "./StepCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import CTA from "./CTA";
import { getTranslations } from "next-intl/server";

export default async function HowWorks() {
  const t = await getTranslations("howWorks");

  const steps = [
    {
      icon: Search,
      number: 1,
      title: t("step1Title"),
      description: t("step1Desc"),
    },
    {
      icon: Calendar,
      number: 2,
      title: t("step2Title"),
      description: t("step2Desc"),
    },
    {
      icon: FileCheck,
      number: 3,
      title: t("step3Title"),
      description: t("step3Desc"),
    },
    {
      icon: Key,
      number: 4,
      title: t("step4Title"),
      description: t("step4Desc"),
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
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            {t("subtitle")}
            <span className="text-primary font-semibold"> {t("subtitleHighlight")}</span>
            {t("subtitleEnd")}
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