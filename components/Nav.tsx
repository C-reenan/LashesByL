"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { href: "#signature", label: "Signature" },
  { href: "#services",  label: "Services"  },
  { href: "#lookbook",  label: "Lookbook"  },
  { href: "#voices",    label: "Voices"    },
  { href: "#book",      label: "Book"      },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bg      = useTransform(scrollY, [0, 120], ["rgba(7,4,6,0)", "rgba(7,4,6,0.78)"]);
  const border  = useTransform(scrollY, [0, 120], ["rgba(201,161,106,0)", "rgba(201,161,106,0.18)"]);
  const blur    = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(14px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur, borderBottom: "1px solid", borderColor: border }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4 sm:py-5">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-gold/40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gold/10 animate-pulse-glow" />
            <span className="font-display text-gold text-[15px] sm:text-base">S</span>
          </div>
          <div className="leading-none">
            <p className="font-display text-[15px] sm:text-base text-rose-blush tracking-[0.16em]">
              HAIR BY SHANNON
            </p>
            <p className="text-[9px] sm:text-[10px] mt-1 text-gold/70 tracking-cinema uppercase">
              Birmingham Atelier
            </p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] tracking-luxe uppercase text-rose-blush/80 hover:text-gold transition-colors duration-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://instagram.com/hair.by.shannnn.x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-rose-blush/70 hover:text-gold transition-colors"
          >
            <Instagram size={16} strokeWidth={1.2} />
          </a>
          <a
            href="#book"
            className="relative overflow-hidden rounded-full border border-gold/40 px-5 py-2 text-[11px] tracking-luxe uppercase text-gold hover:text-ink-950 transition-colors duration-500 group"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-gold-soft via-gold to-gold-deep" />
            <span className="relative">Book</span>
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-rose-blush/80 hover:text-gold transition-colors"
        >
          <Menu size={22} strokeWidth={1.2} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <motion.div
        initial={false}
        animate={open ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-ink-950/95 backdrop-blur-xl md:hidden"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gold/15">
          <span className="font-display text-rose-blush tracking-[0.16em] text-sm">
            HAIR BY SHANNON
          </span>
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="text-rose-blush/80 hover:text-gold"
          >
            <X size={22} strokeWidth={1.2} />
          </button>
        </div>

        <motion.ul
          initial="hidden"
          animate={open ? "show" : "hidden"}
          variants={{
            hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
            show:   { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
          }}
          className="px-8 pt-16 space-y-8"
        >
          {LINKS.map((l) => (
            <motion.li
              key={l.href}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show:   { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block font-display text-4xl text-rose-blush"
              >
                {l.label}
                <span className="block h-px mt-3 bg-gradient-to-r from-gold/60 to-transparent" />
              </a>
            </motion.li>
          ))}

          <motion.li
            variants={{
              hidden: { opacity: 0, y: 16 },
              show:   { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6"
          >
            <a
              href="https://instagram.com/hair.by.shannnn.x"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase text-gold/80"
            >
              <Instagram size={14} strokeWidth={1.2} />
              @hair.by.shannnn.x
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.header>
  );
}
