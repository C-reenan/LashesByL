"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

// Pulled from real DMs to @lashesby.l — only light punctuation polish.
const VOICES = [
  {
    quote:
      "Hey miss gurl, you don't know me but I've been following you a few months now and I just wanted to tell you how amazing your work is. You can tell the hard work you put in. The hustle is real — keep going ❤️",
    name: "DM · Feb 2024",
    role: "Followed for months",
  },
  {
    quote:
      "They look so good, thank you 😁 I'm definitely coming to you next time.",
    name: "DM · Sept 2023",
    role: "First Visit",
  },
  {
    quote:
      "Girl I am innn looovveee with my lashes 🥰 Thank you xx",
    name: "DM · Nov 2023",
    role: "Hybrid Set",
  },
  {
    quote:
      "Very talented young lady. I used to do lashes myself and dabble in makeup and bridal etc, and at your age your work is absolutely amazing babe — your attention to detail! Absolutely love seeing your videos. Keep smashing it beautiful xxxx",
    name: "DM · Mar 2024",
    role: "Fellow Lash Tech",
  },
];

export function Voices() {
  return (
    <section
      id="voices"
      className="relative py-28 sm:py-40 px-5 sm:px-8 overflow-hidden"
    >
      {/* Background flourish */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[60vh] w-[80vh] rounded-full bg-rose-burgundy/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
          >
            ✦ Chapter IV — Voices
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="mt-5 font-display font-light leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-rose-blush"
          >
            What the chair <span className="italic shimmer-text">remembers</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 text-gold/80"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
            <span className="ml-2 font-mono text-[10px] sm:text-xs tracking-luxe text-rose-blush/55 uppercase">
              Straight from the DMs
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {VOICES.map((v, i) => (
            <motion.figure
              key={v.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, ease, delay: i * 0.08 }}
              className="relative group p-7 sm:p-10 rounded-[2px] border border-gold/15 bg-gradient-to-br from-ink-900/80 to-ink-950/60 backdrop-blur-sm overflow-hidden"
            >
              {/* Hover gold edge */}
              <span className="absolute inset-0 rounded-[2px] border border-transparent group-hover:border-gold/40 transition-colors duration-700 pointer-events-none" />

              <Quote
                size={28}
                strokeWidth={1}
                className="text-gold/40 mb-5"
              />
              <blockquote className="font-display italic text-xl sm:text-2xl leading-snug text-rose-blush">
                "{v.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-gold/60" />
                <div>
                  <p className="text-sm text-rose-blush">{v.name}</p>
                  <p className="text-[10px] tracking-luxe uppercase text-rose-blush/45 mt-0.5">
                    {v.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
