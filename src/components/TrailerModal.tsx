import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Play, 
  Pause,
  Orbit,
  Radio
} from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          className="relative z-10 w-full max-w-4xl rounded-3xl border border-white/20 bg-[#09090b] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Top Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2 text-xs font-mono-code text-amber-300">
              <Orbit className="w-4 h-4 animate-spin text-amber-400" />
              <span>SOLARIS: THE DEEP FIELD TRAILER • 4K HDR SIMULATION</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cinematic Canvas/Video Screen */}
          <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop"
              alt="Interstellar Cinematic View"
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? "scale-105" : "scale-100"
              }`}
            />

            {/* Cinematic Letterboxing and overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none"></div>

            {/* Glowing Center Badge */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="p-4 rounded-full bg-black/60 backdrop-blur-xl border border-amber-400/30 text-amber-300 shadow-2xl mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                VOYAGE INTO THE HELIX
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 max-w-md font-mono-code">
                Streaming live quantum telemetry feed from the Aethelgard Flagship at 0.92c.
              </p>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 inset-x-6 flex items-center justify-between text-xs font-mono-code">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-amber-300 hidden sm:inline">01:42 / 03:30 • 60 FPS</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-400 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Deep Space Relay Connected</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default TrailerModal;
