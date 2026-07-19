import { projects } from "@Data/projects";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import MotionSection from "@ui/MotionSection";

function SystemVisual({ project, index }) {
  return (
    <div className={`system-visual visual-${project.visual}`} data-tilt role="img" aria-label={`${project.title} feature and architecture overview`}>
      <div className="visual-head"><span>SYS.0{index + 1}</span><span>{project.status}</span></div>
      <div className="visual-canvas">
        <span className="coordinate">X/{index + 12} — Y/{index + 48}</span>
        <div className="node node-primary"><small>Product</small><strong>{project.visualLabel || project.title.split(" ")[0]}</strong></div>
        {project.features.map((feature, featureIndex) => <div className={`node node-${featureIndex + 1}`} key={feature}><small>0{featureIndex + 1}</small><span>{feature}</span></div>)}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50 L18 22 M50 50 L81 20 M50 50 L20 80 M50 50 L83 78" /></svg>
      </div>
      <div className="visual-foot"><span>{project.stack.slice(0, 3).join(" / ")}</span><span>Architecture map</span></div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <MotionSection className="section projects-section" id="projects" labelledBy="projects-title">
      <div className="section-heading shell"><p className="section-number">03 / Selected projects</p><h2 id="projects-title">Applications and the decisions behind them.</h2></div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <article className="project-spread shell" key={project.title}>
            <div className="project-copy">
              <p className="project-kicker">Case 0{index + 1} · {project.role}</p>
              <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
              <dl className="project-facts"><div><dt>Goal</dt><dd>{project.context}</dd></div><div><dt>Contribution</dt><dd>{project.contribution}</dd></div><div><dt>Challenge / response</dt><dd>{project.challenge} {project.decisions[0]}</dd></div></dl>
              <p className="outcome"><strong>Result</strong>{project.outcome}</p>
              <ul className="tech-list" aria-label={`${project.title} technology stack`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="project-links"><a data-magnetic href={project.liveLink} target="_blank" rel="noreferrer">Open live project <FiArrowUpRight /></a><a data-magnetic href={project.repoLink} target="_blank" rel="noreferrer">Review source <FiGithub /></a></div>
            </div>
            <SystemVisual project={project} index={index} />
          </article>
        ))}
      </div>
    </MotionSection>
  );
}
