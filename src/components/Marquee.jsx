const items = [
  "Personalized Workout Plans",
  "Food Scanner",
  "Apple Watch",
  "Strength Analytics",
  "1RM Tracking",
  "Progress Photos",
  "50+ Programs",
  "Nutrition Tracking",
  "Voice Logging",
  "Achievements",
  "HealthKit",
  "Muscle Map",
  "Free Forever",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.03] py-4" aria-hidden="true">
      <div className="flex animate-[marquee_55s_linear_infinite]">
        {doubled.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6 px-3">
            <span className="whitespace-nowrap text-sm font-medium text-white/20">{item}</span>
            <span className="text-[6px] text-white/10">&#9679;</span>
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" />
    </div>
  );
}
