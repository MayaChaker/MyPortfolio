import { FiArrowUpRight, FiMail } from "react-icons/fi";
import MotionSection from "@ui/MotionSection";

export default function ContactSection() {
  return (
    <MotionSection className="contact section shell" id="contact" labelledBy="contact-title">
      <p className="section-number">05 / Contact</p><h2 id="contact-title">Looking for a full-stack developer?</h2>
      <p>I’m open to developer roles and project work. Email me with the role, product, or technical problem you’d like to discuss.</p>
      <a className="email-link" data-magnetic href="mailto:mayachaker06@gmail.com">mayachaker06@gmail.com <FiMail /></a>
      <div className="contact-links"><a href="https://github.com/MayaChaker" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight /></a><a href="https://www.linkedin.com/in/maya-chaker-9025a7387" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a></div>
    </MotionSection>
  );
}
