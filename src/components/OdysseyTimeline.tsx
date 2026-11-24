import { motion } from "framer-motion";
import { 
  Rocket, 
  Sparkles, 
  Bed, 
  ShieldCheck, 
  Anchor, 
  Radio
} from "lucide-react";

export function OdysseyTimeline() {
  const steps = [
    {
      phase: "01",
      title: "Lunar Gateway Departure & Solar Apex Slingshot",
      desc: "Embark from the high-orbital Lunar Citadel. Our super-conducting magnetohydrodynamic drives propel the flagship along the Sun's 19.4 km/s apex vector into the deep galactic stream.",
      icon: Rocket,
      telemetry: "Delta-V: 48,200 km/s • Solar Apex Corridor",
      tag: "Launch Sequence"
    },
    {
      phase: "02",
      title: "Relativistic Cruise & Biophilic Stasis Suites",
      desc: "Passengers transition into bespoke quantum stasis chambers or enjoy panoramic observation galleries. Artificial gravity is continuously synthesized at 1.0G by counter-rotating centrifugal rings.",
      icon: Bed,
      telemetry: "Cruising: 0.92c • Stasis Dream Modulation Active",
      tag: "Transit Life"
    },
    {
      phase: "03",
      title: "Heliopause Crossing & Sub-space Relay",
      desc: "Cross beyond the solar heliosphere into pristine interstellar medium. High-intensity magnetic deflectors shield the hull from cosmic rays while quantum entanglement transmitters preserve real-time Earth comms.",
      icon: ShieldCheck,
      telemetry: "Cosmic Flux: Deflected • Earth Ping: 0.002s (Quantum)",
      tag: "Deep Interstellar"
    },
    {
      phase: "04",
      title: "Exoplanetary Insertion & Orbital Haven Docking",
      desc: "Deceleration burn into the target stellar system. Luxury atmospheric tenders ferry guests down to floating archipelagos, sub-surface geothermal spas, or ringside solariums.",
      icon: Anchor,
      telemetry: "Deceleration Complete • Destination Docked",
      tag: "Arrival Experience"
    }
  ];

  return (
    <section id="odyssey" className="relative py-28 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 text-xs font-mono-code text-amber-300 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>FOUR-PHASE COSMIC PROTOCOL</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5">
          The Interstellar Odyssey
        </h2>
        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
          From high-orbital departure to arrival in the stars, every micro-second is engineered 
          for absolute tranquility, safety, and celestial wonder.
        </p>
      </div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Central Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-400/80 via-purple-500/50 to-transparent"></div>

        <div className="space-y-12 md:space-y-20">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="p-7 sm:p-8 rounded-3xl border border-white/10 bg-neutral-950/60 backdrop-blur-xl hover:border-amber-400/30 transition-all duration-300 shadow-xl group">
                    <div className="flex items-center justify-between text-xs font-mono-code text-neutral-400 mb-3">
                      <span className="text-amber-300 font-bold tracking-wider">PHASE {step.phase}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                        {step.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-neutral-300/80 leading-relaxed mb-5">
                      {step.desc}
                    </p>

                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono-code text-purple-300/90">
                      <Radio className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      <span>{step.telemetry}</span>
                    </div>
                  </div>
                </div>

                {/* Central Milestone Orb */}
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-[#09090b] border-2 border-amber-400/60 shadow-xl shadow-amber-500/20 text-amber-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Spacer on opposite side for desktop symmetry */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OdysseyTimeline;
