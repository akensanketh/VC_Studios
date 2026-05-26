import React from "react";
import { motion } from "motion/react";

interface HeroSectionProps {
  onGetInTouchClick: () => void;
}

export default function HeroSection({ onGetInTouchClick }: HeroSectionProps) {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-transparent text-white py-16 sm:py-24 lg:py-32">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-sky-950/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        <div className="max-w-4xl">
          {/* Partnership Badge above heading */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
              Official Post-Production Partner of{" "}
              <a
                href="http://ffstudios.rf.gd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 transition-all"
              >
                Frame Flicker Studios
              </a>
            </span>
          </motion.div>

          {/* Main heading */}
          <h1 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] leading-[1.15] font-light tracking-tight text-white mb-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="block mb-2 font-light"
            >
              Elevate the stories you want to tell.
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="block font-light text-zinc-100"
            >
              Bring your vision to light
            </motion.span>
          </h1>

          {/* Core high-fidelity CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <button
              onClick={onGetInTouchClick}
              className="px-8 py-3 rounded-full bg-[#121A58] hover:bg-[#1c2780] text-sm font-light text-white tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer shadow-[0_4px_30px_rgba(18,26,88,0.3)] hover:shadow-[0_4px_40px_rgba(18,26,88,0.5)] border border-blue-900/20"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
