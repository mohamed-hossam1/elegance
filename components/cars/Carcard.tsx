import { Fuel, Gauge, Calendar, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Car } from "@/types/car";
import Link from "next/link";
import Image from "next/image";

interface CarCardProps {
  car: Car;
  delay?: number;
}

export default function CarCard({ car, delay = 0 }: CarCardProps) {
  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={car.image}
          alt={car.title}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        <div className="absolute left-3 top-3 flex gap-2 z-10">
          <span className="rounded-lg bg-primary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-primary-foreground capitalize border border-primary/20">
            {car.condition}
          </span>
          {car.paymentType !== "cash" && (
            <span className="rounded-lg bg-secondary/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-secondary-foreground border border-border/50">
              Installment
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative p-5">
        <p className="font-display text-xl font-bold text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
          {formatPrice(car.price)}
        </p>

        <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {car.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
          {car.brand} • {car.model}
        </p>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 px-2 py-2 transition-all duration-300 group-hover:bg-secondary">
            <Fuel className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium capitalize">
              {car.fuelType}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 px-2 py-2 transition-all duration-300 group-hover:bg-secondary">
            <Cog className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium capitalize">
              {car.transmission}
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 px-2 py-2 transition-all duration-300 group-hover:bg-secondary">
            <Gauge className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium">
              {car.mileage.toLocaleString()} km
            </span>
          </div>
        </div>

        <div className="h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left mb-4" />

        <Button
          className="w-full bg-card hover:bg-primary/10 text-foreground hover:text-primary border-primary/50 hover:border-primary border relative overflow-hidden group/btn"
          asChild
        >
          <Link href={`/cars/${car.id}`} className="relative z-10">
            <span>View Details</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          </Link>
        </Button>
      </div>

      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
