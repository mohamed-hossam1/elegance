import { properties } from "@/lib/data/properties";
import type { PropertyFilters } from "@/types/property";

import { filterProperties, sortProperties } from "@/lib/property-helpers";
import PropertyCard from "./PropertyCard";
import { StaggerContainer } from "@/lib/animations/components";

export default async function PropertyList({
  filters,
}: {
  filters: PropertyFilters;
}) {
  // fetch properties here

  let filtered = filterProperties(properties, filters);
  filtered = sortProperties(filtered, filters.sortBy);

  return (
    <div className="flex-1">
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length} {filtered.length === 1 ? "property" : "properties"}{" "}
        found
      </p>

      {filtered.length > 0 ? (
        <StaggerContainer staggerDelay={0.1} childrenDelay={0.1}>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((property, index) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </StaggerContainer>
      ) : (
        <div className="py-20 text-center text-muted-foreground">
          <p className="text-lg">No properties match your filters.</p>
          <p className="mt-2 text-sm">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}
