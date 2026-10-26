import SectionHeading from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section hairline">
      <div className="container-x">
        <SectionHeading index="04" eyebrow="Experience" title="Where the data discipline comes from." />
        <div className="space-y-px">
          {experience.map((e) => (
            <Reveal key={e.company}>
              <div className="grid gap-8 py-10 md:grid-cols-[0.5fr_1fr] md:gap-16">
                <div>
                  <p className="font-serif text-4xl text-mist md:text-5xl">{e.company}</p>
                  <p className="mt-4 text-sm text-mist-400">{e.period}</p>
                  <p className="text-sm text-mist-500">{e.location}</p>
                </div>
                <div>
                  <h3 className="text-xl text-mist md:text-2xl">{e.role}</h3>
                  <ul className="mt-6 space-y-4">
                    {e.achievements.map((a) => (
                      <li key={a} className="flex gap-4 leading-relaxed text-mist-400">
                        <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
