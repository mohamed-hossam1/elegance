import type { Property, PropertyFilters } from "@/types/property";

export const DEFAULT_PROPERTY_FILTERS: PropertyFilters = {
  search: "",
  location: "all",
  propertyType: "all",
  bedrooms: "all",
  bathrooms: "all",
  paymentType: "all",
  sortBy: "newest",
};

export function getFiltersFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>,
): PropertyFilters {
  const getParam = (value: string | string[] | undefined): string =>
    typeof value === "string"
      ? value
      : Array.isArray(value)
        ? (value[0] ?? "")
        : "";

  return {
    search: getParam(searchParams.search).trim(),
    location:
      getParam(searchParams.location) || DEFAULT_PROPERTY_FILTERS.location,
    propertyType:
      getParam(searchParams.propertyType) ||
      DEFAULT_PROPERTY_FILTERS.propertyType,
    bedrooms:
      getParam(searchParams.bedrooms) || DEFAULT_PROPERTY_FILTERS.bedrooms,
    bathrooms:
      getParam(searchParams.bathrooms) || DEFAULT_PROPERTY_FILTERS.bathrooms,
    paymentType:
      getParam(searchParams.paymentType) ||
      DEFAULT_PROPERTY_FILTERS.paymentType,
    sortBy: getParam(searchParams.sortBy) || DEFAULT_PROPERTY_FILTERS.sortBy,
  };
}

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
): Property[] {
  return properties.filter((property) => {
    const searchTerm = filters.search.trim().toLowerCase();
    if (searchTerm) {
      const matchesTitle = property.title.toLowerCase().includes(searchTerm);
      const matchesLocation = property.location
        .toLowerCase()
        .includes(searchTerm);
      if (!matchesTitle && !matchesLocation) return false;
    }

    if (filters.location !== "all") {
      if (property.location !== filters.location) return false;
    }

    if (filters.propertyType !== "all") {
      if (property.type !== filters.propertyType) return false;
    }

    if (filters.bedrooms !== "all") {
      if (property.bedrooms < Number(filters.bedrooms)) return false;
    }

    if (filters.bathrooms !== "all") {
      if (property.bathrooms < Number(filters.bathrooms)) return false;
    }

    if (filters.paymentType !== "all") {
      if (
        property.paymentType !== filters.paymentType &&
        property.paymentType !== "both"
      ) {
        return false;
      }
    }

    return true;
  });
}

export function sortProperties(
  properties: Property[],
  sortBy: string = "newest",
): Property[] {
  const sorted = [...properties];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
    default:
      return sorted;
  }
}
