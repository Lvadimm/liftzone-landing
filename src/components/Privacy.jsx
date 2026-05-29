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
    description: "Your workouts, nutrition, body measurements, photos, and health metrics live in your private iCloud and on your device. We cannot see them.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "On-device first",
    description: "Your plans, recovery insights, and voice logging are handled on your device or by Apple. Optional cloud features only send the specific item you choose.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "No tracking, no ads",
    description: "No third-party analytics. No ad networks. No profiling. You are the customer, not the product.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 16 12 12 8 16" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      </svg>
    ),
    title: "Encrypted & yours",
    description: "Your data is encrypted by Apple and synced only across your own authorized devices. No accounts, no login, no email required.",
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
                <p className="mt-2 text-sm text-white/25">Last Updated: May 29, 2026</p>

                <div className="mt-8 space-y-8 text-sm leading-relaxed text-white/45">
                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">1. Introduction and Data Controller</h4>
                    <p>LiftZone Workouts ("the App," "we," "us," or "our") is developed and operated by the developer. This Privacy Policy explains how we handle information when you use our iOS application and Apple Watch companion app.</p>
                    <p className="mt-3">We operate under a privacy-first, data-minimizing architecture. The App has no account system and no login: it works from an anonymous, per-installation identifier and never asks for your name, email address, or Apple ID. The vast majority of your personal data — including workout history, nutrition logs, health metrics, body measurements, readiness check-ins, and your progress photos — is stored only on your device and in your own private Apple iCloud container. We cannot access, view, or retrieve it.</p>
                    <p className="mt-3">To provide certain features, we operate a limited, secure cloud service (described in Section 5) that supports subscription verification, security and anti-abuse protection, and optional cloud-assisted features. This service does not store your workout, nutrition, health, or profile records, is never used to advertise to you, and is not used to build a profile about you.</p>
                    <p className="mt-3">For users in the European Economic Area (EEA), United Kingdom, or Switzerland, the developer acts as the data controller for the limited data described in Section 5. For all data stored in your private iCloud container, Apple Inc. acts as the data processor under its own terms and privacy policy. Where we engage the service providers described in Section 5, they act as our processors, and we can identify the specific provider behind each category upon verified request.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">2. Data Stored on Your Device and in Your Private iCloud (We Cannot Access)</h4>
                    <p className="mb-3">The following categories of data are stored on your device and synced through Apple CloudKit to your own private Apple iCloud container. This data is encrypted by Apple and synced only across your own authorized devices. We have zero access to it:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li>Workout history, exercise performance, sets, reps, weights, and RPE</li>
                      <li>Profile information (any name you choose to enter, body metrics, fitness goals, experience level, injury history, equipment)</li>
                      <li>Nutrition logs, meal entries, macros, custom foods, and favorite meals</li>
                      <li>Estimated one-rep maxes and strength metrics</li>
                      <li>Readiness and mood check-ins, and adaptive-session logs</li>
                      <li>Sleep, energy, strain, and recovery data</li>
                      <li>Activity logs, custom exercises, and workout plans</li>
                      <li>Achievements, streaks, and water-intake logs</li>
                    </ul>
                    <p className="mt-3"><strong className="text-white/60">Progress photos and body-composition images</strong> are stored only on your device. They are not synced to iCloud and not transmitted to us or to any third party.</p>
                    <p className="mt-3">Because we cannot access this data, we cannot comply with data access requests for it. You control this data entirely through your Apple ID and iCloud account settings, and you can erase it at any time using Reset App Data (see Section 7).</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">3. On-Device Processing</h4>
                    <p className="mb-3">The App performs the following processing locally on your device. No data from these operations is transmitted to our servers:</p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Workout Intelligence:</strong> Our algorithm processes your exercise history locally to calculate your Estimated One-Rep Max (E1RM), generate adaptive workout plans, and manage progressive overload.</li>
                      <li><strong className="text-white/60">On-Device Food Scanner:</strong> The App includes an on-device food-recognition mode that analyzes images locally on your device. In this mode, images are never transmitted off your device. An optional cloud-assisted scan is described separately in Section 5.1, and you choose which mode to use.</li>
                      <li><strong className="text-white/60">On-Device Language Model:</strong> On supported devices, the App uses Apple's on-device language models to interpret meal descriptions and generate nutritional estimates. This processing occurs entirely on your device.</li>
                      <li><strong className="text-white/60">Recovery and Strain:</strong> Sleep quality, energy levels, readiness, and activity data are processed locally to provide recovery insights and adapt your sessions.</li>
                      <li><strong className="text-white/60">Data Export:</strong> Workout history exports (image or CSV) are generated locally. You control where and with whom you share them.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">4. Apple HealthKit Integration</h4>
                    <p>With your explicit opt-in permission, the App reads and writes specific data types from Apple HealthKit:</p>
                    <p className="mt-3"><strong className="text-white/60">Data we read:</strong> heart rate, resting heart rate, HRV, step count, walking/running distance, active energy burned, exercise minutes, sleep analysis, and dietary nutrients.</p>
                    <p className="mt-3"><strong className="text-white/60">Data we write:</strong> completed workouts (type, duration, calories) and dietary nutrients logged through the App.</p>
                    <p className="mt-3">HealthKit data is never transmitted to us or to any third party. It is used solely for display and local computation within the App. You may revoke permissions at any time through iOS Settings &gt; Privacy &amp; Security &gt; Health.</p>
                    <p className="mt-3">In compliance with Apple's HealthKit guidelines, we do not use HealthKit data for advertising, marketing, or sale to data brokers.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">5. Information We Share With Service Providers</h4>
                    <p>To deliver certain features, the App transmits a strictly limited set of data to the service providers below. We describe each provider by category. We do not sell your personal information, none of these providers receives the contents of your private iCloud container, and we can provide the identity of the specific provider behind each category upon verified request.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.1 Cloud-Assisted Meal Photo Recognition (optional, premium feature)</strong></p>
                    <p className="mb-2">If you choose the cloud-assisted meal scan, the photo of the meal you are scanning is securely transmitted — through our cloud infrastructure provider — to a third-party AI processing provider, which returns an estimate of the food and its nutritional values. Before transmission, the image is resized and its metadata (such as location and EXIF data) is removed. Only the image and minimal technical parameters are sent; no name, identity, health data, or other personal records are included.</p>
                    <p>The image is used solely to generate your scan result. It is processed transiently and is not retained by us or stored on the processing servers, and it is not used to advertise to you, to identify you, or to train unrelated systems. This feature is optional — an on-device scanning mode (Section 3) is also available and transmits nothing off your device.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.2 Subscription Verification (Apple App Store)</strong></p>
                    <p>Subscriptions are sold and managed entirely by Apple through the App Store; we do not use any third-party subscription-management service. To confirm whether you have an active subscription, your App Store purchase receipt is verified on your device and, for cloud-based premium features, transmitted together with an anonymous identifier to our own cloud infrastructure provider, which validates it directly against Apple's cryptographic signature. No separate subscription provider is involved, and no subscription data is shared with any such third party. All payment processing is handled by Apple — we never see your payment details.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.3 Security, Device Integrity, and Anti-Abuse (cloud infrastructure provider)</strong></p>
                    <p>To protect the service from fraud and abuse and to enforce fair-use limits, the App sends an anonymous per-installation identifier and a cryptographic device-integrity attestation to our cloud infrastructure provider when it makes a request on your behalf. The attestation is generated by Apple's Device Check / App Attest service and proves the request comes from a genuine, unmodified copy of the App. It contains no personal content and is validated and then discarded. Our cloud infrastructure provider also retains minimal, non-personal operational data (such as request counters used to enforce rate limits).</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.4 Nutrition Database Lookups (nutrition-database providers)</strong></p>
                    <p>When you search for foods by name or scan a product barcode, the App sends the search text or barcode number — and, as part of any network request, your device's IP address — to one or more third-party nutrition-database providers (including public government and community food databases) to retrieve nutrition facts. These providers do not receive your name, identity, workout data, or health data.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.5 Social Leaderboards (Apple Game Center — optional)</strong></p>
                    <p>If you opt in to leaderboards, the competitive statistics you choose to submit (such as a strength score, estimated maxes, weekly volume, or streak length) and your Game Center alias are shared with Apple Game Center and may be visible to other participants on leaderboards. This feature is optional; we do not submit any scores unless you choose to participate, and your underlying workout, nutrition, and health data is never shared — only the score values you compete with.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.6 Apple iCloud / CloudKit</strong></p>
                    <p>Apple CloudKit synchronizes your data across your devices using your private iCloud container. We do not have access to the contents of your private container. <a href="https://www.apple.com/privacy/" className="text-accent hover:underline">Apple Privacy Policy</a>.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.7 Apple Speech Recognition</strong></p>
                    <p>Voice meal logging uses Apple's Speech framework. Depending on your device and iOS version, voice data may be processed on-device or transmitted to Apple for transcription. We do not receive, store, or access your voice recordings or transcripts — they are processed within the Apple ecosystem and the result is stored only in your private iCloud container.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">5.8 Apple App Store (Payments)</strong></p>
                    <p>All subscription payments are processed by Apple. We do not receive, process, or store your payment card details, billing address, or financial information.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">6. Data Retention</h4>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">iCloud Data:</strong> Retained in your private iCloud container for as long as you maintain your Apple ID. We have no ability to set retention periods for this data.</li>
                      <li><strong className="text-white/60">On-Device Data:</strong> Local data — including progress photos, the local meal-photo cache, cached exercise videos, app preferences, and Keychain entries — is retained until you delete the App or use Reset App Data in Settings.</li>
                      <li><strong className="text-white/60">Cloud-Assisted Scan Images:</strong> Not retained. Images sent for the optional cloud scan are processed transiently to return your result and are then discarded.</li>
                      <li><strong className="text-white/60">Subscription Data:</strong> Your subscription is managed by Apple; we do not store subscription data with any third-party subscription provider. Entitlement results may be briefly cached by our cloud infrastructure provider (see §5.3) and contain no personal content.</li>
                      <li><strong className="text-white/60">Security &amp; Fair-Use Data:</strong> The anonymous identifier, device-integrity validations, and request counters used by our cloud infrastructure provider are kept only as long as needed for security and rate-limiting, and contain no personal content.</li>
                      <li><strong className="text-white/60">Nutrition Queries:</strong> We do not log your food searches. Nutrition-database providers may retain standard server logs per their own requirements.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">7. Your Rights</h4>
                    <p className="mb-3"><strong className="text-white/60">All Users:</strong> Access and export your data within the App. Edit profile, workouts, and nutrition logs. Permanently delete all data via Settings &gt; Reset App Data. Revoke camera, microphone, speech, and HealthKit permissions in iOS Settings.</p>

                    <p className="mt-4 mb-2"><strong className="text-white/60">EEA, UK, and Switzerland (GDPR):</strong></p>
                    <ul className="ml-5 list-disc space-y-2">
                      <li><strong className="text-white/60">Legal Basis:</strong> We process the limited data in Section 5 on the basis of performance of a contract (subscription verification), legitimate interest (securing the service and preventing abuse), and consent (HealthKit, camera, microphone, speech recognition, the optional cloud-assisted scan, and leaderboard participation). You may withdraw consent at any time by declining or revoking the relevant permission or not using the optional feature.</li>
                      <li><strong className="text-white/60">Right to Object:</strong> Contact us to object to processing based on legitimate interest.</li>
                      <li><strong className="text-white/60">Complaints:</strong> You may lodge a complaint with your local data protection supervisory authority.</li>
                      <li><strong className="text-white/60">International Transfers:</strong> Some service providers in Section 5 are based in, or process data in, the United States. Where personal data is transferred outside the EEA, UK, or Switzerland, we rely on appropriate safeguards such as the European Commission's Standard Contractual Clauses.</li>
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
                    <p>iCloud data is encrypted by Apple (AES-128 minimum) in transit (TLS 1.2+) and at rest. On-device data is protected by iOS hardware encryption and your device passcode. Keychain entries (such as the anonymous identifier and trial state) use the kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly protection class and are not included in unencrypted backups.</p>
                    <p className="mt-3">All communication with the limited cloud services in Section 5 occurs over encrypted connections (TLS). Requests are protected by Apple's device-integrity attestation to prevent abuse, and images sent for the optional cloud scan are transmitted securely and not stored. No method of storage or transmission is 100% secure — we cannot guarantee absolute security.</p>
                  </div>

                  <div>
                    <h4 className="mb-3 text-base font-semibold text-white/70">10. Health and Fitness Disclaimer</h4>
                    <p>LiftZone Workouts provides fitness programming, nutritional estimates, and recovery insights for informational purposes only. The App is not a medical device. Nutritional estimates produced by the food scanner (whether on-device or cloud-assisted) and by nutrition databases are approximations. Always consult a qualified healthcare professional before beginning any exercise program or making significant dietary changes.</p>
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
