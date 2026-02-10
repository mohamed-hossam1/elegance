import HeroSection from "@/components/landing/hero-section/HeroSection";
import HowWorks from "@/components/landing/how-works-section/HowWorks";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Reviews from "@/components/landing/Reviews/Reviews";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        <HowWorks />
        <Reviews />
        {/* <Navbar />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <ReelsSection />
        <FinalCTA />
        <Footer /> */}
      </main>
    </>
  );
}
