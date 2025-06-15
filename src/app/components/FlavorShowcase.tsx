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
          <div className="relative w-48 h-96 mx-auto mb-8 transform transition-transform duration-700 hover:scale-105 flex items-center justify-center">
  {currentIndex < 10 ? (
    <img
      src={`/${currentIndex + 1}.png`}
      alt={themes[currentIndex].name + ' bottle'}
      className="w-full h-full object-contain"
      style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
    />
  ) : null}
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