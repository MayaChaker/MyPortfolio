import { Link } from "react-router-dom";
import { projects } from "@Data/projects";
import Phones from "@components/Phones";
import Shot from "@components/Shot";

export default function ProjectsSection({ role }) {
  const ordered = [...projects].sort((a, b) => Number(b.focus.includes(role)) - Number(a.focus.includes(role)));

  return (
    <section className="shell section" id="work" aria-labelledby="work-h">
      <div className="section-head"><h2 id="work-h">Selected work</h2></div>
      <div className="projects">
        {ordered.map((project) => (
          <article className="project" key={project.slug}>
            <Link className={project.phones ? "shot has-phones" : "shot"} to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
              {project.phones ? <Phones shots={project.phones} /> : <Shot src={project.cover} />}
            </Link>
            <div>
              <p className="label kind">{project.kind}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="dash-list">
                {project.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <p className="stack-line">{project.stack.slice(0, 4).join(" · ")}</p>
              <div className="btns">
                <Link className="btn solid" to={`/projects/${project.slug}`}>Case study</Link>
                <a className="btn" href={project.liveLink} target="_blank" rel="noreferrer">Live site ↗</a>
                <a className="btn" href={project.repoLink} target="_blank" rel="noreferrer">Code ↗</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
