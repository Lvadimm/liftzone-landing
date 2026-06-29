/*
  CSS Apple Watch (titanium) frame for a raw watch screenshot.
  Self-contained — no image asset for the case, drawn entirely in CSS.
*/
export default function WatchFrame({ src, alt = "", className = "", children }) {
  return (
    <div className={`relative ${className}`} style={{ width: "236px" }}>
      {/* Digital crown */}
      <div className="absolute top-[34%] -right-[6px] z-0 h-12 w-[7px] rounded-r-[4px] bg-gradient-to-b from-[#3a3d44] via-[#1c1e22] to-[#34373d] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
      <div className="absolute top-[52%] -right-[5px] z-0 h-7 w-[6px] rounded-r-[4px] bg-gradient-to-b from-[#2a2c31] to-[#17181b]" />

      {/* Case */}
      <div
        className="relative z-10 rounded-[58px] p-[10px]"
        style={{
          background: "linear-gradient(145deg, #4a4d54 0%, #1d1f23 38%, #0f1012 70%, #34373d 100%)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -2px 3px rgba(0,0,0,0.6), 0 30px 60px rgba(20,30,55,0.28), 0 8px 18px rgba(20,30,55,0.18)",
        }}
      >
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[48px] bg-black" style={{ aspectRatio: "198 / 242" }}>
          {children ?? (
            <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
          )}
          {/* glass glare */}
          <div className="pointer-events-none absolute inset-0 z-20 rounded-[48px] bg-gradient-to-br from-white/12 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
