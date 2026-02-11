"use client";

import { useState } from "react";
import FAQCard from "./FAQCard";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";


interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How long does the buying process typically take?",
      answer:
        "The timeline varies depending on your specific needs, but on average, our streamlined process takes 2-4 weeks for vehicles and 4-8 weeks for properties. We handle all paperwork, financing, and legal reviews to ensure the fastest possible completion while maintaining the highest standards of quality and transparency.",
    },
    {
      question: "Do you offer financing options for luxury properties?",
      answer:
        "Absolutely! We partner with premier financial institutions to offer competitive financing solutions tailored to luxury real estate. Our dedicated financing team works with you to secure the best rates and terms, whether you're purchasing a penthouse, beachfront villa, or investment property. We handle everything from pre-approval to closing.",
    },
    {
      question: "Can I trade in my current vehicle when purchasing a new one?",
      answer:
        "Yes, we accept trade-ins and offer highly competitive valuations. Our team of experts will assess your current vehicle and provide a fair market value that can be applied directly to your new purchase. We handle all the paperwork and make the transition seamless, so you can drive away in your new luxury vehicle worry-free.",
    },
    {
      question: "What areas do you serve for real estate?",
      answer:
        "We specialize in premium locations across major metropolitan areas, coastal regions, and exclusive neighborhoods. Our portfolio includes penthouses, beachfront properties, urban residences, and luxury estates. Whether you're looking for a primary residence, vacation home, or investment property, our team has extensive local market knowledge to find your perfect match.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="relative max-w-[1650px] mx-auto px-4 lg:px-[138px] py-16 lg:py-24 overflow-hidden ">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10 " />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-primary/3 blur-3xl rounded-full -z-10" />

      <StaggerContainer className="mb-12 lg:mb-16">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            Got questions? We've got answers. Find everything you need to know
            about our
            <span className="text-primary font-semibold">
              {" "}
              premium services
            </span>
            , process, and what makes us different.
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
          />
        ))}
      </div>
    </section>
  );
}
