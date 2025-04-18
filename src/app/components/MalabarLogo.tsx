import React from "react";
import { useTheme } from '../ThemeContext';

export default function MalabarLogo({ size = 160, forceColor }: { size?: number; forceColor?: string }) {
  const { currentTheme } = useTheme();
  // Heuristic: if theme primary is dark, use accent; if light, use #222
  function isColorDark(hex: string) {
    const c = hex.replace('#', '');
    const rgb = parseInt(c.length === 3 ? c.split('').map(x => x + x).join('') : c, 16);
    const r = (rgb >> 16) & 255, g = (rgb >> 8) & 255, b = rgb & 255;
    // Perceptual luminance
    return (0.299 * r + 0.587 * g + 0.114 * b) < 150;
  }
  const stroke = forceColor || (isColorDark(currentTheme.primary) ? currentTheme.accent : '#222');
  const textFill = forceColor || stroke;

  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* Jar Outline */}
      <rect x="90" y="150" width="140" height="120" rx="40" stroke={stroke} strokeWidth="7" fill="none" />
      {/* Jar Lid */}
      <rect x="120" y="135" width="80" height="20" rx="8" stroke={stroke} strokeWidth="7" fill="none" />
      {/* Handle */}
      <path d="M160 135 L160 120" stroke={stroke} strokeWidth="7" strokeLinecap="round" />
      {/* Sun Rays */}
      <path d="M160 40 L160 120" stroke={stroke} strokeWidth="7" />
      <path d="M110 60 L160 120" stroke={stroke} strokeWidth="7" />
      <path d="M210 60 L160 120" stroke={stroke} strokeWidth="7" />
      <path d="M90 100 L160 120" stroke={stroke} strokeWidth="7" />
      <path d="M230 100 L160 120" stroke={stroke} strokeWidth="7" />
      {/* Arch */}
      <path d="M60 200 Q60 80 160 40 Q260 80 260 200" stroke={stroke} strokeWidth="7" fill="none" />
      {/* Leaves */}
      <path d="M110 270 Q90 320 160 320 Q230 320 210 270" stroke={stroke} strokeWidth="7" fill="none" />
      <path d="M120 300 Q140 280 160 320 Q180 280 200 300" stroke={stroke} strokeWidth="7" fill="none" />
      {/* Text MALABAR (arched) */}
      <text x="160" y="28" textAnchor="middle" fontSize="22" fontFamily="sans-serif" letterSpacing="8" fill={textFill}>MALABAR</text>
      {/* Text KOMBUCHA */}
      <text x="160" y="370" textAnchor="middle" fontSize="28" fontFamily="sans-serif" letterSpacing="7" fill={textFill}>KOMBUCHA</text>
      {/* Subtitle */}
      <text x="160" y="395" textAnchor="middle" fontSize="14" fontFamily="sans-serif" fill={textFill}>A TEA BASED PROBIOTIC DRINK</text>
    </svg>
  );
}
