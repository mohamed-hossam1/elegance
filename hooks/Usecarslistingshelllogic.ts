"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/urls";
import type { CarFilters } from "@/types/car";
import { carBrands } from "@/lib/data/cars";

type FilterKey = Exclude<keyof CarFilters, "search" | "sortBy">;

interface FilterConfig {
  key: FilterKey;
  label: string;
  options: { label: string; value: string }[];
}

export const useCarsListingShellLogic = (filters: CarFilters) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsString = searchParams.toString();

  const updateQueryParam = (key: keyof CarFilters, value: string) => {
    const normalized = value ?? "";

    if (
      !normalized ||
      normalized === "all" ||
      (key === "sortBy" && normalized === "newest")
    ) {
      router.push(
        removeKeysFromUrlQuery({
          params: paramsString,
          keysToRemove: [key],
        }),
        { scroll: false },
      );
      return;
    }

    router.push(
      formUrlQuery({
        params: paramsString,
        key,
        value: normalized,
      }),
      { scroll: false },
    );
  };

  const updateFilter = (key: FilterKey, value: string) => {
    if (value === filters[key]) return;
    updateQueryParam(key, value);
  };
  const updateSort = (value: string) => {
    if (value === filters.sortBy) return;
    updateQueryParam("sortBy", value);
  };

  const handleClearFilters = () => {
    router.push(
      removeKeysFromUrlQuery({
        params: paramsString,
        keysToRemove: [
          "search",
          "brand",
          "condition",
          "transmission",
          "fuelType",
          "paymentType",
          "sortBy",
        ],
      }),
      { scroll: false },
    );
  };

  const filterConfigs: FilterConfig[] = [
    {
      key: "brand",
      label: "Brand",
      options: [
        { label: "All Brands", value: "all" },
        ...carBrands.map((brand) => ({
          label: brand,
          value: brand,
        })),
      ],
    },
    {
      key: "condition",
      label: "Condition",
      options: [
        { label: "All", value: "all" },
        { label: "New", value: "new" },
        { label: "Used", value: "used" },
      ],
    },
    {
      key: "transmission",
      label: "Transmission",
      options: [
        { label: "All", value: "all" },
        { label: "Automatic", value: "automatic" },
        { label: "Manual", value: "manual" },
      ],
    },
    {
      key: "fuelType",
      label: "Fuel Type",
      options: [
        { label: "All", value: "all" },
        { label: "Petrol", value: "petrol" },
        { label: "Diesel", value: "diesel" },
        { label: "Electric", value: "electric" },
        { label: "Hybrid", value: "hybrid" },
      ],
    },
    {
      key: "paymentType",
      label: "Payment Type",
      options: [
        { label: "All", value: "all" },
        { label: "Cash", value: "cash" },
        { label: "Installment", value: "installment" },
      ],
    },
  ];

  return {
    filterConfigs,
    handleClearFilters,
    updateFilter,
    updateSort,
  };
};
