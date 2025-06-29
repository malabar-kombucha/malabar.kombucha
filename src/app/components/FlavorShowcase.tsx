"use client";

import { useState, useEffect } from "react";
import { useTheme, themes } from "../ThemeContext";
import tinycolor from "tinycolor2";

export default function FlavorShowcase() {
  const { currentTheme, setTheme } = useTheme();
  // Index is always derived from currentTheme
  const currentIndex = themes.findIndex(t => t.name === currentTheme.name);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [lastTapTime, setLastTapTime] = useState(0);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- TAP TO CHANGE THEME ON MOBILE ---
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
    setTouchStart(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchEnd(touch.clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touch = e.changedTouches[0];
    const deltaX = Math.abs(touch.clientX - touchPosition.x);
    const deltaY = Math.abs(touch.clientY - touchPosition.y);
    const now = Date.now();

    // If it's a tap (not a swipe)
    if (deltaX < 10 && deltaY < 10) {
      // Tap detected: advance to next theme, wrap to first if at end
      const nextIndex = (currentIndex + 1) % themes.length;
      setTheme(themes[nextIndex].name);
      setLastTapTime(now);
      return;
    }
    // Handle swipe
    if (deltaX > 50) {
      if (touchStart - touchEnd > 50) {
        // Swipe left - next theme (wrap)
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].name);
      } else if (touchEnd - touchStart > 50) {
        // Swipe right - previous theme (wrap)
        const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
        setTheme(themes[prevIndex].name);
      }
    }
  };


  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMouseStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diff = e.clientX - mouseStart;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Move right (previous), wrap to last if at first
        const prevIndex = (currentIndex - 1 + themes.length) % themes.length;
        setTheme(themes[prevIndex].name);
      } else {
        // Move left (next), wrap to first if at last
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex].name);
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Only set mounted state on mount
  useEffect(() => {
    setMounted(true);
    // Detect mobile device
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // When the global theme changes, update accent color variable
  useEffect(() => {
    const theme = themes[currentIndex];
    document.documentElement.style.setProperty("--accent-color", theme.accent);
  }, [currentIndex]);

  // Don't render anything until the component is mounted on the client
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: currentTheme.accent }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <img
          src="/logo.webp"
          alt="Logo"
          className="h-28 w-auto object-contain transition-all duration-700 ease-in-out"
          style={{ pointerEvents: 'none' }}
        />
      </div>
      {/* Bottle Image with Embedded Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative h-full ${isMobile ? "w-full" : "w-full max-w-2xl"}`}>
          <img
            src={
              isMobile
                ? currentTheme.bottleImage.replace(/(\.webp|\.png)$/, "_mobile.webp")
                : currentTheme.bottleImage
            }
            alt={`${currentTheme.name} Kombucha`}
            className={`absolute left-1/2 transform -translate-x-1/2 object-contain transition-all duration-700 ease-in-out ${
              isMobile ? "top-0 h-full w-full max-w-none" : "bottom-0 h-full w-full"
            }`}
            style={{
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
              WebkitFilter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))",
              pointerEvents: 'none'
            }}
          />
        </div>
      </div>
    </div>
  );
}
