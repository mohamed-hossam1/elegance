import FAQ from "@/components/landing/faq-section/FAQ";
import HeroSection from "@/components/landing/hero-section/HeroSection";
import HowWorks from "@/components/landing/how-works-section/HowWorks";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Reels from "@/components/landing/reels-section/Reels";
import Reviews from "@/components/landing/Reviews/Reviews";
import DemoVideoSection from "@/components/landing/demo-video-section/DemoVideoSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">


        <HeroSection />
        <ProjectsSection />
        <DemoVideoSection />
        <HowWorks />
        <Reviews />
        <FAQ />
        <Reels />
        {/* <Footer/> */}
      </main>
    </>
  );
}
