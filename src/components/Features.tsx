import React from "react";
import { motion } from "motion/react";
import { ColorGradingIcon, VFXCompositingIcon, SoundDesignIcon } from "./Icons";

interface FeaturesProps {
  onLearnMoreClick: (title: string) => void;
}

export default function Features({ onLearnMoreClick }: FeaturesProps) {
  const cardData = [
    {
      title: "Cinematic Grading",
      icon: <ColorGradingIcon />,
      descLines: [
        "Advanced colorimetry tuning,",
        "calibrated for emotional resonance.",
        "Pristine theatrical grading."
      ]
    },
    {
      title: "Invisible VFX",
      icon: <VFXCompositingIcon />,
      descLines: [
        "Photorealistic environment design,",
        "seamless green screen integration.",
        "Uncapped rendering power."
      ]
    },
    {
      title: "Spatial Soundscapes",
      icon: <SoundDesignIcon />,
      descLines: [
        "Dynamic sound editing & foley,",
        "fully mixed in surround and Dolby.",
        "Aural cinematic depth."
      ]
    }
  ];

  return (
    <section id="features" className="w-full bg-transparent text-white pb-32 pt-2 px-6 sm:px-10 lg:px-16 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        {/* Section header custom styled */}
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[25px] sm:text-[28px] md:text-[32px] font-normal tracking-wide text-sky-400"
          >
            VisionCraft Advantage
          </motion.h2>
        </div>

        {/* Triple feature grid column items matching the styling exactly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12 lg:gap-x-16">
          {cardData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              onClick={() => onLearnMoreClick(item.title)}
              className="group cursor-pointer flex flex-col justify-between h-full p-1 rounded-2xl hover:bg-zinc-950/20 transition-all duration-300"
            >
              <div>
                {/* SVG glowing graphic */}
                <div className="mb-6 flex justify-start items-center">
                  {item.icon}
                </div>

                {/* Card Header title */}
                <h3 className="text-[20px] sm:text-[21px] font-light text-white tracking-wide mb-4 group-hover:text-sky-300 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Subtext description mapped into precise line breaks matching the image */}
                <p className="text-[14px] sm:text-[15px] leading-relaxed text-zinc-400 font-light font-sans antialiased text-left space-y-1 select-text">
                  {item.descLines.map((line, lIdx) => (
                    <span key={lIdx} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {/* Seamless, ultra-premium link callout */}
              <div className="mt-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-xs font-mono text-sky-400 font-light">Explore Pipeline Tech</span>
                <span className="text-sky-400 text-xs font-light">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
