import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "@Data/profile";

const sections = [
  ["work", "Work"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function useActiveSection(enabled) {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!enabled) return undefined;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-40% 0px -55%" },
    );
    sections.forEach(([id]) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [enabled]);

  return enabled ? active : "";
}

export default function Navbar() {
  const { pathname, search } = useLocation();
  const active = useActiveSection(pathname === "/");

  return (
    <header className="shell top">
      <Link className="mark" to={{ pathname: "/", search }} onClick={() => window.scrollTo(0, 0)}>
        MC<span className="visually-hidden">, {profile.name}, home</span>
      </Link>
      <nav aria-label="Primary">
        {sections.map(([id, label]) => (
          <Link
            key={id}
            to={{ pathname: "/", search, hash: id }}
            className={active === id ? "active" : undefined}
            aria-current={active === id ? "location" : undefined}
          >
            {label}
          </Link>
        ))}
        <a href={profile.cv} target="_blank" rel="noreferrer">Résumé</a>
      </nav>
    </header>
  );
}
