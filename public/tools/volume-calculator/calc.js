/* Training Volume calculator — RP-style MEV/MAV/MRV landmarks (app-matched). */
import { MUSCLES, LEVELS, landmarksFor } from "/formulas/volume.js";

const $ = (id) => document.getElementById(id);
const muscleEl = $("muscle");
let levelIdx = 1; // intermediate default

const range = (r) => `${r[0]}–${r[1]}`; // en dash

function renderZone() {
  const key = muscleEl.value;
  const lm = landmarksFor(key, levelIdx);
  const m = MUSCLES.find((x) => x.key === key);
  if (!lm || !m) return;
  $("zMev").textContent = String(lm.mev);
  $("zMav").textContent = range(lm.mav);
  $("zMrv").textContent = String(lm.mrv);
  $("zoneTitle").textContent = `${m.label} — ${LEVELS[levelIdx].label}`;
}

function renderTable() {
  document.querySelectorAll("tr[data-muscle]").forEach((tr) => {
    const lm = landmarksFor(tr.dataset.muscle, levelIdx);
    if (!lm) return;
    tr.querySelector(".mev").textContent = String(lm.mev);
    tr.querySelector(".mav").textContent = range(lm.mav);
    tr.querySelector(".mrv").textContent = String(lm.mrv);
    tr.style.background = tr.dataset.muscle === muscleEl.value ? "rgba(46,134,240,0.06)" : "";
  });
}

function recompute() { renderZone(); renderTable(); }

function setLevel(idx) {
  if (idx === levelIdx) return;
  levelIdx = idx;
  [0, 1, 2].forEach((i) => $(`lvl${i}`).setAttribute("aria-checked", String(i === idx)));
  recompute();
}

muscleEl.addEventListener("change", recompute);
[0, 1, 2].forEach((i) => $(`lvl${i}`).addEventListener("click", () => setLevel(i)));

// arrow-key navigation across the level radiogroup
[0, 1, 2].forEach((i) => {
  $(`lvl${i}`).addEventListener("keydown", (e) => {
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = Math.min(2, i + 1);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = Math.max(0, i - 1);
    if (next !== null) { e.preventDefault(); $(`lvl${next}`).focus(); setLevel(next); }
  });
});

recompute();
