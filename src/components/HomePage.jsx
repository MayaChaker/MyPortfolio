import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@components/HeroSection";
import ProjectsSection from "@components/ProjectsSection";
import ExperienceSection from "@components/ExperienceSection";
import SkillsSection from "@components/SkillsSection";
import TestimonialsSection from "@components/TestimonialsSection";
import ContactSection from "@components/ContactSection";
import { getRole, profile } from "@Data/profile";

export default function HomePage() {
  const { search, hash } = useLocation();
  const role = getRole(search);

  useEffect(() => {
    document.title = `${profile.name} | Full-stack developer`;
  }, []);

  // Coming back from a case study with /#work: scroll once the page has rendered.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [hash]);

  return (
    <>
      <HeroSection role={role} />
      <ProjectsSection role={role} />
      <ExperienceSection />
      <SkillsSection role={role} />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
