"use client";
import React, { useState } from "react";

const WHATSAPP_NUMBER = "919496826294";

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
      className="rounded-lg shadow p-6 flex flex-col gap-4 max-w-xl mx-auto"
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
        className="px-4 py-2 rounded border outline-none"
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
        className="px-4 py-2 rounded border outline-none"
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
        className="px-4 py-2 rounded border outline-none"
        style={{
          background: currentTheme.secondary,
          border: `1px solid ${currentTheme.accent}`,
          color: currentTheme.text
        }}
      />
      <button
        type="submit"
        className="font-bold py-2 px-6 rounded transition-colors duration-200 mt-2 shadow"
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
