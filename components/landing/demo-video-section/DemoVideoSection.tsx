import { Play } from "lucide-react";
import {
  AnimatedSection,
  AnimatedUnderline,
  ScaleIn,
  StaggerContainer,
} from "@/lib/animations/components";
import { getTranslations } from "next-intl/server";

interface Props {
  videoSrc?: string;
  thumbnailSrc?: string;
}

const DemoVideoSection = async ({ videoSrc, thumbnailSrc }: Props) => {
  const t = await getTranslations("demoVideo");

  return (
    <section
      id="demo-video"
      className="relative max-w-412.5 mx-auto px-4 lg:px-34.5 py-16 lg:py-24 overflow-hidden"
    >
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-12 h-48 w-48 rounded-full bg-primary/10 blur-3xl -z-10" />

      <StaggerContainer className="mb-10 lg:mb-14">
        <AnimatedSection className="relative inline-block">
          <h2 className="text-[27px] lg:text-5xl font-bold mb-3 relative">
            {t("title")} <span className="text-primary">{t("titleHighlight")}</span>
          </h2>
          <AnimatedUnderline />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-text-secondary md:text-lg mt-6 max-w-2xl">
            {t("subtitle")}
          </p>
        </AnimatedSection>
      </StaggerContainer>

      <ScaleIn className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br from-primary/10 via-background to-background shadow-xl">
            <div className="pt-[56.25%]" />

            {videoSrc ? (
              <iframe
                src={videoSrc}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={t("title")}
              />
            ) : thumbnailSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumbnailSrc}
                alt={t("title")}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground text-sm">{t("noVideo")}</p>
              </div>
            )}

            {!videoSrc && (
              <>
                <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/0 to-black/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-md">
                    <Play className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </ScaleIn>
    </section>
  );
};

export default DemoVideoSection;