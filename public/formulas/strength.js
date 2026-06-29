/* LiftZone free tools — strength math (identical to the LiftZone Workouts app).
   Sources (iOS):
     • Epley/Brzycki averaged 1RM — ActivityViewModel.swift
     • %1RM-by-reps table          — program-engine/sim_prescription.swift
     • DOTS (IPF 2019) coefficients — DOTSCoefficient.swift
   Keep this file as the SINGLE source of truth so the web tools stay in lockstep with the app. */

/** Epley: weight × (1 + reps / 30). */
export const epley = (weight, reps) => weight * (1 + reps / 30);

/** Brzycki: weight / (1.0278 − 0.0278 × reps). Valid for reps < 37. */
export const brzycki = (weight, reps) => {
  const denom = 1.0278 - 0.0278 * reps;
  return denom > 0 ? weight / denom : weight;
};

/** The estimate the app displays: the average of Epley and Brzycki. */
export const average1RM = (weight, reps) => (epley(weight, reps) + brzycki(weight, reps)) / 2;

export const FORMULAS = {
  average: { label: "LiftZone average", fn: average1RM },
  epley: { label: "Epley", fn: epley },
  brzycki: { label: "Brzycki", fn: brzycki },
};

/** Compute a 1RM with a named formula (default = the app's average). */
export const oneRepMax = (weight, reps, key = "average") =>
  (FORMULAS[key] ?? FORMULAS.average).fn(weight, reps);

/** A set taken below failure isn't a true max. Effective reps-to-failure = reps + (10 − RPE).
    RPE 10 (to failure) leaves reps unchanged. */
export const effectiveReps = (reps, rpe) => reps + Math.max(0, 10 - rpe);

/** The app's exact percentage-of-1RM by target reps (sim_prescription.swift). */
export const PCT_BY_REPS = {
  1: 1.0, 2: 0.95, 3: 0.93, 4: 0.9, 5: 0.87, 6: 0.85,
  7: 0.83, 8: 0.8, 9: 0.77, 10: 0.75, 11: 0.7, 12: 0.7,
};
export const pctForReps = (reps) => (reps >= 1 && reps <= 12 ? PCT_BY_REPS[reps] : 0.67);

/** Rows for the training chart (reps → %1RM → load). */
export const REP_CHART_ROWS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* ── DOTS (IPF 2019) — for the future strength-score tool ───────────── */
const DOTS_COEF = {
  male: [-307.75076, 24.0900756, -0.1918759221, 0.0007391293, -0.000001093],
  female: [-57.96288, 13.6175032, -0.1126655495, 0.0005158568, -0.0000010706],
};
const DOTS_MIN_BW = 35;
const DOTS_MAX_BW = 250;

export const dotsCoefficient = (bodyweightKg, sex = "male") => {
  const bw = Math.max(DOTS_MIN_BW, Math.min(DOTS_MAX_BW, bodyweightKg));
  const k = DOTS_COEF[sex] ?? DOTS_COEF.male;
  const d = k[0] + k[1] * bw + k[2] * bw ** 2 + k[3] * bw ** 3 + k[4] * bw ** 4;
  return d > 0.0001 ? 500 / d : 1;
};
export const dots = (e1rmKg, bodyweightKg, sex = "male") =>
  e1rmKg * dotsCoefficient(bodyweightKg, sex);
