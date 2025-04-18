'use client';

import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function ThemeUpdater() {
  const { currentTheme } = useTheme();

  useEffect(() => {
    // Update CSS variables when theme changes
    const root = document.documentElement;
    
    // Apply theme colors with transitions
    root.style.setProperty('--primary-color', currentTheme.primary);
    root.style.setProperty('--secondary-color', currentTheme.secondary);
    root.style.setProperty('--accent-color', currentTheme.accent);
    root.style.setProperty('--text-color', currentTheme.text);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', currentTheme.primary);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'theme-color';
      meta.content = currentTheme.primary;
      document.head.appendChild(meta);
    }

    // Add transition class to body
    document.body.classList.add('theme-transition');
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 700); // Match the transition duration
  }, [currentTheme]);

  return null;
} 