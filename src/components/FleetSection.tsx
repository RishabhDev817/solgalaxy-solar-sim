import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Zap, 
  ArrowRight
} from "lucide-react";

interface Starship {
  id: string;
  name: string;
  classType: string;
  length: string;
  warpSpeed: string;
  guests: string;
  crew: string;
  image: string;
  description: string;
  features: string[];
  specs: {
    propulsion: string;
    shielding: string;
    gravity: string;
    amenities: string;
  };
}

const FLEET: Starship[] = [
  {
    id: "aethelgard",
    name: "The Aethelgard",
    classType: "Imperial Super-Luminal Flagship",
    length: "1,240 Meters",
    warpSpeed: "Warp 9.4 (Sub-space Folding)",
    guests: "240 VIP Guests",
    crew: "85 Automaton + 35 Officers",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    description: "The crown jewel of our interstellar fleet. Boasting triple counter-rotating gravity cylinders, two Michelin-three-star molecular dining salons, and a zero-G grand ballroom.",
    features: ["Hydroponic Botanical Solarium", "Zero-G Grand Ballroom", "Quantum Entanglement Theater", "Private Starlight Balconies"],
    specs: {
      propulsion: "Dark Energy Catalyzed Fusion & Alcubierre Folding Ring",
      shielding: "Multi-layered Harmonic Electromagnetic Barrier",
      gravity: "Continuous 1.0G via Centrifugal & Anti-Grav Fields",
      amenities: "Full Spa, Observatory, Cryo-Healing Salon, Sommelier Vault"
    }
  },
  {
    id: "chronos",
    name: "The Chronos Starliner",
    classType: "Deep Space Sleeper Yacht",
    length: "820 Meters",
    warpSpeed: "0.96c Relativistic Sub-light",
    guests: "120 Stasis Voyagers",
    crew: "40 Synthetic Attendants",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    description: "Designed for peaceful journeys across vast stellar gulfs. Guests experience lucid dream therapies inside hyper-biophilic stasis pods, awakening refreshed at their destination.",
    features: ["Lucid Neuro-Dream Suites", "Atmospheric Re-entry Gliders", "Sub-surface Mineral Pool", "Stellar Corona Lounge"],
    specs: {
      propulsion: "Pulsed Antimatter Plasma Drive",
      shielding: "Superconducting Deflector Arrays",
      gravity: "Variable 0.2G to 1.0G Adaptive Habitat",
      amenities: "Dream Theater, Meditation Domes, Acoustic Zen Pods"
    }
  },
  {
    id: "zenith",
    name: "The Zenith Interceptor",
    classType: "Private Orbital VIP Courier",
    length: "185 Meters",
    warpSpeed: "Warp 6.2 Rapid Transit",
    guests: "16 Exclusive Patrons",
    crew: "6 Specialist Navigators",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
    description: "For rapid point-to-point transit between orbital citadels and Lagrange stations. Compact, hyper-maneuverable, with full 360-degree synthesized diamond canopies.",
    features: ["Full Diamond Panoramic Canopy", "Hypersonic Atmospheric Insertion", "Private Executive Quarters", "Hyper-drive Slingshot Booster"],
    specs: {
      propulsion: "Dual Ion Magnetoplasmadynamic Thrusters",
      shielding: "Reinforced Graphene-Boron Lattice",
      gravity: "Inertial Dampener Array (Up to 25G dampening)",
      amenities: "Bespoke Lounge, Private Chef Galley, Conference Nexus"
    }
  }
];

export function FleetSection() {
  const [activeShip, setActiveShip] = useState<Starship>(FLEET[0]);

  return (
    <section id="fleet" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>INTERSTELLAR FLAGSHIPS & YACHTS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          The SOLGalaxy Fleet
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Engineered at the intersection of relativistic propulsion physics and regal craftsmanship. 
          Step aboard humanity’s most advanced luxury cruisers.
        </p>

        {/* Ship Selector Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {FLEET.map((ship) => (
            <button
              key={ship.id}
              onClick={() => setActiveShip(ship)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                activeShip.id === ship.id
                  ? "bg-amber-300 text-black font-semibold shadow-lg shadow-amber-500/20"
                  : "bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{ship.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Ship Showcase Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeShip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-neutral-950/70 backdrop-blur-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0"
        >
          {/* Image side */}
          <div className="lg:col-span-7 relative min-h-[350px] lg:min-h-[500px] overflow-hidden bg-neutral-900">
            <img
              src={activeShip.image}
              alt={activeShip.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#09090b]"></div>
            
            {/* Top specs on image */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 text-xs font-mono-code">
              <span className="px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 font-semibold">
                {activeShip.classType}
              </span>
              <span className="px-3 py-1 rounded-md bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-purple-200">
                {activeShip.length}
              </span>
            </div>
          </div>

          {/* Details side */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-code text-amber-300 uppercase tracking-widest mb-1">
                FLAGSHIP PROFILE
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                {activeShip.name}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {activeShip.description}
              </p>

              {/* Quick specs grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-mono-code">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Cruise Speed</div>
                  <div className="font-bold text-amber-300 mt-0.5">{activeShip.warpSpeed}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Capacity</div>
                  <div className="font-bold text-white mt-0.5">{activeShip.guests}</div>
                </div>
              </div>

              {/* Signature Features */}
              <div className="mb-6">
                <div className="text-xs font-mono-code uppercase text-neutral-400 mb-3 tracking-wider">
                  Signature Amenities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {activeShip.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="text-xs font-mono-code text-neutral-400">
                <span className="text-emerald-400">● 100% Commissioned</span> & Active
              </div>
              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-300 to-amber-400 text-black shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all"
              >
                <span>Charter Vessel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

export default FleetSection;
