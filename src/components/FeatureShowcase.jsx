import { motion } from "framer-motion";
import {
  Sparkles,
  ScanLine,
  Salad,
  BatteryCharging,
  TrendingUp,
  LayoutList,
  Check,
} from "lucide-react";
import { FadeUp, Parallax } from "./AnimatedSection";

const showcases = [
  {
    icon: Sparkles,
    tag: "AI Plan",
    accent: "#2e86f0",
    glow: "rgba(46,134,240,0.16)",
    title: "Never wonder what to do at the gym again.",
    description:
      "Tell LiftZone your goal and what you train with, and the right session is always waiting — every exercise, every weight, every rep. It nudges you a little further each week, so you keep getting stronger instead of stalling.",
    bullets: [
      "Walk in knowing exactly what to lift today",
      "Gets a little harder each week, so you keep growing",
      "On your wrist too, set by set",
    ],
    image: "feature-ai-coach.png",
  },
  {
    icon: ScanLine,
    tag: "Food Scanner",
    accent: "#ff7a45",
    glow: "rgba(255,122,69,0.16)",
    title: "Know what's on your plate in seconds.",
    description:
      "Point your phone at your food and see the calories and macros right away — no scrolling through a database, no guessing portions. The thing that makes most people quit tracking, gone.",
    bullets: [
      "Calories and macros in seconds, not minutes",
      "Reads a whole plate, not just one food",
      "Or scan a barcode — packaged food is instant",
    ],
    image: "feature-food-scanner.png",
  },
  {
    icon: Salad,
    tag: "Nutrition",
    accent: "#3fb98a",
    glow: "rgba(63,185,138,0.16)",
    title: "Finally know if you're eating enough.",
    description:
      "See how close you are to your calorie and protein goal at any point in the day — so you can fix the gap while it still counts, instead of finding out tomorrow.",
    bullets: [
      "Stay on top of protein and calories daily",
      "See exactly which meal moved your numbers",
      "Too busy to type? Just say what you ate",
    ],
    image: "feature-nutrition.png",
  },
  {
    icon: BatteryCharging,
    tag: "Daily Check-In",
    accent: "#19a7c4",
    glow: "rgba(25,167,196,0.16)",
    title: "Know when to push — and when to ease off.",
    description:
      "A ten-second check-in each day — sleep, energy, stress, and the muscles that feel sore — shows you how recovered you really are. So you go hard when your body's ready, and ease off before a niggle turns into time off.",
    bullets: [
      "Rate sleep, energy, and stress in seconds",
      "Tap the muscles that feel sore today",
      "Train hard when fresh, recover when you're not",
    ],
    image: "feature-checkin.png",
  },
  {
    icon: TrendingUp,
    tag: "Progress & Analytics",
    accent: "#6a7bff",
    glow: "rgba(106,123,255,0.16)",
    title: "Watch yourself get stronger.",
    description:
      "Your estimated max on every lift, your personal records the moment you hit them, and progress photos side by side — proof you're moving forward, even on the weeks it doesn't feel like it.",
    bullets: [
      "See your estimated max climb on every lift",
      "Every personal record, caught and kept",
      "Before and after, side by side",
    ],
    image: "feature-progress.png",
  },
  {
    icon: LayoutList,
    tag: "Programs",
    accent: "#9b6bff",
    glow: "rgba(155,107,255,0.16)",
    title: "Or just follow a proven plan.",
    description:
      "Pick what you're after — get stronger, build muscle, lean out, or train from home — and follow a coach-built program one session at a time. Every move comes with a video, so you're never unsure how to do it.",
    bullets: [
      "50+ programs for every goal and level",
      "Just show up and follow along",
      "A video for every exercise",
    ],
    image: "feature-programs.png",
  },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[82rem] px-5 md:px-8">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Features</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Built for better training.{" "}
            <span className="text-ink/40">Designed for daily life.</span>
          </h2>
        </FadeUp>

        <div className="mt-16 flex flex-col gap-7 md:gap-9">
          {showcases.map((s, i) => (
            <FeatureRow key={s.tag} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ icon: Icon, tag, accent, glow, title, description, bullets, image, index }) {
  const imageLeft = index % 2 === 1;

  return (
    <FadeUp>
      <div className="surface-card lift-card grad-border group relative grid overflow-hidden rounded-[2.25rem] md:grid-cols-2">
        {/* Visual */}
        <div
          className={`relative flex items-center justify-center overflow-hidden px-8 py-12 md:px-10 md:py-14 ${imageLeft ? "md:order-1" : "md:order-2"}`}
          style={{ background: `radial-gradient(120% 90% at 50% 10%, ${glow}, transparent 70%)` }}
        >
          <div className="pointer-events-none absolute inset-x-10 top-8 h-48 rounded-full blur-[70px]" style={{ background: glow }} />
          <Parallax speed={26}>
            <motion.img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={tag}
              className="relative z-10 w-[230px] drop-shadow-[0_28px_56px_rgba(30,40,70,0.24)] transition-transform duration-700 group-hover:scale-[1.03] md:w-[250px]"
              loading="lazy"
            />
          </Parallax>
        </div>

        {/* Text */}
        <div className={`flex flex-col justify-center px-7 py-10 md:px-12 md:py-16 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
          <span
            className="inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
            style={{ background: `${accent}14`, color: accent }}
          >
            <Icon size={14} /> {tag}
          </span>

          <h3 className="mt-5 max-w-md text-[1.6rem] font-semibold leading-[1.1] tracking-tight text-ink md:text-[2rem]">
            {title}
          </h3>

          <p className="mt-4 max-w-md text-[1.02rem] leading-relaxed text-muted">{description}</p>

          <ul className="mt-6 flex flex-col gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: `${accent}1f`, color: accent }}
                >
                  <Check size={12} strokeWidth={3} />
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
