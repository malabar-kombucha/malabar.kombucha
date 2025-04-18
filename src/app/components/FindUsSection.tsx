import React from "react";
import { useTheme } from '../ThemeContext';

const vendors = [
  {
    name: "Green Grocer",
    address: "123 Main St, Kochi",
    link: "https://goo.gl/maps/abc123",
  },
  {
    name: "Health Hub",
    address: "456 Wellness Ave, Calicut",
    link: "https://goo.gl/maps/def456",
  },
  {
    name: "Organic Basket",
    address: "789 Nature Rd, Bangalore",
    link: "https://goo.gl/maps/ghi789",
  },
];

export default function FindUsSection() {
  const { currentTheme } = useTheme();
  return (
    <section
      className="py-20 px-4"
      style={{
        background: `linear-gradient(to bottom, ${currentTheme.primary} 0%, ${currentTheme.accent}10 100%)`,
        color: currentTheme.text,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: currentTheme.text }}>Find Us</h2>
        <p className="text-xl mb-10" style={{ color: currentTheme.text }}>You can find Malabar Kombucha at the following locations:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <a
              key={vendor.name}
              href={vendor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-lg shadow hover:shadow-lg border transition"
              style={{
                background: currentTheme.secondary,
                border: `1.5px solid ${currentTheme.accent}`,
                color: currentTheme.text,
              }}
            >
              <h3 className="text-2xl font-semibold mb-2" style={{ color: currentTheme.text }}>{vendor.name}</h3>
              <p className="mb-1">{vendor.address}</p>
              <span style={{ color: currentTheme.accent, textDecoration: 'underline' }}>View on Map</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
