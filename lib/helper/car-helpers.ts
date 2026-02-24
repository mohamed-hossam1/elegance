import type { Car, CarFilters } from "@/types/car";

export const DEFAULT_CAR_FILTERS: CarFilters = {
  search: "",
  brand: "all",
  condition: "all",
  transmission: "all",
  fuelType: "all",
  paymentType: "all",
  sortBy: "newest",
};

export function getFiltersFromSearchParams(
  searchParams: Record<string, string | string[] | undefined>
): CarFilters {
  const getParam = (value: string | string[] | undefined): string =>
    typeof value === "string"
      ? value
      : Array.isArray(value)
        ? (value[0] ?? "")
        : "";

  return {
    search: getParam(searchParams.search).trim(),
    brand: getParam(searchParams.brand) || DEFAULT_CAR_FILTERS.brand,
    condition: getParam(searchParams.condition) || DEFAULT_CAR_FILTERS.condition,
    transmission:
      getParam(searchParams.transmission) || DEFAULT_CAR_FILTERS.transmission,
    fuelType: getParam(searchParams.fuelType) || DEFAULT_CAR_FILTERS.fuelType,
    paymentType:
      getParam(searchParams.paymentType) || DEFAULT_CAR_FILTERS.paymentType,
    sortBy: getParam(searchParams.sortBy) || DEFAULT_CAR_FILTERS.sortBy,
  };
}

export function filterCars(cars: Car[], filters: CarFilters): Car[] {
  return cars.filter((car) => {
    const searchTerm = filters.search.trim().toLowerCase();
    if (searchTerm) {
      const matchesTitle = car.title.toLowerCase().includes(searchTerm);
      const matchesBrand = car.brand.toLowerCase().includes(searchTerm);
      const matchesModel = car.model.toLowerCase().includes(searchTerm);
      if (!matchesTitle && !matchesBrand && !matchesModel) return false;
    }

    if (filters.brand !== "all") {
      if (car.brand !== filters.brand) return false;
    }

    if (filters.condition !== "all") {
      if (car.condition !== filters.condition) return false;
    }

    if (filters.transmission !== "all") {
      if (car.transmission !== filters.transmission) return false;
    }

    if (filters.fuelType !== "all") {
      if (car.fuelType !== filters.fuelType) return false;
    }

    if (filters.paymentType !== "all") {
      if (
        car.paymentType !== filters.paymentType &&
        car.paymentType !== "both"
      ) {
        return false;
      }
    }

    return true;
  });
}

export function sortCars(cars: Car[], sortBy: string = "newest"): Car[] {
  const sorted = [...cars];

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