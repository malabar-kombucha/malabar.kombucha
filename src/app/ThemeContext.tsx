'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    name: 'ginger',
    primary: '#FF6B35',
    secondary: '#FF9F1C',
    accent: '#2EC4B6',
    text: '#FFFFFF'
  },
  {
    name: 'blueberry',
    primary: '#6B4E71',
    secondary: '#9B5E5A',
    accent: '#C3BABA',
    text: '#FFFFFF'
  },
  {
    name: 'turmeric',
    primary: '#FFB627',
    secondary: '#F18805',
    accent: '#D95D39',
    text: '#FFFFFF'
  }
];

type ThemeContextType = {
  currentTheme: typeof themes[0];
  setTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('malabar-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('malabar-theme', themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 