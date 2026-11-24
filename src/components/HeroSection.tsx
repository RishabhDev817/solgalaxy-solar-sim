import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Play, 
  Sparkles, 
  ArrowUpRight, 
  Compass, 
  ShieldCheck, 
  Orbit, 
  ChevronDown 
} from "lucide-react";
import { OrbitalHeroSection } from "@/components/ui/orbital-hero-section";

interface HeroSectionProps {
  onWatchTrailer?: () => void;
  onExploreDestinations?: () => void;
}

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

export function HeroSection({ onWatchTrailer, onExploreDestinations }: HeroSectionProps) {
  const narrow = useNarrow();

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-[#09090b]">
      {/* 
        Orbital Keplerian Heliocentric Helix Engine Canvas 
        Renders real solar apex drift at 19.4 km/s, planetary trails, and star parallax!
      */}
      <OrbitalHeroSection
        focus={narrow ? [0.5, 0.84] : [0.72, 0.44]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={narrow ? 0.94 : 0.9}
        viewRadius={narrow ? 2.2 : 3.2}
        lead={narrow ? 0.06 : 0.12}
        glow={narrow ? 0.6 : 1.1}
        trailYears={2.8}
        starCount={narrow ? 800 : 1600}
        className="min-h-screen"
      >
        <div className="relative z-20 flex min-h-screen w-full items-center px-6 pt-28 pb-16 sm:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            {/* Mission Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 backdrop-blur-md text-xs font-mono-code text-amber-200 mb-6 shadow-lg shadow-amber-500/5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
              <span>EXPEDITION EPOCH 2184 • KEPLER DRIFT CORRIDOR</span>
            </motion.div>

            {/* Cinematic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.02] tracking-[-0.04em] text-white"
            >
              SOLARIS — <br />
              <span className="cosmic-gradient-text">THE NEW FRONTIER</span>
            </motion.h1>

            {/* Captivating Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-base sm:text-lg text-neutral-300/80 leading-relaxed max-w-xl font-normal"
            >
              Traverse the uncharted expanse of the Milky Way in unprecedented luxury. 
              Experience helical planetary physics, relativistic stasis suites, and bespoke orbital sanctuaries.
            </motion.p>

            {/* Dual CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA with Glowing Border */}
              <button
                onClick={onExploreDestinations}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 overflow-hidden"
              >
                <span className="relative z-10">Explore Galaxy</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {/* Glowing border shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              </button>

              {/* Secondary CTA: Watch Trailer */}
              <button
                onClick={onWatchTrailer}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium text-white/90 border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Trailer</span>
              </button>
            </motion.div>

            {/* Live Floating Parallax Telemetry Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono-code text-neutral-400"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Apex Drift</div>
                  <div className="font-semibold text-neutral-200">19.4 km/s</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  <Orbit className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Apex Vector</div>
                  <div className="font-semibold text-neutral-200">RA 272°, Dec 53°</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">Shield Matrix</div>
                  <div className="font-semibold text-emerald-400">100% Nominal</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator prompt */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-white transition-colors cursor-pointer" onClick={onExploreDestinations}>
          <span className="text-[10px] uppercase font-mono-code tracking-widest">Scroll to Journey</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-300" />
        </div>
      </OrbitalHeroSection>
    </section>
  );
}

export default HeroSection;
