import { motion } from "framer-motion";
import { FadeUp } from "./AnimatedSection";
import GlassButton, { AppleIcon } from "./GlassButton";

const APP_URL =
  "https://apps.apple.com/app/liftzone-workouts-gym-planner/id6742913519";

export default function Cta() {
  return (
    <section className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-[78rem] overflow-hidden rounded-[2.5rem] px-6 py-20 text-center md:px-10 md:py-28"
        style={{ background: "linear-gradient(160deg, #1a2230 0%, #0f131b 55%, #0c1c39 100%)" }}>
        {/* glow + grid */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-[40rem] max-w-[90%] -translate-x-1/2 rounded-full bg-accent/30 blur-[90px]" />
          <div className="absolute bottom-[-20%] right-[6%] h-64 w-64 rounded-full bg-[#59cdbf]/20 blur-[80px]" />
        </div>

        <div className="relative">
          <FadeUp>
            <h2 className="mx-auto max-w-2xl text-[clamp(2.4rem,5.5vw,4rem)] font-semibold leading-[1.02] tracking-tight text-white">
              Ready when{" "}
              <span className="serif italic text-sky">you are.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={1}>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/55">
              Start with one workout. One meal logged. LiftZone meets you where you are —
              and grows with you.
            </p>
          </FadeUp>
          <FadeUp delay={2}>
            <motion.div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <GlassButton href={APP_URL} variant="primary" size="lg" icon={<AppleIcon size={19} />}>
                Download Free
              </GlassButton>
              <GlassButton href="#features" variant="dark" size="lg" external={false}>
                Explore features
              </GlassButton>
            </motion.div>
          </FadeUp>
          <FadeUp delay={3}>
            <p className="mt-6 text-sm text-white/35">
              Free forever · 2 weeks of Pro included · No account required
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
