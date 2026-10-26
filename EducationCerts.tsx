import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { certifications, education } from "@/lib/data";

export default function EducationCerts() {
  return (
    <section id="education" className="section hairline">
      <div className="container-x">
        <SectionHeading index="05" eyebrow="Education & Certifications" title="Formal grounding, continuous learning." />
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h3 className="eyebrow mb-8 text-mist-500">Education</h3>
            <Stagger>
              {education.map((e) => (
                <StaggerItem key={e.degree} className="group border-t border-white/[0.08] py-7 transition-colors hover:border-accent/40">
                  <p className="text-xs tabular-nums text-accent">{e.period}</p>
                  <p className="mt-3 font-serif text-2xl text-mist md:text-3xl">{e.degree}</p>
                  <p className="mt-1 text-mist-400">{e.school}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <h3 className="eyebrow mb-8 text-mist-500">Certifications</h3>
            <Stagger>
              {certifications.map((c) => (
                <StaggerItem key={c.title} className="group border-t border-white/[0.08] py-7 transition-colors hover:border-accent/40">
                  <p className="font-serif text-2xl text-mist transition-transform duration-500 ease-cine group-hover:translate-x-2 md:text-3xl">{c.title}</p>
                  <p className="mt-1 text-mist-400">{c.issuer}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
