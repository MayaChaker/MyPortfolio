import { m as Motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import HeroSystemVisual from "@components/HeroSystemVisual";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const enter = (delay) => reduceMotion ? {} : {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.58, delay, ease: /** @type {"easeOut"} */ ("easeOut") },
  };

  return (
    <Motion.section className="hero" id="top" aria-labelledby="hero-title" initial={false}>
      <div className="hero-blueprint shell" aria-hidden="true" />
      <div className="hero-main shell">
        <div className="hero-copy">
          <Motion.p className="eyebrow" {...enter(0.06)}><span className="status-dot" /> Open to full-stack opportunities</Motion.p>
          <Motion.h1 id="hero-title" {...enter(0.18)}>
            <span className="hero-name-label">Maya Chaker</span>
            Building thoughtful products from <span className="hero-emphasis">interface to data.</span>
          </Motion.h1>
          <Motion.div className="hero-brief" {...enter(0.38)}>
            <p>Full-stack developer creating responsive React interfaces, authenticated Node.js APIs, and relational systems built around real workflows.</p>
          </Motion.div>
          <Motion.div className="actions hero-actions" {...enter(0.52)}>
            <a className="button primary" data-magnetic href="#projects">View selected work <FiArrowDownRight /></a>
            <a className="button secondary" href="/MayaChaker_CV PDF.pdf" download>Résumé <FiDownload /></a>
          </Motion.div>
        </div>

        <Motion.div className="hero-visual-slot" {...enter(0.7)}>
          <HeroSystemVisual />
        </Motion.div>

        <Motion.aside className="hero-meta" aria-label="Professional details" {...enter(0.84)}>
          <span className="hero-meta-location">Based in Lebanon</span>
          <span className="hero-meta-education">Computer Science graduate</span>
          <a className="hero-scroll-cue" href="#about"><span>Scroll to explore</span><i aria-hidden="true" /></a>
          <span className="hero-meta-stack">Frontend · Backend · Data</span>
          <div className="hero-socials">
            <a href="https://github.com/MayaChaker" target="_blank" rel="noreferrer" aria-label="Maya Chaker on GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/maya-chaker-9025a7387" target="_blank" rel="noreferrer" aria-label="Maya Chaker on LinkedIn"><FiLinkedin /></a>
          </div>
        </Motion.aside>
      </div>
    </Motion.section>
  );
}
