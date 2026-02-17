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
import type { CarFilters } from "@/types/car";
import { AnimatedSection, StaggerContainer } from "@/lib/animations/components";
import { useCarsListingShellLogic } from "@/hooks/Usecarslistingshelllogic";

interface CarsListingShellProps {
  filters: CarFilters;
  children: ReactNode;
}

const CarsListingShell = ({ filters, children }: CarsListingShellProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    filterConfigs,
    handleClearFilters,
    runSearch,
    scheduleLiveSearch,
    searchInputRef,
    setQueryParams,
    updateFilter,
  } = useCarsListingShellLogic(filters);

  const filterContent = useMemo(
    () => (
      <div className="space-y-5">
        {filterConfigs.map((config, index) => (
          <AnimatedSection
            key={config.key}
            delay={index * 0.05}
            className="mx-3"
          >
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-primary">
              {config.label}
            </label>
            <Select
              value={filters[config.key]}
              onValueChange={(value) => updateFilter(config.key, value)}
            >
              <SelectTrigger className="border-primary/20 bg-secondary w-full cursor-pointer hover:border-primary/40 transition-colors duration-300">
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
          </AnimatedSection>
        ))}
      </div>
    ),
    [filterConfigs, filters, updateFilter],
  );

  return (
    <>
      <StaggerContainer className="mb-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <AnimatedSection delay={0.1} className="flex max-w-md flex-1 gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-300 peer-focus:text-primary" />
              <Input
                key={filters.search}
                ref={searchInputRef}
                placeholder="Search cars..."
                defaultValue={filters.search}
                onChange={(event) =>
                  scheduleLiveSearch(event.currentTarget.value)
                }
                onKeyDown={(event) => {
                  if (event.key !== "Enter") return;
                  event.preventDefault();
                  runSearch(event.currentTarget.value);
                }}
                className="border-primary/20 bg-secondary pl-10 peer focus:border-primary/40 transition-all duration-300"
                maxLength={100}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="flex gap-3 justify-center items-center"
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="h-9 cursor-pointer hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300"
              onClick={handleClearFilters}
            >
              <span>Clear Filters</span>
            </Button>

            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  size="sm"
                  className="gap-2 primary-gradient hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                >
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
              <SelectTrigger className="w-44 border-primary/20 bg-secondary cursor-pointer hover:border-primary/40 transition-colors duration-300">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </AnimatedSection>
        </div>
      </StaggerContainer>

      <div className="flex gap-8">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 rounded-lg border border-primary/10 bg-card p-5 hover:border-primary/20 transition-colors duration-300">
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

export default CarsListingShell;
