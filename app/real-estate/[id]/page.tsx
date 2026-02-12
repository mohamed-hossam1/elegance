import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Bed, Bath, Maximize, CalendarDays, ArrowLeft } from "lucide-react";
import { properties } from "@/lib/data/properties";
import { Button } from "@/components/ui/button";

interface PropertyDetailsPageProps {
  params: Promise<{ id: string }>;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
    maximumFractionDigits: 0,
  }).format(price);

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;
  const property = properties.find((entry) => entry.id === id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16 pt-24 lg:pt-28">
        <Button asChild variant="ghost" className="mb-6 gap-2">
          <Link href="/real-estate">
            <ArrowLeft className="h-4 w-4" />
            Back to listings
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="overflow-hidden rounded-lg border border-primary/10 bg-card">
            <div className="relative aspect-[4/3]">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid gap-3 border-t border-primary/10 p-4 sm:grid-cols-2">
              {property.images.map((image, index) => (
                <div
                  key={`${property.id}-image-${index}`}
                  className="relative aspect-[4/3] overflow-hidden rounded-md"
                >
                  <Image
                    src={image}
                    alt={`${property.title} image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-lg border border-primary/10 bg-card p-6">
            <div>
              <p className="font-display text-2xl font-bold text-primary">
                {formatPrice(property.price)}
              </p>
              <h1 className="mt-1 font-display text-3xl font-bold text-foreground">
                {property.title}
              </h1>
              <p className="mt-2 flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {property.location}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2 rounded-md bg-secondary p-3">
                <Bed className="h-4 w-4 text-primary" />
                {property.bedrooms} Bedrooms
              </p>
              <p className="flex items-center gap-2 rounded-md bg-secondary p-3">
                <Bath className="h-4 w-4 text-primary" />
                {property.bathrooms} Bathrooms
              </p>
              <p className="flex items-center gap-2 rounded-md bg-secondary p-3">
                <Maximize className="h-4 w-4 text-primary" />
                {property.area} m²
              </p>
              <p className="flex items-center gap-2 rounded-md bg-secondary p-3">
                <CalendarDays className="h-4 w-4 text-primary" />
                Delivery: {property.deliveryDate}
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Description
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {property.description}
              </p>
            </div>

            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Features
              </h2>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={`${property.id}-${feature}`}
                    className="rounded-md bg-secondary px-3 py-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {property.installmentPlan && (
              <div>
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Installment Plan
                </h2>
                <div className="mt-3 grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                  <p className="rounded-md bg-secondary p-3">
                    Down Payment: {property.installmentPlan.downPayment}
                  </p>
                  <p className="rounded-md bg-secondary p-3">
                    Monthly: {property.installmentPlan.monthly}
                  </p>
                  <p className="rounded-md bg-secondary p-3">
                    Years: {property.installmentPlan.years}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
