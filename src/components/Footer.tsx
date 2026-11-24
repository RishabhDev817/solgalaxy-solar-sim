import React, { useState } from "react";
import { 
  Orbit, 
  Sparkles, 
  Send, 
  CheckCircle, 
  Radio, 
  Globe,
  Share2,
  MessageSquare
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#09090b] text-neutral-400 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-950/15 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Mission column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300">
                <Orbit className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                SOL<span className="font-light text-neutral-400">Galaxy</span>
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              The premier interstellar space exploration and luxury cosmic travel authority. 
              Bridging celestial astrophysics and regal hospitality across the Orion Arm.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono-code text-neutral-300">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Mars L4 Beacon: Connected • 100% Signal</span>
            </div>
          </div>

          {/* Quick links columns */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold">
              Expeditions
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Kepler-452b Prime</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Titan Cryo-Atolls</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Europa Ocean Spas</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">TRAPPIST-1e Citadel</a></li>
              <li><a href="#destinations" className="hover:text-amber-300 transition-colors">Solaris Ring Outpost</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold">
              The Consortium
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#fleet" className="hover:text-amber-300 transition-colors">Interstellar Fleet</a></li>
              <li><a href="#odyssey" className="hover:text-amber-300 transition-colors">Odyssey Protocol</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Transit Calculator</a></li>
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Solar Apex Science</a></li>
              <li><a href="#" className="hover:text-amber-300 transition-colors">Quantum Safety Council</a></li>
            </ul>
          </div>

          {/* Cosmic Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono-code uppercase tracking-wider text-white font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Starlight Dispatch</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Receive confidential briefings on newly charted exoworlds, solar flare corridors, and charter reservations.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Quantum transmission established. Welcome to SOLGalaxy.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="navigator@starlight.io"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors pr-10"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-amber-400 text-black hover:bg-amber-300 transition-colors"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-neutral-500 font-mono-code">
                  Zero spam. Encrypted with 512-bit quantum signatures.
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <div className="text-neutral-500 text-center sm:text-left">
            © 2184 SOLGalaxy Interstellar Consortium. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors" aria-label="X Network">
              <Share2 className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-amber-300 transition-colors" aria-label="Consortium Code">
              <Globe className="w-4 h-4" />
            </a>
            <a href="#contact" className="hover:text-amber-300 transition-colors" aria-label="Sub-space Comms">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
