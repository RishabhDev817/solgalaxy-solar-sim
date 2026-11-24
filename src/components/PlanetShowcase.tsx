import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  MapPin, 
  Star, 
  ArrowRight, 
  X
} from "lucide-react";
import { Interactive3DCard } from "./Interactive3DCard";

export interface Destination {
  id: string;
  name: string;
  subtitle: string;
  category: "habitable" | "moons" | "stations";
  distance: string;
  transitTime: string;
  gravity: string;
  temp: string;
  rating: string;
  credits: string;
  image: string;
  description: string;
  highlights: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: "kepler-452b",
    name: "Kepler-452b Prime",
    subtitle: "The Super-Earth Haven",
    category: "habitable",
    distance: "1,402 ly",
    transitTime: "18 Months (Stasis)",
    gravity: "1.9 G (Dampened to 1.0G)",
    temp: "14°C Ambient",
    rating: "5.0 ★ Superlative",
    credits: "450,000 SC",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1000&auto=format&fit=crop",
    description: "Earth's elder sibling world bathed in the warm light of a G2-type star. Featuring floating obsidian villa platforms across equatorial crystalline archipelagos.",
    highlights: ["Floating Cloud Palaces", "Bioluminescent Lagoon Expeditions", "Double-Sunset Dining Terraces"]
  },
  {
    id: "titan-atolls",
    name: "Titan Cryo-Atolls",
    subtitle: "Saturn's Methane Eden",
    category: "moons",
    distance: "9.5 AU",
    transitTime: "12 Days (Warp Pulse)",
    gravity: "0.14 G (Zero-G Spas)",
    temp: "-179°C Outer / 22°C Biodome",
    rating: "4.9 ★ Grand Luxe",
    credits: "180,000 SC",
    image: "https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1000&auto=format&fit=crop",
    description: "Cruise liquid methane seas beneath the majestic golden curvature of Saturn's planetary rings in heated glass super-catamarans.",
    highlights: ["Low-G Wing Gliding under Saturn", "Hydrocarbon Sea Yachting", "Krypton Glow Thermal Baths"]
  },
  {
    id: "europa-abyss",
    name: "Europa Ocean Spas",
    subtitle: "Jovian Sub-Ice Oasis",
    category: "moons",
    distance: "5.2 AU",
    transitTime: "6 Days (Direct Slingshot)",
    gravity: "0.134 G",
    temp: "24°C Sub-Ocean Suites",
    rating: "5.0 ★ Apex Tier",
    credits: "220,000 SC",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    description: "Submerged beneath 15 kilometers of pristine ice, relax inside titanium-quartz panoramic suites gazing out into glowing hydrothermal abyssal currents.",
    highlights: ["Sub-surface Geothermal Spas", "Jupiter Crown Sky-Observatory", "Cryo-Crystal Sculpting Lounge"]
  },
  {
    id: "trappist-1e",
    name: "TRAPPIST-1e Citadel",
    subtitle: "The Synchronous Sunset World",
    category: "habitable",
    distance: "39.5 ly",
    transitTime: "24 Days (Hyper-Corridor)",
    gravity: "0.93 G Native",
    temp: "11°C Twilight Rim",
    rating: "4.9 ★ Masterpiece",
    credits: "380,000 SC",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop",
    description: "Tidally locked serenity where the ultra-cool red dwarf star rests permanently on the horizon, creating an eternal golden twilight sanctuary.",
    highlights: ["Permanent Twilight Solariums", "Seven-Planetary Sky Alignments", "Thermal Basalt Vineyard Retreats"]
  },
  {
    id: "solaris-ring",
    name: "Solaris Ring Station",
    subtitle: "Lagrange Corona Outpost",
    category: "stations",
    distance: "0.01 AU",
    transitTime: "18 Hours (Solar Apex Shuttle)",
    gravity: "1.0 G Centrifugal",
    temp: "Bespoke Climate Control",
    rating: "5.0 ★ Royal Sovereign",
    credits: "520,000 SC",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop",
    description: "Hovering at the edge of the Sun's chromosphere behind active electromagnetic flux shielding, offering front-row views of solar prominence dances.",
    highlights: ["Solar Flare Spectrometry Dining", "Magnetic Zero-G Symphony Hall", "High-Energy Wellness Chambers"]
  },
  {
    id: "enceladus-spires",
    name: "Enceladus Geyser Spires",
    subtitle: "The Water-World Geysers",
    category: "moons",
    distance: "9.53 AU",
    transitTime: "14 Days",
    gravity: "0.01 G (Leap Suites)",
    temp: "Heated Crystalline Habitats",
    rating: "4.8 ★ Elite",
    credits: "160,000 SC",
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1000&auto=format&fit=crop",
    description: "Crystalline architecture built around massive pressurized water geysers erupting hundreds of kilometers into the vacuum of space.",
    highlights: ["Geyser Plume Flight Excursions", "Pure Molecular Ice Harvesting", "Zero-Resistance Ice Ballroom"]
  }
];

export function PlanetShowcase() {
  const [filter, setFilter] = useState<"all" | "habitable" | "moons" | "stations">("all");
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations = filter === "all" 
    ? DESTINATIONS 
    : DESTINATIONS.filter((d) => d.category === filter);

  return (
    <section id="destinations" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Decorative cosmic nebula glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>INTERSTELLAR HAVENS & CELESTIAL SANCTUARIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          Select Your Odyssey
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          Hover over each celestial destination to engage 3D tilt tracking. 
          Every sanctuary is equipped with relativistic luxury amenities and sub-atomic climate synthesis.
        </p>

        {/* Filter Tabs */}
        <div className="mt-9 flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Destinations" },
            { id: "habitable", label: "Exo-Worlds" },
            { id: "moons", label: "Gas Giant Moons" },
            { id: "stations", label: "Orbital Citadels" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4.5 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === tab.id
                  ? "bg-amber-300 text-black font-semibold shadow-lg shadow-amber-500/20"
                  : "bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Interactive Destination Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence>
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Interactive3DCard
                onClick={() => setSelectedDestination(dest)}
                className="rounded-2xl border border-white/10 bg-neutral-950/70 overflow-hidden shadow-2xl hover:border-amber-400/40 transition-colors group flex flex-col h-full"
              >
                {/* Image Cover Container */}
                <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Glass overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-black/30"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-xs font-mono-code">
                    <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-amber-300 font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                      <span>{dest.rating.split(" ")[0]}</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-purple-950/80 backdrop-blur-md border border-purple-500/30 text-purple-200">
                      {dest.distance}
                    </span>
                  </div>

                  {/* Quick coordinates tag */}
                  <div className="absolute bottom-3 left-4 text-[11px] font-mono-code text-neutral-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-300" />
                    <span>{dest.transitTime}</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-1">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-purple-300/80 font-mono-code mb-3.5">
                      {dest.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                      {dest.description}
                    </p>
                  </div>

                  {/* Bottom Stats & Pricing */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase font-mono-code text-neutral-500">Voyage Fare</div>
                      <div className="text-sm font-bold text-amber-300 font-mono-code">{dest.credits}</div>
                    </div>

                    <div 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 group-hover:bg-amber-300 group-hover:text-black transition-all duration-200"
                    >
                      <span>Flight Plan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Interactive3DCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Destination Detailed Itinerary Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDestination(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0f0f14] p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono-code text-amber-300 mb-2">
                <Sparkles className="w-4 h-4" />
                <span>EXPEDITION FLIGHT SPECIFICATION</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {selectedDestination.name}
              </h2>
              <p className="text-sm font-mono-code text-purple-300 mt-1 mb-6">
                {selectedDestination.subtitle} • {selectedDestination.distance}
              </p>

              <div className="relative h-64 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono-code">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-amber-300">
                    Fare: {selectedDestination.credits}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-purple-950/90 backdrop-blur-md text-purple-200">
                    Transit: {selectedDestination.transitTime}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {selectedDestination.description}
              </p>

              {/* Specification Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-xs font-mono-code">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Surface Gravity</div>
                  <div className="font-bold text-white mt-0.5">{selectedDestination.gravity}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Temperature</div>
                  <div className="font-bold text-white mt-0.5">{selectedDestination.temp}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Distance</div>
                  <div className="font-bold text-amber-300 mt-0.5">{selectedDestination.distance}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-neutral-500 uppercase text-[10px]">Rating</div>
                  <div className="font-bold text-emerald-400 mt-0.5">{selectedDestination.rating}</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-mono-code text-neutral-400 tracking-wider mb-3">
                  Sanctuary Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  {selectedDestination.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="px-5 py-2.5 rounded-full text-xs font-medium border border-white/20 text-neutral-300 hover:text-white"
                >
                  Close Plan
                </button>
                <a
                  href="#calculator"
                  onClick={() => setSelectedDestination(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-300 to-amber-400 text-black shadow-lg shadow-amber-500/20 hover:brightness-110"
                >
                  Reserve Stasis Suite
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PlanetShowcase;
