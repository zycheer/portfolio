import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "../data";

const ease = [0.22, 1, 0.36, 1];
const up = (d) => ({ initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: d, ease } });

export default function Hero() {
  const [broken, setBroken] = useState(false);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-silver/[0.06] blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p {...up(0.1)} className="inline-flex items-center gap-3 rounded-full border border-line bg-card/70 px-4 py-1.5 text-sm text-silver">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Opportunities
          </motion.p>

          <motion.h1 {...up(0.25)} className="mt-8 font-serif text-6xl leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
            Hi, I’m Kim&nbsp;Euzent.
          </motion.h1>
          <motion.p {...up(0.4)} className="mt-4 font-serif text-2xl italic text-silver md:text-3xl">
            Turning ideas into functional digital experiences.
          </motion.p>
          <motion.p {...up(0.55)} className="mt-8 max-w-xl text-lg leading-relaxed text-mute">
            An Information Technology Professional passionate about building digital solutions, developing applications, and solving real-world problems through technology.
          </motion.p>

          <motion.div {...up(0.7)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:bg-silver">Explore My Work</a>
            <a href={profile.resume} download="Kim-Euzent-Dausin-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium transition hover:border-silver hover:bg-card">
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div {...up(0.5)} className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-card" style={{ animation: "float-y 8s ease-in-out infinite" }}>
            {broken ? (
              <div className="flex h-full items-center justify-center font-serif text-8xl text-silver/60">KD</div>
            ) : (
              <img src={profile.photo} alt="Portrait of Kim Euzent Dausin" width="480" height="600" fetchpriority="high" onError={() => setBroken(true)} className="h-full w-full object-cover grayscale" />
            )}
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>

      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mute transition hover:text-white">
        <ArrowDown size={20} style={{ animation: "float-y 2.4s ease-in-out infinite" }} />
      </a>
    </section>
  );
}