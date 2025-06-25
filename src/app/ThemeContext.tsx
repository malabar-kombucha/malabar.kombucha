"use client";

import { createContext, useContext, useState, useEffect } from "react";
export const themes = [
  {
    name: "BEET",
    primary: "#c5433c",
    secondary: "#880E4F",
    accent: "#F48FB1",
    text: "#FFFFFF",
    description: "Rooty • Earthy • Rich",
    bottleImage: "/images/bottles/beet.webp",
  },
  {
    name: "GRAPE",
    primary: "#473141",
    secondary: "#4A148C",
    accent: "#BA68C8",
    text: "#FFFFFF",
    description: "Juicy • Bold • Fruity",
    bottleImage: "/images/bottles/grape.webp",
  },
  {
    name: "POME",
    primary: "#8a363a",
    secondary: "#C2185B",
    accent: "#F48FB1",
    text: "#FFFFFF",
    description: "Bold • Fruity • Antioxidant",
    bottleImage: "/images/bottles/pome.webp",
  },
  {
    name: "STRAW",
    primary: "#a6403b",
    secondary: "#F50057",
    accent: "#FF80AB",
    text: "#FFFFFF",
    description: "Sweet • Tangy • Fruity",
    bottleImage: "/images/bottles/straw.webp",
  },
  {
    name: "PINA",
    primary: "#d6ce57",
    secondary: "#FFA000",
    accent: "#FFD54F",
    text: "#FFFFFF",
    description: "Tropical • Zesty • Refreshing",
    bottleImage: "/images/bottles/pina.webp",
  },
  {
    name: "COCO",
    primary: "#919e46",
    secondary: "#5D4037",
    accent: "#BCAAA4",
    text: "#FFFFFF",
    description: "Nutty • Smooth • Natural",
    bottleImage: "/images/bottles/coco.webp",
  },
  {
    name: "BLUE",
    primary: "#6966ad",
    secondary: "#303F9F",
    accent: "#7986CB",
    text: "#FFFFFF",
    description: "Sweet • Tart • Healthy",
    bottleImage: "/images/bottles/blue.webp",
  },
  {
    name: "MANGO",
    primary: "#caa94d",
    secondary: "#F57C00",
    accent: "#FFB74D",
    text: "#FFFFFF",
    description: "Tropical • Spicy • Sweet",
    bottleImage: "/images/bottles/mango.webp",
  },
  {
    name: "ORANGE",
    primary: "#FF9800",
    secondary: "#F57C00",
    accent: "#FFB74D",
    text: "#FFFFFF",
    description: "Citrusy • Bright • Fresh",
    bottleImage: "/images/bottles/orange.png",
  },
  {
    name: "PASSION",
    primary: "#9C27B0",
    secondary: "#7B1FA2",
    accent: "#CE93D8",
    text: "#FFFFFF",
    description: "Exotic • Tangy • Tropical",
    bottleImage: "/images/bottles/passion.webp",
  },
  {
    name: "GOOSE",
    primary: "#b5ba4a",
    secondary: "#2E7D32",
    accent: "#8BC34A",
    text: "#FFFFFF",
    description: "Tart • Refreshing • Zingy",
    bottleImage: "/images/bottles/goose.png",
  },
  {
    name: "GINGER",
    primary: "#b3976a",
    secondary: "#E64A19",
    accent: "#FF8A65",
    text: "#FFFFFF",
    description: "Spicy • Invigorating • Fresh",
    bottleImage: "/images/bottles/ginger.png",
  },
  {
    name: "NUTMEG",
    primary: "#d1b27b",
    secondary: "#5D4037",
    accent: "#A1887F",
    text: "#FFFFFF",
    description: "Warm • Spicy • Aromatic",
    bottleImage: "/images/bottles/nutmeg.webp",
  },
  {
    name: "CLASSIC",
    primary: "#7b5738",
    secondary: "#2E7D32",
    accent: "#8BC34A",
    text: "#FFFFFF",
    description: "Classic • Balanced • Refreshing",
    bottleImage: "/images/bottles/classic.webp",
  },
  {
    name: "BLACK GODDESS",
    primary: "#1a1a1a",
    secondary: "#333333",
    accent: "#8B4513",
    text: "#FFFFFF",
    description: "Earthy • Bold • Rich",
    bottleImage: "/images/bottles/black-goddess.png",
  },
  {
    name: "MALABAR",
    primary: "#4E342E",
    secondary: "#3E2723",
    accent: "#A1887F",
    text: "#FFFFFF",
    description: "Herbal • Spicy • Malabari",
    bottleImage: "/images/bottles/malabar-bottle.png",
  },
  {
    name: "RED FAIRY",
    primary: "#D81B60",
    secondary: "#880E4F",
    accent: "#F06292",
    text: "#FFFFFF",
    description: "Strawberry • Beet • Minty",
    bottleImage: "/images/bottles/red-fairy-bottle.png",
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
