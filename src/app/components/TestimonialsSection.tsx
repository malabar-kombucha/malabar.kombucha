import React from "react";
import { useTheme } from '../ThemeContext';

const testimonials = [
  {
    name: "Rubina",
    text: "Refreshing and Energizing, Helps improve Gut Health.",
  },
  {
    name: "Sana",
    text: "It has a Natural Grape Flavour didn't feel like I was drinking a Tea based drink.",
  },
  {
    name: "Ismail",
    text: "I recommend Malabar Kombucha for beginners in gym as a pre-workout drink! I'm sure they will feel the energy boost for their workout.",
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
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg shadow border w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto"
              style={{
                background: currentTheme.secondary,
                border: `1.5px solid ${currentTheme.accent}`,
                color: currentTheme.text,
              }}
            >
              <p className="italic mb-4 text-lg" style={{ color: currentTheme.text }}>"{t.text}"</p>
              <span className="font-semibold" style={{ color: currentTheme.accent }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
