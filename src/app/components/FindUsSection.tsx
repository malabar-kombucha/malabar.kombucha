import React from "react";
import { useTheme } from '../ThemeContext';

const vendors = [
  {
    name: "Potafo | Online Food Delivery",
    description: "Online delivery service which is based in Calicut",
    link: "https://www.potafo.in",
  },
];

export default function FindUsSection() {
  const { currentTheme } = useTheme();
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4"
      style={{
        background: `linear-gradient(to bottom, ${currentTheme.primary} 0%, ${currentTheme.accent}10 100%)`,
        color: currentTheme.text,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8" style={{ color: currentTheme.text }}>Order Online</h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 px-2" style={{ color: currentTheme.text }}>You can order Malabar Kombucha through these delivery platforms:</p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-sm">
            {vendors.map((vendor) => (
              <a
                key={vendor.name}
                href={vendor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 sm:p-6 rounded-lg shadow hover:shadow-lg border transition transform hover:scale-105"
                style={{
                  background: currentTheme.secondary,
                  border: `1.5px solid ${currentTheme.accent}`,
                  color: currentTheme.text,
                }}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2" style={{ color: currentTheme.text }}>{vendor.name}</h3>
                <p className="mb-1 text-sm sm:text-base">{vendor.description}</p>
                <span style={{ color: currentTheme.accent, textDecoration: 'underline' }} className="text-sm sm:text-base">Open App</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
