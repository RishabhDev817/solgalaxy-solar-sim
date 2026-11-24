import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Sparkles, 
  Compass, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  PlaneTakeoff
} from "lucide-react";

export function TransitCalculator() {
  const [origin, setOrigin] = useState("earth");
  const [destination, setDestination] = useState("kepler-452b");
  const [cabin, setCabin] = useState("celestial");
  const [warpFactor, setWarpFactor] = useState(7);
  const [isBooked, setIsBooked] = useState(false);

  // Calculation parameters
  const destinationData: Record<string, { name: string; baseCredits: number; baseDays: number; distance: string }> = {
    "kepler-452b": { name: "Kepler-452b Prime", baseCredits: 450000, baseDays: 540, distance: "1,402 ly" },
    "titan": { name: "Titan Cryo-Atolls", baseCredits: 180000, baseDays: 12, distance: "9.5 AU" },
    "europa": { name: "Europa Abyss Haven", baseCredits: 220000, baseDays: 6, distance: "5.2 AU" },
    "trappist-1e": { name: "TRAPPIST-1e Citadel", baseCredits: 380000, baseDays: 24, distance: "39.5 ly" },
    "solaris-ring": { name: "Solaris Ring Station", baseCredits: 520000, baseDays: 1, distance: "0.01 AU" }
  };

  const cabinMultiplier: Record<string, { name: string; mult: number }> = {
    "stasis": { name: "Biophilic Stasis Pod", mult: 1.0 },
    "celestial": { name: "Celestial Suite (1.0G Gravity)", mult: 1.6 },
    "imperial": { name: "Imperial Starlight Penthouse", mult: 2.5 }
  };

  const dest = destinationData[destination] || destinationData["kepler-452b"];
  const cab = cabinMultiplier[cabin] || cabinMultiplier["celestial"];

  // Dynamic calculated figures
  const speedRatio = (10 - warpFactor) * 0.1 + 0.3;
  const calculatedDays = Math.max(1, Math.round(dest.baseDays * speedRatio));
  const calculatedCredits = Math.round(dest.baseCredits * cab.mult * (1 + warpFactor * 0.05));

  const handleBook = () => {
    setIsBooked(true);
    setTimeout(() => {
      // Keep state or notify
    }, 4000);
  };

  return (
    <section id="calculator" className="relative py-28 px-6 sm:px-10 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-xs font-mono-code text-amber-300 mb-4 backdrop-blur-md">
          <Calculator className="w-3.5 h-3.5 text-amber-300" />
          <span>RELATIVISTIC VOYAGE ESTIMATOR</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Configure Your Transit
        </h2>
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
          Simulate real-time warp harmonics, cabin accommodations, and credit investments for your journey.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="rounded-3xl border border-white/15 bg-neutral-950/80 backdrop-blur-2xl p-7 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Origin & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-2">
                  Departure Port
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-medium focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="earth" className="bg-neutral-900">Earth High-Orbital Gateway</option>
                  <option value="luna" className="bg-neutral-900">Lunar South Citadel</option>
                  <option value="mars" className="bg-neutral-900">Mars Lagrange L1 Spire</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-2">
                  Target Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-xs font-medium focus:border-amber-400 focus:outline-none transition-colors"
                >
                  <option value="kepler-452b" className="bg-neutral-900">Kepler-452b Prime (1,402 ly)</option>
                  <option value="titan" className="bg-neutral-900">Titan Cryo-Atolls (9.5 AU)</option>
                  <option value="europa" className="bg-neutral-900">Europa Abyss Haven (5.2 AU)</option>
                  <option value="trappist-1e" className="bg-neutral-900">TRAPPIST-1e Citadel (39.5 ly)</option>
                  <option value="solaris-ring" className="bg-neutral-900">Solaris Ring Station (0.01 AU)</option>
                </select>
              </div>
            </div>

            {/* Cabin Selection */}
            <div>
              <label className="block text-xs font-mono-code text-neutral-400 uppercase tracking-wider mb-2">
                Suite Accommodation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "stasis", label: "Stasis Pod", tag: "Bio-Dreaming" },
                  { id: "celestial", label: "Celestial Suite", tag: "1.0G Gravity" },
                  { id: "imperial", label: "Imperial Penthouse", tag: "VIP Private Deck" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCabin(c.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      cabin === c.id
                        ? "border-amber-400 bg-amber-400/10 text-white shadow-md shadow-amber-500/10"
                        : "border-white/10 bg-white/5 text-neutral-300 hover:border-white/20"
                    }`}
                  >
                    <div className="text-xs font-bold">{c.label}</div>
                    <div className="text-[10px] text-amber-300/80 font-mono-code mt-0.5">{c.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Warp Factor Range Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 mb-2">
                <span className="uppercase">Warp Compression Index</span>
                <span className="text-amber-300 font-bold">Warp {warpFactor}.0</span>
              </div>
              <input
                type="range"
                min="1"
                max="9"
                step="1"
                value={warpFactor}
                onChange={(e) => setWarpFactor(Number(e.target.value))}
                className="w-full accent-amber-400 bg-white/10 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono-code text-neutral-500 mt-1">
                <span>Warp 1.0 (Sub-light cruise)</span>
                <span>Warp 9.0 (Ultra-relativistic fold)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10">
            <div>
              <div className="text-xs font-mono-code text-amber-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLIGHT TELEMETRY SUMMARY</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                {dest.name}
              </h3>

              <div className="space-y-3 text-xs font-mono-code mb-6">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-neutral-500" />
                    <span>True Distance:</span>
                  </span>
                  <span className="text-white font-semibold">{dest.distance}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Calculated Transit:</span>
                  </span>
                  <span className="text-amber-300 font-semibold">{calculatedDays} Earth Days</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Deflector Shield:</span>
                  </span>
                  <span className="text-emerald-400 font-semibold">Harmonic Class IV</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <span className="text-neutral-400 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Cabin Tier:</span>
                  </span>
                  <span className="text-purple-300 font-semibold">{cab.name}</span>
                </div>
              </div>

              {/* Total Price Display */}
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 mb-6">
                <div className="text-[10px] uppercase font-mono-code text-amber-200">
                  Total Odyssey Investment
                </div>
                <div className="text-2xl font-display font-extrabold text-amber-300 mt-0.5">
                  {calculatedCredits.toLocaleString()} <span className="text-xs font-mono-code text-amber-200/80">Solar Credits</span>
                </div>
              </div>
            </div>

            {/* Booking Action */}
            <div>
              <AnimatePresence mode="wait">
                {isBooked ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Transit Corridor Reserved! Quantum Relay Active.</span>
                  </motion.div>
                ) : (
                  <button
                    onClick={handleBook}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 text-black text-sm font-semibold shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-95 transition-all"
                  >
                    <PlaneTakeoff className="w-4 h-4" />
                    <span>Request Stasis Corridor</span>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TransitCalculator;
