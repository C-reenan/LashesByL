"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useRef } from "react";
import Script from "next/script";

const ease = [0.16, 1, 0.3, 1] as const;

const CALENDLY_URL =
  "https://calendly.com/ontheway09/30min?background_color=070406&text_color=e8c4b8&primary_color=c9a16a&hide_gdpr_banner=1";

export function Booking() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const bigY  = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="book"
      ref={ref}
      className="relative py-32 sm:py-48 px-5 sm:px-8 overflow-hidden"
    >
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Ambient flourish */}
      <motion.div
        style={{ y: glowY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[70vh] w-[80vh] rounded-full bg-rose-burgundy/25 blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
      </motion.div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
        >
          ✦ Reserve the chair
        </motion.p>

        <motion.h2
          style={{ y: bigY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease, delay: 0.1 }}
          className="mt-8 font-display font-light leading-[0.86] text-6xl sm:text-8xl md:text-[150px] text-rose-blush"
        >
          your turn.
          <br />
          <span className="italic shimmer-text">— belovèd —</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease, delay: 0.25 }}
          className="mx-auto mt-10 sm:mt-14 max-w-lg text-rose-blush/65 font-light leading-relaxed"
        >
          New slots open the first of each month. A small deposit secures
          your seat. Cancellations made 72 hours prior are refunded in full.
        </motion.p>

        {/* Calendly inline embed */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
          className="mt-14 sm:mt-20 rounded-[2px] border border-gold/20 overflow-hidden"
        >
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </motion.div>

        {/* Secondary contact links */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="mt-8 text-[11px] tracking-luxe uppercase text-rose-blush/45"
        >
          or reach out directly —{" "}
          <a
            href="https://instagram.com/hair.by.shannnn.x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-blush/60 hover:text-gold transition-colors"
          >
            Instagram
          </a>
          {" · "}
          <a
            href="mailto:hair.by.shannon@gmail.com?subject=Booking%20Enquiry"
            className="text-rose-blush/60 hover:text-gold transition-colors"
          >
            Email
          </a>
        </motion.p>

        {/* Detail row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
          }}
          className="mt-20 sm:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 border-t border-gold/15 pt-12 text-left sm:text-center"
        >
          {[
            { icon: MapPin,    label: "Studio",    val: "Birmingham, AL · Address upon confirmation" },
            { icon: Instagram, label: "Instagram", val: "@hair.by.shannnn.x" },
            { icon: Mail,      label: "Hours",     val: "Tues – Sat · 9am — 8pm" },
          ].map(({ icon: Icon, label, val }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show:   { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, ease }}
              className="flex sm:flex-col sm:items-center gap-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold/80">
                <Icon size={14} strokeWidth={1.2} />
              </span>
              <div>
                <p className="text-[10px] tracking-cinema uppercase text-gold/70">
                  {label}
                </p>
                <p className="mt-1.5 text-sm text-rose-blush/80 font-light">
                  {val}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
