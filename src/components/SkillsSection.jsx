import { FiCode, FiDatabase, FiServer, FiTool } from "react-icons/fi";
import { capabilities } from "@Data/skills";
import MotionSection from "@ui/MotionSection";

const icons = { Frontend: FiCode, Backend: FiServer, Database: FiDatabase, Tools: FiTool };

export default function SkillsSection() {
  return (
    <MotionSection className="section section-tinted" id="skills" labelledBy="skills-title">
      <div className="shell">
        <div className="section-heading"><p className="section-number">02 / Capability index</p><h2 id="skills-title">A focused stack for complete products.</h2></div>
        <div className="capability-list">
          {capabilities.map((item, index) => {
            const Icon = icons[item.title];
            return <article className="capability" key={item.title}>
              <div className="capability-index"><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
              <div><h3>{item.title}</h3><p>{item.description}</p><ul aria-label={`${item.title} technologies`}>{item.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
            </article>;
          })}
        </div>
      </div>
    </MotionSection>
  );
}
