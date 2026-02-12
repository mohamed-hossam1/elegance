import { properties } from "@/lib/data/properties";
import type { PropertyFilters } from "@/types/property";

import { filterProperties, sortProperties } from "@/lib/property-helpers";
import PropertyCard from "./PropertyCard";

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
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-muted-foreground">
          <p className="text-lg">No properties match your filters.</p>
          <p className="mt-2 text-sm">Try adjusting your search criteria.</p>
        </div>
      )}
    </div>
  );
}
