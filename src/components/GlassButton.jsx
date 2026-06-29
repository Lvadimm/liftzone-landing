import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function AppleIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/*
  Magnetic liquid-glass button. The whole control drifts a few px
  toward the cursor with a spring, and a specular sheen sweeps on hover.
  variant: "primary" (blue glass) | "light" (frosted white)
*/
export default function GlassButton({
  children,
  href,
  variant = "primary",
  size = "md",
  icon = null,
  external = true,
  className = "",
}) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 18, mass: 0.3 });
  const y = useSpring(my, { stiffness: 200, damping: 18, mass: 0.3 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  const variants = {
    primary: "liquid-glass sheen",
    light: "liquid-glass-light sheen",
    dark: "liquid-glass-ondark sheen",
  };
  const base = variants[variant] ?? variants.primary;
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[0.95rem]",
    lg: "px-9 py-4.5 text-lg",
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={`relative z-0 inline-flex items-center justify-center gap-2.5 rounded-full font-semibold ${base} ${sizes[size]} ${className}`}
    >
      <span className="relative z-[2] inline-flex items-center gap-2.5">
        {icon}
        {children}
      </span>
    </motion.a>
  );
}
