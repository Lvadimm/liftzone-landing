import { Check } from "lucide-react";
import { FadeUp } from "./AnimatedSection";
import { AppleIcon } from "./GlassButton";

const APP_URL =
  "https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519";

const freeFeatures = [
  "280+ exercises with video guides",
  "Workout tracking with full history",
  "Apple Watch — live sync, works offline",
  "Calorie & macro logging with barcode scan",
  "Progress photos, PRs & estimated 1RM",
  "Streaks, heatmaps & your LZ Power score",
  "Your full, customizable dashboard",
  "Apple Health sync, in and out",
  "Export your workout history (CSV)",
];

const proFeatures = [
  "Your AI Plan — auto-built, progresses weekly",
  "Build and fully customize your own plans",
  "AI photo meal scanning — even multi-item plates",
  "Hands-free voice meal logging",
  "A written Weekly Report, every Monday",
  "Offline exercise videos",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[82rem] px-5 md:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Free forever.{" "}
            <span className="text-ink/40">Pro when you're ready.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[1.02rem] text-muted">
            Every core feature is free — no expiry, no account required. Pro adds the smart
            tools for those who want to go further.
          </p>
        </FadeUp>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {/* Free */}
          <FadeUp delay={1}>
            <div className="surface-card lift-card flex h-full flex-col rounded-[1.75rem] p-8 md:p-9">
              <h3 className="font-display text-xl font-semibold text-ink">Free Forever</h3>
              <p className="mt-1 text-sm text-muted">No account. No expiry. Yours to keep.</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="font-display text-4xl font-semibold text-ink">$0</span>
                <span className="text-sm text-muted">/ forever</span>
              </div>

              <ul className="mt-7 flex flex-col gap-3">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.93rem] text-ink-soft">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink/8 text-ink-soft">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass-light sheen flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-ink"
                >
                  <span className="relative z-[2] inline-flex items-center gap-2">
                    <AppleIcon size={15} /> Download Free
                  </span>
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Pro */}
          <FadeUp delay={2}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-8 text-white md:p-9"
              style={{ background: "linear-gradient(165deg, #1b2230 0%, #11151d 60%, #0d1b34 100%)" }}>
              {/* glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-accent/30 blur-[70px]" />
              <div className="relative flex items-center gap-3">
                <h3 className="font-display text-xl font-semibold">LiftZone Pro</h3>
                <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-sky">
                  2 WEEKS FREE
                </span>
              </div>
              <p className="relative mt-1 text-sm text-white/55">Everything in Free, plus AI superpowers.</p>

              <ul className="relative mt-7 flex flex-col gap-3">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[0.93rem] text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/25 text-sky">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <p className="relative mt-6 text-xs leading-relaxed text-white/40">
                Start your free trial inside the app. No payment upfront, cancel anytime — the
                free tier stays yours forever.
              </p>

              <div className="relative mt-auto pt-7">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass sheen flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold text-white"
                >
                  <span className="relative z-[2] inline-flex items-center gap-2">
                    <AppleIcon size={15} /> Try Pro Free
                  </span>
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
