import FAQ from "@/components/landing/faq-section/FAQ";
import Footer from "@/components/landing/footer-section/Footer";
import HeroSection from "@/components/landing/hero-section/HeroSection";
import HowWorks from "@/components/landing/how-works-section/HowWorks";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Reels from "@/components/landing/reels-section/Reels";
import ReviewCard from "@/components/landing/Reviews/ReviewCard";
import Reviews from "@/components/landing/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <HowWorks />
        <Reviews />
        <FAQ />
        <Reels/>
        {/* <Footer/> */}
      </main>
    </>
  );
}
