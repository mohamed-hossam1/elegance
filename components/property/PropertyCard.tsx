import { MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@/types/property";
import Link from "next/link";
import Image from "next/image";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="group overflow-hidden rounded-lg border border-primary/10 bg-card transition-all duration-300 hover:border-primary/30 hover:gold-border-glow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="rounded bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground capitalize">
            {property.type}
          </span>
          {property.paymentType !== "cash" && (
            <span className="rounded bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
              Installment
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <p className="font-display text-lg font-bold text-primary">
          {formatPrice(property.price)}
        </p>
        <h3 className="mt-1 font-display text-base font-semibold text-foreground">
          {property.title}
        </h3>

        <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {property.location}
        </div>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Bed className="h-3.5 w-3.5" /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <Bath className="h-3.5 w-3.5" /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <Maximize className="h-3.5 w-3.5" /> {property.area} m²
          </span>
        </div>

        <Button className="mt-4 w-full bg-card text-text border-primary border" asChild>
          <Link href={`/real-estate/${property.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}
