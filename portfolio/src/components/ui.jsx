import { motion, useReducedMotion } from "framer-motion";
import * as Icons from "lucide-react";

export const Icon = ({ name, ...p }) => {
  const C = Icons[name] || Icons.Circle;
  return <C aria-hidden="true" {...p} />;
};

export function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, title, intro, children, tone = "ink" }) {
  return (
    <section id={id} className={`${tone === "charcoal" ? "bg-charcoal" : "bg-ink"} border-t border-line`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
          {intro && <p className="mt-5 max-w-xl text-mute">{intro}</p>}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-silver/40 ${className}`}>
    {children}
  </div>
);

export function Timeline({ items }) {
  return (
    <ol className="relative ml-3 border-l border-line">
      {items.map((it, i) => (
        <li key={it.title} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
          <motion.span
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.15, type: "spring", stiffness: 300, damping: 18 }}
            className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-silver bg-ink"
          />
          <Reveal delay={i * 0.05}>
            <p className="text-sm text-mute">{it.meta}</p>
            <h3 className="mt-1 font-serif text-2xl md:text-3xl">{it.title}</h3>
            <p className="mt-1 text-silver">{it.org}</p>
            {it.points && (
              <ul className="mt-5 grid gap-2 text-[15px] text-mute">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-3"><Icons.Check size={16} className="mt-1 shrink-0 text-silver" aria-hidden="true" />{p}</li>
                ))}
              </ul>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}