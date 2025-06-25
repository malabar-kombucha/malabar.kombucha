"use client";

import { useTheme } from "./ThemeContext";
import FlavorShowcase from "./components/FlavorShowcase";
import WhatsappEnquiryForm from "./components/WhatsappEnquiryForm";
import FindUsSection from "./components/FindUsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Flavor Showcase Section */}
      <div style={{ position: "relative", minHeight: "60vh" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 10,
            padding: "2rem",
          }}
        ></div>
        <FlavorShowcase />
      </div>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--primary-color) 100%)",
            height: "100px",
            top: "-100px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Story</h2>
          <p className="text-xl sm:text-2xl mb-8">
            Founded in 2020, Malabar Kombucha began with a simple mission: to
            craft the most delicious and healthful kombucha using traditional
            brewing methods and the finest organic ingredients. healthful
            kombucha using traditional brewing methods and the finest organic
            ingredients. We use 100% organic ingredients and traditional brewing
            methods to ensure the highest quality kombucha
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Quality First</h3>
              <p>
                We use only organic ingredients and traditional brewing methods
                to ensure the highest quality kombucha.
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
              <p>
                Our brewing process is designed to minimize waste and
                environmental impact.
              </p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Community</h3>
              <p>
                We're committed to building a community around healthy living
                and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--primary-color) 100%)",
            height: "100px",
            top: "-100px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl sm:text-2xl mb-8">
            Have questions about our kombucha? Want to stock our products? We'd
            love to hear from you!
          </p>
          <div className="flex justify-center mb-8">
            <WhatsappEnquiryForm />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">Email: info@malabarkombucha.com</p>
              <p className="mb-2">Phone: (555) 123-4567</p>
              <p className="mb-2">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/919496826294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-800"
                >
                  +91 94968 26294
                </a>
              </p>
              <p>Address: 123 Kombucha Lane, Portland, OR</p>
            </div>
            <div
              className="p-6 rounded-lg"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <p className="mb-2">Monday - Friday: 9am - 5pm</p>
              <p className="mb-2">Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
      {/* Find Us Section */}
      <FindUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}
