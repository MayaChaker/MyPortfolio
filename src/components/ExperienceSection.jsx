import { experience } from "@Data/experience";

export default function ExperienceSection() {
  return (
    <section className="shell section" id="experience" aria-labelledby="experience-h">
      <div className="section-head"><h2 id="experience-h">Experience <em>&amp;</em> studies</h2></div>
      <div className="timeline">
        {experience.map((item) => (
          <article className="entry" key={`${item.title}-${item.when}`}>
            <p className="when">{item.when}<span className="label">{item.label}</span></p>
            <div>
              <h3>{item.title}</h3>
              {item.org && <p className="org">{item.org}</p>}
              {item.description && <p>{item.description}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
