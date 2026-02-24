import PropertyList from "@/components/property/PropertyList";
import RealEstateListingShell from "@/components/property/RealEstateListingShell";
import { AnimatedSection, AnimatedUnderline, StaggerContainer } from "@/lib/animations/components";
import { getFiltersFromSearchParams } from "@/lib/property-helpers";

interface RealEstatePageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function RealEstatePage({
  searchParams,
}: RealEstatePageProps) {
  const params = await searchParams;
  const filters = getFiltersFromSearchParams(params);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pb-16 pt-24 lg:pt-28">
        <StaggerContainer className="mb-8">
          <AnimatedSection className="relative inline-block">
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Real Estate
            </h1>
            <AnimatedUnderline />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="mt-2 text-muted-foreground">
              Discover premium properties handpicked for you.
            </p>
          </AnimatedSection>
        </StaggerContainer>

        <RealEstateListingShell filters={filters}>
          <PropertyList filters={filters} />
        </RealEstateListingShell>
      </div>
    </div>
  );
}
