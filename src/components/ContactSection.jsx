import { useState } from "react";
import { profile } from "@Data/profile";

const profiles = [
  ["LinkedIn", profile.linkedinHandle, profile.linkedin],
  ["GitHub", profile.githubHandle, profile.github],
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.getElementById("contact-email"));
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
    }
  };

  return (
    <section className="shell contact" id="contact" aria-labelledby="contact-h">
      <div>
        <h2 id="contact-h">Contact</h2>
        <p className="lead">{profile.availability} Email is the fastest way to reach me.</p>
      </div>
      <ul className="channels">
        <li className="channel">
          <span className="label">Email</span>
          <a className="value" id="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button className="act" type="button" onClick={copyEmail}>{copied ? "Copied" : "Copy"}</button>
          <span className="visually-hidden" aria-live="polite">{copied ? "Email address copied" : ""}</span>
        </li>
        {profiles.map(([label, handle, href]) => (
          <li key={label}>
            <a className="channel channel-link" href={href} target="_blank" rel="noreferrer">
              <span className="label">{label}</span>
              <span className="value">{handle}</span>
              <span className="act" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
