import { useState, useEffect } from "react";
import { 
  Orbit, 
  Sparkles, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking?: () => void;
  isLightMode: boolean;
  toggleTheme: () => void;
}

export function Navbar({ onOpenBooking, isLightMode, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Odyssey", href: "#odyssey" },
    { label: "Destinations", href: "#destinations" },
    { label: "Fleet", href: "#fleet" },
    { label: "Transit Calc", href: "#calculator" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-purple-950/20"
            : "bg-transparent py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 via-purple-500/20 to-black border border-amber-400/30 group-hover:border-amber-400/60 transition-colors shadow-lg shadow-amber-500/10">
              <Orbit className="w-5 h-5 text-amber-300 group-hover:rotate-45 transition-transform duration-500" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-amber-200 transition-colors">
                SOL<span className="font-light text-neutral-400">Galaxy</span>
              </span>
              <span className="text-[9px] font-mono-code uppercase tracking-widest text-amber-400/80 -mt-0.5">
                Interstellar 2184
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full px-5 py-1.5 border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              title={isLightMode ? "Switch to Deep Obsidian Mode" : "Switch to Ambient Starlight Mode"}
              aria-label="Toggle Theme"
            >
              {isLightMode ? (
                <Moon className="w-4 h-4 text-amber-300" />
              ) : (
                <Sun className="w-4 h-4 text-amber-300" />
              )}
            </button>

            {/* Telemetry pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-mono-code text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>19.4 km/s Apex</span>
            </div>

            {/* Primary Booking Button */}
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs font-semibold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 hover:brightness-110 active:scale-95 transition-all duration-200 shadow-md shadow-amber-500/20"
            >
              <span>Book Odyssey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-white/10 text-neutral-300"
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon className="w-4 h-4 text-amber-300" /> : <Sun className="w-4 h-4 text-amber-300" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-200"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm font-medium text-neutral-200 hover:bg-white/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-500" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking?.();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-amber-300 to-amber-400 text-black text-sm font-semibold shadow-lg shadow-amber-500/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Reserve Cosmic Suite</span>
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
