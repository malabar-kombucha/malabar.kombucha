"use client";
import React, { useState } from "react";

const WHATSAPP_NUMBER = "917994160473";

import { useTheme } from '../ThemeContext';

export default function WhatsappEnquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    "Hi Malabar Kombucha, I would like to enquire about your products."
  );
  const { currentTheme } = useTheme();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Business Enquiry from ${name} (${email}): %0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSend}
      className="rounded-lg shadow w-full max-w-xs sm:max-w-md md:max-w-xl p-4 sm:p-6 flex flex-col gap-4 mx-auto"
      style={{
        background: currentTheme.primary,
        border: `1.5px solid ${currentTheme.accent}`,
        color: currentTheme.text
      }}
    >
      <h3
        className="text-2xl font-semibold mb-2"
        style={{ color: currentTheme.text }}
      >
        Business Enquiry
      </h3>
      <input
        type="text"
        required
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="w-full px-4 py-3 rounded border outline-none text-base"
        style={{
          background: currentTheme.secondary,
          border: `1px solid ${currentTheme.accent}`,
          color: currentTheme.text
        }}
      />
      <input
        type="email"
        required
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded border outline-none text-base"
        style={{
          background: currentTheme.secondary,
          border: `1px solid ${currentTheme.accent}`,
          color: currentTheme.text
        }}
      />
      <textarea
        required
        placeholder="Your Message"
        rows={4}
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="w-full px-4 py-3 rounded border outline-none text-base"
        style={{
          background: currentTheme.secondary,
          border: `1px solid ${currentTheme.accent}`,
          color: currentTheme.text
        }}
      />
      <button
        type="submit"
        className="w-full font-bold py-3 px-6 rounded transition-colors duration-200 mt-2 shadow text-base"
        style={{
          background: currentTheme.accent,
          color: currentTheme.text,
          border: `1px solid ${currentTheme.text}`
        }}
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
