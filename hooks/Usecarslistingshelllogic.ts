"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_CAR_FILTERS } from "@/lib/car-helpers";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/urls";
import type { CarFilters } from "@/types/car";
import { carBrands } from "@/lib/data/cars";

type FilterKey = Exclude<keyof CarFilters, "search" | "sortBy">;

interface FilterConfig {
  key: FilterKey;
  label: string;
  options: { label: string; value: string }[];
}

const SEARCH_DEBOUNCE_DELAY = 700;

export const useCarsListingShellLogic = (filters: CarFilters) => {
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
    (updates: Partial<CarFilters>) => {
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
    [router, searchParams]
  );

  const updateFilter = useCallback(
    (key: FilterKey, value: string) => {
      if (value === filters[key]) return;
      setQueryParams({ [key]: value });
    },
    [filters, setQueryParams]
  );

  const handleSearchSubmit = useCallback(
    (value?: string) => {
      const trimmedValue = (
        value ?? searchInputRef.current?.value ?? ""
      ).trim();
      if (trimmedValue === filters.search.trim()) return;
      setQueryParams({ search: trimmedValue });
    },
    [filters.search, setQueryParams]
  );

  const handleClearFilters = useCallback(() => {
    setQueryParams(DEFAULT_CAR_FILTERS);
  }, [setQueryParams]);

  const runSearch = useCallback(
    (value?: string) => {
      clearPendingSearch();
      handleSearchSubmit(value);
    },
    [clearPendingSearch, handleSearchSubmit]
  );

  const scheduleLiveSearch = useCallback(
    (value: string) => {
      clearPendingSearch();
      searchDebounceTimeout.current = window.setTimeout(() => {
        handleSearchSubmit(value);
        searchDebounceTimeout.current = undefined;
      }, SEARCH_DEBOUNCE_DELAY);
    },
    [clearPendingSearch, handleSearchSubmit]
  );

  useEffect(() => clearPendingSearch, [clearPendingSearch]);

  const filterConfigs = useMemo<FilterConfig[]>(
    () => [
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
    ],
    []
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