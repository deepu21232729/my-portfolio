import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { profile } from "@/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "in/deepika-piriya", href: profile.linkedin },
  { label: "GitHub", value: "deepu21232729", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="grain section relative overflow-hidden hairline">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="container-x">
        <Reveal>
          <p className="eyebrow mb-6">06 — Contact</p>
          <h2 className="font-serif text-[clamp(2.8rem,8vw,7rem)] leading-[0.98] text-mist">
            Let’s build something <span className="italic text-accent">intelligent.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-mist-400">Open to relocation and new opportunities in AI engineering. Based in {profile.location}.</p>
        </Reveal>
        <Stagger className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
          {links.map((l) => (
            <StaggerItem key={l.label}>
              <a
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="focus-ring group flex items-center justify-between gap-4 bg-ink p-8 transition-colors duration-500 hover:bg-ink-800 md:p-10"
              >
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-mist-500">{l.label}</span>
                  <span className="mt-3 block truncate font-serif text-2xl text-mist md:text-3xl">{l.value}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-mist-500 transition duration-500 ease-cine group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent">↗</span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-white/[0.07] pt-8 text-xs text-mist-600 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <a href="#top" className="focus-ring transition-colors hover:text-mist">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
