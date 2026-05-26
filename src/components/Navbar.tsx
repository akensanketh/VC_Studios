import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Icons";

interface NavbarProps {
  onLoginClick: () => void;
  onMenuItemClick: (item: string) => void;
}

export default function Navbar({ onLoginClick, onMenuItemClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = ["Services", "Why VC Studios", "Partners", "Contact"];

  const handleItemClick = (item: string) => {
    onMenuItemClick(item);
    setMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="relative z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
        {/* Left side: Logo & Navigation Links */}
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => handleItemClick("Home")}>
            <Logo />
            <span className="font-sans font-light tracking-[0.25em] text-white text-[15px] ml-2.5 select-none uppercase">VC Studios</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center text-sm font-light tracking-wide text-zinc-300">
            {menuItems.map((item, index) => (
              <React.Fragment key={item}>
                {/* Custom glowing cyan dot separator before offerings and each item thereafter */}
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mx-4 opacity-80" />
                <button
                  onClick={() => handleItemClick(item)}
                  className="hover:text-white transition-colors duration-200 cursor-pointer relative py-1 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </button>
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right side: Login Button */}
        <div className="hidden md:block">
          <button
            onClick={onLoginClick}
            className="px-6 py-2 rounded-full border border-zinc-200 hover:border-white text-sm font-light text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            Studio Portal
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 cursor-pointer focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-zinc-950 border-b border-zinc-900 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className="flex items-center gap-3 text-zinc-300 hover:text-white text-base font-light text-left w-full cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-zinc-900">
                <button
                  onClick={() => {
                    onLoginClick();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-3 rounded-full border border-white text-sm text-white font-light bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  Studio Portal
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
