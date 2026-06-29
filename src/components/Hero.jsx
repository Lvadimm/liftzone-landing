import { motion } from "framer-motion";
import { Sparkles, Flame, ScanLine, Award, Heart } from "lucide-react";
import { FadeUp, Parallax } from "./AnimatedSection";
import GlassButton, { AppleIcon } from "./GlassButton";

const APP_URL =
  "https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-20">
      {/* Mesh orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-[12%] h-[30rem] w-[30rem] animate-orb rounded-full bg-[#ffd9c2]/60 blur-[110px]" />
        <div className="absolute top-[6%] right-[8%] h-[26rem] w-[26rem] animate-orb rounded-full bg-[#cfe4ff]/70 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute top-[42%] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 animate-orb rounded-full bg-[#d6f4ec]/60 blur-[120px] [animation-delay:-11s]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>

      <div className="mx-auto max-w-[82rem] px-5 md:px-8">
        {/* Eyebrow */}
        <FadeUp className="flex justify-center">
          <a
            href="#weekly"
            className="glass group inline-flex items-center gap-2 rounded-full py-1.5 pl-2 pr-4 text-sm"
          >
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
              <Sparkles size={12} /> New
            </span>
            <span className="font-medium text-ink-soft">AI Weekly Report &amp; live Apple Watch coaching</span>
            <span className="text-faint transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={1} className="mx-auto mt-7 max-w-4xl text-center">
          <h1 className="text-[clamp(2.7rem,7vw,5.3rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-ink">
            Train smarter.{" "}
            <span className="serif text-gradient-accent italic">Eat better.</span>{" "}
            <span className="text-ink/40">See results.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={2} className="mx-auto mt-6 max-w-2xl text-center">
          <p className="text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.5] text-muted">
            Know exactly what to lift, see what you&apos;re really eating, and get coached
            from your wrist — with{" "}
            <span className="font-medium text-ink">a plan that pushes you further every week</span>.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={3} className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <GlassButton href={APP_URL} variant="primary" size="lg" icon={<AppleIcon size={19} />}>
            Download Free
          </GlassButton>
          <GlassButton href="#features" variant="light" size="lg" external={false}>
            Explore features
          </GlassButton>
        </FadeUp>

        <FadeUp delay={4} className="mt-5 text-center">
          <p className="text-sm text-faint">
            Free forever · 2 weeks of Pro included · No account required
          </p>
        </FadeUp>

        {/* Trust pills */}
        <FadeUp delay={5} className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {["280+ exercises", "50+ programs", "Apple Watch", "HealthKit", "Privacy-first"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white/50 px-3.5 py-1.5 text-xs font-medium text-ink-soft backdrop-blur-sm"
            >
              {t}
            </span>
          ))}
        </FadeUp>

        {/* Device cluster */}
        <div className="relative mt-16 flex items-end justify-center md:mt-20">
          {/* soft glow */}
          <div className="pointer-events-none absolute bottom-10 left-1/2 h-72 w-[44rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-accent/12 blur-[90px]" />

          {/* Left phone */}
          <Parallax speed={48} className="hidden md:block">
            <motion.img
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: -7 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              src={`${import.meta.env.BASE_URL}hero-nutrition.png`}
              alt="Calorie and macro tracking"
              className="animate-float-slow w-[218px] translate-x-10 translate-y-8 drop-shadow-[0_30px_60px_rgba(30,40,70,0.22)]"
            />
          </Parallax>

          {/* Center phone */}
          <Parallax speed={80} className="z-10">
            <motion.img
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              src={`${import.meta.env.BASE_URL}hero-workout.png`}
              alt="Guided workout with exercise video and set logging"
              className="animate-float w-[260px] drop-shadow-[0_40px_80px_rgba(30,40,70,0.28)] md:w-[300px]"
            />
          </Parallax>

          {/* Right phone */}
          <Parallax speed={48} className="hidden md:block">
            <motion.img
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 7 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              src={`${import.meta.env.BASE_URL}hero-goals.png`}
              alt="Daily activity goals"
              className="animate-float-slow w-[218px] -translate-x-10 translate-y-8 drop-shadow-[0_30px_60px_rgba(30,40,70,0.22)] [animation-delay:-3s]"
            />
          </Parallax>

          {/* Floating glass chips — each quotes a real screen in the app */}

          {/* Camera meal scan — the food scanner result */}
          <FloatingChip
            className="absolute left-[5%] top-[17%] hidden lg:flex"
            icon={<ScanLine size={15} className="text-accent" />}
            title="92% match"
            sub="Full English · 1,200 cal"
            delay={0.6}
          />

          {/* Strength PR — estimated 1RM tracking */}
          <FloatingChip
            className="absolute left-[2%] top-[60%] hidden lg:flex"
            icon={<Award size={15} className="text-[#f5a524]" />}
            title="New PR"
            sub="Bench Press · Est. 1RM"
            delay={0.78}
          />

          {/* Apple Watch live heart rate */}
          <FloatingChip
            className="absolute right-[6%] top-[15%] hidden lg:flex"
            icon={<Heart size={14} fill="currentColor" className="text-[#ff3b30]" />}
            title="128 bpm"
            sub="Apple Watch · Fat Burn"
            delay={0.68}
          />

          {/* LZ Power — signature training score */}
          <FloatingChip
            className="absolute right-[4%] top-[58%] hidden lg:flex"
            icon={<Flame size={15} className="text-[#ff7a45]" />}
            title="+36 LZ Power"
            sub="this session"
            delay={0.86}
          />
        </div>
      </div>
    </section>
  );
}

function FloatingChip({ className = "", icon, title, sub, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={`glass-strong animate-float items-center gap-3 rounded-2xl py-2.5 pl-2.5 pr-4 ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold text-ink">{title}</span>
        <span className="block text-xs text-muted">{sub}</span>
      </span>
    </motion.div>
  );
}
