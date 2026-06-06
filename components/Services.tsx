"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    name: "Premium Classic Lashes",
    spec: "Natural · Refined · Weightless",
    hours: "2—2.5 hrs",
    price: "from $120",
    note: "The signature. One extension per lash, mapped with intention.",
  },
  {
    n: "02",
    name: "Luxury Hybrid Set",
    spec: "Classic & volume blend",
    hours: "2.5—3 hrs",
    price: "from $150",
    note: "Soft texture, quiet drama. The current favourite.",
  },
  {
    n: "03",
    name: "Volume Lash Extensions",
    spec: "Handmade fans · 3D—6D",
    hours: "3—3.5 hrs",
    price: "from $180",
    note: "Architectural fullness. Days-long polish without weight.",
  },
  {
    n: "04",
    name: "Mega Volume Enhancement",
    spec: "Ultra-fine fans · 8D—16D",
    hours: "3.5—4 hrs",
    price: "from $220",
    note: "Editorial density. Bring inspiration.",
  },
  {
    n: "05",
    name: "Lash Lift & Tint",
    spec: "Natural lash · Lifted · Tinted",
    hours: "60—75 min",
    price: "from $95",
    note: "Wrapped in temperament. Lasts six weeks.",
  },
  {
    n: "06",
    name: "Bespoke Consultation",
    spec: "By request · In-studio",
    hours: "30 min",
    price: "complimentary",
    note: "Bring your vision. Leave with a plan.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-40 px-5 sm:px-8 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              className="font-mono text-[10px] sm:text-xs tracking-cinema uppercase text-gold/70"
            >
              ✦ Chapter II — The Menu
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease, delay: 0.1 }}
              className="mt-5 font-display font-light leading-[0.95] text-5xl sm:text-6xl md:text-7xl text-rose-blush"
            >
              The <span className="italic shimmer-text">offering</span>.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="max-w-sm text-rose-blush/60 font-light leading-relaxed text-sm"
          >
            Every appointment is private, never double-booked. Times below
            include the consult; final pricing depends on style & density.
          </motion.p>
        </div>

        <ul className="divide-y divide-gold/15 border-y border-gold/15">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease, delay: 0.05 * i }}
              className="group relative grid grid-cols-12 gap-3 sm:gap-6 py-7 sm:py-9 items-center cursor-default"
            >
              {/* Hover backdrop */}
              <span className="absolute inset-x-0 inset-y-0 -z-0 bg-gradient-to-r from-transparent via-rose-burgundy/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <span className="col-span-2 sm:col-span-1 font-mono text-[10px] sm:text-xs text-gold/70 tracking-luxe relative z-10">
                {s.n}
              </span>

              <div className="col-span-10 sm:col-span-5 relative z-10">
                <h3 className="font-display text-2xl sm:text-4xl text-rose-blush leading-tight transition-transform duration-700 group-hover:translate-x-1">
                  {s.name}
                </h3>
                <p className="mt-1 text-[11px] sm:text-xs tracking-luxe uppercase text-rose-blush/45">
                  {s.spec}
                </p>
              </div>

              <div className="col-span-12 sm:col-span-4 relative z-10">
                <p className="text-sm font-light text-rose-blush/65 italic leading-snug">
                  {s.note}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-1 relative z-10">
                <p className="font-mono text-[10px] sm:text-xs tracking-luxe text-rose-blush/45">
                  {s.hours}
                </p>
              </div>

              <div className="col-span-6 sm:col-span-1 text-right relative z-10">
                <p className="font-display text-base sm:text-xl text-gold">
                  {s.price}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[11px] sm:text-xs tracking-luxe uppercase text-rose-blush/55">
            Premium lash products used in studio · Deposit secures the appointment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
