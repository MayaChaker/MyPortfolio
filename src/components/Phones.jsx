// A row of phone frames, for projects made to be opened on a phone.
export default function Phones({ shots, eager = false }) {
  return (
    <span className="phones">
      {shots.map((shot) => (
        <span className="phone-frame" key={shot.src}>
          <img src={shot.src} alt={shot.alt ?? ""} loading={eager ? "eager" : "lazy"} decoding="async" width="480" height="1039" />
        </span>
      ))}
    </span>
  );
}
