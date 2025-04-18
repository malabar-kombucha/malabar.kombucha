'use client';

import { useState, useEffect } from 'react';
import { useTheme, themes } from '../ThemeContext';
import FloatingElements from './FloatingElements';

export default function FlavorShowcase() {
  const { setTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [mouseStart, setMouseStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      setCurrentIndex((prev) => (prev + 1) % themes.length);
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      setCurrentIndex((prev) => (prev - 1 + themes.length) % themes.length);
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

  // Update theme whenever currentIndex changes
  useEffect(() => {
    const theme = themes[currentIndex];
    setTheme(theme.name);
    
    // Update CSS variables directly
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-color', theme.text);
  }, [currentIndex, setTheme]);

  return (
    <div 
      className="relative h-screen w-full overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{ 
          background: `linear-gradient(135deg, ${themes[currentIndex].primary} 0%, ${themes[currentIndex].secondary} 100%)`
        }}
      />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div 
          className="w-full max-w-4xl mx-auto text-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Bottle SVG */}
          <div className="relative w-48 h-96 mx-auto mb-8 transform transition-transform duration-700 hover:scale-105">
            <svg
              viewBox="0 0 200 400"
              className="w-full h-full"
              style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
            >
              {/* Bottle shape */}
              <path
                d="M100 20 C120 20, 130 30, 130 50 L130 350 C130 370, 120 380, 100 380 C80 380, 70 370, 70 350 L70 50 C70 30, 80 20, 100 20"
                fill={themes[currentIndex].accent}
                fillOpacity="0.1"
                stroke={themes[currentIndex].accent}
                strokeWidth="2"
              />
              {/* Liquid inside bottle */}
              <path
                d="M100 50 C120 50, 130 60, 130 80 L130 350 C130 370, 120 380, 100 380 C80 380, 70 370, 70 350 L70 80 C70 60, 80 50, 100 50"
                fill={themes[currentIndex].primary}
                fillOpacity="0.5"
              />
              {/* Bottle neck */}
              <path
                d="M100 0 C110 0, 115 5, 115 15 L115 20 C115 30, 110 35, 100 35 C90 35, 85 30, 85 20 L85 15 C85 5, 90 0, 100 0"
                fill={themes[currentIndex].accent}
                fillOpacity="0.1"
                stroke={themes[currentIndex].accent}
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Flavor name and description */}
          <h1 
            className="text-4xl sm:text-6xl font-bold mb-4 transition-colors duration-700"
            style={{ color: themes[currentIndex].text }}
          >
            {themes[currentIndex].name}
          </h1>
          <p 
            className="text-xl sm:text-2xl max-w-2xl mx-auto transition-colors duration-700"
            style={{ color: themes[currentIndex].text }}
          >
            {themes[currentIndex].description}
          </p>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            {themes.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-4 bg-current' : 'bg-current/50'
                }`}
                style={{ color: themes[currentIndex].text }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 