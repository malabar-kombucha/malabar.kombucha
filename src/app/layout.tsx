import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeUpdater from "./ThemeUpdater";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malabar Kombucha",
  description: "Handcrafted kombucha made with love",
};

import MalabarLogo from "./components/MalabarLogo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeUpdater />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
