import { useEffect, useRef } from "react";

// The soft light that follows the cursor. Desktop pointers only, and off for reduced motion.
export default function Spotlight() {
  const ref = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const spot = ref.current;
    if (reduced || !fine || !spot) return undefined;

    let frame;
    let x = 0;
    let y = 0;
    const paint = () => {
      spot.style.setProperty("--x", `${x}px`);
      spot.style.setProperty("--y", `${y}px`);
      frame = undefined;
    };
    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="spot" ref={ref} aria-hidden="true" />;
}
