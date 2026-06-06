"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PHOTOS } from "@/lib/photos";

const ease = [0.16, 1, 0.3, 1] as const;

export function Signature() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const captionX  = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      id="signature"
      ref={ref}
      className="relative py-28 sm:py-40 px-5 sm:px-8 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 items-center">
        {/* Portrait */}
        <motion.div
          style={{ y: portraitY }}
          className="md:col-span-5 relative aspect-[3/4] w-full max-w-md mx-auto"
        >
          <div className="absolute inset-0 rounded-[2px] overflow-hidden border border-gold/15">
            {PHOTOS.signature ? (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${PHOTOS.signature}')`,
                    filter: "saturate(0.85) contrast(1.05)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-burgundy/40 via-transparent to-transparent mix-blend-multiply" />
              </>
            ) : (
              // Placeholder — luxe gradient + monogram. Replace via /lib/photos.ts
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,#a78bfa_0%,#7c3aed_55%,#4c1d95_100%)] flex items-center justify-center">
                <div className="text-center px-6">
                  <span className="font-mono text-[10px] tracking-cinema uppercase text-gold/60">
                    Portrait
                  </span>
                  <p className="mt-3 font-display italic text-6xl text-rose-blush/30">
                    L
                  </p>
                  <span className="mt-3 block font-mono text-[9px] tracking-luxe uppercase text-rose-blush/30">
                    awaiting feature
                  </span>
                </div>
              </div>
            )}
          </div>
          {/* Frame corner ticks */}
          <span className="absolute -top-2 -left-2 h-5 w-5 border-t border-l border-gold/60" />
          <span className="absolute -top-2 -right-2 h-5 w-5 border-t border-r border-gold/60" />
          <span className="absolute -bottom-2 -left-2 h-5 w-5 border-b border-l border-gold/60" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 border-b border-r border-gold/60" />
        </motion.div>

        {/* Copy */}
        <div className="md:col-span-7 md:pl-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease }}
            className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
          >
            ✦ Chapter I — The Artist
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, ease, delay: 0.1 }}
            className="mt-6 font-display font-light leading-[1] text-5xl sm:text-6xl md:text-7xl text-rose-blush"
          >
            Patience.
            <br />
            <span className="italic shimmer-text">Precision.</span>
            <br />
            <span className="text-rose-dust">Lash.</span>
          </motion.h2>

          <motion.div
            style={{ x: captionX }}
            className="mt-10 max-w-lg space-y-6 text-rose-blush/70 font-light leading-relaxed"
          >
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.25 }}
            >
              L trained her hands the way a couturier trains for an
              atelier — slow, deliberate, in love with the work. Each set
              is custom-mapped to the curve of your lash line and the way
              you carry your gaze.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease, delay: 0.4 }}
            >
              No assembly line. One client at a time, somewhere warm in
              Birmingham, with a candle lit and your favourite drink poured.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show:   { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
            }}
            className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 max-w-md border-t border-gold/15 pt-8"
          >
            {[
              { k: "06+",   v: "years of lashing" },
              { k: "1.2k",  v: "loyal clientele"    },
              { k: "★ 4.98", v: "ig review average" },
            ].map((s) => (
              <motion.div
                key={s.k}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show:   { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.9, ease }}
              >
                <dt className="font-display text-2xl sm:text-3xl text-gold">
                  {s.k}
                </dt>
                <dd className="mt-1 text-[10px] sm:text-[11px] tracking-luxe uppercase text-rose-blush/55">
                  {s.v}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
