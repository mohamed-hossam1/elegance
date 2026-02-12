"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_PROPERTY_FILTERS } from "@/lib/property-helpers";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/urls";
import type { PropertyFilters } from "@/types/property";
import { propertyLocations } from "@/lib/data/properties";

type FilterKey = Exclude<keyof PropertyFilters, "search" | "sortBy">;

interface FilterConfig {
  key: FilterKey;
  label: string;
  options: { label: string; value: string }[];
}

const SEARCH_DEBOUNCE_DELAY = 700;

export const useRealEstateListingShellLogic = (filters: PropertyFilters) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchDebounceTimeout = useRef<number | undefined>(undefined);

  const clearPendingSearch = useCallback(() => {
    if (searchDebounceTimeout.current !== undefined) {
      window.clearTimeout(searchDebounceTimeout.current);
      searchDebounceTimeout.current = undefined;
    }
  }, []);

  const setQueryParams = useCallback(
    (updates: Partial<PropertyFilters>) => {
      const currentParams = searchParams.toString();
      let nextParams = currentParams;
      let nextUrl = currentParams
        ? `${window.location.pathname}?${currentParams}`
        : window.location.pathname;

      Object.entries(updates).forEach(([key, value]) => {
        const normalized = value ?? "";
        if (
          !normalized ||
          normalized === "all" ||
          (key === "sortBy" && normalized === "newest")
        ) {
          nextUrl = removeKeysFromUrlQuery({
            params: nextParams,
            keysToRemove: [key],
          });
          nextParams = new URL(nextUrl, window.location.origin).search.slice(1);
          return;
        }
        nextUrl = formUrlQuery({
          params: nextParams,
          key,
          value: normalized,
        });
        nextParams = new URL(nextUrl, window.location.origin).search.slice(1);
      });

      router.replace(nextUrl, {
        scroll: false,
      });
    },
    [router, searchParams],
  );

  const updateFilter = useCallback(
    (key: FilterKey, value: string) => {
      if (value === filters[key]) return;
      setQueryParams({ [key]: value });
    },
    [filters, setQueryParams],
  );

  const handleSearchSubmit = useCallback(
    (value?: string) => {
      const trimmedValue = (
        value ?? searchInputRef.current?.value ?? ""
      ).trim();
      if (trimmedValue === filters.search.trim()) return;
      setQueryParams({ search: trimmedValue });
    },
    [filters.search, setQueryParams],
  );

  const handleClearFilters = useCallback(() => {
    setQueryParams(DEFAULT_PROPERTY_FILTERS);
  }, [setQueryParams]);

  const runSearch = useCallback(
    (value?: string) => {
      clearPendingSearch();
      handleSearchSubmit(value);
    },
    [clearPendingSearch, handleSearchSubmit],
  );

  const scheduleLiveSearch = useCallback(
    (value: string) => {
      clearPendingSearch();
      searchDebounceTimeout.current = window.setTimeout(() => {
        handleSearchSubmit(value);
        searchDebounceTimeout.current = undefined;
      }, SEARCH_DEBOUNCE_DELAY);
    },
    [clearPendingSearch, handleSearchSubmit],
  );

  useEffect(() => clearPendingSearch, [clearPendingSearch]);

  const filterConfigs = useMemo<FilterConfig[]>(
    () => [
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
    ],
    [propertyLocations],
  );

  return {
    filterConfigs,
    handleClearFilters,
    runSearch,
    scheduleLiveSearch,
    searchInputRef,
    updateFilter,
    setQueryParams,
  };
};
