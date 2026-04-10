import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerGroup } from "./AnimatedSection";

const points = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Developer-blind architecture",
    description: "Your data lives in your private iCloud container. We cannot see your weights, photos, voice recordings, or health data.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "On-device processing",
    description: "Meal scanning, voice logging, and recovery insights run locally on your device or through native Apple services.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "No tracking, no ads",
    description: "No third-party analytics. No ad networks. You are the customer, not the product.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
    title: "Encrypted iCloud sync",
    description: "Data is encrypted by Apple and synced only across your authorized devices. No external servers involved.",
  },
];

export default function Privacy() {
  const [showPolicy, setShowPolicy] = useState(false);

  return (
    <section id="privacy" className="relative py-32 md:py-40">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-[80rem] px-5 md:px-10">
        <FadeUp>
          <p className="text-sm font-semibold tracking-widest text-white/25 uppercase">Privacy & Data</p>
          <h2 className="mt-4 max-w-lg text-[clamp(2rem,5vw,3rem)] leading-[1.1] font-semibold tracking-tight">
            Built private{" "}
            <span className="text-white/35">from day one.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-white/40">
            Your health data is personal. LiftZone Workouts keeps it that way.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <FadeUp key={i} delay={i} className="h-full">
              <div className="glass-strong flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:border-white/[0.12]">
                <div className="mb-5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-white/45">
                  {p.icon}
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/40">{p.description}</p>
              </div>
            </FadeUp>
          ))}
        </StaggerGroup>

        {/* Toggle button */}
        <FadeUp>
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowPolicy((v) => !v)}
              className="glass-button inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white/50 transition-colors hover:text-white/70"
            >
              {showPolicy ? "Hide Full Policy" : "See Full Privacy Policy"}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 ${showPolicy ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>
        </FadeUp>

        {/* Full Privacy Policy — expandable */}
        <AnimatePresence>
          {showPolicy && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.625, 0.05, 0, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 rounded-3xl border border-white/[0.04] bg-white/[0.02] p-8 md:p-12">
                <h3 className="text-2xl font-semibold tracking-tight">Privacy Policy for LiftZone Workouts</h3>
                <p className="mt-2 text-sm text-white/25">Last Updated: April 9, 2026</p>

                <div className="mt-8 space-y-8 text-sm leading-relaxed text-white/45">
                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">1. Introduction</h4>
                    <p>LiftZone Workouts (the "App") is a biomechanical fitness platform providing distinct training experiences including Dynamic Personalization and Workout Library Programs. We are committed to a Privacy First architecture. This policy explains our Developer Blind data model which ensures that your personal training, sleep, nutrition, and health data remains under your exclusive control.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">2. The Developer Blind Data Model</h4>
                    <p className="mb-3">Unlike traditional fitness applications that collect and store your data on their own servers, LiftZone Workouts utilizes Apple CloudKit technology.</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Zero Access Storage:</strong> Your workout history, profile metrics, nutrition records, voice logs, and sleep data are stored in your private iCloud database.</li>
                      <li><strong className="text-white/60">Encrypted Sync:</strong> Data is encrypted by Apple and synced only across your authorized devices.</li>
                      <li><strong className="text-white/60">No Collection:</strong> We, the developers of LiftZone Workouts, do not have access to nor do we store your personal information on any servers owned or managed by us. We cannot see your weights, photos, voice recordings, or health data.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">3. Data Usage Distinction</h4>
                    <p className="mb-3">While we do not collect your data, the App processes it locally and within your private iCloud container to provide functional intelligence:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Dynamic Coaching:</strong> The App processes your workout performance and exercise history locally. Our algorithm recalibrates your Estimated One Rep Max to ensure progressive overload in future sessions.</li>
                      <li><strong className="text-white/60">Voice and Image Processing:</strong> Features such as the Meal Scanner and Voice Logging process images and audio locally on your device or securely through native Apple OS services. We do not see, hear, or store the images you scan or the audio you speak.</li>
                      <li><strong className="text-white/60">Recovery and Strain Tracking:</strong> The App processes your sleep, energy levels, and outside activity logs locally to provide your personalized recovery and strain insights.</li>
                      <li><strong className="text-white/60">Data Export:</strong> When you choose to export your workout history as an image or CSV file, that file is generated locally on your device. You retain full control over where and with whom you share those files.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">4. Optional HealthKit Integration</h4>
                    <p>With your explicit permission, the App views specific data from Apple HealthKit (such as heart rate, steps, and sleep data) to populate your Activity Dashboard and calculate your daily recovery. This data is used for display and local processing only and is never transmitted to us or any outside service.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">5. Outside Service Providers</h4>
                    <p className="mb-3">We limit outside involvement to essential infrastructure:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Apple CloudKit:</strong> Provides secure private data synchronization.</li>
                      <li><strong className="text-white/60">Apple Speech Recognition:</strong> Safely processes your voice logs directly through your device without sending data to us.</li>
                      <li><strong className="text-white/60">RevenueCat:</strong> Manages subscription status anonymously. We do not collect or store your payment details. All transactions are handled securely by the Apple App Store.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">6. Your Rights and Data Control</h4>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Access and Modification:</strong> You can update your profile metrics directly within the App at any time.</li>
                      <li><strong className="text-white/60">Irreversible Deletion:</strong> You maintain full ownership of your data. You may permanently delete your profile and all associated history through the Reset App Data option in the App Settings. This action immediately removes all records from both your local device and your private iCloud container.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">7. Children's Privacy</h4>
                    <p>LiftZone Workouts is not intended for use by children under the age of 13. We do not knowingly collect or have access to any personal information from children.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">8. Legal Disclaimer</h4>
                    <p>LiftZone Workouts provides fitness and nutrition information for educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a healthcare professional before starting any new exercise program.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">9. Contact Us</h4>
                    <p>For questions regarding this Privacy First policy, please contact:</p>
                    <p className="mt-2">Email: <a href="mailto:support@liftzoneworkouts.com" className="text-accent hover:underline">support@liftzoneworkouts.com</a></p>
                    <p>Website: <a href="https://www.liftzoneworkouts.com" className="text-accent hover:underline">www.liftzoneworkouts.com</a></p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
