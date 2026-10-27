
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

const line = (i: number) => ({
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.1, delay: 0.3 + i * 0.14, ease },
});

function HeroVideo({
  className,
  reduced,
  controls = false,
}: {
  className?: string;
  reduced: boolean;
  controls?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = !soundOn;

    if (reduced) {
      video.pause();
      return;
    }

    video.play().catch(() => {
      // The browser may block autoplay.
    });
  }, [reduced, soundOn]);

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        className={className}
        autoPlay={!reduced}
        muted={!soundOn}
        loop
        playsInline
        preload="metadata"
        aria-label={controls ? "Portfolio introduction video" : undefined}
        aria-hidden={!controls}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      {controls && (
        <button
          type="button"
          onClick={() => setSoundOn((previous) => !previous)}
          className="absolute bottom-3 right-3 z-10 rounded-full border border-white/30 bg-black/75 px-4 py-2 text-sm text-white transition hover:border-accent hover:text-accent"
          aria-label={soundOn ? "Mute video audio" : "Enable video audio"}
        >
          {soundOn ? "Mute sound" : "Enable sound"}
        </button>
      )}
    </div>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const reduced = prefersReducedMotion ?? false;

  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28"
    >
      {/* Decorative background video — always muted */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <HeroVideo
          reduced={reduced}
          className="h-full w-full scale-125 object-cover opacity-60 blur-3xl brightness-[0.55] saturate-[1.3]"
        />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,#07080a_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Hero text */}
        <div>
          <motion.p {...line(0)} className="eyebrow mb-7">
            {profile.role} · {profile.location.split(",")[0]}
          </motion.p>

          <h1 className="font-serif text-[clamp(3.2rem,9vw,7.5rem)] leading-[0.95] tracking-tight text-mist">
            <motion.span {...line(1)} className="block">
              Deepika
            </motion.span>
            <motion.span {...line(2)} className="block italic text-accent">
              Piriya
            </motion.span>
          </h1>

          <motion.p
            {...line(3)}
            className="mt-6 text-sm tracking-wide text-mist-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            {...line(4)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-mist/90 md:text-xl"
          >
            {profile.oneLiner}
          </motion.p>

          <motion.div {...line(5)} className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-mist px-7 py-3.5 text-sm font-medium text-ink transition duration-500 ease-cine hover:bg-accent"
            >
              View Work
              <span className="transition-transform duration-500 ease-cine group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contact"
              className="focus-ring rounded-full border border-white/20 px-7 py-3.5 text-sm text-mist transition duration-500 hover:border-accent hover:text-accent"
            >
              Contact
            </a>

            <a
              href={profile.resume}
              download
              className="focus-ring rounded-full px-5 py-3.5 text-sm text-mist-400 underline-offset-8 transition hover:text-mist hover:underline"
            >
              Download Résumé ↓
            </a>
          </motion.div>
        </div>

        {/* Portrait video with sound control */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.5, ease }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[400/368] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
            <HeroVideo
              reduced={reduced}
              controls
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />
          </div>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-mist-500">
            Open to relocation
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-mist-500 md:flex"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-accent"
            animate={{ y: [-16, 40] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </motion.a>
    </section>
  );
}
