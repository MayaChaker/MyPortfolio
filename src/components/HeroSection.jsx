import { FiArrowDownRight, FiGithub, FiLinkedin } from "react-icons/fi";
import MotionSection from "@ui/MotionSection";

export default function HeroSection() {
  return (
    <MotionSection className="hero" id="top" labelledBy="hero-title">
      <div className="hero-grid shell" aria-hidden="true" />
      <div className="hero-name" aria-hidden="true"><span>MAYA</span><span>CHAKER</span></div>
      <div className="hero-main shell">
        <div className="hero-intro">
          <p className="eyebrow"><span className="status-dot" /> Open to full-stack opportunities</p>
          <h1 id="hero-title"><span>Maya Chaker.</span> Full-stack developer building React interfaces, Node.js APIs, and relational data systems.</h1>
        </div>
        <div className="hero-brief">
          <p>I build both sides of web applications, from responsive product interfaces to authenticated APIs and SQL data models.</p>
        <div className="actions">
            <a className="button primary" data-magnetic href="#projects">Selected work <FiArrowDownRight /></a>
            <a className="text-link" data-magnetic href="/MayaChaker_CV PDF.pdf" download>Résumé ↗</a>
          </div>
        </div>
        <aside className="hero-meta" aria-label="Professional details">
          <span>Lebanon</span><span>Computer Science graduate</span><span>Full-stack development</span>
          <a href="https://github.com/MayaChaker" target="_blank" rel="noreferrer" aria-label="Maya Chaker on GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/maya-chaker-9025a7387" target="_blank" rel="noreferrer" aria-label="Maya Chaker on LinkedIn"><FiLinkedin /></a>
        </aside>
      </div>
      <a className="hero-scroll" href="#about">Scroll to explore <span>↓</span></a>
    </MotionSection>
  );
}
