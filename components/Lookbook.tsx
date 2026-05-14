"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type Frame = {
  src: string;
  title: string;
  tag: string;
  span: string;
  parallax: number;
};

// TODO: replace with @hair.by.shannnn.x install photos.
// Current images are dark, hair-forward placeholders for layout review.
const FRAMES: Frame[] = [
  {
    src: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&w=900&q=80",
    title: "Boho · No.07",
    tag: "Medium · Mid-back",
    span: "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-full",
    parallax: -40,
  },
  {
    src: "https://images.unsplash.com/photo-1626954079979-ec4f7b05e032?auto=format&fit=crop&w=700&q=80",
    title: "Stitched · No.04",
    tag: "Cornrow · Crown",
    span: "col-span-6 md:col-span-5 aspect-[4/5]",
    parallax: -20,
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80",
    title: "Knotless · No.12",
    tag: "Small · Waist",
    span: "col-span-6 md:col-span-5 aspect-[4/5]",
    parallax: -60,
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    title: "Goddess · No.02",
    tag: "Wrapped · Hip",
    span: "col-span-12 md:col-span-7 aspect-[3/4] md:aspect-[16/10]",
    parallax: -30,
  },
  {
    src: "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?auto=format&fit=crop&w=700&q=80",
    title: "Tribal · No.09",
    tag: "Cuffs · Beaded",
    span: "col-span-6 md:col-span-5 aspect-[4/5]",
    parallax: -10,
  },
  {
    src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=700&q=80",
    title: "Feed-In · No.01",
    tag: "Straight · Back",
    span: "col-span-6 md:col-span-5 aspect-[4/5]",
    parallax: -50,
  },
];

function Frame({ f, idx }: { f: Frame; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [f.parallax, -f.parallax]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.3, ease, delay: idx * 0.07 }}
      className={`group relative overflow-hidden rounded-[2px] border border-gold/10 ${f.span}`}
    >
      <motion.div
        style={{ y, scale: 1.18 }}
        className="absolute inset-0 bg-cover bg-center"
        whileHover={{ scale: 1.24 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out"
          style={{
            backgroundImage: `url(${f.src})`,
            filter: "saturate(0.85) contrast(1.05)",
          }}
        />
      </motion.div>

      {/* Layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
      <div className="absolute inset-0 bg-rose-burgundy/15 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity duration-700" />

      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex items-end justify-between text-rose-blush">
        <div>
          <p className="font-display italic text-xl sm:text-2xl leading-none">
            {f.title}
          </p>
          <p className="mt-1.5 text-[10px] tracking-luxe uppercase text-rose-blush/55">
            {f.tag}
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-luxe text-gold/70">
          IG · {String(idx + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Ticks */}
      <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-gold/60 opacity-60" />
      <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-gold/60 opacity-60" />
    </motion.div>
  );
}

export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="relative py-28 sm:py-40 px-5 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
            >
              ✦ Chapter III — Lookbook
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease, delay: 0.1 }}
              className="mt-5 font-display font-light leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-rose-blush"
            >
              Worn for <span className="italic shimmer-text">weeks.</span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            href="https://instagram.com/hair.by.shannnn.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-luxe uppercase text-gold/80 hover:text-gold transition-colors self-start md:self-auto"
          >
            See all on Instagram →
          </motion.a>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-5 auto-rows-[minmax(0,420px)]">
          {FRAMES.map((f, i) => (
            <Frame key={f.src} f={f} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
