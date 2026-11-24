import { useState } from "react";
import { ArrowUp, Download, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data";
import { Reveal, Section } from "./ui";

const field = "w-full rounded-xl border border-line bg-ink px-4 py-3 text-white placeholder:text-mute/60 focus:border-silver focus:outline-none";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: the form opens the visitor's email app with the message filled in.
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Section id="contact" title="Let’s Build Something Meaningful." intro="Have an opportunity, project, or collaboration in mind? I’d love to connect and explore how we can work together.">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-4"><Mail className="text-silver" aria-hidden="true" /><a className="hover:text-silver" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li className="flex items-center gap-4"><Phone className="text-silver" aria-hidden="true" /><a className="hover:text-silver" href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
            <li className="flex items-center gap-4"><MapPin className="text-silver" aria-hidden="true" />{profile.location}</li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-silver"><Mail size={16} aria-hidden="true" />Email Me</a>
            <a href={`tel:${profile.phoneHref}`} className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-silver hover:bg-card"><Phone size={16} aria-hidden="true" />Call Me</a>
            <a href={profile.resume} download="Kim-Euzent-Dausin-Resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-silver hover:bg-card"><Download size={16} aria-hidden="true" />Download Resume</a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="grid gap-4 rounded-2xl border border-line bg-card p-6 md:p-8">
            <label className="grid gap-2 text-sm text-mute">Name<input name="name" required autoComplete="name" className={field} /></label>
            <label className="grid gap-2 text-sm text-mute">Email<input name="email" type="email" required autoComplete="email" className={field} /></label>
            <label className="grid gap-2 text-sm text-mute">Subject<input name="subject" required className={field} /></label>
            <label className="grid gap-2 text-sm text-mute">Message<textarea name="message" required rows={5} className={field} /></label>
            <button type="submit" className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-silver">Send message</button>
            <p role="status" className="min-h-5 text-sm text-mute">{sent && "Opening your email app to send this message."}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-10 text-sm text-mute md:flex-row">
        <p>© {new Date().getFullYear()} Designed & Developed by Kim Euzent Dausin.</p>
        {profile.socials.length > 0 && (
          <ul className="flex gap-4">
            {profile.socials.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">{s.label}</a></li>)}
          </ul>
        )}
        <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 transition hover:border-silver hover:text-white"><ArrowUp size={14} aria-hidden="true" />Back to top</a>
      </div>
    </footer>
  );
}