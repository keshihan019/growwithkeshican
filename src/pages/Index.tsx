import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { BadgesSection } from "@/components/BadgesSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <AchievementsSection />
      <CertificationsSection />
      <BadgesSection />
      <CompetenciesSection />
      <ServicesSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;
