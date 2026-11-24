import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PlanetShowcase from "./components/PlanetShowcase";
import OdysseyTimeline from "./components/OdysseyTimeline";
import FleetSection from "./components/FleetSection";
import TransitCalculator from "./components/TransitCalculator";
import TrailerModal from "./components/TrailerModal";
import Footer from "./components/Footer";

export default function App() {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  // Sync theme with body class
  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add("theme-light");
    } else {
      document.documentElement.classList.remove("theme-light");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`min-h-screen ${isLightMode ? "bg-[#f8f9fa] text-neutral-900" : "bg-[#09090b] text-neutral-100"} selection:bg-amber-400 selection:text-black transition-colors duration-300 font-sans`}>
      {/* 1. Navigation Bar */}
      <Navbar
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
        onOpenBooking={() => handleScrollToSection("calculator")}
      />

      {/* 2. Cinematic Hero Section with Keplerian Canvas Helix Simulation */}
      <HeroSection
        onWatchTrailer={() => setIsTrailerOpen(true)}
        onExploreDestinations={() => handleScrollToSection("destinations")}
      />

      {/* 3. Interactive 3D Card / Planet Showcase */}
      <PlanetShowcase />

      {/* 4. The Odyssey: 4-Stage Relativistic Transit Protocol */}
      <OdysseyTimeline />

      {/* 5. Interstellar Flagship Fleet Experience */}
      <FleetSection />

      {/* 6. Interactive Transit & Stasis Cost Calculator */}
      <TransitCalculator />

      {/* 7. Modern Minimalist Footer */}
      <Footer />

      {/* Cinematic Trailer Modal */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />
    </div>
  );
}
