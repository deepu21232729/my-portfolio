import { Reveal } from "./Reveal";

export default function SectionHeading({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14 md:mb-20">
      <p className="eyebrow mb-5 flex items-center gap-4">
        <span className="tabular-nums text-mist-500">{index}</span>
        <span className="h-px w-10 bg-accent/50" />
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-serif text-4xl leading-[1.05] text-mist md:text-6xl">{title}</h2>
    </Reveal>
  );
}
