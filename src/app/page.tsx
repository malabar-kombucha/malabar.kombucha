"use client";

import { useTheme } from "./ThemeContext";
import FlavorShowcase from "./components/FlavorShowcase";
import WhatsappEnquiryForm from "./components/WhatsappEnquiryForm";
import OrderNow from "./components/OrderNow";
import FindUsSection from "./components/FindUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const { currentTheme } = useTheme();
  const [showArrow, setShowArrow] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 2000);

    // Start bouncing after 5 seconds
    const bounceTimer = setTimeout(() => {
      setShouldBounce(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(bounceTimer);
    };
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToOrderSection = () => {
    const orderSection = document.querySelector('#order-section');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Floating Order Button */}
      <button
        onClick={scrollToOrderSection}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: 'var(--accent-color)'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 2.25h2.523a.75.75 0 0 1 .697.47l1.174 2.82l2.78 6.105a.75.75 0 0 0 .681.425h7.27a.75.75 0 0 0 .733-.57l1.29-5.16a.75.75 0 0 0-.73-.93H6.08M2.25 2.25l1.5 12.75h14.25m-11.25 0a1.5 1.5 0 1 1-3 0m12 0a1.5 1.5 0 1 1-3 0"
          />
        </svg>
      </button>

      {/* Flavor Showcase Section */}
      <div
        className="sm:pt-0 pt-0"
        style={{
          position: "relative",
          minHeight: "60vh",
          animation: shouldBounce ? 'bounce 2s ease-in-out infinite' : 'none',
          marginTop: 0,
          paddingTop: 0
        }}
      >
        <style jsx>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(-50%); }
            50% { transform: translateY(-10px) translateX(-50%); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>

        <FlavorShowcase />

        {/* Animated Down Arrow */}
        {showArrow && (
          <div
            className="absolute bottom-8 left-1/2 cursor-pointer z-20 group opacity-0 animate-fade-in"
            onClick={scrollToNextSection}
            style={{
              animation: 'float 3s ease-in-out infinite, fadeIn 1s ease-in-out forwards',
              transform: 'translateX(-50%)'
            }}
          >
            <svg
              className="w-8 h-8 text-white transition-all duration-300 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.5))',
                strokeWidth: '2'
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        )}
      </div>

      {/* About Section */}
      <section id="about-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
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
            Founded in 2023, Malabar Kombucha began with a simple mission: to
            craft the most delicious and healthful kombucha using traditional
            brewing methods and the finest organic ingredients. healthful
            kombucha using traditional brewing methods and the finest organic
            ingredients.
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
      <section id="order-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
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
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-8 w-full">
            <div className="flex-1 min-w-0">
              <WhatsappEnquiryForm />
            </div>
            <div className="flex-1 min-w-0">
              <OrderNow />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div
              className="p-6 rounded-lg max-w-md"
              style={{
                backgroundColor: "var(--accent-color)20",
                border: "1px solid var(--accent-color)40",
              }}
            >
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <p className="mb-2">Email: info@malabarkombucha.com</p>
              <p className="mb-2">Phone: <a href="tel:9447151040" className="text-blue-600 underline hover:text-blue-800">+91 9447151040</a></p>
              <p className="mb-2">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/917994160473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 underline hover:text-green-800"
                >
                  +91 79941 60473
                </a>
              </p>
              <p>Address: Skyline Marine Gate Beach P.O, Calicut </p>
            </div>
          </div>
        </div>
      </section>
      {/* Find Us Section */}
      <FindUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
