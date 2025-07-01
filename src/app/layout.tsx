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

import { UserLocationLogger } from "./components/UserLocationLogger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <meta property="og:logo" content="/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>Malabar Kombucha | Handcrafted Probiotic Healthy Drink</title>
        <meta name="title" content="Malabar Kombucha | Handcrafted Probiotic Healthy Drink" />
        <meta name="description" content="Malabar Kombucha offers handcrafted kombucha, a delicious probiotic drink for gut health and wellness. Discover our unique flavors and boost your healthy lifestyle." />
        <meta name="keywords" content="kombucha, probiotic, healthy drink, gut health, Malabar Kombucha, natural beverage, fermented tea, wellness, India, handcrafted, immunity, vegan, low sugar" />
        <meta name="author" content="Malabar Kombucha" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://malabarkombucha.com/" />
        <meta property="og:title" content="Malabar Kombucha | Handcrafted Probiotic Healthy Drink" />
        <meta property="og:description" content="Handcrafted kombucha for gut health, immunity, and wellness. Explore our probiotic drinks and unique flavors." />
        <meta property="og:image" content="https://malabarkombucha.com/images/bottles/malabar.webp" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://malabarkombucha.com/" />
        <meta property="twitter:title" content="Malabar Kombucha | Handcrafted Probiotic Healthy Drink" />
        <meta property="twitter:description" content="Handcrafted kombucha for gut health, immunity, and wellness. Explore our probiotic drinks and unique flavors." />
        <meta property="twitter:image" content="https://malabarkombucha.com/images/bottles/malabar.webp" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Malabar Kombucha",
              "url": "https://malabarkombucha.com/",
              "logo": "https://malabarkombucha.com/favicon.ico",
              "sameAs": [
                "https://www.instagram.com/malabarkombucha"
              ],
              "description": "Malabar Kombucha offers handcrafted kombucha, a delicious probiotic drink for gut health and wellness. Discover our unique flavors and boost your healthy lifestyle.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7994160473",
                "contactType": "customer service",
                "areaServed": "IN"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Malabar Kombucha",
              "image": [
                "https://malabarkombucha.com/images/bottles/malabar.webp"
              ],
              "description": "Handcrafted kombucha, a probiotic healthy drink for gut health and wellness.",
              "brand": {
                "@type": "Brand",
                "name": "Malabar Kombucha"
              },
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeUpdater />
          <UserLocationLogger />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
