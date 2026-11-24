import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data";

export default function Nav() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-ink/60 backdrop-blur-xl">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-xl">{profile.short}</a>
        <ul className="hidden gap-1 md:flex">
          {nav.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`relative block px-3 py-2 text-sm transition-colors ${active === id ? "text-white" : "text-mute hover:text-white"}`}>
                {label}
                {active === id && <motion.span layoutId="nav-dot" className="absolute inset-x-3 -bottom-px h-px bg-silver" />}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink/95 px-6 py-4 md:hidden">
          {nav.map(([id, label]) => (
            <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={`block py-3 ${active === id ? "text-white" : "text-mute"}`}>{label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}