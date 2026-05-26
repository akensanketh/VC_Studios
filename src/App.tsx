import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import InteractiveModal from "./components/InteractiveModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "get-in-touch" | "learn-more">("get-in-touch");
  const [selectedFeature, setSelectedFeature] = useState("");

  const handleOpenLogin = () => {
    setModalType("login");
    setSelectedFeature("");
    setModalOpen(true);
  };

  const handleOpenGetInTouch = () => {
    setModalType("get-in-touch");
    setSelectedFeature("");
    setModalOpen(true);
  };

  const handleOpenLearnMore = (featureName: string) => {
    setModalType("learn-more");
    setSelectedFeature(featureName);
    setModalOpen(true);
  };

  const handleNavigationItemClick = (item: string) => {
    if (item === "Services" || item === "Why VC Studios" || item === "Partners" || item === "Home") {
      handleOpenLearnMore(item);
    } else if (item === "Contact" || item === "Help") {
      handleOpenGetInTouch();
    }
  };

  return (
    <div id="landing-container" className="relative min-h-screen bg-black text-white font-sans flex flex-col justify-between selection:bg-sky-500 selection:text-black overflow-hidden">
      {/* Background Video Element covering the canvas with an enhanced high-fidelity overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
          src="https://res.cloudinary.com/dt6bjjsve/video/upload/v1779812522/kling_20260526_Image_to_Video__6118_0_hhjklv.mp4"
        />
        {/* Dark radial glow and linear gradient overlay for high fidelity styling & readable text */}
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%] bg-black/45" />
      </div>

      {/* Relative z-10 Content Wrapper */}
      <div className="relative z-10 flex flex-col flex-grow justify-between min-h-screen">
        {/* Primary header navbar */}
        <Navbar onLoginClick={handleOpenLogin} onMenuItemClick={handleNavigationItemClick} />

        {/* Main Page Canvas */}
        <main className="flex-grow flex flex-col justify-center">
          {/* Hero title context */}
          <HeroSection onGetInTouchClick={handleOpenGetInTouch} />

          {/* Feature grid columns */}
          <Features onLearnMoreClick={handleOpenLearnMore} />
        </main>

        {/* Discrete, elegant bottom border/footer */}
        <footer className="border-t border-zinc-950/40 bg-black/40 backdrop-blur-md py-4 text-center select-none">
          <p className="text-[11px] font-mono tracking-widest text-zinc-500 hover:text-zinc-400 transition-colors duration-300 uppercase">
            VisionCraft Studios © 2026 • Official Partner of{" "}
            <a
              href="http://ffstudios.rf.gd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400/90 hover:text-sky-300 font-medium underline underline-offset-1 transition"
            >
              Frame Flicker Studios
            </a>
          </p>
        </footer>
      </div>

      {/* Premium Modular Portal Modal Overlay */}
      <InteractiveModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
        itemName={selectedFeature}
      />
    </div>
  );
}
