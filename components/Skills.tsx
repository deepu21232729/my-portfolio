import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section hairline">
      <div className="container-x">
        <SectionHeading index="02" eyebrow="Skills" title="The toolkit, grouped by how I use it." />
        <Stagger className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <StaggerItem key={g.title} className="group bg-ink p-8 transition-colors duration-700 hover:bg-ink-800 md:p-12">
              <p className="mb-8 flex items-baseline justify-between">
                <span className="font-serif text-2xl text-mist md:text-3xl">{g.title}</span>
                <span className="text-xs tabular-nums text-mist-600">0{i + 1}</span>
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full bg-white/[0.04] px-4 py-2 text-[13px] text-mist-400 transition duration-500 group-hover:bg-white/[0.07] group-hover:text-mist">
                    {s}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
