"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Gauge,
  Fuel,
  Cog,
  CreditCard,
  Shield,
  Star,
  ArrowLeft,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LeadForm from "@/components/LeadForm";
import ImageGallery from "@/components/ImageGallery";
import { cars } from "@/lib/data/cars";
import { useParams } from "next/navigation";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">
            Car Not Found
          </h1>
          <Button className="mt-4 bg-primary " asChild>
            <Link href="/cars">Browse Cars</Link>
          </Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(price);

  const similar = cars
    .filter((c) => c.id !== car.id && c.brand === car.brand)
    .slice(0, 3);
  const fallbackSimilar =
    similar.length > 0
      ? similar
      : cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="container mx-auto px-4 pt-24 lg:pt-28">
        <Link
          href="/cars"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Cars
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <ImageGallery
              images={car.images}
              alt={car.title}
              carInfo={{
                title: car.title,
                price: car.price,
                year: car.year,
                mileage: car.mileage,
                fuelType: car.fuelType,
                transmission: car.transmission,
              }}
            />

            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-primary/20 bg-secondary px-3 py-1 text-sm text-secondary-foreground capitalize">
                  {car.condition}
                </span>
                <span className="rounded-full border border-primary/20 bg-secondary px-3 py-1 text-sm text-secondary-foreground capitalize">
                  {car.fuelType}
                </span>
                <span className="rounded-full border border-primary/20 bg-secondary px-3 py-1 text-sm text-secondary-foreground capitalize">
                  {car.transmission}
                </span>
              </div>

              <h1 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
                {car.title}
              </h1>

              <div className="mt-4 font-display text-3xl font-bold text-primary">
                {formatPrice(car.price)}
              </div>
              {car.installmentPlan && (
                <p className="mt-1 text-sm text-muted-foreground">
                  Starting from {car.installmentPlan.monthly}/month ·{" "}
                  {car.installmentPlan.downPayment} down payment ·{" "}
                  {car.installmentPlan.years} years
                </p>
              )}

              {/* Key specs */}
              <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-primary/10 bg-card p-4 sm:grid-cols-4">
                <div className="text-center">
                  <Calendar className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {car.year}
                  </p>
                  <p className="text-xs text-muted-foreground">Year</p>
                </div>
                <div className="text-center">
                  <Gauge className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    {car.mileage.toLocaleString()} km
                  </p>
                  <p className="text-xs text-muted-foreground">Mileage</p>
                </div>
                <div className="text-center">
                  <Fuel className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-sm font-semibold text-foreground capitalize">
                    {car.fuelType}
                  </p>
                  <p className="text-xs text-muted-foreground">Fuel</p>
                </div>
                <div className="text-center">
                  <Cog className="mx-auto h-5 w-5 text-primary" />
                  <p className="mt-1 text-sm font-semibold text-foreground capitalize">
                    {car.transmission}
                  </p>
                  <p className="text-xs text-muted-foreground">Transmission</p>
                </div>
              </div>
            </motion.div>

            {/* Overview */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                Overview
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {car.description}
              </p>
            </section>

            {/* Full Specs */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                Specifications
              </h2>
              <div className="mt-4 grid gap-2">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between rounded border border-primary/10 bg-card px-4 py-2.5"
                  >
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                Features
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                {car.features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded border border-primary/10 bg-card px-3 py-2 text-sm text-secondary-foreground"
                  >
                    <Shield className="h-4 w-4 text-primary" /> {f}
                  </div>
                ))}
              </div>
            </section>

            {/* Payment Plan */}
            {car.installmentPlan && (
              <section>
                <h2 className="font-display text-xl font-bold text-foreground">
                  Financing Plan
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg border border-primary/10 bg-card p-4 text-center">
                    <CreditCard className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-lg font-bold text-foreground">
                      {car.installmentPlan.downPayment}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Down Payment
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/10 bg-card p-4 text-center">
                    <Calendar className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-lg font-bold text-foreground">
                      {car.installmentPlan.monthly}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Monthly Payment
                    </p>
                  </div>
                  <div className="rounded-lg border border-primary/10 bg-card p-4 text-center">
                    <Calendar className="mx-auto h-6 w-6 text-primary" />
                    <p className="mt-2 text-lg font-bold text-foreground">
                      {car.installmentPlan.years} Years
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Installment Period
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* Testimonial */}
            <section className="rounded-lg border border-primary/10 bg-card p-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-3 text-sm italic text-muted-foreground">
                "Bought my dream car through ELEGANCE. The financing was
                transparent and the delivery was impeccable. Highly
                recommended!"
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                — Sara M., Proud Owner
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">
                FAQ
              </h2>
              <Accordion type="single" collapsible className="mt-4 space-y-2">
                {[
                  {
                    q: "Is this car under warranty?",
                    a: "New cars come with full manufacturer warranty. Used cars may include extended warranty options — ask our team for details.",
                  },
                  {
                    q: "Can I test drive before buying?",
                    a: "Yes! Simply request an offer through the form and we'll arrange a test drive at our showroom.",
                  },
                  {
                    q: "Do you offer trade-in?",
                    a: "We evaluate trade-in options on a case-by-case basis. Contact us to discuss your current vehicle.",
                  },
                ].map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="rounded-lg border border-primary/10 bg-card px-4"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="hidden space-y-3 md:block">
                <Button
                  className="w-full gap-2 bg-primary"
                  size="lg"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </Button>
              </div>
              <LeadForm type="car" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
