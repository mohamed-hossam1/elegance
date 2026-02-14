import { cars } from "@/lib/data/cars";
import type { CarFilters } from "@/types/car";
import { filterCars, sortCars } from "@/lib/car-helpers";
import { StaggerContainer } from "@/lib/animations/components";
import CarCard from "./Carcard";

export default async function CarsList({ filters }: { filters: CarFilters }) {
  let filtered = filterCars(cars, filters);
  filtered = sortCars(filtered, filters.sortBy);

  return (
    <div className="flex-1">
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "car" : "cars"} found
      </p>

      {filtered.length > 0 ? (
        <StaggerContainer staggerDelay={0.1} childrenDelay={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((car, index) => (
              <CarCard key={car.id} car={car} delay={index * 0.1} />
            ))}
          </div>
        </StaggerContainer>
      ) : (
        <div className="py-20 text-center text-muted-foreground">
          <p className="text-lg">No cars match your filters.</p>
          <p className="mt-2 text-sm">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}