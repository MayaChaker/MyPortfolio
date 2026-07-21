import { m as Motion, useReducedMotion } from "framer-motion";

export default function MotionSection({ children, className, id, labelledBy }) {
  const reduceMotion = useReducedMotion();

  return (
    <Motion.section
      className={className}
      id={id}
      aria-labelledby={labelledBy}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.section>
  );
}
