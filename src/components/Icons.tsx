import React from "react";
// @ts-ignore
import vcLogo from "../assets/images/vc_studios_logo_1779814462897.png";

export function Logo({ size = 48 }: { size?: number }) {
  return (
    <img 
      src={vcLogo} 
      width={size} 
      height={size} 
      alt="VisionCraft Studios Logo" 
      className="rounded-xl object-contain shadow-[0_4px_24px_rgba(236,72,153,0.15)] bg-white/5 border border-white/10 hover:border-white/35 transition-all duration-300 cursor-pointer select-none"
      referrerPolicy="no-referrer"
    />
  );
}

export function ColorGradingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform hover:scale-105 transition-transform duration-300">
      <defs>
        <linearGradient id="colorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      
      {/* Concentric Color Spectrum Circles */}
      <circle cx="24" cy="24" r="16" stroke="url(#colorGrad)" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="10" stroke="url(#colorGrad)" strokeWidth="1.5" strokeDasharray="4 2" />
      
      {/* Focus reticle */}
      <path d="M24 4V12M24 36V44M4 24H12M36 24H44" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
      
      {/* Central Prism or Lens Aperture */}
      <polygon points="24,19 28,26 20,26" fill="url(#colorGrad)" />
    </svg>
  );
}

export function VFXCompositingIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform hover:rotate-6 transition-transform duration-300">
      <defs>
        <linearGradient id="vfxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      
      {/* Central 3D wireframe cube representing track points and visual integration */}
      <rect x="12" y="12" width="24" height="24" rx="4" stroke="url(#vfxGrad)" strokeWidth="2" fill="none" />
      
      {/* Inner tracker design */}
      <circle cx="24" cy="24" r="4" fill="url(#vfxGrad)" />
      
      {/* Node connections */}
      <path d="M12 12L20 20M36 12L28 20M12 36L20 28M36 36L28 28" stroke="url(#vfxGrad)" strokeWidth="1.5" strokeDasharray="2 1" />
      
      {/* Corner bounding indicators for tracking */}
      <path d="M8 16V8H16" stroke="url(#vfxGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 16V8H32" stroke="url(#vfxGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M8 32v8h8" stroke="url(#vfxGrad)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 32v8H32" stroke="url(#vfxGrad)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SoundDesignIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform hover:-translate-y-1 transition-transform duration-300">
      <defs>
        <linearGradient id="soundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      
      {/* Audio Wave Amplitude lines */}
      <path d="M8 24H12M16 24V16M16 24V32M20 24V10M20 24V38M24 24V6M24 24V42M28 24V14M28 24V34M32 24V18M32 24V30M36 24V20M36 24V28M40 24H44" stroke="url(#soundGrad)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Surround wave propagation lines */}
      <path d="M4 24C4 13.5 12.5 5 24 5" stroke="url(#soundGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path d="M44 24C44 34.5 35.5 43 24 43" stroke="url(#soundGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}
