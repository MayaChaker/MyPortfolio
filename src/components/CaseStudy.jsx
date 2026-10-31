import { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { getProject, projects } from "@Data/projects";
import { profile } from "@Data/profile";
import Shot from "@components/Shot";

function Block({ title, children }) {
  return (
    <section className="block">
      <h2>{title}</h2>
      <div className="content">{children}</div>
    </section>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const { search } = useLocation();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) document.title = `${project.title} | ${profile.name}`;
  }, [project]);

  if (!project) return <Navigate to="/" replace />;

  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const fileLink = (path) => `${project.repoLink}/blob/HEAD/${path}`;

  return (
    <article aria-labelledby="cs-title">
      <div className="shell">
        <header className="cs-head">
          <div>
            <Link className="back label" to={{ pathname: "/", search, hash: "work" }}>← All projects</Link>
            <p className="label kind">Case study · {project.kind}</p>
            <h1 id="cs-title">{project.title}</h1>
            <p className="summary">{project.summary}</p>
            <div className="btns">
              <a className="btn solid" href={project.liveLink} target="_blank" rel="noreferrer">Live site ↗</a>
              <a className="btn" href={project.repoLink} target="_blank" rel="noreferrer">Source code ↗</a>
            </div>
          </div>
          <div className="shot">
            {project.video ? (
              <video src={project.video} poster={project.cover} controls preload="none" playsInline>
                <track kind="captions" />
              </video>
            ) : (
              <Shot src={project.cover} alt={`${project.title} screenshot`} sizes="(max-width: 860px) 100vw, 640px" eager />
            )}
          </div>
        </header>

        <dl className="stats" style={/** @type {import("react").CSSProperties} */ ({ "--cols": project.stats.length })}>
          {project.stats.map(([value, label]) => (
            <div key={label}><dt className="label">{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>

        <Block title="Overview">
          {project.overview.map((text) => <p key={text}>{text}</p>)}
          {project.note && <p className="note">{project.note}</p>}
        </Block>

        {project.demo && (
          <Block title={<>Try <em>it</em></>}>
            <p>{project.demo.note}</p>
            <table className="demo">
              <thead><tr><th className="label" scope="col">Role</th><th className="label" scope="col">Username</th></tr></thead>
              <tbody>
                {project.demo.accounts.map(([role, user]) => (
                  <tr key={role}><td>{role}</td><td><code>{user}</code></td></tr>
                ))}
              </tbody>
            </table>
            <p>Password for every account: <code>{project.demo.password}</code></p>
            <div className="btns"><a className="btn" href={project.demo.loginLink} target="_blank" rel="noreferrer">Open the login page ↗</a></div>
          </Block>
        )}

        <Block title="Features">
          <div className={project.features.length > 1 ? "grid2" : undefined}>
            {project.features.map((group) => (
              <div key={group.title}>
                {project.features.length > 1 && <h3 className="label">{group.title}</h3>}
                <ul className="dash-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Block>

        <Block title={<>How it's <em>built</em></>}>
          {project.architecture.map((text) => <p key={text}>{text}</p>)}
          <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </Block>

        <Block title="Decisions">
          <dl className="decisions">
            {project.decisions.map(([title, text]) => (
              <div key={title}><dt>{title}</dt><dd>{text}</dd></div>
            ))}
          </dl>
        </Block>

        {project.testing && (
          <Block title="Testing"><p>{project.testing}</p></Block>
        )}
      </div>

      {(project.gallery.length > 0 || project.mobile) && (
        <section className="screens" aria-labelledby="screens-h">
          <div className="shell">
            <h2 id="screens-h">Screens</h2>
            <div className="gallery">
              {project.gallery.map((shot) => (
                <figure key={shot.src}>
                  <Shot src={shot.src} alt={shot.caption} sizes="(max-width: 860px) 100vw, 640px" />
                  <figcaption>{shot.caption}</figcaption>
                </figure>
              ))}
              {project.mobile && (
                <figure className="phone">
                  <img src={project.mobile.src} alt={project.mobile.caption} loading="lazy" decoding="async" width="390" height="844" />
                  <figcaption>{project.mobile.caption}</figcaption>
                </figure>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="shell">
        <Block title={<>Where to look in the <em>code</em></>}>
          <ul className="files">
            {project.code.map(([label, path]) => (
              <li key={path}>
                <a href={fileLink(path)} target="_blank" rel="noreferrer">
                  <span>{label}</span>
                  <code>{path}</code>
                  <i aria-hidden="true">↗</i>
                </a>
              </li>
            ))}
          </ul>
        </Block>

        {project.next && (
          <Block title={<>What's <em>next</em></>}>
            <ul className="dash-list">
              {project.next.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </Block>
        )}

        <Link className="next" to={`/projects/${next.slug}${search}`}>
          <span className="label">Next project</span>
          <strong>{next.title} <em>→</em></strong>
        </Link>
      </div>
    </article>
  );
}
