"use client";

import { createContext, useContext, useState, useEffect } from "react";
export const themes = [
  {
    name: "BEET",
    primary: "#c5433c",
    secondary: "#3a1b1c",
    accent: "#f0b4ac",
    text: "#ffffff",
    description: "Rooty • Earthy • Rich",
    bottleImage: "/images/bottles/beet.webp",
  },
  {
    name: "GRAPE",
    primary: "#473141",
    secondary: "#2e1d2b",
    accent: "#ceb3d1",
    text: "#ffffff",
    description: "Juicy • Bold • Fruity",
    bottleImage: "/images/bottles/grape.webp",
  },
  {
    name: "POME",
    primary: "#8a363a",
    secondary: "#3a1a1c",
    accent: "#ebb3b6",
    text: "#ffffff",
    description: "Bold • Fruity • Antioxidant",
    bottleImage: "/images/bottles/pome.webp",
  },
  {
    name: "STRAW",
    primary: "#a6403b",
    secondary: "#3a1b19",
    accent: "#efb0ab",
    text: "#ffffff",
    description: "Sweet • Tangy • Fruity",
    bottleImage: "/images/bottles/straw.webp",
  },
  {
    name: "PINA",
    primary: "#d6ce57",
    secondary: "#516628",
    accent: "#fbf7b2",
    text: "#1a1a1a",
    description: "Tropical • Zesty • Refreshing",
    bottleImage: "/images/bottles/pina.webp",
  },
  {
    name: "COCO",
    primary: "#919e46",
    secondary: "#2f360f",
    accent: "#d7e3a2",
    text: "#ffffff",
    description: "Nutty • Smooth • Natural",
    bottleImage: "/images/bottles/coco.webp",
  },
  {
    name: "BLUE",
    primary: "#6966ad",
    secondary: "#24243f",
    accent: "#c1bee9",
    text: "#ffffff",
    description: "Sweet • Tart • Healthy",
    bottleImage: "/images/bottles/blue.webp",
  },
  {
    name: "MANGO",
    primary: "#caa94d",
    secondary: "#105e63",
    accent: "#f1dfa5",
    text: "#1a1a1a",
    description: "Tropical • Spicy • Sweet",
    bottleImage: "/images/bottles/mango.webp",
  },
  {
    name: "ORANGE",
    primary: "#FF9800",
    secondary: "#5c3300",
    accent: "#ffd3a3",
    text: "#1a1a1a",
    description: "Citrusy • Bright • Fresh",
    bottleImage: "/images/bottles/orange.webp",
  },
  {
    name: "PASSION",
    primary: "#d5b953", // Keep the original golden yellow
    secondary: "#f0e2ea", // Deep purple - complementary contrast
    accent: "#15a297", // Rich violet - harmonious with secondary
    text: "#2a2730", // Darker text for better readability
    description: "Exotic • Tangy • Tropical",
    bottleImage: "/images/bottles/passion.webp",
  },
  {
    name: "GOOSE",
    primary: "#b5ba4a",
    secondary: "#3b3f16",
    accent: "#e0e59f",
    text: "#ffffff",
    description: "Tart • Refreshing • Zingy",
    bottleImage: "/images/bottles/goose.webp",
  },
  {
    name: "GINGER",
    primary: "#b3976a",
    secondary: "#3e2e1d",
    accent: "#e6d5b9",
    text: "#ffffff",
    description: "Spicy • Invigorating • Fresh",
    bottleImage: "/images/bottles/ginger.webp",
  },
  {
    name: "NUTMEG",
    primary: "#d1b27b",
    secondary: "#4a3b29",
    accent: "#f1ddc0",
    text: "#ffffff",
    description: "Warm • Spicy • Aromatic",
    bottleImage: "/images/bottles/nutmeg.webp",
  },
  {
    name: "CLASSIC",
    primary: "#7b5738",
    secondary: "#2c1f17",
    accent: "#c8a987",
    text: "#ffffff",
    description: "Classic • Balanced • Refreshing",
    bottleImage: "/images/bottles/classic.webp",
  },
  {
    name: "BLACK GODDESS",
    primary: "#2d2d2d",
    secondary: "#050505",
    accent: "#888888",
    text: "#ffffff",
    description: "Earthy • Bold • Rich",
    bottleImage: "/images/bottles/black_godess.webp",
  },
  {
    name: "MALABAR",
    primary: "#394f4f",
    secondary: "#261410",
    accent: "#a58c77",
    text: "#ffffff",
    description: "Herbal • Spicy • Malabari",
    bottleImage: "/images/bottles/malabar.webp",
  },
  {
    name: "RED FAIRY",
    primary: "#462f34",
    secondary: "#4c0820",
    accent: "#fabccf",
    text: "#ffffff",
    description: "Strawberry • Beet • Minty",
    bottleImage: "/images/bottles/red_fairy.webp",
  },
];
export interface ThemeType {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  description: string;
  bottleImage: string;
}

type ThemeContextType = {
  currentTheme: ThemeType;
  setTheme: (themeName: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("malabar-theme");
    if (savedTheme) {
      const theme = themes.find((t) => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  const setTheme = (themeName: string) => {
    const theme = themes.find((t) => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem("malabar-theme", themeName);
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
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
