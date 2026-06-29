/* One Rep Max calculator — uses the app's shared formulas. */
import { oneRepMax, effectiveReps, FORMULAS, pctForReps } from "/formulas/strength.js";
import { kgToLb, lbToKg, fmt, roundTo } from "/formulas/units.js";

const $ = (id) => document.getElementById(id);
const weightEl = $("weight");
const repsEl = $("reps");
const rpeEl = $("rpe");
const oneRmEl = $("oneRm");
const unitEl = $("oneRmUnit");
const capEl = $("formulaCap");
const statusEl = $("status");

let unit = "kg";

function clearChart() {
  document.querySelectorAll('tr[data-reps] .w').forEach((c) => (c.textContent = "—"));
}

function fillChart(orm) {
  document.querySelectorAll("tr[data-reps]").forEach((tr) => {
    const r = parseInt(tr.dataset.reps, 10);
    const cell = tr.querySelector(".w");
    if (cell) cell.textContent = `${fmt(orm * pctForReps(r), 1)} ${unit}`;
  });
}

function recompute() {
  const w = parseFloat(weightEl.value);
  const reps = parseInt(repsEl.value, 10);
  const rpe = parseFloat(rpeEl.value);

  if (!isFinite(w) || w <= 0 || !isFinite(reps) || reps < 1) {
    oneRmEl.textContent = "—";
    unitEl.textContent = `${unit} estimated 1RM`;
    capEl.textContent = "Enter a weight and reps to estimate your 1RM";
    clearChart();
    return;
  }

  const effReps = isFinite(rpe) ? effectiveReps(reps, rpe) : reps;
  const orm = oneRepMax(w, effReps, "average");

  oneRmEl.textContent = fmt(orm, 1);
  unitEl.textContent = `${unit} estimated 1RM`;

  const e = FORMULAS.epley.fn(w, effReps);
  const b = FORMULAS.brzycki.fn(w, effReps);
  let cap = `Epley ${fmt(e, 0)} · Brzycki ${fmt(b, 0)} ${unit} (averaged)`;
  if (isFinite(rpe) && rpe < 10) cap += ` · adjusted for RPE ${rpe} (~${fmt(effReps, 1)} reps to failure)`;
  capEl.textContent = cap;

  fillChart(orm);
}

function setUnit(next) {
  if (next === unit) return;
  const w = parseFloat(weightEl.value);
  if (isFinite(w)) {
    weightEl.value = next === "lb" ? fmt(roundTo(kgToLb(w), 1), 1) : fmt(roundTo(lbToKg(w), 0.5), 1);
  }
  unit = next;
  $("unitKg").setAttribute("aria-checked", String(next === "kg"));
  $("unitLb").setAttribute("aria-checked", String(next === "lb"));
  weightEl.step = next === "lb" ? "1" : "0.5";
  recompute();
}

$("unitKg").addEventListener("click", () => setUnit("kg"));
$("unitLb").addEventListener("click", () => setUnit("lb"));
$("unitKg").addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); $("unitLb").focus(); setUnit("lb"); }
});
$("unitLb").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); $("unitKg").focus(); setUnit("kg"); }
});

let t;
const debounced = () => { clearTimeout(t); t = setTimeout(recompute, 120); };
[weightEl, repsEl].forEach((el) => el.addEventListener("input", debounced));
rpeEl.addEventListener("change", recompute);

$("copyBtn").addEventListener("click", async () => {
  const txt = `My estimated 1RM: ${oneRmEl.textContent} ${unit} (${weightEl.value} ${unit} × ${repsEl.value} reps) — via liftzoneworkouts.com`;
  try {
    await navigator.clipboard.writeText(txt);
    statusEl.textContent = "Copied ✓";
  } catch {
    statusEl.textContent = "Press ⌘/Ctrl+C to copy";
  }
  setTimeout(() => { statusEl.textContent = ""; }, 2500);
});

recompute();
