export type Theme = {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  description: string;
};

export const themes: Theme[] = [
  {
    name: "Black Goddess",
    primary: "#231209", // Deeper, more coffee-like
    secondary: "#754114", // More saturated rich brown
    accent: "#DCBA4D", // Slightly more vibrant gold
    background: "#F9F7F5", // Warmer off-white
    text: "#FFEDE1",
    description: "A bold, mysterious blend of premium black tea with deep, earthy undertones"
  },
  {
    name: "Classic",
    primary: "#3F5A33", // Deeper, more mature green tea
    secondary: "#7A654A", // Richer brown
    accent: "#BF9A7A", // More saturated, less washed out
    background: "#F8F8F5", // Slight warm tint
    text: "#262623", // Slightly warmer black
    description: "The original, timeless kombucha with pure green tea essence"
  },
  {
    name: "Strawberry",
    primary: "#D83F5D", // Less fluorescent, more natural berry
    secondary: "#F17A95", // More distinct from primary
    accent: "#FFD0D9", // Lighter to improve contrast with primary
    background: "#FFF5F7", // Slightly more neutral
    text: "#4A0D1E", // Deeper for better readability
    description: "Sweet and tangy strawberry notes with a refreshing finish"
  },
  {
    name: "Mango",
    primary: "#E98A17", // Deeper, more realistic mango
    secondary: "#FFBA59", // More distinct from primary
    accent: "#FFDC72", // More golden yellow
    background: "#FFFBF2", // Subtle ivory
    text: "#3D2508", // Richer brown for better contrast
    description: "Tropical mango sweetness balanced with natural tartness"
  },
  {
    name: "Pomegranate",
    primary: "#B61642", // Deeper, more authentic pomegranate
    secondary: "#E53E69", // More vibrant secondary
    accent: "#FF9DB8", // Lighter pink for better distinction
    background: "#FFF5F7", // Lighter background
    text: "#4A0D22", // Keep text
    description: "Rich pomegranate flavor with antioxidant-rich properties"
  },
  {
    name: "Passion Fruit",
    primary: "#E45757", // More natural red-purple
    secondary: "#F5857D", // More distinction from primary
    accent: "#FFCBCB", // Lighter for better hierarchy
    background: "#FFF6F6", // Slightly more neutral
    text: "#3D0B0B", // Deepened for better contrast
    description: "Exotic passion fruit with a perfect balance of sweet and tart"
  },
  {
    name: "Tender Coconut",
    primary: "#7D6A4E", // Deeper, more authentic coconut brown
    secondary: "#C4A987", // More saturated light coconut
    accent: "#F0E2CE", // Warmer cream
    background: "#FFFCF7", // Very subtle warm white
    text: "#27251F", // Warmer, softer black
    description: "Creamy coconut flavor with natural sweetness"
  },
  {
    name: "Berry Medley", // Renamed from Red Fairy to be more distinctive
    primary: "#A02C53", // Deeper, more mixed berry
    secondary: "#D5517B", // More purple-red tone
    accent: "#F1ADC7", // Lighter for better contrast
    background: "#FFF5F9", // Subtle pink background
    text: "#4F1A2B", // Deeper purple-red
    description: "Magical blend of mixed berries with a hint of floral notes"
  },
  {
    name: "Blueberry",
    primary: "#6B4E71",
    secondary: "#9B5E5A",
    accent: "#C3BABA",
    background: "#F5F8FF", // Slightly warmer blue
    text: "#FFFFFF",
    description: "Antioxidant-rich blueberries with a natural sweetness"
  },
  {
    name: "Nutmeg",
    primary: "#7D3D11", // Deeper nutmeg brown
    secondary: "#A95C2E", // More distinct warm brown
    accent: "#DBBC9B", // Warmer tan
    background: "#FFF9EE", // Warmer off-white
    text: "#3A2520", // Slightly warmer brown
    description: "Warm, spicy nutmeg with comforting undertones"
  },
  {
    name: "Pineapple",
    primary: "#EAB308", // More realistic pineapple yellow
    secondary: "#F9D03F", // More distinct from primary
    accent: "#FFEDAA", // More contrast with primary
    background: "#FFFDF5", // More neutral background
    text: "#3D2C08", // Deeper for better contrast
    description: "Tropical pineapple with a refreshing tang"
  },
  {
    name: "Ginger",
    primary: "#FF6B35",
    secondary: "#FF9F1C",
    accent: "#2EC4B6",
    background: "#FFF6E9", // Warmer background
    text: "#FFFFFF",
    description: "Spicy ginger with a warming kick"
  },
  {
    name: "Gooseberry",
    primary: "#285E2A", // Deeper, more natural gooseberry
    secondary: "#4A9D4E", // More distinct light green
    accent: "#97D89A", // Brighter accent
    background: "#F4F9EF", // Slightly warmer
    text: "#163B1A", // Deeper for better contrast
    description: "Tart gooseberry with a crisp, refreshing taste"
  },
  {
    name: "Orange",
    primary: "#E85D2C", // Deeper, more natural orange
    secondary: "#F78C5A", // More distinct light orange
    accent: "#FFBF8E", // More contrast with primary
    background: "#FFF9F2", // Warmer off-white
    text: "#3D2008", // Deeper for better contrast
    description: "Bright, citrusy orange with natural sweetness"
  },
  {
    name: "Turmeric",
    primary: "#FFB627",
    secondary: "#F18805",
    accent: "#D95D39",
    background: "#FFF9EE", // Warmer off-white
    text: "#FFFFFF",
    description: "Warm, earthy turmeric with a comforting undertones"
  }
];