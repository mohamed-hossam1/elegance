import FAQ from "@/components/landing/faq-section/FAQ";
import Footer from "@/components/landing/footer-section/Footer";
import HeroSection from "@/components/landing/hero-section/HeroSection";
import HowWorks from "@/components/landing/how-works-section/HowWorks";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Reels from "@/components/landing/reels-section/Reels";
import ReviewCard from "@/components/landing/Reviews/ReviewCard";
import Reviews from "@/components/landing/Reviews/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Elegance | Buy Luxury Real Estate & Premium Cars in Egypt | Free Consultation",
  description:
    "Egypt's #1 luxury real estate and premium car marketplace. Browse 500+ exclusive penthouses, villas, beachfront properties & high-end vehicles. Expert guidance, transparent deals, zero hidden fees. Book your free consultation today in Cairo, Alexandria & North Coast.",

  keywords: [
    "buy luxury property Egypt",
    "premium cars for sale Egypt",
    "Cairo penthouses for sale",
    "luxury villas Egypt",
    "beachfront property North Coast",
    "real estate Cairo",
    "luxury cars Cairo",
    "property investment Egypt",
    "high-end real estate broker",
    "premium vehicle dealership Egypt",
  ],

  openGraph: {
    title: "Elegance | Egypt's Premier Luxury Real Estate & Car Marketplace",
    description:
      "500+ exclusive properties & premium vehicles. Expert consultation, transparent pricing, seamless transactions. Your dream lifestyle starts here.",
    url: "https://elegance-luxury.com",
    siteName: "Elegance Luxury",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Elegance Luxury Properties and Cars",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elegance | Luxury Real Estate & Premium Cars Egypt",
    description:
      "500+ exclusive properties & premium vehicles. Expert consultation, transparent pricing.",
    images: ["/home-twitter.jpg"],
  },

  alternates: {
    canonical: "https://elegance-luxury.com",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Product",
                    name: "Luxury Real Estate",
                    description:
                      "Premium properties including penthouses, villas, and beachfront estates",
                    url: "https://elegance-luxury.com/real-estate",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Product",
                    name: "Premium Vehicles",
                    description: "High-end luxury cars and exotic vehicles",
                    url: "https://elegance-luxury.com/cars",
                  },
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does Elegance help me buy luxury property in Egypt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Elegance provides end-to-end luxury real estate services including property search, legal paperwork, financing assistance, and expert consultation. We handle everything from browsing to getting the keys, making the process simple and transparent.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What areas in Egypt does Elegance cover for real estate?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We cover all major luxury real estate markets in Egypt including Cairo penthouses, North Coast beachfront properties, Alexandria villas, New Cairo estates, and premium developments across Egypt.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer financing for luxury properties and cars?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we assist with financing arrangements for both luxury properties and premium vehicles. Our team handles all paperwork and works with trusted financial partners to secure the best terms.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is the consultation really free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We offer completely free consultations with no obligations. Our experts will discuss your needs, show you properties or vehicles that match your criteria, and guide you through the entire process at no initial cost.",
                  },
                },
              ],
            }),
          }}
        />

        <HeroSection />
        <ProjectsSection />
        <HowWorks />
        <Reviews />
        <FAQ />
        <Reels />
        {/* <Footer/> */}
      </main>
    </>
  );
}
