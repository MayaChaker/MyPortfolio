import { capabilities } from "@Data/skills";

export default function SkillsSection({ role }) {
  const ordered = [...capabilities].sort((a, b) => Number(b.focus === role) - Number(a.focus === role));

  return (
    <section className="shell section" aria-labelledby="tools-h">
      <div className="section-head"><h2 id="tools-h">Tools I <em>work with</em></h2></div>
      <div className="tools">
        {ordered.map((group) => (
          <div key={group.title}>
            <h3 className="label">{group.title}</h3>
            <ul>
              {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
