import { ShieldCheck, Download, EyeOff, Lock, ArrowRight } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "./AnimatedSection";

const points = [
  {
    icon: ShieldCheck,
    title: "Nobody sees your data — not even us",
    description:
      "Your workouts, meals, body photos, and health numbers stay in your own iCloud and on your phone. They never sit on our servers for anyone to look at.",
  },
  {
    icon: EyeOff,
    title: "No ads. No tracking. Ever.",
    description:
      "Nothing about you is sold, and there are no ad networks or trackers in the app. You're the person we built this for — never a product sold to someone else.",
  },
  {
    icon: Lock,
    title: "Start in seconds — no account",
    description:
      "No login, no email, no password. Open the app and go. Everything syncs privately across your own Apple devices, encrypted the whole way.",
  },
  {
    icon: Download,
    title: "It's yours to keep",
    description:
      "Take your full workout history with you any time, and wipe everything from every device with a single tap if you ever decide to walk away.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[82rem] px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Privacy &amp; data</p>
            <h2 className="mt-3 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.05] tracking-tight text-ink">
              Built private{" "}
              <span className="text-ink/40">from day one.</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
              Your health data is personal. LiftZone keeps it that way — no account, no login,
              and nothing about you sold or used to advertise.
            </p>
            <a
              href="/privacy/"
              className="liquid-glass-light sheen mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink"
            >
              <span className="relative z-[2] inline-flex items-center gap-2">
                Read the full privacy policy <ArrowRight size={15} />
              </span>
            </a>
          </FadeUp>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="surface-card lift-card flex h-full flex-col rounded-3xl p-6">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-[0.98rem] font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
