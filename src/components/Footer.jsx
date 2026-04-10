export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-10">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center justify-between gap-6 px-5 sm:flex-row md:px-10">
        <a href="#" className="flex items-center gap-2 text-sm font-bold text-white">
          <img src={`${import.meta.env.BASE_URL}icon.png`} alt="LiftZone Workouts" className="h-7 w-7 rounded-lg" />
          LiftZone Workouts
        </a>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-xs font-medium text-white/25 transition-colors hover:text-white/50">
            Features
          </a>
          <a href="#pricing" className="text-xs font-medium text-white/25 transition-colors hover:text-white/50">
            Pricing
          </a>
          <a href="#privacy" className="text-xs font-medium text-white/25 transition-colors hover:text-white/50">
            Privacy
          </a>
          <a
            href="mailto:support@liftzoneworkouts.com"
            className="text-xs font-medium text-white/25 transition-colors hover:text-white/50"
          >
            Contact
          </a>
          <a
            href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white/25 transition-colors hover:text-white/50"
          >
            App Store
          </a>
        </div>

        <p className="text-xs text-white/15">
          &copy; {new Date().getFullYear()} LiftZone Workouts
        </p>
      </div>
    </footer>
  );
}
