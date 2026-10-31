// Every desktop screenshot has an 800px copy next to it (name-800.webp).
export default function Shot({ src, alt = "", eager = false, sizes = "(max-width: 860px) 100vw, 720px" }) {
  return (
    <img
      src={src}
      srcSet={`${src.replace(/\.webp$/, "-800.webp")} 800w, ${src} 1440w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      width="1440"
      height="900"
    />
  );
}
