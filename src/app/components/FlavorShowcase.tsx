"use client";

import { useState, useEffect } from "react";
import { useTheme, themes } from "../ThemeContext";
import tinycolor from "tinycolor2";

export default function FlavorShowcase() {
  const { currentTheme, setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(() => {
    // Initialize index based on currentTheme
    const idx = themes.findIndex(t => t.name === currentTheme.name);
    return idx === -1 ? 0 : idx;
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("User location:", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
        },
        (error) => {
          console.error("Error getting location:", error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        },
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [lastTapTime, setLastTapTime] = useState(0);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

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
    const tapLength = now - lastTapTime;

    // If it's a tap (not a swipe)
    if (deltaX < 10 && deltaY < 10) {
      // Tap detected: advance to next theme
      setCurrentIndex((prev) => (prev + 1) % themes.length);
      setLastTapTime(now);
      return;
    }
    // Handle swipe
    if (deltaX > 50) {
      if (touchStart - touchEnd > 50) {
        // Swipe left - next theme
        setCurrentIndex((prev) => (prev + 1) % themes.length);
      } else if (touchEnd - touchStart > 50) {
        // Swipe right - previous theme
        setCurrentIndex((prev) => (prev - 1 + themes.length) % themes.length);
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
        // Move right
        setCurrentIndex((prev) => (prev - 1 + themes.length) % themes.length);
      } else {
        // Move left
        setCurrentIndex((prev) => (prev + 1) % themes.length);
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
  }, []);

  // When currentIndex changes, update the global theme if needed
  useEffect(() => {
    const theme = themes[currentIndex];
    if (currentTheme.name !== theme.name) {
      setTheme(theme.name);
    }
    // Update accent color variable
    document.documentElement.style.setProperty("--accent-color", theme.accent);
  }, [currentIndex, setTheme, currentTheme.name]);

  // When the global theme changes (e.g., via palette), update the image index
  useEffect(() => {
    const idx = themes.findIndex(t => t.name === currentTheme.name);
    if (idx !== -1 && idx !== currentIndex) {
      setCurrentIndex(idx);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTheme.name]);

  // Don't render anything until the component is mounted on the client
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-white"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

      {/* Bottle Image with Embedded Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl">
          <img
            src={themes[currentIndex].bottleImage}
            alt={`${themes[currentIndex].name} Kombucha`}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[90vh] max-h-[900px] object-contain transition-all duration-700 ease-in-out"
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
