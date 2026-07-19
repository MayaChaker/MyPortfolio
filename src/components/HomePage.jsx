import Navbar from "@components/Navbar";
import HeroSection from "@components/HeroSection";
import AboutMe from "@components/AboutMe";
import SkillsSection from "@components/SkillsSection";
import ProjectsSection from "@components/ProjectsSection";
import AppliedWorkSection from "@components/AppliedWorkSection";
import ContactSection from "@components/ContactSection";
import Footer from "@components/Footer";
import InteractionLayer from "@components/InteractionLayer";
import { LazyMotion, domAnimation } from "framer-motion";

export default function HomePage() {
  return (
    <LazyMotion features={domAnimation} strict>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <InteractionLayer />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <ProjectsSection />
        <AppliedWorkSection />
        <ContactSection />
      </main>
      <Footer />
    </LazyMotion>
  );
}
