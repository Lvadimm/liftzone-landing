import { GripVertical, Eye, SlidersHorizontal } from "lucide-react";
import { FadeUp } from "./AnimatedSection";

/* Each maps to a real card in the Activity dashboard. */
const rowA = [
  "card-lz-power",
  "card-nutrition",
  "card-readiness",
  "card-steps",
  "card-muscle-volume",
  "card-heart-rate",
  "card-mood",
  "card-volume",
  "card-prs",
];
const rowB = [
  "card-energy-balance",
  "card-daily-goals",
  "card-training-load",
  "card-weekly",
  "card-sleep",
  "card-progress",
  "card-hydration",
  "card-weight",
];

const notes = [
  { icon: GripVertical, text: "Drag to reorder" },
  { icon: Eye, text: "Hide what you don't use" },
  { icon: SlidersHorizontal, text: "Full or mini layouts" },
];

function Tile({ name }) {
  return (
    <div className="mx-3 shrink-0">
      <img
        src={`${import.meta.env.BASE_URL}${name}.png`}
        alt=""
        className="h-[150px] w-auto rounded-2xl drop-shadow-[0_16px_40px_rgba(20,30,60,0.16)] md:h-[180px]"
        loading="lazy"
        aria-hidden="true"
      />
    </div>
  );
}

function Row({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex w-max" style={{ animation: `marquee ${reverse ? 64 : 56}s linear infinite ${reverse ? "reverse" : ""}` }}>
      {doubled.map((n, i) => (
        <Tile key={`${n}-${i}`} name={n} />
      ))}
    </div>
  );
}

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[82rem] px-5 md:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Dashboard</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Your whole fitness picture.{" "}
            <span className="text-ink/40">One screen.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[1.02rem] text-muted">
            Training, nutrition, sleep, recovery, steps — everything that matters, pulled from
            your workouts and Apple Health into one screen you arrange your way.
          </p>
        </FadeUp>

        <FadeUp delay={1} className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {notes.map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft">
              <Icon size={16} className="text-accent" /> {text}
            </span>
          ))}
        </FadeUp>
      </div>

      {/* Drifting card rails */}
      <div className="relative mt-14 flex flex-col gap-5">
        <Row items={rowA} reverse={false} />
        <Row items={rowB} reverse={true} />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas to-transparent md:w-40" />
      </div>
    </section>
  );
}
