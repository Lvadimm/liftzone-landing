import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp } from "./AnimatedSection";

const faqs = [
  {
    q: "Is LiftZone really free?",
    a: "Yes. Workout tracking, the 280+ exercise library with video, 50+ coach-built programs, your customizable dashboard, Apple Watch sync, calorie and macro logging, progress photos and PRs — all free forever, with no account and no expiry. Pro adds the AI tools — your auto-built adaptive plan, the photo food scanner, voice logging, and a written Weekly Report — with a 2-week free trial.",
  },
  {
    q: "Do I need an Apple Watch?",
    a: "No. The iPhone app is complete on its own. If you have a Watch, the companion app is a free bonus that lets you log sets, adjust weight with the Digital Crown, and track heart rate at the rack — no phone needed.",
  },
  {
    q: "How does the camera food scanner work?",
    a: "Point your camera at your food and you'll see the calories and macros in seconds — protein, carbs, and fat — without scrolling through a database or guessing portions. It even handles a full plate with several foods on it. Prefer packaged food? Scan the barcode and it's logged instantly. Pro adds the sharpest scanning and hands-free voice logging.",
  },
  {
    q: "Is my health data private?",
    a: "Completely. Your workouts, nutrition, body measurements, and progress photos live on your device and in your own private iCloud — we can't see them. No third-party analytics, no ad networks, no profiling.",
  },
  {
    q: "Will it work if I'm a beginner?",
    a: "Absolutely. Set your experience level and goal during onboarding and your plan adapts to you. There are 50+ programs from first-timer to advanced, each with step-by-step video guidance — plus an AI Plan that builds and progresses itself around your level.",
  },
  {
    q: "Can I cancel Pro anytime?",
    a: "Yes. Subscriptions are managed through the App Store and you can cancel anytime — there's no hard paywall, and the free tier stays yours forever.",
  },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className="surface-card overflow-hidden rounded-2xl">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[1.05rem] font-medium tracking-tight text-ink">{q}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
          <Plus size={17} />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[0.96rem] leading-relaxed text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeUp className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</p>
          <h2 className="mt-3 text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight text-ink">
            Questions, answered.
          </h2>
        </FadeUp>

        <FadeUp delay={1} className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Item key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </FadeUp>
      </div>
    </section>
  );
}
