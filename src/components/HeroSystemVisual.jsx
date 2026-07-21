import { useEffect, useRef } from "react";

export default function HeroSystemVisual() {
  const frameRef = useRef(/** @type {number | undefined} */ (undefined));
  const visualRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    const visual = visualRef.current;
    const plane = planeRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!visual || !plane || !finePointer.matches || reducedMotion.matches) return undefined;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.09;
      currentY += (targetY - currentY) * 0.09;
      plane.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      const moving = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;
      frameRef.current = moving ? window.requestAnimationFrame(render) : undefined;
    };

    const move = (event) => {
      const bounds = visual.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(render);
    };

    const leave = () => {
      targetX = 0;
      targetY = 0;
      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(render);
    };

    visual.addEventListener("pointermove", move, { passive: true });
    visual.addEventListener("pointerleave", leave, { passive: true });
    return () => {
      visual.removeEventListener("pointermove", move);
      visual.removeEventListener("pointerleave", leave);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="system-field" ref={visualRef} aria-hidden="true">
      <div className="system-field-head"><span>PRODUCT ARCHITECTURE</span><span>SYS / 01</span></div>
      <div className="system-plane" ref={planeRef}>
        <span className="system-coordinate coordinate-a">X / 012</span>
        <span className="system-coordinate coordinate-b">Y / 048</span>
        <svg className="system-connections" viewBox="0 0 500 500" preserveAspectRatio="none">
          <path d="M128 142 C205 142 205 248 288 248" />
          <path d="M288 248 C368 248 350 365 414 365" />
          <path className="return-path" d="M414 365 C270 425 170 355 128 142" />
        </svg>
        <span className="system-signal signal-interface-api" />
        <span className="system-signal signal-api-data" />
        <span className="system-signal signal-return" />
        <div className="system-node interface-node"><small>01 / Client</small><strong>Interface</strong><span>Responsive UI</span></div>
        <div className="system-node api-node"><small>02 / Service</small><strong>API</strong><span>Auth · Logic</span></div>
        <div className="system-node data-node"><small>03 / Model</small><strong>Data</strong><span>Relational state</span></div>
        <div className="system-legend"><span><i /> Request</span><span><i /> Response</span></div>
      </div>
      <div className="system-field-foot"><span>INTERFACE → API → DATA MODEL</span><span>LIVE SIGNAL</span></div>
    </div>
  );
}
