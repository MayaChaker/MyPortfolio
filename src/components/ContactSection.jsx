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
        <h2 id="contact-h">Get in <em>touch</em></h2>
        <p className="lead">For work, projects or a question about something I built, email is the fastest way to reach me.</p>
      </div>
      <dl className="channels">
        <div className="channel">
          <dt className="label">Email</dt>
          <dd><a className="value" id="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></dd>
          <dd>
            <button className="act" type="button" onClick={copyEmail}>{copied ? "Copied" : "Copy"}</button>
            <span className="visually-hidden" aria-live="polite">{copied ? "Email address copied" : ""}</span>
          </dd>
        </div>
        {profiles.map(([label, handle, href]) => (
          <div className="channel" key={label}>
            <dt className="label">{label}</dt>
            <dd><a className="value" href={href} target="_blank" rel="noreferrer">{handle}</a></dd>
            <dd><a className="act" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${label}`}>↗</a></dd>
          </div>
        ))}
        <div className="channel">
          <dt className="label">Based in</dt>
          <dd>{profile.location}</dd>
          <dd />
        </div>
      </dl>
    </section>
  );
}
