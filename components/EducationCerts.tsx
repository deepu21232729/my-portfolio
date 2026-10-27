
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { certifications, education } from "@/data";

export default function EducationCerts() {
  return (
    <section id="education" className="section hairline">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="Education & Certifications"
          title="Formal grounding, continuous learning."
        />

        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <h3 className="eyebrow mb-8 text-mist-500">Education</h3>

            <Stagger>
              {education.map((item) => (
                <StaggerItem
                  key={item.degree}
                  className="group border-t border-white/[0.08] py-7 transition-colors hover:border-accent/40"
                >
                  <p className="text-xs tabular-nums text-accent">
                    {item.period}
                  </p>
                  <p className="mt-3 font-serif text-2xl text-mist md:text-3xl">
                    {item.degree}
                  </p>
                  <p className="mt-1 text-mist-400">{item.school}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div>
            <h3 className="eyebrow mb-8 text-mist-500">Certifications</h3>

            <Stagger>
              {certifications.map((certification) => (
                <StaggerItem
                  key={certification.title}
                  className="group border-t border-white/[0.08] py-7 transition-colors hover:border-accent/40"
                >
                  <p className="font-serif text-2xl text-mist transition-transform duration-500 ease-cine group-hover:translate-x-2 md:text-3xl">
                    {certification.title}
                  </p>
                  <p className="mt-1 text-mist-400">
                    {certification.issuer}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
