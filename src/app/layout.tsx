import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malabar Kombucha | Handcrafted Fermented Tea",
  description: "Discover our handcrafted, organic kombucha made with premium ingredients and traditional fermentation methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-emerald-700">
                Malabar Kombucha
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-emerald-700 transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</a>
                <a href="/products" className="text-gray-700 hover:text-emerald-700 transition-colors">Products</a>
                <a href="/contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</a>
              </div>
            </div>
          </nav>
        </header>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Malabar Kombucha</h3>
                <p className="text-gray-400">Handcrafted, organic kombucha made with premium ingredients.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                  <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Email: info@malabarkombucha.com</li>
                  <li>Phone: (555) 123-4567</li>
                  <li>Address: 123 Kombucha Street</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Malabar Kombucha. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
