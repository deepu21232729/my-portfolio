import type { Metadata } from "next";
import Link from "next/link";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${profile.name}, ${profile.role}.`,
};

export default function ResumePage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/" className="button-secondary">
          Back to site
        </Link>
        <PrintButton />
      </div>

      <header className="border-b border-line pb-6">
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-muted">{profile.fullRole}</p>
        <p className="mt-3 text-sm text-muted">
          {profile.location} · {profile.email} · {profile.phone}
        </p>
        <p className="mt-2 text-sm text-muted">
          {profile.linkedin} · {profile.github}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Professional Summary</h2>
        <p className="mt-3 leading-relaxed text-foreground/85">{profile.summary}</p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Experience</h2>
        <div className="mt-3">
          <p className="font-medium">
            {experience.role}, {experience.company}
          </p>
          <p className="text-sm text-muted">
            {experience.dates} · {experience.location}
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/85">
            {experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Selected Work</h2>
        <div className="mt-3 space-y-5">
          {projects.map((project) => (
            <article key={project.title}>
              <h3 className="font-medium">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.tech.join(" · ")}</p>
              <p className="mt-2 text-foreground/85">{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Skills</h2>
        <div className="mt-3 space-y-3">
          {skillGroups.map((group) => (
            <p key={group.title}>
              <span className="font-medium">{group.title}:</span>{" "}
              <span className="text-foreground/85">{group.skills.join(", ")}</span>
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Education</h2>
        <ul className="mt-3 space-y-2">
          {education.map((item) => (
            <li key={item.degree}>
              {item.degree}, {item.school} ({item.dates})
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-medium">Certifications</h2>
        <ul className="mt-3 space-y-2">
          {certifications.map((item) => (
            <li key={item.title}>
              {item.title} – {item.issuer}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
