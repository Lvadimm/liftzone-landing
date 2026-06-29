/* LiftZone free tools — unit + rounding helpers.
   kg→lb uses 2.20462, matching the LiftZone Workouts app (WeightTrackingCard.swift). */

export const KG_TO_LB = 2.20462;

export const kgToLb = (kg) => kg * KG_TO_LB;
export const lbToKg = (lb) => lb / KG_TO_LB;

/** Round to the nearest loadable increment (e.g. 2.5 kg or 5 lb). */
export const roundTo = (value, increment) =>
  increment > 0 ? Math.round(value / increment) * increment : value;

/** Format a number with up to `dp` decimals, trimming trailing zeros. Returns "—" for bad input. */
export const fmt = (n, dp = 1) => {
  if (n === null || n === undefined || !isFinite(n)) return "—";
  return String(Number(n.toFixed(dp)));
};
