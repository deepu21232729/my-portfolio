"use client";
import { useRef, type MouseEvent } from "react";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { projects } from "@/lib/data";

function Card({ p, i }: { p: (typeof projects)[number]; i: number }) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const featured = i === 0;
  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900 p-8 transition duration-700 ease-cine hover:-translate-y-1 hover:border-accent/30 md:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(215,185,138,0.10), transparent 60%)" }}
      />
      <div className="relative flex h-full flex-col">
        <div className="mb-10 flex items-start justify-between">
          <span className="font-serif text-5xl italic leading-none text-white/15 transition-colors duration-700 group-hover:text-accent/60">0{i + 1}</span>
          <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-mist-400 transition duration-500 ease-cine group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">↗</span>
        </div>
        <h3 className={`font-serif leading-[1.1] text-mist ${featured ? "max-w-xl text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>{p.title}</h3>
        <p className={`mt-5 leading-relaxed text-mist-400 ${featured ? "max-w-2xl text-base md:text-lg" : "text-[15px]"}`}>{p.description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-8">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-wide text-mist-400 transition-colors duration-500 group-hover:border-white/20 group-hover:text-mist">{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section hairline">
      <div className="container-x">
        <SectionHeading index="03" eyebrow="Selected Work" title="Five projects, from agents to dashboards." />
        <Stagger className="grid gap-5 md:grid-cols-2" gap={0.1}>
          {projects.map((p, i) => (
            <StaggerItem key={p.title} className={i === 0 ? "md:col-span-2" : ""}>
              <Card p={p} i={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
