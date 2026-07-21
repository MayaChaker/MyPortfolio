import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import MotionSection from "@ui/MotionSection";

export default function ContactSection() {
  return (
    <MotionSection className="contact section shell" id="contact" labelledBy="contact-title">
      <p className="section-number">05 / Contact</p>
      <h2 id="contact-title">Let’s build something clear, useful, and lasting.</h2>
      <p>I’m open to full-stack roles and thoughtful product work. Tell me about the team, the product, or the problem you’re solving.</p>
      <a className="email-link" data-magnetic href="mailto:mayachaker06@gmail.com"><span>Start a conversation</span><FiMail /></a>
      <div className="contact-links" aria-label="Professional profiles">
        <a href="https://github.com/MayaChaker" target="_blank" rel="noreferrer"><FiGithub /> GitHub <FiArrowUpRight /></a>
        <a href="https://www.linkedin.com/in/maya-chaker-9025a7387" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn <FiArrowUpRight /></a>
      </div>
    </MotionSection>
  );
}
