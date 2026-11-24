import { GraduationCap, School, CalendarCheck } from "lucide-react";
import { skills, experience, education, certs, qualities } from "../data";
import { Card, Icon, Reveal, Section, Timeline } from "./ui";

export function About() {
  const info = [
    { icon: GraduationCap, k: "Education", v: "Bachelor of Science in Information Technology" },
    { icon: School, k: "University", v: "Laguna State Polytechnic University" },
    { icon: CalendarCheck, k: "Graduation Year", v: "2026" },
  ];
  return (
    <Section id="about" title="A Little About Me.">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="max-w-xl space-y-6 text-lg leading-relaxed text-mute">
          <p>I am Kim Euzent Rebong Dausin, an Information Technology graduate with experience in administrative operations, technical support, computer troubleshooting, and software development. I enjoy exploring technologies and developing solutions that address real-world challenges.</p>
          <p>Through my academic journey and professional experiences, I have developed technical, communication, and problem-solving skills. I am continuously motivated to learn, improve, and contribute to meaningful projects.</p>
        </Reveal>
        <div className="grid gap-4">
          {info.map(({ icon: I, k, v }, i) => (
            <Reveal key={k} delay={i * 0.08}>
              <Card className="flex items-start gap-4"><I className="mt-1 text-silver" size={22} aria-hidden="true" />
                <div><p className="text-sm text-mute">{k}</p><p className="mt-1 text-lg">{v}</p></div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="My Technical Arsenal." tone="charcoal">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((c, i) => (
          <Reveal key={c.title} delay={(i % 2) * 0.08}>
            <Card className="h-full">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink text-silver"><Icon name={c.icon} size={20} /></span>
                <h3 className="font-serif text-2xl">{c.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {c.items.map((s) => <li key={s} className="rounded-full border border-line bg-ink px-4 py-1.5 text-sm text-silver transition hover:-translate-y-0.5 hover:border-silver/50 hover:text-white">{s}</li>)}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export const Experience = () => (
  <Section id="experience" title="Where I’ve Gained Experience."><Timeline items={experience} /></Section>
);

export const Education = () => (
  <Section id="education" title="My Academic Journey." tone="charcoal"><Timeline items={education} /></Section>
);

export function Certifications() {
  return (
    <Section id="certifications" title="Certifications & Involvement.">
      <div className="grid gap-5 md:grid-cols-3">
        {certs.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <Card className="h-full">
              <Icon name={c.icon} size={28} className="text-silver" />
              <h3 className="mt-6 text-lg leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm text-mute">{c.meta}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Qualities() {
  return (
    <Section id="qualities" title="Beyond the Technical Skills." tone="charcoal">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {qualities.map((q, i) => (
          <li key={q.label}>
            <Reveal delay={(i % 3) * 0.08}>
              <Card className="flex items-center gap-4"><Icon name={q.icon} size={22} className="text-silver" /><span>{q.label}</span></Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}