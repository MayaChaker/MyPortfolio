import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["about", "skills", "projects", "work", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    links.forEach((id) => { const section = document.getElementById(id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const available = document.documentElement.scrollHeight - window.innerHeight;
        const progress = available > 0 ? window.scrollY / available : 0;
        progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
        frame = undefined;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Maya Chaker, home">{"<Maya />"}</a>
        <button ref={menuButtonRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <FiX /> : <FiMenu />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="nav-links">
          {links.map((link) => (
            <a key={link} className={active === link ? "active" : ""} href={`#${link}`} aria-current={active === link ? "location" : undefined} onClick={() => setOpen(false)}>{link === "work" ? "Applied work" : link}</a>
          ))}
          <a className="nav-cta" data-magnetic href="mailto:mayachaker06@gmail.com">Let’s talk</a>
        </div>
      </nav>
    </header>
  );
}
