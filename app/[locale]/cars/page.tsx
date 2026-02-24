import CarsList from "@/components/cars/CarsList";
import CarsListingShell from "@/components/cars/CarsListingShell";
import {
  AnimatedSection,
  AnimatedUnderline,
  StaggerContainer,
} from "@/lib/animations/components";
import { getFiltersFromSearchParams } from "@/lib/car-helpers";

interface CarsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function CarsPage({ searchParams }: CarsPageProps) {
  const params = await searchParams;
  const filters = getFiltersFromSearchParams(params);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16 pt-24 lg:pt-28">
        <StaggerContainer className="mb-8">
          <AnimatedSection className="relative inline-block">
            <h1 className="font-display z-40 text-3xl font-bold text-foreground md:text-4xl">
              Luxury Cars
            </h1>
            <AnimatedUnderline />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-2 text-muted-foreground">
              Discover premium vehicles handpicked for you.
            </p>
          </AnimatedSection>
        </StaggerContainer>

        <CarsListingShell filters={filters}>
          <CarsList filters={filters} />
        </CarsListingShell>
      </div>
    </div>
  );
}
