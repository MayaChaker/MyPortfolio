import { profile, roles } from "@Data/profile";

export default function HeroSection({ role }) {
  const { title, intro } = roles[role];

  return (
    <section className="shell" id="top" aria-labelledby="hero-name">
      <div className="hero">
        <h1 className="name" id="hero-name">
          {profile.firstName}
          <span className="visually-hidden"> {profile.lastName}</span>
        </h1>
        <div className="portrait">
          <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="640" height="800" fetchPriority="high" />
        </div>
        <p className="name name-right" aria-hidden="true">{profile.lastName}</p>
      </div>
      <div className="intro">
        <p className="title">{title}</p>
        <p>{intro}</p>
      </div>
    </section>
  );
}
