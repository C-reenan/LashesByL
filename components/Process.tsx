"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    n: "i",
    title: "Reach Out",
    body: "Send a message via Instagram or the form below. Share your style, density, and inspiration if you have any.",
  },
  {
    n: "ii",
    title: "Composition",
    body: "L maps your set — curl, length, density — and confirms a date with a deposit.",
  },
  {
    n: "iii",
    title: "The Chair",
    body: "Arrive bare-faced. We light the candle, pour the drink, and begin. Most sets take 2–4 hours.",
  },
  {
    n: "iv",
    title: "Aftercare",
    body: "Leave with a printed care card and a follow-up message at week two. Wear them for weeks.",
  },
];

export function Process() {
  return (
    <section className="relative py-28 sm:py-40 px-5 sm:px-8 bg-gradient-to-b from-ink-950 via-ink-900/60 to-ink-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 sm:mb-24 max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
          >
            ✦ Chapter V — The Ritual
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="mt-5 font-display font-light leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-rose-blush"
          >
            How it <span className="italic shimmer-text">unfolds</span>.
          </motion.h2>
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-4 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {STEPS.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, ease, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-ink-950 font-display italic text-gold text-sm">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-rose-blush">
                {s.title}
              </h3>
              <p className="mt-3 text-sm font-light text-rose-blush/60 leading-relaxed">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
