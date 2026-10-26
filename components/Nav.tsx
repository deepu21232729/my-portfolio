"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "@/lib/data";

export default function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-white/[0.06] bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring font-serif text-xl tracking-tight text-mist">
          DP<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring group relative text-[13px] text-mist-400 transition-colors hover:text-mist">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-cine group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.resume}
          download
          className="focus-ring rounded-full border border-white/15 px-4 py-1.5 text-[12px] text-mist transition hover:border-accent hover:text-accent"
        >
          Résumé
        </a>
      </nav>
    </motion.header>
  );
}
