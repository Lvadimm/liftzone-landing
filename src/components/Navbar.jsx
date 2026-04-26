import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] px-5 pt-5 transition-transform duration-300 ease-[cubic-bezier(0.625,0.05,0,1)] md:px-10 md:pt-8 ${
          hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex max-w-[80rem] items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 flex items-center gap-2.5 text-lg font-bold text-white">
            <img src={`${import.meta.env.BASE_URL}icon.png`} alt="LiftZone Workouts" className="h-10 w-10 rounded-xl shadow-lg" />
            LiftZone Workouts
          </a>

          {/* Glass pill nav — desktop */}
          <div
            className={`hidden items-center gap-1 rounded-full p-1 transition-all duration-300 md:flex ${
              scrolled
                ? "glass-strong"
                : "border border-white/[0.08] bg-white/[0.04] backdrop-blur-xl"
            }`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-5 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex items-center gap-2 rounded-full bg-white/[0.07] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/[0.12]"
            >
              <AppleIcon />
              Download
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[110] flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.625, 0.05, 0, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10 bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass mt-4 flex items-center gap-2.5 rounded-full px-10 py-4 text-lg font-semibold text-white"
            >
              <AppleIcon />
              Download Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
