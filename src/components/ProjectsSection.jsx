import { projects } from "@Data/projects";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import MotionSection from "@ui/MotionSection";

function SystemVisual({ project, index }) {
  return (
    <a className={`system-visual visual-${project.visual}`} href={project.liveLink} target="_blank" rel="noreferrer" aria-label={`Open live ${project.title} project`}>
      <div className="visual-head"><span>CASE / 0{index + 1}</span><span>{project.status}</span></div>
      <div className="visual-canvas">
        <span className="coordinate">PRODUCT SYSTEM · {project.role}</span>
        <div className="node node-primary"><small>Product</small><strong>{project.visualLabel || project.title}</strong></div>
        {project.features.map((feature, featureIndex) => <div className={`node node-${featureIndex + 1}`} key={feature}><small>0{featureIndex + 1}</small><span>{feature}</span></div>)}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50 L18 22 M50 50 L81 20 M50 50 L20 80 M50 50 L83 78" /></svg>
      </div>
      <div className="visual-foot"><span>{project.stack.slice(0, 3).join(" / ")}</span><span>View live ↗</span></div>
    </a>
  );
}

export default function ProjectsSection() {
  return (
    <MotionSection className="section projects-section" id="projects" labelledBy="projects-title">
      <div className="section-heading shell"><p className="section-number">03 / Selected projects</p><h2 id="projects-title">Products, systems, and the thinking behind them.</h2></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-spread shell" key={project.title}>
            <SystemVisual project={project} index={index} />
            <div className="project-copy">
              <p className="project-kicker">Case 0{index + 1} · {project.role}</p>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <dl className="project-facts">
                <div><dt>Built</dt><dd>{project.contribution}</dd></div>
                <div><dt>Result</dt><dd>{project.outcome}</dd></div>
              </dl>
              <ul className="tech-list" aria-label={`${project.title} technology stack`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-links">
                <a className="project-action primary-action" href={project.liveLink} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight /></a>
                <a className="project-action" href={project.repoLink} target="_blank" rel="noreferrer">GitHub <FiGithub /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
