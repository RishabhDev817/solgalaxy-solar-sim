import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  glareColor?: string;
}

export function Interactive3DCard({
  children,
  className = "",
  onClick,
  glareColor = "rgba(245, 158, 11, 0.15)",
}: Interactive3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinates from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics springs for smooth inertia
  const springConfig = { damping: 20, stiffness: 200, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  
  // Glare position
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative cursor-pointer transition-shadow duration-300 will-change-transform ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.25 }}
    >
      {/* Dynamic Specular Glare */}
      {isHovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-30 rounded-[inherit] opacity-80 mix-blend-screen transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, ${glareColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Card Content with 3D child preservation */}
      <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default Interactive3DCard;
