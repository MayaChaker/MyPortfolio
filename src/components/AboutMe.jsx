import MotionSection from "@ui/MotionSection";

export default function AboutMe() {
  return (
    <MotionSection className="section shell" id="about" labelledBy="about-title">
      <div className="section-heading"><p className="section-number">01 / About</p><h2 id="about-title">I work across the interface, API, and data model.</h2></div>
      <div className="about-grid">
        <p className="lead">I start with the workflow: who uses the product, what they need to do, and what the system must protect or automate.</p>
        <div className="prose">
          <p>I’m a Computer Science graduate with hands-on experience building complete web applications. My strongest work involves systems with real operational complexity—authentication, user roles, scheduling, records, billing, and data-heavy interfaces.</p>
          <p>I value straightforward architecture, maintainable components, and interfaces that make the next action clear. I’m looking for a team where I can contribute across the stack, learn through production work, and keep raising the quality of what I ship.</p>
        </div>
      </div>
      <div className="profile-index" aria-label="Professional profile">
        <div><span>Background</span><strong>Computer Science graduate</strong></div>
        <div><span>Practice</span><strong>Frontend + backend systems</strong></div>
        <div><span>Principle</span><strong>Workflow before interface</strong></div>
        <div><span>Focus</span><strong>Clear, maintainable products</strong></div>
      </div>
    </MotionSection>
  );
}
