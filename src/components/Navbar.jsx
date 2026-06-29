import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppleIcon } from "./GlassButton";

const links = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Tools", href: "/tools/" },
  { label: "Blog", href: "/blog/" },
];

const APP_URL =
  "https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 240);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[100] px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-8 md:pt-5 ${
          hidden && !menuOpen ? "-translate-y-[140%]" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[82rem] items-center justify-between rounded-full py-2 pl-3 pr-2 transition-all duration-500 md:pl-5 ${
            scrolled ? "glass-pill" : "border border-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 font-semibold text-ink">
            <img
              src={`${import.meta.env.BASE_URL}icon.png`}
              alt="LiftZone Workouts"
              className="h-9 w-9 rounded-[10px] shadow-[0_4px_14px_rgba(46,134,240,0.28)]"
            />
            <span className="text-[1.02rem] tracking-tight">LiftZone</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft/80 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass sheen hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white md:inline-flex"
          >
            <span className="relative z-[2] inline-flex items-center gap-2">
              <AppleIcon size={15} />
              Get the app
            </span>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[110] flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Toggle menu"
          >
            <span className={`h-[2px] w-5 rounded bg-ink transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-[2px] w-5 rounded bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-5 rounded bg-ink transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8 bg-canvas/85 backdrop-blur-2xl md:hidden"
          >
            {[...links, { label: "Privacy", href: "/privacy/" }].map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
                className="font-display text-3xl font-semibold tracking-tight text-ink"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass sheen mt-4 inline-flex items-center gap-2.5 rounded-full px-9 py-4 text-lg font-semibold text-white"
            >
              <span className="relative z-[2] inline-flex items-center gap-2.5">
                <AppleIcon size={18} />
                Download Free
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
