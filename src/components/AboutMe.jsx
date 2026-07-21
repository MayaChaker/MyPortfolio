import MotionSection from "@ui/MotionSection";

export default function AboutMe() {
  return (
    <MotionSection className="section shell" id="about" labelledBy="about-title">
      <div className="section-heading"><p className="section-number">01 / About</p><h2 id="about-title">I work across the interface, API, and data model.</h2></div>
      <div className="about-grid">
        <p className="lead">I start with the workflow: who uses the product, what they need to do, and what the system must protect or automate.</p>
        <div className="prose">
          <p>I’m a Computer Science graduate with hands-on experience building complete web applications.</p>
          <p>My strongest work involves systems with real operational complexity: authentication, user roles, scheduling, records, billing, and data-heavy interfaces.</p>
          <p>I value straightforward architecture, maintainable components, and interfaces that make the next action clear.</p>
        </div>
      </div>
      <dl className="profile-index" aria-label="Portfolio facts">
        <div><dt>Selected work</dt><dd><strong>3</strong><span>Public case studies</span></dd></div>
        <div><dt>Core stack</dt><dd><strong>React</strong><span>Node.js + relational data</span></dd></div>
        <div><dt>Development focus</dt><dd><strong>Full-stack</strong><span>Product systems</span></dd></div>
      </dl>
    </MotionSection>
  );
}
