"use client";

import { useState } from "react";
import FAQCard from "./FAQCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import { FaqItem } from "@/types/config";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  faqs: FaqItem[];
  className?: string;
}

export default function FAQ({ faqs }: Props) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const locale = useLocale();
  const t = useTranslations("faq");

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="relative max-w-412.5 mx-auto px-4 lg:px-34.5 py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/3 blur-3xl rounded-full -z-10" />

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
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto overflow-hidden">
        {faqs.map((faq, index) => (
          <FAQCard
            key={index}
            faq={faq}
            index={index}
            isOpen={expandedFaq === index}
            onToggle={() => toggleFaq(index)}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}