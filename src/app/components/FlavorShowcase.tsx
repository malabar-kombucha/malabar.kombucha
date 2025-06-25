"use client";

import { useState, useEffect } from "react";
import { useTheme, themes } from "../ThemeContext";
import tinycolor from "tinycolor2";

export default function FlavorShowcase() {
  const { currentTheme, setTheme } = useTheme();
  // Index is always derived from currentTheme
  const currentIndex = themes.findIndex(t => t.name === currentTheme.name);

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

    // If it's a tap (not a swipe)
    if (deltaX < 10 && deltaY < 10) {
      // Tap detected: advance to next theme, but clamp to last
      if (currentIndex < themes.length - 1) {
        setTheme(themes[currentIndex + 1].name);
      }
      setLastTapTime(now);
      return;
    }
    // Handle swipe
    if (deltaX > 50) {
      if (touchStart - touchEnd > 50) {
        // Swipe left - next theme
        if (currentIndex < themes.length - 1) {
          setTheme(themes[currentIndex + 1].name);
        }
      } else if (touchEnd - touchStart > 50) {
        // Swipe right - previous theme
        if (currentIndex > 0) {
          setTheme(themes[currentIndex - 1].name);
        }
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
        // Move right (previous)
        if (currentIndex > 0) {
          setTheme(themes[currentIndex - 1].name);
        }
      } else {
        // Move left (next)
        if (currentIndex < themes.length - 1) {
          setTheme(themes[currentIndex + 1].name);
        }
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
            src={currentTheme.bottleImage}
            alt={`${currentTheme.name} Kombucha`}
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

