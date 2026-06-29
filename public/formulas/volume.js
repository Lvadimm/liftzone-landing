/* LiftZone free tools — RP-style weekly volume landmarks (MEV / MAV / MRV).
   Identical to the LiftZone Workouts engine (program-engine/engine.swift).
   Each array is [beginner, intermediate, advanced]. MAV is a [low, high] range.
   Values are working sets per muscle PER WEEK. */

export const LEVELS = [
  { key: "beginner", label: "Beginner", note: "Under 1 year of consistent training" },
  { key: "intermediate", label: "Intermediate", note: "1–3 years" },
  { key: "advanced", label: "Advanced", note: "3+ years" },
];

export const MUSCLES = [
  { key: "chest",      label: "Chest",       mev: [6, 8, 10], mav: [[8, 12], [10, 16], [14, 20]], mrv: [16, 22, 28] },
  { key: "back",       label: "Back",        mev: [6, 8, 10], mav: [[8, 14], [14, 20], [16, 24]], mrv: [18, 25, 32] },
  { key: "shoulders",  label: "Side/Rear Delts", mev: [6, 8, 10], mav: [[8, 12], [12, 18], [16, 22]], mrv: [16, 22, 28] },
  { key: "biceps",     label: "Biceps",      mev: [4, 6, 8],  mav: [[6, 10], [10, 14], [12, 18]], mrv: [14, 18, 22] },
  { key: "triceps",    label: "Triceps",     mev: [4, 6, 8],  mav: [[6, 10], [10, 14], [12, 18]], mrv: [14, 18, 22] },
  { key: "quads",      label: "Quads",       mev: [6, 8, 10], mav: [[8, 14], [12, 18], [14, 22]], mrv: [16, 20, 26] },
  { key: "hamstrings", label: "Hamstrings",  mev: [4, 6, 8],  mav: [[6, 10], [10, 16], [14, 20]], mrv: [14, 20, 26] },
  { key: "glutes",     label: "Glutes",      mev: [4, 6, 8],  mav: [[6, 10], [12, 18], [14, 20]], mrv: [14, 20, 26] },
  { key: "calves",     label: "Calves",      mev: [6, 8, 10], mav: [[8, 12], [12, 16], [14, 20]], mrv: [16, 20, 26] },
  { key: "abs",        label: "Abs",         mev: [4, 6, 8],  mav: [[6, 10], [10, 14], [14, 18]], mrv: [14, 18, 22] },
];

/** Return { mev, mav:[lo,hi], mrv } for a muscle key at a level index (0–2). */
export const landmarksFor = (muscleKey, levelIdx) => {
  const m = MUSCLES.find((x) => x.key === muscleKey);
  if (!m) return null;
  return { mev: m.mev[levelIdx], mav: m.mav[levelIdx], mrv: m.mrv[levelIdx] };
};
