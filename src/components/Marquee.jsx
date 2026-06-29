const items = [
  "Personalized Plans",
  "Camera Food Scanner",
  "Apple Watch Coaching",
  "AI Weekly Report",
  "Strength Analytics",
  "1RM Tracking",
  "Progress Photos",
  "50+ Programs",
  "Nutrition Tracking",
  "Voice Logging",
  "Daily Check-In",
  "Free Forever",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-8" aria-hidden="true">
      <div className="flex w-max animate-[marquee_48s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-5 px-5">
            <span className="whitespace-nowrap font-display text-lg font-medium tracking-tight text-ink/30">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/30" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-canvas to-transparent" />
    </div>
  );
}
