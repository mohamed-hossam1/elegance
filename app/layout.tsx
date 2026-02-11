import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/providers/theme-provider";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://elegance-luxury.com"),

  title: {
    default:
      "Elegance | Luxury Real Estate & Premium Cars in Egypt | Buy Your Dream Property & Vehicle",
    template: "%s | Elegance Luxury",
  },

  description:
    "Discover Egypt's finest luxury real estate properties and premium cars with Elegance. Expert guidance for buying penthouses, villas, beachfront properties, and high-end vehicles. Free consultation, transparent deals, and seamless transactions in Cairo, North Coast, and across Egypt.",

  keywords: [
    "luxury real estate Egypt",
    "premium cars Egypt",
    "buy penthouse Cairo",
    "luxury villas Egypt",
    "beachfront properties North Coast",
    "high-end real estate",
    "luxury car dealership Egypt",
    "premium property investment",
    "elegance real estate",
    "luxury homes Cairo",
    "exotic cars Egypt",
    "real estate consultant Egypt",
    "property buying services",
    "luxury apartment Cairo",
    "premium real estate broker",
    "high-end property deals",
    "luxury lifestyle Egypt",
    "investment properties Egypt",
    "exclusive real estate",
    "premium vehicle sales",
  ],

  authors: [{ name: "Elegance Luxury" }],

  creator: "Elegance Luxury Real Estate & Cars",

  publisher: "Elegance",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: "https://elegance-luxury.com",
    siteName: "Elegance Luxury",
    title: "Elegance | Premium Luxury Real Estate & Cars in Egypt",
    description:
      "Your trusted partner for luxury real estate and premium vehicles in Egypt. Browse exclusive penthouses, villas, and high-end cars. Expert consultation, transparent pricing, seamless transactions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elegance Luxury Real Estate & Premium Cars",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Elegance Luxury Logo",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elegance | Luxury Real Estate & Premium Cars Egypt",
    description:
      "Discover Egypt's finest luxury properties and premium vehicles. Expert guidance, transparent deals, seamless experience.",
    images: ["/twitter-image.jpg"],
    creator: "@eleganceluxury",
    site: "@eleganceluxury",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


  category: "Real Estate & Automotive",

  alternates: {
    canonical: "https://elegance-luxury.com",
    languages: {
      "en-US": "https://elegance-luxury.com",
      "ar-EG": "https://elegance-luxury.com/ar",
    },
  },

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Elegance",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="#D19F1F"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#D19F1F"
          media="(prefers-color-scheme: dark)"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Elegance Luxury Real Estate & Cars",
              description:
                "Premium luxury real estate and high-end vehicle dealership in Egypt",
              url: "https://elegance-luxury.com",
              logo: "https://elegance-luxury.com/logo.png",
              image: "https://elegance-luxury.com/og-image.jpg",
              telephone: "+20-XXX-XXX-XXXX",
              email: "info@elegance-luxury.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Cairo",
                addressRegion: "Cairo",
                postalCode: "XXXXX",
                addressCountry: "EG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.0444",
                longitude: "31.2357",
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Cairo",
                },
                {
                  "@type": "City",
                  name: "Alexandria",
                },
                {
                  "@type": "City",
                  name: "North Coast",
                },
              ],
              priceRange: "$$$$$",
              sameAs: [
                "https://facebook.com/eleganceluxury",
                "https://instagram.com/eleganceluxury",
                "https://twitter.com/eleganceluxury",
                "https://linkedin.com/company/eleganceluxury",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "250",
                bestRating: "5",
                worstRating: "1",
              },
              openingHours: "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elegance Luxury",
              alternateName: "Elegance Real Estate & Cars",
              url: "https://elegance-luxury.com",
              logo: "https://elegance-luxury.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+20-XXX-XXX-XXXX",
                contactType: "customer service",
                areaServed: "EG",
                availableLanguage: ["English", "Arabic"],
              },
              sameAs: [
                "https://facebook.com/eleganceluxury",
                "https://instagram.com/eleganceluxury",
                "https://twitter.com/eleganceluxury",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Elegance Luxury",
              url: "https://elegance-luxury.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://elegance-luxury.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
