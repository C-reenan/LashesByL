"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Instagram } from "lucide-react";
import { useRef } from "react";
import { PHOTOS } from "@/lib/photos";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY    = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const titleOp   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const bgY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOp = useTransform(scrollYProgress, [0, 0.8], [0.55, 0.95]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden vignette"
    >
      {/* Background: layered gradients (+ optional photo wash) */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,#3a121d_0%,#120c10_45%,#070406_80%)]" />
        {PHOTOS.hero && (
          <div
            className="absolute inset-0 opacity-[0.18] drift mix-blend-screen"
            style={{
              backgroundImage: `url('${PHOTOS.hero}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
              filter: "grayscale(0.4) contrast(1.05) blur(2px)",
            }}
          />
        )}
        {/* Drifting gold streaks (purely CSS — replaces the photo wash) */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 h-[40vh] w-[40vh] rounded-full bg-gold/8 blur-[140px] drift" />
          <div className="absolute bottom-1/3 right-1/4 h-[30vh] w-[30vh] rounded-full bg-rose-burgundy/30 blur-[120px] drift" style={{ animationDelay: "4s" }} />
        </div>
        {/* Soft gold lamp */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[40vh] w-[120vw] bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent" />
      </motion.div>

      {/* Cinematic overlay */}
      <motion.div style={{ opacity: overlayOp }} className="absolute inset-0 bg-ink-950 z-10" />

      {/* Top hairline marker */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.6, ease, delay: 0.2 }}
        className="absolute top-24 left-1/2 -translate-x-1/2 z-20 w-24 origin-center"
      >
        <div className="hairline" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOp }}
        className="relative z-20 flex h-full flex-col items-center justify-center px-5 sm:px-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
          className="text-[10px] sm:text-xs tracking-cinema uppercase text-gold/80 font-mono"
        >
          Est. Birmingham · By Appointment
        </motion.p>

        <h1 className="mt-6 sm:mt-8 font-display font-light leading-[0.86]">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 0.55 }}
            className="block text-[68px] sm:text-[120px] md:text-[160px] lg:text-[200px] text-rose-blush"
          >
            lashes
          </motion.span>

          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.42em" }}
            transition={{ duration: 1.6, ease, delay: 0.8 }}
            className="block mt-2 sm:mt-4 text-[11px] sm:text-sm tracking-cinema uppercase text-gold/80"
          >
            — by —
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease, delay: 1.0 }}
            className="block mt-2 sm:mt-4 italic text-[78px] sm:text-[140px] md:text-[190px] lg:text-[240px] shimmer-text"
          >
            L
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.3 }}
          className="mt-8 sm:mt-12 max-w-md text-[13px] sm:text-base font-sans font-light leading-relaxed text-rose-blush/70"
        >
          A private lash atelier where every set is composed —
          classic, hybrid, volume. Mapped slow, worn for weeks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease, delay: 1.5 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#book"
            className="btn-glow relative inline-flex items-center justify-center rounded-full bg-rose-burgundy/60 px-9 py-3.5 text-[11px] tracking-luxe uppercase text-rose-blush hover:bg-rose-wine transition-colors duration-500 backdrop-blur-sm w-full sm:w-auto"
          >
            Reserve your set
          </a>
          <a
            href="#lookbook"
            className="group inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase text-rose-blush/70 hover:text-gold transition-colors duration-500"
          >
            View Lookbook
            <ArrowDown size={14} strokeWidth={1.2} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 1.8 }}
          className="absolute bottom-8 sm:bottom-10 inset-x-0 px-6 sm:px-10 flex items-end justify-between text-[10px] sm:text-xs font-mono tracking-luxe text-gold/60 uppercase"
        >
          <div className="hidden sm:flex items-center gap-2">
            <MapPin size={12} strokeWidth={1.2} />
            33.5°N · 86.8°W
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-gold/70 animate-pulse" />
            <span>Scroll</span>
          </div>
          <a
            href="https://instagram.com/lashesby.l"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Instagram size={12} strokeWidth={1.2} />
            @lashesby.l
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}