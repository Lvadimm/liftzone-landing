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
                <p className="mt-2 text-sm text-white/25">Last Updated: April 24, 2026</p>

                <div className="mt-8 space-y-8 text-sm leading-relaxed text-white/45">
                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">1. Introduction and Data Controller</h4>
                    <p>LiftZone Workouts ("the App," "we," "us," or "our") is developed and operated by the developer. This Privacy Policy explains how we handle information when you use our iOS application and Apple Watch companion app.</p>
                    <p className="mt-3">We operate under a privacy-first architecture. The vast majority of your personal data — including workout history, nutrition logs, health metrics, body measurements, and progress photos — is stored exclusively in your private Apple iCloud container. We do not operate backend servers that store your personal data. We cannot access, view, or retrieve the contents of your private iCloud container.</p>
                    <p className="mt-3">For users in the European Economic Area (EEA), United Kingdom, or Switzerland, the developer acts as the data controller for the limited data described in Section 5. For all data stored in your private iCloud container, Apple Inc. acts as the data processor under its own terms and privacy policy.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">2. Data We Do Not Access</h4>
                    <p className="mb-3">The following data is stored in your private Apple iCloud container using Apple CloudKit. It is encrypted by Apple and synced only across your own authorized devices. We have zero access to this data:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li>Workout history, exercise performance, sets, reps, and weights</li>
                      <li>Profile information (name, body metrics, fitness goals, experience level)</li>
                      <li>Nutrition logs, meal entries, and macro tracking data</li>
                      <li>Progress photos and body composition images</li>
                      <li>Voice recordings used for meal logging</li>
                      <li>Sleep, energy, strain, and recovery data</li>
                      <li>Activity logs, custom exercises, achievements, and streaks</li>
                    </ul>
                    <p className="mt-3">Because we cannot access this data, we cannot comply with data access requests for it. You control this data entirely through your Apple ID and iCloud account settings.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">3. On-Device Processing</h4>
                    <p className="mb-3">The App performs the following processing locally on your device. No data from these operations is transmitted to our servers:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Workout Intelligence:</strong> Our algorithm processes your exercise history locally to calculate your Estimated One-Rep Max (E1RM), generate adaptive workout plans, and manage progressive overload.</li>
                      <li><strong className="text-white/60">Camera Food Scanner:</strong> Images are analyzed on-device using Apple Core ML. They are never transmitted to us or any external server.</li>
                      <li><strong className="text-white/60">On-Device Language Model:</strong> On supported devices (iOS 26+), the App uses Apple Foundation Models for meal description processing. This occurs entirely on your device.</li>
                      <li><strong className="text-white/60">Recovery and Strain:</strong> Sleep, energy, and activity data are processed locally for recovery insights.</li>
                      <li><strong className="text-white/60">Data Export:</strong> Workout history exports (image or CSV) are generated locally. You control where and with whom you share them.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">4. Apple HealthKit Integration</h4>
                    <p>With your explicit opt-in permission, the App reads and writes specific data types from Apple HealthKit:</p>
                    <p className="mt-3"><strong className="text-white/60">Data we read:</strong> heart rate, resting heart rate, HRV, step count, walking/running distance, active energy burned, exercise minutes, sleep analysis, and dietary nutrients.</p>
                    <p className="mt-3"><strong className="text-white/60">Data we write:</strong> completed workouts (type, duration, calories) and dietary nutrients logged through the App.</p>
                    <p className="mt-3">HealthKit data is never transmitted to us, to RevenueCat, to the USDA, or to any third party. You may revoke permissions at any time through iOS Settings &gt; Privacy &amp; Security &gt; Health.</p>
                    <p className="mt-3">In compliance with Apple's HealthKit guidelines, we do not use HealthKit data for advertising, marketing, or sale to data brokers.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">5. Third-Party Services</h4>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.1 RevenueCat (Subscription Management)</strong></p>
                    <p className="mb-2">RevenueCat receives only an anonymous user identifier (not your Apple ID, name, or email) and your subscription status (whether you are subscribed to LiftZone Pro).</p>
                    <p>RevenueCat does not receive your name, email, fitness goals, workout data, nutrition logs, or health data. All payments are handled by the Apple App Store. <a href="https://www.revenuecat.com/privacy" className="text-accent hover:underline">RevenueCat Privacy Policy</a>.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.2 USDA FoodData Central API</strong></p>
                    <p className="mb-2">When you search for food items, the App sends your search query to the USDA API (api.nal.usda.gov) to retrieve nutritional information. The USDA receives your food search text, your device IP address, and a user-agent header.</p>
                    <p>The USDA does not receive your name, Apple ID, workout data, or health data. <a href="https://www.usda.gov/privacy-policy" className="text-accent hover:underline">USDA Privacy Policy</a>.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.3 Apple CloudKit</strong></p>
                    <p>Synchronizes your data across your devices using your private iCloud container. <a href="https://www.apple.com/privacy/" className="text-accent hover:underline">Apple Privacy Policy</a>.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.4 Apple Speech Recognition</strong></p>
                    <p>Voice meal logging uses Apple's Speech framework. Depending on your device and iOS version, voice data may be processed on-device or transmitted to Apple's servers. We do not receive, store, or access your voice recordings or transcripts.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.5 Apple App Store (Payments)</strong></p>
                    <p>All payments are processed by Apple. We do not receive your payment card details or billing address.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">6. Data Retention</h4>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">iCloud Data:</strong> Retained for as long as you maintain your Apple ID. We have no ability to set retention periods.</li>
                      <li><strong className="text-white/60">RevenueCat Data:</strong> Retained per RevenueCat's policy. You may request deletion by contacting us.</li>
                      <li><strong className="text-white/60">USDA Queries:</strong> We do not log your food searches. The USDA may retain server logs per U.S. federal requirements.</li>
                      <li><strong className="text-white/60">On-Device Data:</strong> Retained until you delete the App or use Reset App Data in Settings.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">7. Your Rights</h4>
                    <p className="mb-3"><strong className="text-white/60">All Users:</strong> Access and export your data within the App. Edit profile, workouts, and nutrition logs. Permanently delete all data via Settings &gt; Reset App Data. Revoke camera, microphone, speech, and HealthKit permissions in iOS Settings.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">EEA, UK, and Switzerland (GDPR):</strong></p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Legal Basis:</strong> Legitimate interest (subscription management) and consent (HealthKit, camera, microphone). You may withdraw consent at any time.</li>
                      <li><strong className="text-white/60">Right to Object:</strong> Contact us to object to processing based on legitimate interest.</li>
                      <li><strong className="text-white/60">Complaints:</strong> You may lodge a complaint with your local data protection supervisory authority.</li>
                      <li><strong className="text-white/60">International Transfers:</strong> RevenueCat and the USDA API are U.S.-based. RevenueCat uses standard contractual clauses for data transfers.</li>
                    </ul>

                    <p className="mt-4 mb-2"><strong className="text-white/60">California (CCPA/CPRA):</strong></p>
                    <p>We do not sell your personal information. We do not share it for cross-context behavioral advertising. You have the right to know what we collect, request deletion, and opt out of any future sale. We will not discriminate against you for exercising these rights.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">Brazil (LGPD), Canada (PIPEDA), Australia (Privacy Act 1988):</strong></p>
                    <p>You have rights to access, correct, and delete personal data under your respective national privacy laws. Contact us using the information in Section 12.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">8. Children's Privacy</h4>
                    <p>LiftZone Workouts is not directed at children. We do not knowingly collect personal information from children under 13 (U.S., COPPA) or under 16 (EEA, GDPR where applicable). If you believe a child has provided data through the App, contact us and we will delete it.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">9. Security</h4>
                    <p>iCloud data is encrypted by Apple (AES-128 minimum) in transit (TLS 1.2+) and at rest. On-device data is protected by iOS hardware encryption and your device passcode. Keychain entries use the kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly protection class. No method of storage or transmission is 100% secure — we cannot guarantee absolute security.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">10. Health and Fitness Disclaimer</h4>
                    <p>LiftZone Workouts provides fitness programming, nutritional estimates, and recovery insights for informational purposes only. The App is not a medical device. Nutritional estimates from the camera scanner and USDA database are approximations. Always consult a qualified healthcare professional before beginning any exercise program or making significant dietary changes.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">11. Changes to This Policy</h4>
                    <p>We may update this policy from time to time. Material changes will be reflected by updating the "Last Updated" date and, where practicable, through the App or App Store release notes. Continued use after changes constitutes acceptance.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">12. Contact Us</h4>
                    <p><strong className="text-white/60">the developer</strong></p>
                    <p className="mt-2">Email: <a href="mailto:support@liftzoneworkouts.com" className="text-accent hover:underline">support@liftzoneworkouts.com</a></p>
                    <p>Website: <a href="https://www.liftzoneworkouts.com" className="text-accent hover:underline">www.liftzoneworkouts.com</a></p>
                    <p className="mt-2">For GDPR requests, email us with the subject line "GDPR Request." We respond to all legitimate requests within 30 days.</p>
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
