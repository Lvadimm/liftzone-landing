import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/*
  Auto-advancing crossfade slideshow of real Apple Watch screens.
  Renders a stack of absolutely-positioned screenshots that fade
  between each other — designed to live inside <WatchFrame>'s screen slot.
*/

// Ordered to mirror a real session: pick the workout, log a set, watch the
// move, then glance at the live stats faces.
const screens = [
  { src: "watch-9.png", alt: "Today's workout list on Apple Watch" },
  { src: "watch-11.png", alt: "Logging a set on Apple Watch" },
  { src: "watch-1.png", alt: "Exercise video on Apple Watch" },
  { src: "watch-2.png", alt: "Daily readiness score on Apple Watch" },
  { src: "watch-7.png", alt: "Live heart rate on Apple Watch" },
  { src: "watch-10.png", alt: "Activity and steps on Apple Watch" },
  { src: "watch-5.png", alt: "Calories remaining on Apple Watch" },
  { src: "watch-4.png", alt: "Daily goals on Apple Watch" },
  { src: "watch-6.png", alt: "Weekly score on Apple Watch" },
  { src: "watch-3.png", alt: "Stress and recovery on Apple Watch" },
];

const INTERVAL_MS = 2600;

export default function WatchCarousel() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % screens.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      {screens.map((s, i) => (
        <motion.img
          key={s.src}
          src={`${import.meta.env.BASE_URL}${s.src}`}
          alt={s.alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeInOut" }}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i === index ? undefined : true}
        />
      ))}
    </div>
  );
}
