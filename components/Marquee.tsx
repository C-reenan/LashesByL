"use client";

export function Marquee() {
  const phrases = [
    "Knotless Braids",
    "Boho Curls",
    "Feed-In Cornrows",
    "Goddess Locs",
    "Stitch Braids",
    "Tribal Plaits",
    "Bohemian Knotless",
    "Soft Locs",
  ];
  const full = [...phrases, ...phrases, ...phrases];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-gold/15 bg-ink-950/40 py-5 sm:py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10" />

      <div className="flex whitespace-nowrap animate-marquee">
        {full.map((p, i) => (
          <span
            key={i}
            className="mx-8 sm:mx-12 font-display italic text-2xl sm:text-3xl text-rose-blush/70"
          >
            {p}
            <span className="mx-8 sm:mx-12 text-gold/60 not-italic font-mono text-sm align-middle">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
