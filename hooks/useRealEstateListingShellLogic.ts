"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/urls";
import type { PropertyFilters } from "@/types/property";
import { propertyLocations } from "@/lib/data/properties";

type FilterKey = Exclude<keyof PropertyFilters, "search" | "sortBy">;

interface FilterConfig {
  key: FilterKey;
  label: string;
  options: { label: string; value: string }[];
}

export const useRealEstateListingShellLogic = (filters: PropertyFilters) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsString = searchParams.toString();

  const updateQueryParam = (key: keyof PropertyFilters, value: string) => {
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
          "location",
          "propertyType",
          "bedrooms",
          "bathrooms",
          "paymentType",
          "sortBy",
        ],
      }),
      { scroll: false },
    );
  };

  const filterConfigs: FilterConfig[] = [
    {
      key: "location",
      label: "Location",
      options: [
        { label: "All Locations", value: "all" },
        ...propertyLocations.map((location) => ({
          label: location,
          value: location,
        })),
      ],
    },
    {
      key: "propertyType",
      label: "Property Type",
      options: [
        { label: "All Types", value: "all" },
        { label: "Apartment", value: "apartment" },
        { label: "Villa", value: "villa" },
      ],
    },
    {
      key: "bedrooms",
      label: "Bedrooms",
      options: [
        { label: "Any", value: "all" },
        ...[1, 2, 3, 4, 5, 6].map((number) => ({
          label: `${number}+`,
          value: String(number),
        })),
      ],
    },
    {
      key: "bathrooms",
      label: "Bathrooms",
      options: [
        { label: "Any", value: "all" },
        ...[1, 2, 3, 4, 5].map((number) => ({
          label: `${number}+`,
          value: String(number),
        })),
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
