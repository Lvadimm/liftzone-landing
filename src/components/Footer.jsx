const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Free Tools", href: "/tools/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Privacy", href: "/privacy/" },
      { label: "Feedback", href: "/feedback/" },
      { label: "Contact", href: "mailto:support@liftzoneworkouts.com" },
    ],
  },
];

const APP_URL =
  "https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto grid max-w-[82rem] gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        {/* Brand */}
        <div>
          <a href="#top" className="flex items-center gap-2.5 font-semibold text-ink">
            <img
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt="LiftZone Workouts"
              className="h-9 w-9 rounded-[10px] shadow-[0_4px_14px_rgba(46,134,240,0.25)]"
            />
            <span className="text-[1.02rem] tracking-tight">LiftZone Workouts</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Train smarter, eat better, and see results — your AI training and nutrition coach
            for iPhone and Apple Watch.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-light sheen mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
          >
            <span className="relative z-[2]">Download on the App Store</span>
          </a>
        </div>

        {/* Link columns */}
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-sm font-semibold tracking-tight text-ink">{c.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-[82rem] flex-col items-center justify-between gap-3 border-t border-line px-5 pt-8 text-xs text-faint sm:flex-row md:px-8">
        <p>&copy; {new Date().getFullYear()} LiftZone Workouts. All rights reserved.</p>
        <p>Made for iOS &amp; Apple Watch · Privacy-first</p>
      </div>
    </footer>
  );
}
