// The soft light that follows the cursor (desktop only, and off for reduced motion).
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.matchMedia("(pointer: fine)").matches) {
  var spot = document.querySelector(".spot");
  window.addEventListener("pointermove", function (e) {
    spot.style.setProperty("--x", e.clientX + "px");
    spot.style.setProperty("--y", e.clientY + "px");
  }, { passive: true });
}
