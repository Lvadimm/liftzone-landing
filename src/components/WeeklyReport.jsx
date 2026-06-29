import { motion } from "framer-motion";
import { Sparkles, CalendarCheck, Brain, BellRing } from "lucide-react";
import { FadeUp, Parallax } from "./AnimatedSection";

const points = [
  { icon: Brain, text: "Like having a coach review your whole week" },
  { icon: CalendarCheck, text: "Know exactly what to fix next week" },
  { icon: BellRing, text: "Lands on your phone every Monday morning" },
];

export default function WeeklyReport() {
  return (
    <section id="weekly" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-10 h-[24rem] w-[24rem] animate-orb rounded-full bg-[#cfe4ff]/60 blur-[120px]" />
        <div className="absolute left-[8%] bottom-0 h-[20rem] w-[20rem] animate-orb rounded-full bg-[#e7defc]/60 blur-[110px] [animation-delay:-7s]" />
      </div>

      <div className="mx-auto grid max-w-[82rem] items-center gap-12 px-5 md:grid-cols-2 md:px-8 lg:gap-16">
        {/* Text */}
        <div>
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-semibold text-accent">
              <Sparkles size={14} /> New · Pro
            </span>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.04] tracking-tight text-ink">
              Your week,{" "}
              <span className="serif text-gradient-accent italic">explained</span> by AI.
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
              Every Monday, LiftZone reviews your whole week and writes a clear, personal
              report — what went well, what to fix, and exactly what to do next.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <ul className="mt-7 flex flex-col gap-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Icon size={18} className="text-accent" />
                  </span>
                  <span className="text-[0.98rem] text-ink-soft">{text}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        {/* Visual */}
        <FadeUp delay={2} className="relative flex justify-center">
          {/* soft glow behind the phone */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[90px]" />

          <Parallax speed={26} className="relative">
            {/* iPhone-style frame — the full screen, score and AI summary visible */}
            <div className="relative mx-auto w-[268px] rounded-[3rem] border border-white/12 bg-[#0b0c10] p-[7px] shadow-[0_34px_72px_rgba(20,30,60,0.32)] md:w-[298px]">
              <div className="overflow-hidden rounded-[2.55rem]">
                <img
                  src={`${import.meta.env.BASE_URL}shot-weekly.png`}
                  alt="LiftZone Weekly Report — weekly score and written AI summary"
                  className="block w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Parallax>

          {/* Monday chip */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="glass-strong animate-float absolute left-0 top-[7%] z-10 hidden items-center gap-2.5 rounded-2xl py-2.5 pl-2.5 pr-4 sm:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-white">
              <BellRing size={16} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-ink">Monday · 9:00</span>
              <span className="block text-xs text-muted">Your report is ready</span>
            </span>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
