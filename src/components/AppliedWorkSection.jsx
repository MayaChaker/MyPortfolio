import { appliedWork } from "@Data/clientProjects";
import MotionSection from "@ui/MotionSection";

export default function AppliedWorkSection() {
  return (
    <MotionSection className="section section-tinted" id="work" labelledBy="work-title">
      <div className="shell">
        <div className="section-heading">
          <p className="section-number">04 / Applied work</p>
          <h2 id="work-title">Additional work across operations, commerce, and APIs.</h2>
          <p className="heading-copy">Public details are limited, so this section describes only the systems and technical scope that can be shared.</p>
        </div>
        <div className="work-grid">
          {appliedWork.map((item) => (
            <article key={item.title}>
              <p className="work-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="work-stack">{item.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
