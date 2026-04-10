import { FadeUp } from "./AnimatedSection";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-b from-[#252525] via-bg to-bg" />
        <div className="absolute top-[18%] left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[24rem] w-[24rem] rounded-full bg-accent/[0.03] blur-[100px]" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-bg via-bg/60 to-transparent" />

      {/* Mobile image — sits at the top, below the navbar */}
      <FadeUp className="relative z-10 flex justify-center pt-28 pb-2 md:hidden">
        <img
          src={`${import.meta.env.BASE_URL}hero-phones.png`}
          alt="LiftZone Workouts app screens"
          className="max-h-[260px] w-full object-contain drop-shadow-2xl"
        />
      </FadeUp>

      {/* Content — pushed to bottom on desktop, normal flow on mobile */}
      <div className="relative z-10 mt-auto w-full px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto grid max-w-[80rem] items-end gap-8 md:grid-cols-2">

          {/* Left — text */}
          <div>
            <FadeUp>
              <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.08] font-semibold tracking-[-0.02em]">
                Train smarter.{" "}
                <span className="text-white/45">Eat better.</span>{" "}
                <span className="text-white/45">See results.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={1}>
              <p className="mt-5 max-w-lg text-[clamp(1rem,1.8vw,1.25rem)] leading-[1.5] font-medium text-white/55">
                LiftZone Workouts plans your training, scans your meals, and
                tracks every rep — so you can focus on showing up.
              </p>
            </FadeUp>

            <FadeUp delay={2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Download Free
                </a>
                <a
                  href="#features"
                  className="glass-button inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-medium text-white/70"
                >
                  Explore Features
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={3}>
              <p className="mt-6 text-sm text-white/30">
                Free forever. 2 weeks of Pro included. No account required.
              </p>
            </FadeUp>

            <FadeUp delay={4}>
              <div className="mt-8 flex items-center gap-4">
                <StatPill label="200+ exercises" />
                <StatPill label="50+ programs" />
                <StatPill label="Apple Watch" />
              </div>
            </FadeUp>
          </div>

          {/* Right — desktop only */}
          <FadeUp delay={2} className="hidden md:flex md:items-end md:justify-center">
            <img
              src={`${import.meta.env.BASE_URL}hero-phones.png`}
              alt="LiftZone Workouts app screens"
              className="w-full max-w-[620px] animate-float object-contain drop-shadow-2xl"
            />
          </FadeUp>

        </div>
      </div>
    </section>
  );
}

function StatPill({ label }) {
  return (
    <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-white/40">
      {label}
    </span>
  );
}
