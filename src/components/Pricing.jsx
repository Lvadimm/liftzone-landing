import { FadeUp } from "./AnimatedSection";

const freeFeatures = [
  "200+ exercises with video guides",
  "Workout tracking and full history",
  "Manual meal logging and barcode scanner",
  "50+ professionally designed programs",
  "Apple Watch companion app",
  "HealthKit integration",
  "Progress photos and personal records",
  "Achievements, streaks, and heatmaps",
  "Activity dashboard with 16 cards",
  "Data export (CSV and image)",
];

const proFeatures = [
  "AI-generated workout plans",
  "AI food scanner (camera)",
  "Voice meal logging",
  "Full plan customization",
  "Offline workout videos",
];

function CheckIcon({ accent }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={accent ? "text-accent" : "text-white/30"}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 md:py-40">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-[80rem] px-5 md:px-10">
        <FadeUp>
          <p className="text-sm font-semibold tracking-widest text-white/25 uppercase">
            Pricing
          </p>
          <h2 className="mt-4 max-w-xl text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-tight">
            Free forever.{" "}
            <span className="text-white/35">Pro when you're ready.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-white/40">
            Everything you need to train and track is free. Upgrade to Pro for
            AI-powered coaching and nutrition scanning.
          </p>
        </FadeUp>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {/* Free card */}
          <FadeUp delay={1}>
            <div className="glass-strong flex h-full flex-col rounded-3xl p-8 md:p-10">
              <div className="mb-6">
                <h3 className="text-xl font-semibold">Free</h3>
                <p className="mt-1 text-sm text-white/40">
                  No account required. No time limit.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {freeFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="mt-0.5 shrink-0"><CheckIcon /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white/70"
                >
                  Download Free
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Pro card */}
          <FadeUp delay={2}>
            <div className="pricing-card-pro glass-strong flex h-full flex-col rounded-3xl border-accent/20 p-8 md:p-10">
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">LiftZone Workouts Pro</h3>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-accent">
                    2 WEEKS FREE
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/40">
                  Everything in Free, plus AI-powered features.
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                <li className="mb-1 text-xs font-semibold tracking-wide text-white/25 uppercase">
                  Everything in Free, plus:
                </li>
                {proFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/55">
                    <span className="mt-0.5 shrink-0"><CheckIcon accent /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs leading-relaxed text-white/30">
                Start your free trial inside the app. No payment upfront.
                Cancel anytime — no hard paywall, the free tier stays yours forever.
              </p>

              <div className="mt-auto pt-8">
                <a
                  href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white"
                >
                  Try Pro Free
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
