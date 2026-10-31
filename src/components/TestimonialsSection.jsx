import { testimonials } from "@Data/testimonials";

export default function TestimonialsSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="shell section" aria-labelledby="references-h">
      <div className="section-head"><h2 id="references-h">Kind <em>words</em></h2></div>
      <div className="quotes">
        {testimonials.map((item) => (
          <figure key={item.name}>
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              {item.link ? <a href={item.link} target="_blank" rel="noreferrer">{item.name}</a> : item.name}
              <span className="label">{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
