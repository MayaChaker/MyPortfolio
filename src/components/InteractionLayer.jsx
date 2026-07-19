import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, [data-cursor]";

export default function InteractionLayer() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    document.body.classList.add("has-custom-cursor");
    let frame;
    let targetX = -40;
    let targetY = -40;
    let ringX = -40;
    let ringY = -40;

    const render = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      const settled = Math.abs(targetX - ringX) < 0.1 && Math.abs(targetY - ringY) < 0.1;
      frame = settled ? undefined : window.requestAnimationFrame(render);
    };

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(render);
      const interactive = event.target.closest(interactiveSelector);
      ring.classList.toggle("is-interactive", Boolean(interactive));

      const magnetic = event.target.closest("[data-magnetic]");
      if (magnetic) {
        const bounds = magnetic.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
        magnetic.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      const tilt = event.target.closest("[data-tilt]");
      if (tilt) {
        const bounds = tilt.getBoundingClientRect();
        const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 3;
        const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -3;
        tilt.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const onPointerOut = (event) => {
      const magnetic = event.target.closest?.("[data-magnetic]");
      if (magnetic && !magnetic.contains(event.relatedTarget)) magnetic.style.transform = "";
      const tilt = event.target.closest?.("[data-tilt]");
      if (tilt && !tilt.contains(event.relatedTarget)) tilt.style.transform = "";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <span className="cursor-dot" ref={dotRef} />
      <span className="cursor-ring" ref={ringRef} />
    </div>
  );
}
