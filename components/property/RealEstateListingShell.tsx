"use client";

import { useMemo, useState, type ReactNode } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { PropertyFilters } from "@/types/property";
import { useRealEstateListingShellLogic } from "../../hooks/useRealEstateListingShellLogic";

interface RealEstateListingShellProps {
  filters: PropertyFilters;
  children: ReactNode;
}

const RealEstateListingShell = ({
  filters,
  children,
}: RealEstateListingShellProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    filterConfigs,
    handleClearFilters,
    runSearch,
    scheduleLiveSearch,
    searchInputRef,
    setQueryParams,
    updateFilter,
  } = useRealEstateListingShellLogic(filters);

  const filterContent = useMemo(
    () => (
      <div className="space-y-5">
        {filterConfigs.map((config) => (
          <div key={config.key} className="mx-3 ">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary">
              {config.label}
            </label>
            <Select
              value={filters[config.key]}
              onValueChange={(value) => updateFilter(config.key, value)}
            >
              <SelectTrigger className="border-primary/20 bg-secondary w-full cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {config.options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>
    ),
    [filterConfigs, filters, updateFilter],
  );

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-md flex-1  gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              key={filters.search}
              ref={searchInputRef}
              placeholder="Search properties..."
              defaultValue={filters.search}
              onChange={(event) =>
                scheduleLiveSearch(event.currentTarget.value)
              }
              onKeyDown={(event) => {
                if (event.key !== "Enter") return;
                event.preventDefault();
                runSearch(event.currentTarget.value);
              }}
              className="border-primary/20 bg-secondary pl-10"
              maxLength={100}
            />
          </div>

        </div>
        <div className="flex gap-3 justify-center items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 cursor-pointer"
            onClick={handleClearFilters}
          >
            <span >Clear Filters</span>
            
          </Button>
          <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button size="sm" className="gap-2 " >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 overflow-y-auto border-primary/10 bg-card"
            >
              <SheetHeader>
                <SheetTitle className="text-foreground">Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6">{filterContent}</div>
            </SheetContent>
          </Sheet>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => {
              if (value === filters.sortBy) return;
              setQueryParams({ sortBy: value });
            }}
          >
            <SelectTrigger className="w-44 border-primary/20 bg-secondary cursor-pointer">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg border border-primary/10 bg-card p-5">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Filters
            </h3>
            {filterContent}
          </div>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default RealEstateListingShell;
