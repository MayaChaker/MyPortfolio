import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["about", "skills", "projects", "work", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const progressRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-28% 0px -62%", threshold: 0 },
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
        progressRef.current?.style.setProperty("transform", `scaleX(${available > 0 ? window.scrollY / available : 0})`);
        frame = undefined;
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => { window.removeEventListener("scroll", updateProgress); if (frame) window.cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => {
      if (event.key === "Escape") { setOpen(false); menuButtonRef.current?.focus(); }
      if (event.type === "pointerdown" && !navRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", close);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", close); };
  }, [open]);

  return (
    <header className="site-header" ref={navRef}>
      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Maya Chaker, home">Maya Chaker<span>Full-stack developer</span></a>
        <button ref={menuButtonRef} className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="nav-links" aria-label={open ? "Close menu" : "Open menu"}>{open ? <FiX /> : <FiMenu />}</button>
        <div className={`nav-links ${open ? "is-open" : ""}`} id="nav-links">
          {links.map((link) => <a key={link} className={active === link ? "active" : ""} href={`#${link}`} aria-current={active === link ? "location" : undefined} onClick={() => setOpen(false)}>{link === "work" ? "Applied work" : link}</a>)}
          <a className="nav-cta" data-magnetic href="mailto:mayachaker06@gmail.com">Let’s talk</a>
        </div>
      </nav>
    </header>
  );
}
