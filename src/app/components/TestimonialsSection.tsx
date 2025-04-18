import React from "react";
import { useTheme } from '../ThemeContext';

const testimonials = [
  {
    name: "Aarav N.",
    text: "Absolutely love Malabar Kombucha! It's refreshing and tastes so natural. My go-to drink after yoga.",
  },
  {
    name: "Priya S.",
    text: "The best kombucha I've had in India. The flavors are unique and the quality is top-notch!",
  },
  {
    name: "Vikram R.",
    text: "I stock Malabar Kombucha at my cafe and customers keep coming back for it. Highly recommended!",
  },
];

export default function TestimonialsSection() {
  const { currentTheme } = useTheme();
  return (
    <section
      className="py-20 px-4"
      style={{
        background: `linear-gradient(to top, ${currentTheme.primary} 0%, ${currentTheme.accent}10 100%)`,
        color: currentTheme.text,
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8" style={{ color: currentTheme.text }}>Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow border"
              style={{
                background: currentTheme.secondary,
                border: `1.5px solid ${currentTheme.accent}`,
                color: currentTheme.text,
              }}
            >
              <p className="italic mb-4 text-lg" style={{ color: currentTheme.text }}>“{t.text}”</p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
