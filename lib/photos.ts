// ─────────────────────────────────────────────────────────────────────────────
//  📸  PHOTO CONFIG — Lashes by L
// ─────────────────────────────────────────────────────────────────────────────
//
//  Real client photos from @lashesby.l live in /public/photos/
//  Set a value to null to fall back to a luxe purple gradient placeholder.
//
//  To swap a photo:  drop the new file into /public/photos/ (any name)
//                    and update the path here.
// ─────────────────────────────────────────────────────────────────────────────

export const PHOTOS: {
  hero:      string | null;
  signature: string | null;
  look: {
    boho:     string | null; // → Hybrid · Soft Wispy
    stitched: string | null; // → Lift & Tint
    knotless: string | null; // → Classic · Refined Weightless
    goddess:  string | null; // → Mega Volume · Editorial Density
    tribal:   string | null; // → Volume · Handmade Fans
    feedin:   string | null; // → Refill · Maintenance
  };
} = {
  hero:      null,
  signature: null,

  look: {
    boho:     null,
    stitched: null,
    knotless: null,
    goddess:  null,
    tribal:   null,
    feedin:   null,
  },
};
