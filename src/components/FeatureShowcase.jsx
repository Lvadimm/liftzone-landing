import { FadeUp } from "./AnimatedSection";

/*
  Images map to your App Store screenshots.
  Drop these files into /public/ with the exact filenames below.

  feature-ai-coach.png     - "Your AI Coach" screenshot
  feature-food-scanner.png - "Scan Your Food" screenshot
  feature-nutrition.png    - "Your Nutrient Tracker" / "Macro Details" screenshot
  feature-muscle-map.png   - "Muscle Map" screenshot
  feature-progress.png     - "See Your Growth" / "Real Results" screenshot
  feature-programs.png     - "Expert Routines" / "Proven Programs" screenshot
*/

const showcases = [
  {
    tag: "AI Coach",
    title: "Your plan, built around your life.",
    description:
      "Set a goal and the AI builds a week-by-week program around your schedule, experience, and equipment. It syncs live to Apple Watch so your next set is always on your wrist.",
    bullets: [
      "Adapts to any goal, schedule, or gym setup",
      "Auto-adjusts weight and reps each session",
      "Real-time Apple Watch sync",
    ],
    image: "feature-ai-coach.png",
  },
  {
    tag: "Food Scanner",
    title: "See your macros before you eat.",
    description:
      "Point your camera at any meal and the on-device scanner identifies the food, estimates calories and macros in seconds. Scan barcodes for packaged food or search the USDA database.",
    bullets: [
      "On-device ML — photos never leave your phone",
      "Barcode scanning for packaged food",
      "Logs directly to your daily target",
    ],
    image: "feature-food-scanner.png",
  },
  {
    tag: "Nutrition Tracking",
    title: "The full picture of what you eat.",
    description:
      "Calories, protein, carbs, and fats — tracked against your daily targets. Drill into any meal to see exactly where your numbers come from.",
    bullets: [
      "Daily calorie and macro targets",
      "Per-meal breakdown and history",
      "Visual progress toward your goal",
    ],
    image: "feature-nutrition.png",
  },
  {
    tag: "Muscle Map",
    title: "Train balanced. Train intentional.",
    description:
      "A 3D muscle map shows which groups you've trained and where volume is lacking — so nothing gets left behind.",
    bullets: [
      "3D body model with muscle activation overlay",
      "Weekly volume per muscle group",
      "Highlights neglected or overtrained areas",
    ],
    image: "feature-muscle-map.png",
  },
  {
    tag: "Progress & Analytics",
    title: "Numbers you can train with.",
    description:
      "Estimated 1RM, personal record history, workout heatmaps, and body progress photos — all in one place. The data that actually matters.",
    bullets: [
      "Estimated 1RM via the Epley formula",
      "PR history and volume trends over time",
      "Progress photos with side-by-side comparison",
    ],
    image: "feature-progress.png",
  },
  {
    tag: "Programs",
    title: "Follow the plan. See the results.",
    description:
      "50+ professionally designed programs from beginner to advanced — strength, hypertrophy, fat loss, and more. Pick one and follow it, or let the AI adapt it to your schedule.",
    bullets: [
      "50+ programs, beginner to advanced",
      "Strength, hypertrophy, and fat-loss tracks",
      "Step-by-step guidance with video cues",
    ],
    image: "feature-programs.png",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[80rem] px-5 md:px-10">
        <FadeUp>
          <p className="text-sm font-semibold tracking-widest text-white/25 uppercase">
            Features
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-tight">
            Built for better training.{" "}
            <span className="text-white/35">Designed for daily life.</span>
          </h2>
        </FadeUp>

        <div className="mt-20 flex flex-col gap-6">
          {showcases.map((s, i) => (
            <FeatureCard key={i} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ tag, title, description, bullets, image, index }) {
  const imageLeft = index % 2 === 0;

  return (
    <FadeUp>
      <div className={`feature-card group relative grid overflow-hidden rounded-[2.5rem] md:grid-cols-2 ${imageLeft ? "" : "md:[&>*:first-child]:order-2"}`}>

        {/* App Store screenshot */}
        <div className="relative flex items-center justify-center overflow-hidden bg-card py-8 px-6 md:py-10 md:px-10">
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={tag}
            className="relative z-10 w-full max-w-[280px] rounded-2xl object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.03] md:max-w-[320px]"
          />
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[300px] w-[300px] rounded-full bg-accent/[0.04] blur-[80px]" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center bg-card px-8 py-10 md:px-12 md:py-16">
          <span className="inline-block w-fit rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1 text-xs font-semibold tracking-wide text-white/40 backdrop-blur-md">
            {tag}
          </span>

          <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-md text-base leading-relaxed text-white/40">
            {description}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.05]">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white/35">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </FadeUp>
  );
}
