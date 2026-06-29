import { motion } from "framer-motion";
import { Watch, RefreshCw, Gauge, Activity, Heart, Check } from "lucide-react";
import { FadeUp, Parallax } from "./AnimatedSection";
import WatchFrame from "./WatchFrame";
import WatchCarousel from "./WatchCarousel";

const bullets = [
  { icon: RefreshCw, text: "Log every set from your wrist — even with no phone nearby" },
  { icon: Gauge, text: "Dial in the weight with the Digital Crown, mid-set" },
  { icon: Activity, text: "Heart rate, readiness and calories, right there as you train" },
];

export default function AppleWatch() {
  return (
    <section id="watch" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto grid max-w-[82rem] items-center gap-12 px-5 md:grid-cols-2 md:px-8 lg:gap-20">
        {/* Visual */}
        <FadeUp className="relative order-2 flex justify-center md:order-1">
          {/* glow ring */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/12 blur-[80px]" />
          <Parallax speed={30} className="relative">
            <WatchFrame className="animate-float">
              <WatchCarousel />
            </WatchFrame>
          </Parallax>

          {/* Synced chip */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            className="glass-strong absolute left-0 top-[18%] flex items-center gap-2 rounded-full py-2 pl-2 pr-3.5 sm:left-[6%]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#34c759] text-white">
              <Check size={13} strokeWidth={3} />
            </span>
            <span className="text-sm font-semibold text-ink">Synced</span>
          </motion.div>

          {/* HR chip */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="glass-strong absolute bottom-[20%] right-0 flex items-center gap-2 rounded-full py-2 pl-2 pr-3.5 sm:right-[4%]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff3b30] text-white">
              <Heart size={12} fill="currentColor" />
            </span>
            <span className="text-sm font-semibold text-ink">
              58 <span className="font-normal text-muted">bpm</span>
            </span>
          </motion.div>
        </FadeUp>

        {/* Text */}
        <div className="order-1 md:order-2">
          <FadeUp>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3.5 py-1.5 text-xs font-semibold text-ink-soft">
              <Watch size={14} /> Apple Watch
            </span>
          </FadeUp>
          <FadeUp delay={1}>
            <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.04] tracking-tight text-ink">
              Your next set,{" "}
              <span className="serif text-gradient-accent italic">on your wrist.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={2}>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-muted">
              Start a workout on your phone and it's instantly on your watch. Follow each move
              on screen, log every set, dial in the weight, and keep an eye on your heart rate —
              no phone needed at the rack.
            </p>
          </FadeUp>
          <FadeUp delay={3}>
            <ul className="mt-7 flex flex-col gap-4">
              {bullets.map(({ icon: Icon, text }) => (
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
      </div>
    </section>
  );
}
