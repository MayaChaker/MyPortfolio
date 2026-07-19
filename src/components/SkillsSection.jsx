import { capabilities } from "@Data/skills";
import MotionSection from "@ui/MotionSection";

export default function SkillsSection() {
  return (
    <MotionSection className="section section-tinted" id="skills" labelledBy="skills-title">
      <div className="shell">
        <div className="section-heading"><p className="section-number">02 / Capability index</p><h2 id="skills-title">The stack follows the system—not the other way around.</h2></div>
        <div className="capability-list">
          {capabilities.map((item, index) => (
            <article className="capability" key={item.title}>
              <span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.description}</p><ul aria-label={`${item.title} technologies`}>{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
