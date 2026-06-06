"use client";

import { motion } from "framer-motion";
import { Instagram, Music2, Mail, MessageCircle } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const SOCIALS = [
  {
    label: "@lashesby.l",
    href: "https://instagram.com/lashesby.l",
    Icon: Instagram,
  },
  {
    label: "@lashesby.l",
    href: "https://tiktok.com/@lashesby.l",
    Icon: Music2,
  },
  {
    label: "WhatsApp Booking",
    href: "https://wa.me/447000000000",
    Icon: MessageCircle,
  },
  {
    label: "hello@lashesbyl.com",
    href: "mailto:hello@lashesbyl.com",
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-10 px-5 sm:px-8 border-t border-gold/15 bg-ink-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end"
        >
          <div className="md:col-span-7">
            <h3 className="font-display font-light italic text-5xl sm:text-7xl md:text-8xl shimmer-text leading-none">
              Lashes by L
            </h3>
            <p className="mt-6 font-mono text-[10px] tracking-cinema uppercase text-gold/70">
              Birmingham · UK · Est. 2022
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <ul className="flex flex-col items-start md:items-end gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-rose-blush/80 hover:text-gold transition-colors text-sm"
                  >
                    <Icon size={16} strokeWidth={1.2} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-rose-blush/45 leading-relaxed max-w-xs md:ml-auto">
              By-appointment private lash atelier. Address shared upon
              booking confirmation.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-gold/10 pt-8 text-[10px] font-mono tracking-luxe text-rose-blush/40 uppercase">
          <p>© {new Date().getFullYear()} Lashes by L · All lashes reserved</p>
          <div className="flex items-center gap-6">
            <a href="#book" className="hover:text-gold transition-colors">
              Book
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#top" className="hover:text-gold transition-colors">
              ↑ Top
            </a>
          </div>
        </div>
      </div>

      {/* Subtle bottom bar with purple gradient */}
      <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </footer>
  );
}
