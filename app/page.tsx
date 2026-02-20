import FAQ from "@/components/landing/faq-section/FAQ";
import HeroSection from "@/components/landing/hero-section/HeroSection";
import HowWorks from "@/components/landing/how-works-section/HowWorks";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Reels from "@/components/landing/reels-section/Reels";
import Reviews from "@/components/landing/Reviews/Reviews";
import DemoVideoSection from "@/components/landing/demo-video-section/DemoVideoSection";
import { readConfig } from "@/lib/config";
export default function Home() {
  const config = readConfig();
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection projects={config.projects} />
        <DemoVideoSection />
        <HowWorks />
        <Reviews reviews={config.testimonials} />
        <FAQ faqs={config.faqs} />
        <Reels reels={config.reels} />
        {/* <Footer/> */}
      </main>
    </>
  );
}
