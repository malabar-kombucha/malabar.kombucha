'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export const themes = [
  {
    name: 'Black Goddess',
    primary: '#1a1a1a',
    secondary: '#333333',
    accent: '#8B4513',
    text: '#FFFFFF',
    description: 'A rich, bold kombucha with deep earthy notes'
  },
  {
    name: 'Classic',
    primary: '#4CAF50',
    secondary: '#2E7D32',
    accent: '#8BC34A',
    text: '#FFFFFF',
    description: 'Our original recipe with a perfect balance of sweet and tart'
  },
  {
    name: 'Strawberry',
    primary: '#FF4081',
    secondary: '#F50057',
    accent: '#FF80AB',
    text: '#FFFFFF',
    description: 'Sweet and tangy with fresh strawberry flavor'
  },
  {
    name: 'Mango',
    primary: '#FF9800',
    secondary: '#F57C00',
    accent: '#FFB74D',
    text: '#FFFFFF',
    description: 'Tropical mango goodness with a hint of spice'
  },
  {
    name: 'Pomegranate',
    primary: '#E91E63',
    secondary: '#C2185B',
    accent: '#F48FB1',
    text: '#FFFFFF',
    description: 'Bold and fruity with antioxidant-rich pomegranate'
  },
  {
    name: 'Passion Fruit',
    primary: '#9C27B0',
    secondary: '#7B1FA2',
    accent: '#CE93D8',
    text: '#FFFFFF',
    description: 'Exotic and tangy with tropical passion fruit'
  },
  {
    name: 'Tender Coconut',
    primary: '#795548',
    secondary: '#5D4037',
    accent: '#A1887F',
    text: '#FFFFFF',
    description: 'Creamy and refreshing with natural coconut flavor'
  },
  {
    name: 'Berry Medley',
    primary: '#673AB7',
    secondary: '#512DA8',
    accent: '#B39DDB',
    text: '#FFFFFF',
    description: 'A delightful mix of your favorite berries'
  },
  {
    name: 'Blueberry',
    primary: '#3F51B5',
    secondary: '#303F9F',
    accent: '#7986CB',
    text: '#FFFFFF',
    description: 'Sweet and tart with antioxidant-rich blueberries'
  },
  {
    name: 'Nutmeg',
    primary: '#795548',
    secondary: '#5D4037',
    accent: '#A1887F',
    text: '#FFFFFF',
    description: 'Warm and spicy with aromatic nutmeg'
  },
  {
    name: 'Pineapple',
    primary: '#FFC107',
    secondary: '#FFA000',
    accent: '#FFD54F',
    text: '#FFFFFF',
    description: 'Tropical pineapple with a hint of ginger'
  },
  {
    name: 'Ginger',
    primary: '#FF5722',
    secondary: '#E64A19',
    accent: '#FF8A65',
    text: '#FFFFFF',
    description: 'Spicy and invigorating with fresh ginger'
  },
  {
    name: 'Gooseberry',
    primary: '#4CAF50',
    secondary: '#2E7D32',
    accent: '#8BC34A',
    text: '#FFFFFF',
    description: 'Tart and refreshing with Indian gooseberry'
  },
  {
    name: 'Orange',
    primary: '#FF9800',
    secondary: '#F57C00',
    accent: '#FFB74D',
    text: '#FFFFFF',
    description: 'Bright and citrusy with fresh orange'
  },
  {
    name: 'Turmeric',
    primary: '#FFC107',
    secondary: '#FFA000',
    accent: '#FFD54F',
    text: '#FFFFFF',
    description: 'Golden and earthy with anti-inflammatory turmeric'
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