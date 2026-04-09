import React from "react";
import HeroSection from "@components/HeroSection";
import AboutMe from "@components/AboutMe";
import SkillsSection from "@components/SkillsSection";
import ProjectsSection from "@components/ProjectsSection";
import RealClientWork from "@components/RealClientWork";
import ContactSection from "@components/ContactSection";
import Footer from "@components/Footer";

function HomePage() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about" className="scroll-mt-28">
        <AboutMe />
      </section>
      <section id="skills" className="scroll-mt-28">
        <SkillsSection />
      </section>
      <section id="projects" className="scroll-mt-28">
        <ProjectsSection />
      </section>
      <section id="clients" className="scroll-mt-28">
        <RealClientWork />
      </section>
      <section id="contact" className="scroll-mt-28">
        <ContactSection />
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
