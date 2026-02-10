import HeroSection from "@/components/landing/hero-section/HeroSection";
import ProjectsSection from "@/components/landing/projects-section/ProjectsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProjectsSection />
        
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
