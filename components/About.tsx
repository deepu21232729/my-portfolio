import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { focusAreas, profile } from "@/data";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title="Intelligent systems, grounded in real data." />
        <div className="grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-accent/40 via-white/5 to-transparent opacity-70" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-800">
                <Image
                  src="/media/portrait.jpg"
                  alt="Portrait of Deepika Piriya wearing glasses, a grey blazer and a navy ID lanyard"
                  width={1140}
                  height={1070}
                  sizes="(min-width: 1024px) 384px, 90vw"
                  quality={95}
                  className="h-auto w-full transition duration-[1400ms] ease-cine group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-white/10 bg-ink/80 px-5 py-4 backdrop-blur-xl">
                <p className="font-serif text-xl text-mist">{profile.name}</p>
                <p className="mt-0.5 text-xs tracking-wide text-mist-400">{profile.role}</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xl leading-[1.7] text-mist/90 md:text-2xl md:leading-[1.65]">{profile.summary}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="eyebrow mb-5 mt-14 text-mist-500">Focus areas</p>
            </Reveal>
            <Stagger className="flex flex-wrap gap-3" gap={0.07}>
              {focusAreas.map((f) => (
                <StaggerItem key={f}>
                  <span className="inline-block cursor-default rounded-full border border-white/12 px-5 py-2.5 text-sm text-mist transition duration-500 ease-cine hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent">
                    {f}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
