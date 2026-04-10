import { FadeUp } from "./AnimatedSection";

export default function Cta() {
  return (
    <section className="relative py-32 md:py-40">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[25rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-10">
        <FadeUp>
          <h2 className="text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] font-semibold tracking-tight">
            Ready when you are.
          </h2>
        </FadeUp>

        <FadeUp delay={1}>
          <p className="mx-auto mt-5 max-w-md text-lg text-white/45">
            Start with one workout. One meal logged. LiftZone Workouts
            meets you where you are and grows with you.
          </p>
        </FadeUp>

        <FadeUp delay={2}>
          <a
            href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass mt-8 inline-flex items-center gap-2.5 rounded-full px-10 py-4.5 text-lg font-semibold text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download Free
          </a>
        </FadeUp>

        <FadeUp delay={3}>
          <p className="mt-5 text-sm text-white/25">
            Free forever. 2 weeks of Pro included. No account required.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
