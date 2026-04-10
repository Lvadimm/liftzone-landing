import { FadeUp, StaggerGroup } from "./AnimatedSection";

/*
  Every card here maps to a REAL card in the Activity dashboard
  (ActivityDashboardView.swift -> DashboardConfigService).
*/
const cards = [
  {
    title: "Daily Goals",
    description: "Activity rings for calories, exercise minutes, and completed workouts — all against your targets.",
    screenshot: "card-daily-goals.png",
  },
  {
    title: "Nutrition Snapshot",
    description: "Today's calories and macro split at a glance. Protein, carbs, and fats with daily progress.",
    screenshot: "card-nutrition.png",
  },
  {
    title: "Steps & Distance",
    description: "Live step count with a 7-day sparkline and distance pulled from HealthKit.",
    screenshot: "card-steps.png",
  },
  {
    title: "Heart Rate",
    description: "Resting and active heart rate from Apple Watch. Zones and recovery trends in one card.",
    screenshot: "card-heart-rate.png",
  },
  {
    title: "Workout Volume",
    description: "Total volume per muscle group. See if you're training balanced or skipping legs.",
    screenshot: "card-volume.png",
  },
  {
    title: "Personal Records",
    description: "Max weight for every exercise. Hit a PR and LiftZone Workouts logs it automatically.",
    screenshot: "card-prs.png",
  },
  {
    title: "Workout Streak",
    description: "Current streak, weekly completion rate, and a 7-day bar showing training days.",
    screenshot: "card-streak.png",
  },
  {
    title: "Weight Tracking",
    description: "Log your weight, follow the trend. A smoothed line cuts through daily noise.",
    screenshot: "card-weight.png",
  },
  {
    title: "Macro Balance",
    description: "Protein, carbs, and fats in a pie chart. Balanced or leaning — you'll know.",
    screenshot: "card-macros.png",
  },
  {
    title: "Weekly Report",
    description: "Sessions, average steps, meals logged, sleep tracked — your whole week in one card.",
    screenshot: "card-weekly.png",
  },
  {
    title: "Sleep",
    description: "Last night's duration, goal status, and a 7-day sparkline from Apple Health.",
    screenshot: "card-sleep.png",
  },
  {
    title: "Recovery & Strain",
    description: "How ready your body is and how hard you've been pushing. Recovery meets context.",
    screenshot: "card-recovery.png",
  },
  {
    title: "Hydration",
    description: "Water intake vs. daily goal with a 7-day trend to keep you consistent.",
    screenshot: "card-hydration.png",
  },
  {
    title: "Energy",
    description: "Your energy level as a percentage — from fully charged to depleted.",
    screenshot: "card-energy.png",
  },
  {
    title: "Progress Photos",
    description: "Before-and-after photos stored in the app. See your transformation side by side.",
    screenshot: "card-progress.png",
  },
  {
    title: "Achievements",
    description: "50+ milestones across PRs, consistency, volume, and muscle groups. Unlock as you train.",
    screenshot: "card-achievements.png",
  },
];

export default function Features() {
  return (
    <section className="relative pb-32 md:pb-40">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10">
        <FadeUp>
          <p className="text-sm font-semibold tracking-widest text-white/25 uppercase">
            Dashboard
          </p>
          <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-tight">
            Your whole fitness picture.{" "}
            <span className="text-white/35">One screen.</span>
          </h2>
          <p className="mt-3 max-w-md text-base text-white/40">
            16 cards you can drag, reorder, and show only what matters to you.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={i}>
              <div className="group flex h-full flex-col">
                {/* Fixed-height image area */}
                <div className="flex aspect-[3/2] items-center justify-center rounded-2xl p-4">
                  <img
                    src={`${import.meta.env.BASE_URL}${c.screenshot}`}
                    alt={c.title}
                    className="max-h-full max-w-full rounded-xl object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* Text */}
                <div className="px-1 pt-3">
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/35">{c.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
