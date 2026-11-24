import { Check } from "lucide-react";
import { safe } from "../data";
import { Reveal, Section } from "./ui";

const MapBg = () => (
  <div className="absolute inset-0 bg-[#0c0c0c]" aria-hidden="true"
    style={{ backgroundImage: "linear-gradient(#1c1c1c 1px,transparent 1px),linear-gradient(90deg,#1c1c1c 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
);

function Phone() {
  return (
    <div className="mx-auto w-[220px] shrink-0 rounded-[2.4rem] border border-line bg-black p-2.5 shadow-2xl shadow-black">
      <div className="relative h-[430px] overflow-hidden rounded-[1.9rem] border border-line/60">
        {safe.mobileImg ? <img src={safe.mobileImg} alt="S.A.F.E. mobile app screen" className="h-full w-full object-cover" loading="lazy" /> : (
          <>
            <MapBg />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 400" aria-hidden="true">
              <path d="M30 330 C 70 260, 60 200, 120 160 S 160 90, 150 60" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="150" cy="60" r="5" fill="#fff" />
            </svg>
            <div className="absolute left-3 right-3 top-4 rounded-xl border border-line bg-card/90 px-3 py-2 text-[11px] text-silver">Your location · Victoria, Laguna</div>
            <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 rounded-full bg-red-500/40" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-sm font-semibold">SOS</div>
              </div>
              <p className="text-[11px] text-mute">Press to request help</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-line bg-black shadow-2xl shadow-black">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
        {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line" />)}
        <span className="ml-3 text-xs text-mute">S.A.F.E. Responder Dashboard</span>
      </div>
      {safe.dashboardImg ? <img src={safe.dashboardImg} alt="S.A.F.E. web dashboard" className="w-full" loading="lazy" /> : (
        <div className="grid h-[300px] grid-cols-[38%_1fr] sm:h-[340px]">
          <ul className="space-y-2 border-r border-line p-3 text-[11px]">
            {["Incoming alert", "Responder assigned", "En route", "Resolved"].map((t, i) => (
              <li key={t} className={`rounded-lg border px-3 py-2.5 ${i === 0 ? "border-silver/50 bg-card text-white" : "border-line text-mute"}`}>{t}<span className="block text-[10px] text-mute/70">Placeholder entry</span></li>
            ))}
          </ul>
          <div className="relative">
            <MapBg />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 340" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path d="M50 290 L 110 230 L 170 210 L 230 120 L 260 60" fill="none" stroke="#C0C0C0" strokeWidth="2" strokeDasharray="6 5" />
              <circle cx="50" cy="290" r="6" fill="#fff" /><circle cx="260" cy="60" r="7" fill="#dc2626" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Safe() {
  return (
    <Section id="projects" title="Featured Project." tone="charcoal">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-card to-ink">
          <div className="p-8 md:p-12">
            <h3 className="font-serif text-3xl md:text-5xl">{safe.title}</h3>
            <p className="mt-5 max-w-2xl text-lg text-mute">{safe.blurb}</p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
              {safe.stack.map((s) => <li key={s} className="rounded-full border border-line bg-ink px-4 py-1.5 text-sm text-silver">{s}</li>)}
            </ul>
          </div>
          <div className="grid items-end gap-8 border-t border-line bg-ink/60 px-6 pt-12 md:grid-cols-[auto_1fr] md:px-12">
            <Phone />
            <div className="pb-12"><Dashboard /></div>
          </div>
          <div className="border-t border-line p-8 md:p-12">
            <h4 className="font-serif text-2xl">Key features</h4>
            <ul className="mt-6 grid gap-x-10 gap-y-3 md:grid-cols-2">
              {safe.details.map((d) => (
                <li key={d} className="flex gap-3 text-mute"><Check size={16} className="mt-1 shrink-0 text-silver" aria-hidden="true" />{d}</li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-mute/70">Previews are placeholders. Add real screenshots in src/data.js.</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}