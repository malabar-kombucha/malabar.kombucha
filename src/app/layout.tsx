import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeUpdater from "./ThemeUpdater";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malabar Kombucha",
  description: "Handcrafted kombucha made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeUpdater />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
