'use client';

import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { themes } from './themes';

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();

  return (
    <div className="theme-selector">
      <button
        className="theme-button"
        style={{ backgroundColor: currentTheme.primary }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select flavor theme"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="theme-palette">
          {themes.map((theme) => (
            <button
              key={theme.name}
              className="theme-option"
              style={{ backgroundColor: theme.primary }}
              onClick={() => {
                setTheme(theme.name);
                setIsOpen(false);
              }}
              title={theme.name}
              aria-label={`Switch to ${theme.name} theme`}
            />
          ))}
        </div>
      )}
    </div>
  );
} 