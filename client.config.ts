// ─────────────────────────────────────────────────────────────
//  CLIENT CONFIG  —  edit this file to update the whole site
// ─────────────────────────────────────────────────────────────

export const client = {

  // ── Brand ──────────────────────────────────────────────────
  name:        "Hair by Shannon",
  tagline:     "Birmingham Braid Atelier",
  location:    "Birmingham, AL",
  established: "2019",
  coordinates: "33.5°N · 86.8°W",

  // ── Contact & booking ──────────────────────────────────────
  instagram:   "https://instagram.com/hair.by.shannnn.x",
  instagramHandle: "@hair.by.shannnn.x",
  email:       "hair.by.shannon@gmail.com",
  calendly:    "https://calendly.com/Ontheway09",
  hours:       "Tues – Sat · 9am — 8pm",
  address:     "Birmingham, AL · Address upon confirmation",

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    eyebrow:     "Est. Birmingham · By Appointment",
    firstName:   "hair",
    lastName:    "Shannon",
    description: "A private braiding atelier where every plait is composed — knotless, boho, feed-ins. Crafted slow, worn for weeks.",
  },

  // ── About / Signature ──────────────────────────────────────
  about: {
    heading:   ["Patience.", "Precision.", "Plait."],
    bio: [
      "Shannon trained her hands the way a couturier trains for an atelier — slow, deliberate, in love with the work. Each style is custom-mapped to the curve of your scalp and the way you carry your shoulders.",
      "No assembly line. One client at a time, somewhere warm in Birmingham, with a candle lit and your favourite drink poured.",
    ],
    stats: [
      { value: "06+",   label: "years of plaiting" },
      { value: "1.2k",  label: "loyal clientele"   },
      { value: "★ 4.98", label: "ig review average" },
    ],
  },

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      n: "01", name: "Knotless Braids",
      spec: "Small · Medium · Large", hours: "5—8 hrs", price: "from $220",
      note: "The signature. Featherlight roots, sculpted ends.",
    },
    {
      n: "02", name: "Boho Knotless",
      spec: "Human curls woven through", hours: "6—9 hrs", price: "from $260",
      note: "Soft, romantic, lived-in. The current favourite.",
    },
    {
      n: "03", name: "Feed-In Cornrows",
      spec: "Straight back · Patterns", hours: "2—4 hrs", price: "from $120",
      note: "Architectural. Days-long polish without bulk.",
    },
    {
      n: "04", name: "Stitch Braids",
      spec: "Pattern · Beads · Cuffs", hours: "3—5 hrs", price: "from $160",
      note: "Editorial detail work. Bring inspiration.",
    },
    {
      n: "05", name: "Goddess Locs",
      spec: "Short · Mid · Hip length", hours: "6—10 hrs", price: "from $280",
      note: "Wrapped in temperament. Lasts six weeks.",
    },
    {
      n: "06", name: "Bespoke Consultation",
      spec: "By request · In-studio", hours: "45 min", price: "complimentary",
      note: "Bring your vision. Leave with a plan.",
    },
  ],

  // ── Testimonials ───────────────────────────────────────────
  voices: [
    {
      quote: "I drove four hours for these braids and would do it again tomorrow. Most comfortable install of my life — and they still look fresh six weeks in.",
      name: "Aniyah J.", role: "Returning · Knotless",
    },
    {
      quote: "She doesn't rush. You feel like the only client in the world. I've never had braids photographed this many times by strangers.",
      name: "Maya R.", role: "Bridal Trial",
    },
    {
      quote: "Sat for boho knotless and woke up the next morning without a single bump. That's never happened to me. Worth every dollar.",
      name: "Treasure K.", role: "First Visit",
    },
    {
      quote: "Shannon mapped a part for my hairline that I didn't know was possible. Editorial-level work in a calm, candle-lit room.",
      name: "Daja M.", role: "Editorial Client",
    },
  ],

  // ── Reviews summary ────────────────────────────────────────
  reviewScore: "4.98",
  reviewCount: "312",

  // ── Booking section ────────────────────────────────────────
  booking: {
    subtext: "New slots open the first of each month. A small deposit secures your seat. Cancellations made 72 hours prior are refunded in full.",
    note:    "Hair extensions provided in studio · Deposit secures the chair",
  },

};
