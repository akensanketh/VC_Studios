import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, ArrowRight, ShieldCheck, Mail, Lock } from "lucide-react";
import { Logo } from "./Icons";

interface InteractiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "get-in-touch" | "learn-more";
  itemName?: string;
}

export default function InteractiveModal({ isOpen, onClose, type, itemName }: InteractiveModalProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Login Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Get In Touch States
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [budget, setBudget] = useState("$5,000 - $20,000");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate studio server dispatch
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setSuccess(false);
    setEmail("");
    setPassword("");
    setName("");
    setContactEmail("");
    setMessage("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg bg-zinc-950/80 border border-zinc-900/80 rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 backdrop-blur-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer p-1.5 hover:bg-white/5 rounded-full"
            >
              <X size={18} />
            </button>

            {/* Success state */}
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-sky-500/10 rounded-full flex items-center justify-center border border-sky-500/20">
                    <CheckCircle className="text-sky-400 w-8 h-8" />
                  </div>
                </div>
                
                {type === "login" ? (
                  <>
                    <h3 className="text-2xl font-light text-white tracking-wide mb-2">Workspace Unlocked</h3>
                    <p className="text-zinc-400 text-sm font-light max-w-sm mx-auto">
                      Session verified. Redirecting to your VC Studios private production timeline vault...
                    </p>
                  </>
                ) : type === "get-in-touch" ? (
                  <>
                    <h3 className="text-2xl font-light text-white tracking-wide mb-2">Inquiry Lodged</h3>
                    <p className="text-zinc-400 text-sm font-light max-w-sm mx-auto">
                      Thank you, {name || "Creator"}. Our lead producer has received your cut requirements and will connect within 2 hours.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-light text-white tracking-wide mb-2">Specs Dispatched</h3>
                    <p className="text-zinc-400 text-sm font-light max-w-sm mx-auto">
                      Details regarding {itemName || "VisionCraft pipeline tools"} have been sent to your primary industry inbox.
                    </p>
                  </>
                )}

                <button
                  onClick={resetForm}
                  className="mt-8 px-8 py-3 rounded-full bg-sky-950/40 border border-sky-900/30 hover:bg-sky-950 text-white text-sm font-light tracking-wide transition-all duration-300 w-full"
                >
                  Close Vault
                </button>
              </motion.div>
            ) : (
              <div>
                {/* Header branding */}
                <div className="flex items-center gap-2 mb-6">
                  <Logo />
                  <span className="text-xs font-mono tracking-[4px] text-sky-400 font-semibold uppercase ml-1">VISIONCRAFT</span>
                </div>

                {/* LOGIN FORM */}
                {type === "login" && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-light text-white tracking-wide mb-2">Studio Portal</h2>
                      <p className="text-zinc-400 text-sm font-light">Access secure client workspaces, review timelines, and download master outputs.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Email input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Credential Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="director@studio.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 pl-11 text-zinc-200 placeholder-zinc-600 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300"
                          />
                          <Mail className="absolute left-4 top-3.5 text-zinc-600 w-4 h-4" />
                        </div>
                      </div>

                      {/* Password input */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2 font-light">Access Code / Password</label>
                        <div className="relative">
                          <input
                            type="password"
                            required
                            placeholder="••••••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 pl-11 text-zinc-200 placeholder-zinc-600 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300"
                          />
                          <Lock className="absolute left-4 top-3.5 text-zinc-600 w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-light text-zinc-400">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="accent-sky-500 rounded bg-zinc-900 border-zinc-800" />
                        <span>Authorize editing workstation key</span>
                      </label>
                      <button type="button" className="hover:text-white transition-colors duration-200">Reset code?</button>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 font-normal text-sm cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Verify Identity</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 pt-2 border-t border-zinc-900 text-xs text-zinc-600">
                      <ShieldCheck size={14} className="text-emerald-500" />
                      <span>End-to-end encrypted production server guard</span>
                    </div>
                  </form>
                )}

                {/* GET IN TOUCH FORM */}
                {type === "get-in-touch" && (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-3xl font-light text-white tracking-wide mb-2">Book Studio Suite</h2>
                      <p className="text-zinc-400 text-sm font-light">Launch specialized post-production pipelines for your title drafts.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Producer / Director Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Christopher Nolan"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Contact Email */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2 font-light">Official Studio Email</label>
                        <input
                          type="email"
                          required
                          placeholder="creative@flicker.com"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300"
                        />
                      </div>

                      {/* Investment Range */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Estimated Production Budget</label>
                        <select
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800/80 rounded-xl px-4 py-3 text-zinc-200 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option>Under $5,000 (Short film / Indie Cut)</option>
                          <option>$5,000 - $20,000 (Music Video / Commercial)</option>
                          <option>$20,000 - $100,000 (Feature Indie Tier)</option>
                          <option>$100,000+ (Cinema Title Level)</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-mono text-zinc-500 uppercase mb-2">Video Specs & Creative Directives</label>
                        <textarea
                          placeholder="Raw log format, sound targets, frame rate requirements, timeline goals..."
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-zinc-900/50 border border-zinc-800/80 rounded-xl px-4 py-3 text-zinc-200 placeholder-zinc-600 text-sm focus:border-zinc-500 focus:outline-none transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-12 flex items-center justify-center gap-2 rounded-full bg-[#121A58] text-white hover:bg-[#1c2780] border border-blue-900/30 transition-all duration-300 font-light text-sm cursor-pointer disabled:opacity-50 mt-2 shadow-[0_4px_20px_rgba(18,26,88,0.4)]"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Transmit Collaboration Request</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* LEARN MORE INFO MODAL */}
                {type === "learn-more" && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-mono text-sky-400 font-semibold tracking-widest uppercase block mb-1">CRAFT PIPELINE SPECIFICATION</span>
                      <h2 className="text-3xl font-light text-white tracking-wide">{itemName || "Post-Production Work"}</h2>
                    </div>

                    <div className="text-zinc-300 text-sm space-y-4 font-light leading-relaxed">
                      <p>
                        We operate an advanced, high-fidelity digital sandbox specializing in cinematic grade composites, dynamic sound design, spatial audio mixes, and precise color science colorimetry.
                      </p>
                      <p>
                        As the <strong className="text-sky-400">Official Post-Production Partner of Frame Flicker Studios (ffstudios.rf.gd)</strong>, we establish unified end-to-end production pipelines. From high-dynamic-range RAW logs to theater-calibrated final master templates, our workflows guarantee strict timeline adherence and elite creative precision.
                      </p>
                      <ul className="space-y-2 border-l-2 border-sky-400 pl-4 py-1 text-zinc-400">
                        <li>• Real-time digital review platform with framewise feedback systems.</li>
                        <li>• Hardware-calibrated color profiles (Rec. 709, DCI-P3, HDR10+).</li>
                        <li>• Specialized sound mechanics with Dolby Atmos staging.</li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-900 flex justify-end gap-3">
                      <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-full border border-zinc-800 text-zinc-400 text-sm hover:text-white hover:bg-white/5 transition-all duration-300"
                      >
                        Dismiss
                      </button>
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-normal text-sm hover:bg-zinc-200 transition-all duration-300"
                      >
                        Request Capabilities Brochure
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
