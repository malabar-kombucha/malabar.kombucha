"use client";

import { createContext, useContext, useState, useEffect } from "react";
export const themes = [
  {
    name: "BEET",
    primary: "#c5433c",
    secondary: "#2c1517",
    accent: "#e8a5a0",
    text: "#f5f5f5",
    description: "Rooty • Earthy • Rich",
    bottleImage: "/images/bottles/beet.webp",
  },
  {
    name: "GRAPE",
    primary: "#473141",
    secondary: "#1a0f17",
    accent: "#b89bb0",
    text: "#f8f6f7",
    description: "Juicy • Bold • Fruity",
    bottleImage: "/images/bottles/grape.webp",
  },
  {
    name: "POME",
    primary: "#8a363a",
    secondary: "#2a1113",
    accent: "#d49ea2",
    text: "#f5f3f3",
    description: "Bold • Fruity • Antioxidant",
    bottleImage: "/images/bottles/pome.webp",
  },
  {
    name: "STRAW",
    primary: "#a6403b",
    secondary: "#2d1412",
    accent: "#e2a7a4",
    text: "#f5f3f3",
    description: "Sweet • Tangy • Fruity",
    bottleImage: "/images/bottles/straw.webp",
  },
  {
    name: "PINA",
    primary: "#d6ce57",
    secondary: "#3a3616",
    accent: "#f0eb9d",
    text: "#2a2a2a",
    description: "Tropical • Zesty • Refreshing",
    bottleImage: "/images/bottles/pina.webp",
  },
  {
    name: "COCO",
    primary: "#919e46",
    secondary: "#252a13",
    accent: "#c8d483",
    text: "#f5f5f3",
    description: "Nutty • Smooth • Natural",
    bottleImage: "/images/bottles/coco.webp",
  },
  {
    name: "BLUE",
    primary: "#6966ad",
    secondary: "#1a1a2d",
    accent: "#a5a2d6",
    text: "#f7f7fb",
    description: "Sweet • Tart • Healthy",
    bottleImage: "/images/bottles/blue.webp",
  },
  {
    name: "MANGO",
    primary: "#caa94d",
    secondary: "#352c14",
    accent: "#e8d191",
    text: "#2a2a2a",
    description: "Tropical • Spicy • Sweet",
    bottleImage: "/images/bottles/mango.webp",
  },
  {
    name: "ORANGE",
    primary: "#FF9800",
    secondary: "#4a2900",
    accent: "#ffcc80",
    text: "#1a1a1a",
    description: "Citrusy • Bright • Fresh",
    bottleImage: "/images/bottles/orange.png",
  },
  {
    name: "PASSION",
    primary: "#d5b953", // Keep the original golden yellow
    secondary: "#F3E8EE", // Deep purple - complementary contrast
    accent: "#1B998B", // Rich violet - harmonious with secondary
    text: "#2E294E", // Darker text for better readability
    description: "Exotic • Tangy • Tropical",
    bottleImage: "/images/bottles/passion.webp",
  },
  {
    name: "GOOSE",
    primary: "#b5ba4a",
    secondary: "#313314",
    accent: "#d4d983",
    text: "#2a2a2a",
    description: "Tart • Refreshing • Zingy",
    bottleImage: "/images/bottles/goose.png",
  },
  {
    name: "GINGER",
    primary: "#b3976a",
    secondary: "#312719",
    accent: "#dcc8a6",
    text: "#2a2a2a",
    description: "Spicy • Invigorating • Fresh",
    bottleImage: "/images/bottles/ginger.png",
  },
  {
    name: "NUTMEG",
    primary: "#d1b27b",
    secondary: "#3a2e1f",
    accent: "#e6d4b8",
    text: "#2a2a2a",
    description: "Warm • Spicy • Aromatic",
    bottleImage: "/images/bottles/nutmeg.webp",
  },
  {
    name: "CLASSIC",
    primary: "#7b5738",
    secondary: "#201710",
    accent: "#b8956f",
    text: "#f5f3f0",
    description: "Classic • Balanced • Refreshing",
    bottleImage: "/images/bottles/classic.webp",
  },
  {
    name: "BLACK GODDESS",
    primary: "#1a1a1a",
    secondary: "#0a0a0a",
    accent: "#666666",
    text: "#f0f0f0",
    description: "Earthy • Bold • Rich",
    bottleImage: "/images/bottles/black-goddess.png",
  },
  {
    name: "MALABAR",
    primary: "#4E342E",
    secondary: "#1a1209",
    accent: "#8a735f",
    text: "#f5f3f0",
    description: "Herbal • Spicy • Malabari",
    bottleImage: "/images/bottles/malabar-bottle.png",
  },
  {
    name: "RED FAIRY",
    primary: "#D81B60",
    secondary: "#3d0518",
    accent: "#f48fb1",
    text: "#f8f5f6",
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

